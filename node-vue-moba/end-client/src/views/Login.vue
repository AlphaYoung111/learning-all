<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form @submit.native.prevent="handleLogin">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="default" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
@Component
export default class Login extends Vue {
  private form = {
    username: '',
    password: ''
  }
  async handleLogin() {
    const res = await this.$http.post('login', this.form)
    localStorage.setItem('token', res.data.token)
    this.$router.push('/')
    this.$message({
      type: 'success',
      message: '登录成功'
    })
  }
}
</script>
<style scoped>
.login-container {
  width: 25rem;
  margin: 10rem auto;
}
</style>
