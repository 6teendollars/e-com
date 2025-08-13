

<template>
<div class="pt-10" v-if="product">
    <div class="flex justify-center mb-5">
      <router-link to="/products" class="text-pink-500  hover:underline">Back to Products</router-link>
    </div>

<div class="flex">
  <img class="max-w-[500px]" :src="product.image" :alt="product.name" />
    <img class="max-w-[500px]" :src="product.image2" :alt="product.name" />
    <div class="ml-5 flex flex-col gap-3">
        <h1 class="text-[50px]">{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <p>Цена: {{ product.price }}$</p>
  <div v-if="product.sizes && product.sizes.length > 0">
  <label class="text-black mt-5 text-lg font-semibold">Sizes:</label>
  
  <div class="flex gap-2 mt-2">
    <button
      v-for="size in product.sizes"
      :key="size"
      type="button"
      class="px-2 py-1 border rounded"
      :class="{
        'bg-blue-500 text-white': selectedSize === size,
        'bg-gray-200': selectedSize !== size
      }"
      @click="selectedSize = size"
    >
      {{ size }}
    </button>
  </div>
</div>

    <button class="w-[77px] pb-3 bg-pink-500 text-white  rounded hover:bg-pink-600 transition duration-300">
  Buy
    </button>
    </div>
  </div>
   
 

</div>


</template>


<script setup>
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'
import { products } from '../data/products'

const route = useRoute()
const productId = Number(route.params.id)
const product = computed(() => products.find(p => p.id === productId))

const selectedSize = ref('')

</script>

