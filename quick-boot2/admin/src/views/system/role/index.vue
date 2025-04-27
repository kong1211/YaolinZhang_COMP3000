<template>
  <div class="app-container">
    <el-dialog title="Save Information" :visible.sync="formVisible">
      <el-form :model="form" label-width="100px">
        <el-form-item label="Role Name">
          <el-input v-model="form.name" placeholder="Role Name" />
        </el-form-item>
        <el-form-item label="Role Description">
          <el-input v-model="form.description" placeholder="Role Description" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">Submit Information</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="Role Permissions" :visible.sync="allotVisible">
      <el-form :model="allotForm" label-width="100px">
        <el-form-item label="Allocate Permissions">
          <el-select v-model="allotForm.permissionIds" multiple placeholder="Please select permissions" style="width:100%">
            <el-option v-for="p in permissionList" :key="p.id" :label="p.description" :value="p.id" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmitAllot">Confirm Allocation</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog v-if="allotMenusVisible" title="Role Menus" :visible.sync="allotMenusVisible">
      <el-form :model="allotMenuForm" label-width="100px">
        <el-form-item label="Allocate Menus">
          <el-tree
            ref="menusTree"
            :check-strictly="true"
            :data="treeMenus"
            show-checkbox
            :props="{label: 'name'}"
            node-key="id"
            default-expand-all
            :default-checked-keys="allotMenuForm.menuIds"
          />

        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmitAllotMenu">Confirm Allocation</el-button>
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
      <el-table-column align="center" label="Role Name">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Role Description">
        <template slot-scope="scope">
          {{ scope.row.description }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Operation">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="handleUpdate(scope.row)">Modify</el-button>
          <el-button type="text" size="mini" @click="handleDelete(scope.row)">Delete</el-button>
          <el-button type="text" size="mini" @click="handleAllot(scope.row)">Allocate Permissions</el-button>
          <el-button type="text" size="mini" @click="handleAllotMenu(scope.row)">Allocate Menus</el-button>
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
import { roleList, delRole, saveRole } from '@/api/system/role'
import { permissionList } from '@/api/system/permission'
import { getRolePermissions, allotRolePermissions } from '@/api/system/role_permission'
import { getRoleMenus, getTreeMenus, allotRoleMenus } from '@/api/system/menu'

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
      allotForm: {},
      allotMenuForm: {},
      allotVisible: false,
      allotMenusVisible: false,
      permissionList: [],
      treeMenus: [],
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
    permissionList().then(res => {
      this.permissionList = res.data.records
    })
    getTreeMenus().then(res => {
      this.treeMenus = res.data
    })
  },
  methods: {
    handleSubmitAllotMenu() {
      this.$confirm('Are you sure you want to allocate menus to this role?', 'Warning', {
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Confirm'
      }).then(() => {
        const data = this.$refs.menusTree.getCheckedNodes().map(item => item.id)
        allotRoleMenus({
          roleId: this.allotMenuForm.roleId,
          menuIds: data
        }).then(() => {
          this.$message.success('Menus allocated successfully')
          this.fetchData()
          this.allotMenusVisible = false
        })
      })
    },
    handleSubmitAllot() {
      this.$confirm('Are you sure you want to allocate permissions to this role?', 'Warning', {
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Confirm'
      }).then(() => {
        allotRolePermissions(this.allotForm).then(() => {
          this.$message.success('Permissions allocated successfully')
          this.fetchData()
          this.allotVisible = false
        })
      })
    },
    handleAllot(row) {
      getRolePermissions(row.id).then(res => {
        const permissionIds = res.data
        this.allotForm = {
          roleId: row.id,
          permissionIds
        }
        this.allotVisible = true
      })
    },
    handleAllotMenu(row) {
      getRoleMenus(row.id).then(res => {
        const menuIds = res.data
        this.allotMenuForm = {
          roleId: row.id,
          menuIds
        }
        this.allotMenusVisible = true
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
      saveRole(this.form).then(() => {
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
        delRole(id).then(() => {
          this.$message.success('Deleted successfully')
          this.fetchData()
        })
      })
    },
    fetchData() {
      this.listLoading = true
      roleList(this.searchParams).then(response => {
        const { records, total } = response.data
        this.list = records
        this.searchParams.total = total
        this.listLoading = false
      })
    }
  }
}
</script>
