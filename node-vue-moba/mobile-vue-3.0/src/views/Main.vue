<template>
  <div>
    <div class="topbar bg-black py-2 px-3 d-flex ai-center">
      <img src="~@/assets/logo.png" height="30" alt />
      <div class="px-2 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1 fs-xxs">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primary">立即下载</button>
    </div>
    <div class="bg-primary pt-2 pt-3 pb-1">
      <div class="nav nav-inverse pb-1 jc-around">
        <div class="nav-item active">
          <div @click="goto('/')">{{$name}}首页</div>
          <!-- <router-link to="/" tag="button" class="nav-link">首页</router-link> -->
        </div>
        <div class="nav-item">
          <div @click="goto('/')">攻略中心</div>
          <!-- <router-link to="/" tag="div" class="nav-link">攻略中心</router-link> -->
        </div>
        <div class="nav-item">
          <div @click="goto('/')">赛事中心</div>
          <!-- <router-link to="/" tag="div" class="nav-link">赛事中心</router-link> -->
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    goto (path) {
      this.$router.push(path)
    }
  },
}
</script>
<style lang="scss" scoped>
.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
}
</style>