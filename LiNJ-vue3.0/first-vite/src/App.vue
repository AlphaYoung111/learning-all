
<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
    <demo></demo>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import demo from './components/demo1.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    demo
  }
}
</script>
