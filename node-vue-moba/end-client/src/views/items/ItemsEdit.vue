
<template>
  <div class="about">
    <h1>{{id?'编辑':'新增'}}物品</h1>
    <el-form label-width="120px" @submit.native.prevent="handleSave">
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL+'/upload'"
          :headers="getAuthHeaders()"
          :show-file-list="false"
          :on-success="afterUplaod"
        >
          <img v-if="form.icon" :src="form.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
interface AddForm {
  name?: string,
  icon?: string
}
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class CategoryEdit extends Vue {
  private form: AddForm = {
    name: '',
    icon: ''
  }
  @Prop() id!: string

  created() {
    this.id && this.getData()
  }

  async handleSave() {
    if (this.id) {
      await this.$http.put(`/rest/items/${this.id}`, this.form)
    } else {
      await this.$http.post('/rest/items', this.form)
    }
    this.$router.push('/items/list')
    this.$message({
      type: 'success',
      message: '保存成功'
    })
  }

  async getData() {
    const res = await this.$http.get(`/rest/items/${this.id}`)
    this.form = res.data
  }

  // 上传完
  afterUplaod(res: any) {
    console.log(res)
    this.form.icon = res.url
  }

}
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
