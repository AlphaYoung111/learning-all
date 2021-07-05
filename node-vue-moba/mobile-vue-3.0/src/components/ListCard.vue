<template>
  <m-card :title="title" :icon="icon">
    <div class="nav nav-common jc-between">
      <div :class="['nav-item','d-flex',{active:activeIndex===i}]" v-for="(item,i) in categories" :key="item.name" @click="activeIndex=i">
        <div class="nav-link" @click="goto(i)">{{item.name}}</div>
      </div>
    </div>
    <a-carousel class="mt-2" :after-change="handleChange" ref="slider">
      <div v-for="(list,index) in categories" :key="index" class="py-2">
        <slot name="items" :row="list" style="heigth:auto"></slot>
      </div>
    </a-carousel>
  </m-card>
</template>

<script>
// import { setup, reactive, toRefs } from 'vue'
export default {
  name: 'listcard',
  // setup () {
  //   let state = reactive({
  //     activeIndex: 0
  //   })

  //   const handleChange = (cur) => {
  //     state.activeIndex = cur
  //   }
  //   return {
  //     ...toRefs(state),
  //     handleChange
  //   }
  // },
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    categories: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    handleChange (cur) {
      this.activeIndex = cur
    },
    goto (i) {
      this.$refs.slider.goTo(i)
    }
  },
}
</script>

<style lang="scss" scoped>
</style>