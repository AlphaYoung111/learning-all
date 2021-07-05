
<template>
  <div class="about">
    <h1>{{id?'编辑':'新增'}}广告位</h1>
    <el-form label-width="120px" @submit.native.prevent="handleSave">
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="广告">
        <el-button @click="addAd">
          <i class="el-icon-plus"></i>添加广告
        </el-button>
        <el-row>
          <el-col :md="24" v-for="(item,index) in form.items" :key="index">
            <el-form-item label="链接">
              <el-input v-model="item.url"></el-input>
            </el-form-item>
            <el-form-item label="图片" style="margin-top:1rem">
              <el-upload class="avatar-uploader" :action="$http.defaults.baseURL+'/upload'" :show-file-list="false" :on-success="res=>item.image=res.url">
                <img v-if="item.image" :src="item.image" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button size="small" type="danger" @click="form.items.splice(index,1)">删除</el-button>
            </el-form-item>
          </el-col>
        </el-row>
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
  parent?: string,
  [propName: string]: any
}
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class CategoryEdit extends Vue {
  private form: AddForm = {
    name: '',
    items: []
  }
  @Prop() id!: string

  created() {
    this.id && this.getData()
  }

  async handleSave() {
    if (this.id) {
      await this.$http.put(`/rest/ads/${this.id}`, this.form)
    } else {
      await this.$http.post('/rest/ads', this.form)
    }
    this.$router.push('/ads/list')
    this.$message({
      type: 'success',
      message: '保存成功'
    })

  }

  async getData() {
    const res = await this.$http.get(`/rest/ads/${this.id}`)
    this.form = Object.assign({}, this.form, res.data)
  }
  addAd() {
    const obj = { url: '', image: '' }
    this.form.items.push(obj)
  }
}
</script>
