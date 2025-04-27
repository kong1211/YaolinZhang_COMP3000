<template>
  <div class="app-container">
    <el-dialog title="Save Info" :visible.sync="formVisible">
      <el-form :model="form" label-width="100px">
        <el-form-item label="Permission Characters">
          <el-input v-model="form.name" placeholder="Permission Characters" />
        </el-form-item>
        <el-form-item label="Permission Name">
          <el-input v-model="form.description" placeholder="Permission Name" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">Submit Info</el-button>
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
        <el-button type="success" @click="handleInsert">Add Info</el-button>
      </el-form-item>
    </el-form>

    <el-table v-loading="listLoading" :data="list" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label="ID">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Permission Characters">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Permission Name">
        <template slot-scope="scope">
          {{ scope.row.description }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Operate">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="handleUpdate(scope.row)">Modify</el-button>
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
import { permissionList, delPermission, savePermission } from '@/api/system/permission'

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
      savePermission(this.form).then(() => {
        this.$message.success('Information saved successfully！！！')
        this.fetchData()
        this.formVisible = false
      })
    },
    handleDelete({ id }) {
      this.$confirm('Are you sure to delete this information？','Warning', {
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Confirm'
      }).then(() => {
        delPermission(id).then(() => {
          this.$message.success('Delete successfully')
          this.fetchData()
        })
      })
    },
    fetchData() {
      this.listLoading = true
      permissionList(this.searchParams).then(response => {
        const { records, total } = response.data
        this.list = records
        this.searchParams.total = total
        this.listLoading = false
      })
    }
  }
}
</script>

