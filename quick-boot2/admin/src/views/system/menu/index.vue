<template>
  <div class="app-container">
    <el-dialog title="Save Information" :visible.sync="formVisible">
      <el-form :model="form" label-width="100px">
        <el-form-item label="Menu Name">
          <el-input v-model="form.name" placeholder="Menu Name" />
        </el-form-item>
        <el-form-item label="Menu Path">
          <el-input v-model="form.path" placeholder="Menu Path" />
        </el-form-item>
        <el-form-item label="Parent Menu">
          <el-select v-model="form.parent" placeholder="Please select a parent menu">
            <el-option label="Main Menu" :value="0" />
            <el-option v-for="item in treeMenus" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="Menu Icon">
          <el-select v-model="form.icon" placeholder="Please select a menu icon">
            <el-option label="None" value="" />
            <el-option label="Default" value="el-icon-menu" />
          </el-select>
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
      <el-table-column align="center" label="Menu Name">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Parent Menu">
        <template slot-scope="scope">
          {{ scope.row.parentName }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Menu Path">
        <template slot-scope="scope">
          {{ scope.row.path }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Menu Icon">
        <template slot-scope="scope">
          {{ scope.row.icon }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Operation">
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
import { menuList, delMenu, saveMenu, getTreeMenus } from '@/api/system/menu'

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
      },
      treeMenus: ''
    }
  },
  created() {
    this.fetchTree()
    this.fetchData()
  },
  methods: {
    fetchTree() {
      getTreeMenus().then(res => {
        this.treeMenus = res.data
      })
    },
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
      saveMenu(this.form).then(() => {
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
        delMenu(id).then(() => {
          this.$message.success('Deleted successfully')
          this.fetchData()
        })
      })
    },
    fetchData() {
      this.listLoading = true
      menuList(this.searchParams).then(response => {
        const { records, total } = response.data
        this.list = records
        this.searchParams.total = total
        this.listLoading = false
      })
    }
  }
}
</script>
