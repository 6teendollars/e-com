<template>
  <div class="p-4 mt-7">
    <h1 class="text-2xl font-bold text-center text-gray-800"> Home Page</h1>
    <p class="mt-4 text-center text-gray-600">This is the cart page. Routing works!</p>
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue';
import { products } from '../data/products';

// Пока без логики
</script>