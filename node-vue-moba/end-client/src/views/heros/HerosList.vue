
<template>
  <div>
    <h1>英雄列表</h1>
    <el-table :data="tableData">
      <el-table-column prop="_id" label="ID" width="220"></el-table-column>
      <el-table-column prop="name" label="英雄名称"></el-table-column>
      <el-table-column prop="title" label="英雄称号"></el-table-column>
      <el-table-column prop="avatar" label="图标">
        <template slot-scope="{row}">
          <img :src="row.avatar" alt style="height:3em" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="rowClick(scope.row)">编辑</el-button>
          <el-button type="text" size="small" @click="rowRemove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
interface TableItems {
  name: string,
  _id: string,
  parent: object,
  [propName: string]: any
}
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class CategoryList extends Vue {
  private tableData: Array<TableItems> = []
  created() {
    this.getData()
  }

  async getData() {
    const res = await this.$http.get('/rest/heros')
    this.tableData = res.data
  }

  rowClick(row: TableItems) {
    this.$router.push(`/heros/edit/${row._id}`)
  }
  async rowRemove(row: TableItems) {
    this.$confirm('是否确定要删除英雄?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(async () => {
      await this.$http.delete(`/rest/heros/${row._id}`)
      this.$message({
        type: 'success',
        message: '删除成功!'
      })
      await this.getData()
    })


  }
}

</script>