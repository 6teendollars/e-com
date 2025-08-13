
<script setup>
defineProps(['product'])

import {useCartStore} from '../stores/counter'
const cart = useCartStore();
</script>


<template>
  <div class="w-full max-w-[400px] flex flex-col p-3 rounded-lg  hover: transition-all duration-300">
    <div class="relative group aspect-[3/3] overflow-hidden rounded-t-lg">
      <!-- Основное изображение -->
      <img
        :src="product.image"
        :alt="product.name"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
        :class="{ 'group-hover:opacity-0': product.image2 }"
      />

      <!-- Изображение при ховере -->
      <img
        v-if="product.image2"
        :src="product.image2"
        :alt="product.name + ' hover'"
        class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>

    <!-- Описание -->
    <div class=" bg-gray-200 rounded-b-lg p-3  flex flex-col ">
      <p class=" text-gray-400">{{ product.name }}</p>
      <p class=" text-gray-800">{{ product.price }}$</p>

      <router-link :to="`/products/${product.id}`">
prodict 
</router-link>

<button @click="cart.addToCart(product)">++ to cart</button>
    </div>



  </div>
</template>
