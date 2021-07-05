
<template>
  <div>
    <h1>管理员列表</h1>
    <el-table :data="tableData">
      <el-table-column prop="_id" label="ID" width="220"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
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
  username: string,
  _id: string,
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
    const res = await this.$http.get('/rest/adminUsers')
    this.tableData = res.data
  }

  rowClick(row: TableItems) {
    this.$router.push(`/adminUsers/edit/${row._id}`)
  }
  async rowRemove(row: TableItems) {
    this.$confirm('是否确定要删除用户?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(async () => {
      await this.$http.delete(`/rest/adminUsers/${row._id}`)
      this.$message({
        type: 'success',
        message: '删除成功!'
      })
      await this.getData()
    })


  }
}

</script>