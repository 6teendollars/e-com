<template>
  <div class="p-4 mt-7">
    <h1 class="text-2xl font-bold text-center text-gray-800"> Products Page</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue';
import { products } from '../data/products';
</script>