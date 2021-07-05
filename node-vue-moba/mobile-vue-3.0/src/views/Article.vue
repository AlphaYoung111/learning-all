<template>
  <div class="page-article">
    <div class="d-flex">
      <div class="iconfont icon-Back"></div>
      <strong class="flex-1 text-blue pl-2 fs-xl">{{title}}</strong>
      <div class="text-gray fs-xs pr-2">2020-11-6</div>
    </div>
    <div v-html="body" class="w-100 body-html"></div>
    <div class="px-3">
      <div class="d-flex border-top py-3">
        <i class="iconfont icon-menu1"></i>
        <strong class="text-blue fs-lg ml-1">相关资讯</strong>
      </div>
      <div>
        <div v-for="item in related" :key="item._id" class="border-bottom mb-2">
          <span @click="goReated(item._id)">{{item.title}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs, getCurrentInstance, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  setup () {
    const route = useRoute()
    const router = useRouter()
    const { ctx } = getCurrentInstance()
    const id = route.params.id
    const state = reactive({
      body: [],
      title: '',
      related: []
    })
    const getArticle = async (id) => {
      const { data } = await ctx.$http.get(`/articles/${id}`)
      state.title = data.title
      state.body = data.body
      state.related = data.related
    }
    const goReated = (id) => {
      console.log(id)
      router.push(`/articles/${id}`)
      getArticle(id)
    }
    onMounted(() => {
      getArticle(id)
    })
    return {
      ...toRefs(state),
      getArticle,
      goReated
    }
  }
}
</script>
<style lang="scss" scoped>
.page-article {
  .body-html {
    img {
      max-width: 100% !important;
      height: auto;
    }
  }
}
</style>
