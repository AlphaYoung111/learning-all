<template>
  <div class="home">
    <!-- swiper -->
    <a-carousel autoplay>
      <div>
        <img class="w-100" src="~@/assets/images/210794580bb9303653804bb7b482f2a4.jpeg" alt />
      </div>
      <div>
        <img class="w-100" src="~@/assets/images/210794580bb9303653804bb7b482f2a4.jpeg" alt />
      </div>
      <div>
        <img class="w-100" src="~@/assets/images/210794580bb9303653804bb7b482f2a4.jpeg" alt />
      </div>
    </a-carousel>

    <!-- nav -->
    <div class="nav-icons bg-white mt-2 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-2" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow"></i>
        <span>发起</span>
      </div>
    </div>
    <!-- news -->
    <m-list-card title="新闻资讯" icon="menu1" :categories="newCates">
      <template #items="{row}">
        <div class="py-2 fs-lg d-flex" v-for="item in row.newsList" :key="item._id" @click="gotoArticle(item._id)">
          <span class="text-info">[{{item.categoryName}}]</span>
          <span>|</span>
          <span class="flex-1 text-one text-dark pr-2">{{item.title}}</span>
          <span>{{item.createAt}}</span>
        </div>
      </template>
    </m-list-card>

    <!-- heroes -->
    <m-list-card title="英雄列表" icon="card-hero" :categories="heroesData">
      <template #items="{row}">
        <div class="py-2 fs-lg d-flex flex-wrap heroes-wrap jc-start">
          <div class="d-flex flex-column w-20 pr-1 text-center jc-start" v-for="item in row.heroList" :key="item._id" @click="gotoHero(item._id)">
            <img :src="item.avatar" alt />
            <span>{{item.name}}</span>
          </div>
        </div>
      </template>
    </m-list-card>

    <m-card title="精彩视频" icon="menu1">
      <div>
        <div class="nav nav-common jc-between">
          <div class="nav-item active">
            <div class="nav-link">热门</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">新闻</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">热门</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">新闻</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">热门</div>
          </div>
        </div>
        <a-carousel autoplay class="mt-2">
          <div>
            <div v-for="n in 5" :key="n" class="py-2">
              <span>[新闻]</span>
              <span>|</span>
              <span>4d8s4d89a4s89d4a89s4d98</span>
              <span>06/02</span>
            </div>
          </div>
        </a-carousel>
      </div>
    </m-card>

    <m-card title="图文攻略" icon="menu1">
      <div>
        <div class="nav nav-common jc-between">
          <div class="nav-item active">
            <div class="nav-link">热门</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">新闻</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">热门</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">新闻</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">热门</div>
          </div>
        </div>
        <a-carousel autoplay class="mt-2">
          <div>
            <div v-for="n in 5" :key="n" class="py-2">
              <span>[新闻]</span>
              <span>|</span>
              <span>4d8s4d89a4s89d4a89s4d98</span>
              <span>06/02</span>
            </div>
          </div>
        </a-carousel>
      </div>
    </m-card>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, onMounted, getCurrentInstance, toRefs } from 'vue'
import { useRouter } from 'vue-router'
function useNewsData (ctx) {
  let state = reactive({
    newCates: [],
    heroList: []
  })
  const getNews = async () => {
    const res = await ctx.$http.get('/news/list')
    state.newCates = res.data
  }

  onMounted(() => {
    getNews()
  })
  return {
    state,
    getNews
  }
}
function useHeroesDate (ctx) {
  let state = reactive({
    heroesData: []
  })
  const getHeros = async () => {
    const res = await ctx.$http.get('/heroes/list')
    state.heroesData = res.data
  }
  onMounted(() => {
    getHeros()
  })
  return {
    state,
    getHeros
  }
}
export default {
  name: 'Home',
  setup () {
    const { ctx } = getCurrentInstance()
    const router = useRouter()
    let { state: news, getNews } = useNewsData(ctx)
    let { state: heros, getHeros } = useHeroesDate(ctx)
    const gotoArticle = (id) => {
      router.push(`/articles/${id}`)
    }
    const gotoHero = (id) => {
      router.push(`/hero/${id}`)
    }
    return {
      ...toRefs(news),
      ...toRefs(heros),
      getNews,
      getHeros,
      gotoArticle,
      gotoHero
    }
  },
}
</script>
<style lang="scss" scoped>
@import "@/assets/style/const.scss";
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(4n + 1) {
      border-left: none;
    }
  }
}
.heroes-wrap {
  box-sizing: border-box;
  height: 180px;
  overflow: scroll;
  > div {
    img {
      width: 100%;
    }
  }
}
</style>
