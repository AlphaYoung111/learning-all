<template>
  <div>
    121111111111111111111
    <ul>
      12
      <li v-for="product in products" :key="product.id">{{product.title}} -- {{product.category}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useProducts from "../models/products";
export default defineComponent({
  async setup() {
    const { products } = await useProducts()
    console.log(products)
    return {
      products
    }
  }
})
</script>

