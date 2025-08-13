import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state : {
    cart:[],
    cartTotal: 0,
  },
  mutations:{
    addRemoveToCart(state, product) {
      const index = state.cart.findIndex(item => item.id === product.id);
      if (index !== -1) {
        state.cart.splice(index, 1);
      } else {
        state.cart.push(product);
      }
      state.cartTotal = state.cart.reduce((total, item) => total + item.price, 0);
    },
    clearCart(state) {
      state.cart = [];
      state.cartTotal = 0;
    }
  }
})

const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
app.use(store)