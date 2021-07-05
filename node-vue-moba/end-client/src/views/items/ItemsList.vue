
<template>
  <div>
    <h1>物品列表</h1>
    <el-table :data="tableData">
      <el-table-column prop="_id" label="ID" width="220"></el-table-column>
      <el-table-column prop="name" label="物品名称"></el-table-column>
      <el-table-column prop="icon" label="图标">
        <template slot-scope="{row}">
          <img :src="row.icon" alt style="height:3em" />
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
    const res = await this.$http.get('/rest/items')
    this.tableData = res.data
  }

  rowClick(row: TableItems) {
    this.$router.push(`/items/edit/${row._id}`)
  }
  async rowRemove(row: TableItems) {
    this.$confirm('是否确定要删除物品?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(async () => {
      await this.$http.delete(`/rest/items/${row._id}`)
      this.$message({
        type: 'success',
        message: '删除成功!'
      })
      await this.getData()
    })


  }
}

</script>