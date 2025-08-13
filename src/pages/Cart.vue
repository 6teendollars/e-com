
<script setup>
// Пока без логики

import {useCartStore} from '../stores/counter'
const cart = useCartStore();
</script>

<template>
   <h2 class="mt-10">Корзина</h2>
  <div class="flex mt-3 " v-for="item in cart.cart" :key="item.id">
       <img class="w-[100px] " :src="item.image" :alt="item.name" />
    
   {{ item.name }}: {{ item.title }} — {{ item.quantity }} × {{ item.price }}$
    <button class="border-red-600 border-[5px]" @click="cart.decrementQuantity(item.id)">--minus--</button>
    <button class="border-green-600 border-[5px]" @click="cart.addToCart(item)">++addmore++</button>
    <button @click="cart.removeFromCart(item.id)">Удалить</button>
  </div>
  <p>Всего товаров: {{ cart.totalItems }}</p>
  <p>Общая сумма: {{ cart.totalPrice }}$</p>
</template>
