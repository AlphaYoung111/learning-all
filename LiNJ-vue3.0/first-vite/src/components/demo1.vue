
<template>
  <div>{{count}}</div>
  <button @click="add">+</button>
  <button @click="sub">-</button>
  <div ref="table"></div>
</template>

<script>
import {
  onMounted,
  ref
} from 'vue'
export default {
  setup () {
    let count = ref(0)
    const add = () => {
      count.value += 1
    }
    function sub () {
      count.value -= 1
    }

    let table = ref(null)
    console.log(table.value)
    onMounted(() => {
      console.log('onMounted', table.value)
    })
    return {
      count,
      add,
      sub,
      table
    }
  }
}
</script>

<style>
</style>
