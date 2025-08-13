import { defineStore } from "pinia";
import { watch } from "vue"; // обязательно импортируем watch

export const useCartStore = defineStore("counter", {
  state: () => ({
    cart: JSON.parse(localStorage.getItem('cart') || '[]'),
  }),
  actions: { 
    addToCart(product){
      const item = this.cart.find(item => item.id === product.id);
      if(item) item.quantity += 1;
      else this.cart.push({...product, quantity: 1});
    },
    clearCart() {
      this.cart = [];
    },
    removeFromCart(id){
      this.cart = this.cart.filter(item => item.id !== id)
    },
    decrementQuantity(id){
      const item = this.cart.find(item => item.id === id);
      if(item){
        item.quantity -= 1;
        if(item.quantity <= 0){
          this.removeFromCart(id);
        }
      }
    }
  },
  getters:{
    totalItems: (state) => state.cart.reduce((sum, p) => sum + p.quantity, 0),
    totalPrice: (state) => state.cart.reduce((sum, p) => sum + p.price * p.quantity, 0),
  }
});

// Функция для синхронизации с localStorage
export function setupCartPersistence(store){
  watch(
    () => store.cart,
    (newCart) => localStorage.setItem('cart', JSON.stringify(newCart)),
    { deep: true }
  );
}
