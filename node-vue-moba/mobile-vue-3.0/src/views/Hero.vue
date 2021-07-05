<template>
  <div class="page-hero">
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
      <img src="~@/assets/logo.png" height="30" alt />
      <div class="px-2 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1 fs-xxs">攻略站</div>
      </div>
      <button type="button" class="btn bg-primary">更多英雄</button>
    </div>
  </div>
</template>
<script>
import { getCurrentInstance, onMounted, reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
export default {
  setup () {
    const route = useRoute()
    const id = route.params.id
    const { ctx } = getCurrentInstance()
    const state = reactive({

    })
    const getHero = async (id) => {
      const { data } = await ctx.$http.get(`/heroes/${id}`)
      console.log(data)
    }
    onMounted(() => {
      getHero(id)
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>