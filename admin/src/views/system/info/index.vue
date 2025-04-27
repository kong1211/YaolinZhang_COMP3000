<template>
  <div class="app-container">
    <el-dialog title="Save Information" :visible.sync="formVisible">
      <el-form :model="form">
        <el-form-item label="Title">
          <el-input v-model="form.title" placeholder="Please enter the title" />
        </el-form-item>
        <el-form-item label="Description">
          <el-input v-model="form.description" placeholder="Please enter the description" />
        </el-form-item>
        <el-form-item label="Sort Order">
          <el-input v-model="form.sort" placeholder="Please enter the sort order" />
        </el-form-item>
        <el-form-item label="Content">
          <tinymce v-model="form.content" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">Submit Information</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-form :inline="true" size="small">
      <el-form-item label="Search:">
        <el-input v-model="searchParams.search" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="fetchData">Search</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="handleInsert">Add Information</el-button>
      </el-form-item>
    </el-form>

    <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label="ID">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Title">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Description">
        <template slot-scope="scope">
          {{ scope.row.description }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Sort Order">
        <template slot-scope="scope">
          {{ scope.row.sort }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Operation">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="handleUpdate(scope.row)">Modify</el-button>
          <el-button type="text" size="mini" @click="handleDelete(scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div :style="{ textAlign: 'center', padding: '10px' }">
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
import { getInfoList, delInfo, saveInfo } from '@/api/system/info'

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
  components: {
    tinymce: () => import('@/components/Tinymce')
  },
  data() {
    return {
      list: null,
      listLoading: true,
      formVisible: false,
      form: {},
      searchParams: {
        total: 0,
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
    handleUpdate(row) {
      this.form = { ...row }
      this.formVisible = true
    },
    handleInsert() {
      this.form = {
        role: parseInt(this.$route.params.role)
      }
      this.formVisible = true
    },
    handleSubmit() {
      saveInfo(this.form).then(() => {
        this.$message.success('Information saved successfully')
        this.fetchData()
        this.formVisible = false
      })
    },
    handleDelete({ id }) {
      this.$confirm('Are you sure you want to delete this information?', 'Warning', {
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Confirm'
      }).then(() => {
        delInfo(id).then(() => {
          this.$message.success('Deleted successfully')
          this.fetchData()
        })
      })
    },
    fetchData() {
      this.listLoading = true
      getInfoList(this.searchParams).then(response => {
        const { records, total } = response.data
        this.list = records
        this.searchParams.total = total
        this.listLoading = false
      })
    }
  }
}
</script>
