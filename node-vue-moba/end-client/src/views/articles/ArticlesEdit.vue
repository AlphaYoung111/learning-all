
<template>
  <div class="about">
    <h1>{{id?'编辑':'新增'}}文章</h1>
    <el-form label-width="120px" @submit.native.prevent="handleSave">
      <el-form-item label="所属分类">
        <el-select v-model="form.categories" multiple>
          <el-option v-for="item in categoriesOpt" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <vue-editor v-model="form.body" useCustomImageHandler @image-added="handleImageAdded"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
interface AddForm {
  title?: string,
  parent?: string,
  categories?: Array<string>,
  body?: string
}
import { Component, Prop, Vue } from 'vue-property-decorator'
import { VueEditor } from 'vue2-editor'
@Component({
  components: {
    VueEditor
  }
})
export default class CategoryEdit extends Vue {
  private form: AddForm = {
    title: '',
    categories: [],
    body: ''
  }
  private categoriesOpt: Array<any> = []
  @Prop() id!: string

  created() {
    this.getCateData()
    this.id && this.getData()
  }

  async handleSave() {
    if (this.id) {
      await this.$http.put(`/rest/articles/${this.id}`, this.form)
    } else {
      await this.$http.post('/rest/articles', this.form)
    }
    this.$router.push('/articles/list')
    this.$message({
      type: 'success',
      message: '保存成功'
    })

  }

  async getData() {
    const res = await this.$http.get(`/rest/articles/${this.id}`)
    this.form = res.data
  }
  async getCateData() {
    const res = await this.$http.get(`/rest/categories`)
    this.categoriesOpt = res.data
  }
  async handleImageAdded(file: any, Editor: any, cursorLocation: any, resetUploader: any) {
    const formData = new FormData()
    formData.append('file', file)
    const res = await this.$http.post('upload', formData)
    Editor.insertEmbed(cursorLocation, "image", res.data.url)
    resetUploader()
  }

}
</script>
