<template>
  <div class="app-container">
    <el-dialog title="保存信息" :visible.sync="formVisible">
      <el-form :model="form" label-width="100px">
        <el-form-item label="员工名称">
          <el-input v-model="form.name" placeholder="员工名称" />
        </el-form-item>
        <el-form-item label="员工密码">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="员工密码"
          />
        </el-form-item>
        <el-form-item label="员工详情">
          <el-input
            v-model="form.detail"
            type="textarea"
            placeholder="员工详情"
          />
        </el-form-item>
        <el-form-item label="员工电话">
          <el-input v-model="form.phone" placeholder="员工电话(登录账户)" />
        </el-form-item>
        <el-form-item label="员工性别">
          <el-select placeholder="请选择性别" v-model="form.sex">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select placeholder="请选择状态" v-model="form.state">
            <el-option label="就职" value="就职"></el-option>
            <el-option label="离职" value="离职"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="角色" v-if="!form.id">
          <el-select placeholder="请选择角色" v-model="form.role">
            <el-option label="厨师" value="cook"></el-option>
            <el-option label="档口工作人员" value="job"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工作时间">
          <el-input v-model="form.jobTime" placeholder="工作时间" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">提交信息</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-form :inline="true" size="small">
      <el-form-item label="搜索:">
        <el-input v-model="searchParams.search" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="fetchData">搜索</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="handleInsert">添加信息</el-button>
      </el-form-item>
    </el-form>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="员工名称">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="员工详情">
        <template slot-scope="scope">
          {{ scope.row.detail }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="员工性别">
        <template slot-scope="scope">
          {{ scope.row.sex }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="员工电话">
        <template slot-scope="scope">
          {{ scope.row.phone }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="状态">
        <template slot-scope="scope">
          {{ scope.row.state }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="角色">
        <template slot-scope="scope">
          {{ { job: "档口工作人员", cook: "厨师" }[scope.row.role] }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="工作时间">
        <template slot-scope="scope">
          {{ scope.row.jobTime }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="入职时间">
        <template slot-scope="scope">
          {{ scope.row.joinTime }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="handleShowExpel(scope.row)"
            >处罚</el-button
          >
          <el-button type="text" size="mini" @click="handleUpdate(scope.row)"
            >修改</el-button
          >
          <el-button type="text" size="mini" @click="handleDelete(scope.row)"
            >删除</el-button
          >
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

    <el-dialog
      :visible.sync="expel.visible"
      title="处罚信息"
      width="80%"
      append-to-body
    >
      <Expel :userId="expel.userId" v-if="expel.visible" />
    </el-dialog>
  </div>
</template>

<script>
import { empList, delEmp, saveEmp } from "@/api/hall/emp";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger",
      };
      return statusMap[status];
    },
  },
  data() {
    return {
      expel: {
        visible: false,
        userId: null,
      },
      list: null,
      listLoading: true,
      formVisible: false,
      form: {},
      searchParams: {
        total: 0,
        pageNum: 1,
        pageSize: 10,
        search: "",
      },
    };
  },
  components: {
    Expel: () => import("@/views/hall/expel/index.vue"),
  },
  created() {
    this.fetchData();
  },
  methods: {
    handleShowExpel(row) {
      this.expel = {
        visible: true,
        userId: row.userId,
      };
    },
    handleUpdate(row) {
      this.form = { ...row };
      this.formVisible = true;
    },
    handleInsert() {
      this.form = {};
      this.formVisible = true;
    },
    handleSubmit() {
      saveEmp(this.form).then(() => {
        this.$message.success("保存信息成功");
        this.fetchData();
        this.formVisible = false;
      });
    },
    handleDelete({ id }) {
      this.$confirm("确认删除此信息吗？", "警告", {
        cancelButtonText: "取消",
        confirmButtonText: "确认",
      }).then(() => {
        delEmp(id).then(() => {
          this.$message.success("删除成功");
          this.fetchData();
        });
      });
    },
    fetchData() {
      this.listLoading = true;
      empList(this.searchParams).then((response) => {
        const { records, total } = response.data;
        this.list = records;
        this.searchParams.total = total;
        this.listLoading = false;
      });
    },
  },
};
</script>
