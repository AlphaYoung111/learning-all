
<template>
  <div class="about">
    <h1>{{id?'编辑':'新增'}}英雄</h1>
    <el-form label-width="120px" @submit.native.prevent="handleSave">
      <el-tabs type="border-card">
        <el-tab-pane label="基础信息">
          <el-form-item label="名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload class="avatar-uploader" :action="$http.defaults.baseURL+'/upload'" :show-file-list="false" :on-success="afterUplaod">
              <img v-if="form.avatar" :src="form.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="背景">
            <el-upload class="avatar-uploader" :action="$http.defaults.baseURL+'/upload'" :show-file-list="false" :on-success="res=>form.banner=res.url">
              <img v-if="form.banner" :src="form.banner" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="form.categories" multiple>
              <el-option v-for="item in categoriesOpt" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate :max="9" show-score v-model="form.scores.difficult" style="margin-top:0.6rem"></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate :max="9" show-score v-model="form.scores.skills" style="margin-top:0.6rem"></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate :max="9" show-score v-model="form.scores.attack" style="margin-top:0.6rem"></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate :max="9" show-score v-model="form.scores.survive" style="margin-top:0.6rem"></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select v-model="form.items1" multiple>
              <el-option v-for="item in items" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select v-model="form.items2" multiple>
              <el-option v-for="item in items" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input type="textarea" v-model="form.usageTips"></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input type="textarea" v-model="form.battleTips"></el-input>
          </el-form-item>
          <el-form-item label="团战思路">
            <el-input type="textarea" v-model="form.teamTips"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能">
          <el-button @click="addSkill">
            <i class="el-icon-plus"></i>添加技能
          </el-button>
          <el-row>
            <el-col :md="12" v-for="(item,index) in form.skills" :key="index">
              <el-form-item label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="图标">
                <el-upload class="avatar-uploader" :action="$http.defaults.baseURL+'/upload'" :show-file-list="false" :on-success="res=>item.icon=res.url">
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item label="提示">
                <el-input type="textarea" v-model="item.tips"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="danger" @click="form.skills.splice(index,1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item style="margin-top:1rem">
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
interface AddForm {
  name?: string,
  avatar?: string,
  title?: string,
  [propName: string]: any,
  categories: Array<string>
}
interface Skill {
  icon: string,
  description: string,
  name: string,
  tips: string
}
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class CategoryEdit extends Vue {
  private form: AddForm = {
    name: '',
    avatar: '',
    title: '',
    banner: '',
    categories: [],
    scores: {
      difficult: 0,
      skills: 0,
      attack: 0,
      survive: 0
    },
    items1: [],
    items2: [],
    usageTips: '',
    battleTips: '',
    teamTips: '',
    skills: []
  }
  private categoriesOpt: Array<any> = []
  private items: Array<any> = []
  @Prop() id!: string

  created() {
    this.id && this.getData()
    this.getCateData()
    this.getItems()
  }

  async handleSave() {
    if (this.id) {
      await this.$http.put(`/rest/heros/${this.id}`, this.form)
    } else {
      await this.$http.post('/rest/heros', this.form)
    }
    this.$router.push('/heros/list')
    this.$message({
      type: 'success',
      message: '保存成功'
    })
  }

  async getData() {
    const res = await this.$http.get(`/rest/heros/${this.id}`)
    this.form = Object.assign({}, this.form, res.data)
  }
  async getCateData() {
    const res = await this.$http.get(`/rest/categories`)
    this.categoriesOpt = res.data
  }
  async getItems() {
    const res = await this.$http.get(`/rest/items`)
    this.items = res.data
  }
  addSkill() {
    let obj: Skill = {
      icon: '',
      tips: '',
      description: '',
      name: ''
    }
    this.form.skills.push(obj)
  }
  // 上传完
  afterUplaod(res: any) {
    console.log(res)
    this.form.avatar = res.url
  }

}
</script>
<style>
</style>
