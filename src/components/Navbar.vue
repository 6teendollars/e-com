<template class="relative">
  <nav class="fixed top-0 right-0 left-0 z-50 bg-white/90 shadow-md px-6 py-4 flex justify-between items-center hover:bg-white transition duration-300">
    <router-link to="/" class="text-xl font-bold">🛍️ Palanica</router-link>
    <div class="space-x-4">
      <router-link to="/" class="text-gray-700 hover:text-black">Catalog</router-link>
      <router-link to="/cart" class="text-gray-700 hover:text-black">Cart 
       <span class="text-blue-500">{{ cart.totalItems }}</span> 
      </router-link>
      <router-link to="/products" class="text-gray-700 hover:text-black">Products</router-link>
      <router-link to="/checkout" class="text-gray-700 hover:text-black">Checkout</router-link>
      <router-link to="/success" class="text-gray-700 hover:text-black">Success</router-link>
    </div>
  </nav>
</template>

<script setup>
import {useCartStore} from '../stores/counter'
const cart = useCartStore();
</script>
