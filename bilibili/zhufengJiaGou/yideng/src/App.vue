<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    1212
    <Suspense>
      <template #default>
        <HelloWorld />
      </template>
      <template #fallback>loading</template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100vh;
  background-color: red;
}
</style>
