<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import type { State } from '../store/index'
// import { State } from '@/store/index'
export default defineComponent({
  props: {
    msg: String
  },
  setup() {
    const data = reactive({ count: 0 })
    const store = useStore<State>()
    const { state, getters } = store
    // console.log(State)
    console.log(state.user.loading)
    console.log(getters['user/isLogin'])
    return {
      ...toRefs(data)
    }
  }
})



</script>

<style scoped>
a {
  color: #42b983;
}
</style>
