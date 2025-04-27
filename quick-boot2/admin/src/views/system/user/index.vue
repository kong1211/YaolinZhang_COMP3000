<template>
  <div class="app-container">
    <el-dialog v-if="formVisible" title="Save Information" :visible.sync="formVisible">
      <el-form :model="form" label-width="100px">
        <el-form-item label="Avatar">
          <UploadFile :fs="avatar" @success="v => form.avatar = v" />
        </el-form-item>
        <el-form-item label="Username">
          <el-input v-model="form.username" placeholder="Username" />
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="form.password" placeholder="Password" type="password" />
        </el-form-item>
        <el-form-item label="Name">
          <el-input v-model="form.name" placeholder="Nickname" />
        </el-form-item>
        <el-form-item label="Phone Number">
          <el-input v-model="form.phone" placeholder="Phone Number" />
        </el-form-item>
        <el-form-item label="Is Disabled">
          <el-select v-model="form.disabled" placeholder="Select whether to disable">
            <el-option label="Disabled" :value="true" />
            <el-option label="Normal Use" :value="false" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">Submit Information</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="User Roles" :visible.sync="allotVisible">
      <el-form :model="allotForm" label-width="100px">
        <el-form-item label="Allocate Roles">
          <el-select v-model="allotForm.roleIds" multiple placeholder="Please select roles" style="width:100%">
            <el-option v-for="r in roleList" :key="r.id" :label="r.name" :value="r.id" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmitAllot">Confirm Allocation</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-form :inline="true" size="small">
      <el-form-item label="Username:">
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
      <el-table-column align="center" label="Avatar">
        <template slot-scope="scope">
          <el-image style="width:40px;height:40px" fit="cover" :src="scope.row.avatar" />
        </template>
      </el-table-column>
      <el-table-column align="center" label="Username">
        <template slot-scope="scope">
          {{ scope.row.username }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Phone Number">
        <template slot-scope="scope">
          {{ scope.row.phone }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Name">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Is Disabled">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.disabled" type="danger">Disabled</el-tag>
          <el-tag v-if="!scope.row.disabled" type="success">Normal Use</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="Operation">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="handleUpdate(scope.row)">Modify</el-button>
          <el-button type="text" size="mini" @click="handleDelete(scope.row)">Delete</el-button>
          <el-button type="text" size="mini" @click="handleOffline(scope.row)">Force Logout</el-button>
          <el-button type="text" size="mini" @click="handleAllot(scope.row)">Allocate Roles</el-button>
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
import { roleList } from '@/api/system/role'
import { delUser, offlineUser, saveUser, userList } from '@/api/system/user'
import { allotUserRoles, getUserRoles } from '@/api/system/user_role'
import UploadFile from '@/components/UploadFile'

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
    UploadFile
  },
  data() {
    return {
      list: null,
      listLoading: true,
      formVisible: false,
      form: {},
      allotVisible: false,
      allotForm: {},
      roleList: [],
      avatar: [],
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
    roleList().then(res => {
      this.roleList = res.data.records
    })
  },
  methods: {
    handleAllot(row) {
      getUserRoles(row.id).then(res => {
        this.allotForm = {
          roleIds: res.data,
          userId: row.id
        }
        this.allotVisible = true
      })
    },
    handleSubmitAllot() {
      this.$confirm('Are you sure you want to allocate roles to the user?', 'Warning', {
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Confirm'
      }).then(() => {
        allotUserRoles(this.allotForm).then(() => {
          this.$message.success('Roles allocated successfully')
          this.allotVisible = false
        })
      })
    },
    handleOffline(row) {
      this.$confirm('Are you sure you want to force the user to log out?', 'Warning', {
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Confirm'
      }).then(() => {
        offlineUser(row.username).then(() => {
          this.$message.success('Logged out successfully')
        })
      })
    },
    handleUpdate(row) {
      this.form = { ...row }
      this.avatar = [row.avatar]
      this.formVisible = true
    },
    handleInsert() {
      this.form = {
        role: parseInt(this.$route.params.role)
      }
      this.formVisible = true
    },
    handleSubmit() {
      saveUser(this.form).then(() => {
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
        delUser(id).then(() => {
          this.$message.success('Deleted successfully')
          this.fetchData()
        })
      })
    },
    fetchData() {
      this.listLoading = true
      userList(this.searchParams).then(response => {
        const { records, total } = response.data
        this.list = records
        this.searchParams.total = total
        this.listLoading = false
      })
    }
  }
}
</script>
