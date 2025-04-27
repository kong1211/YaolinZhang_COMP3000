<template>
  <div class="app-container">
    <el-form :inline="true" size="small">
      <el-form-item label="Search:">
        <el-input v-model="searchParams.search" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="fetchData">Search</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" @click="clearLogs">Clear Logs</el-button>
      </el-form-item>
    </el-form>

    <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label="ID">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Username">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Log Content">
        <template slot-scope="scope">
          {{ scope.row.content }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Log Time">
        <template slot-scope="scope">
          {{ scope.row.createTime }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Operation">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="handleDelete(scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div :style="{textAlign:'center',padding:'10px'}">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="searchParams.total"
        :current-page.sync="searchParams.pageNum"
        @current-change="fetchData"
      />
    </div>
  </div>
</template>

<script>
import { getLogs, delLog, cleanAllLogs } from '@/api/system/logs'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      formVisible: false,
      form: {},
      searchParams: {
        pageNum: 1,
        pageSize: 10,
        search: ''
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    clearLogs() {
      this.$confirm('Are you sure you want to clear all log information?', 'Prompt').then(() => {
        cleanAllLogs().then(() => {
          this.$message.success('Logs cleared successfully')
          this.fetchData()
        })
      })
    },
    handleDelete({ id }) {
      this.$confirm('Are you sure you want to delete this information?', 'Warning', {
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Confirm'
      }).then(() => {
        delLog(id).then(() => {
          this.$message.success('Deleted successfully')
          this.fetchData()
        })
      })
    },
    fetchData() {
      this.listLoading = true
      getLogs(this.searchParams).then(response => {
        this.list = response.data.records
        this.searchParams.total = response.data.total
        this.listLoading = false
      })
    }
  }
}
</script>
