<template>
  <div class="app-container">
    <el-dialog title="保存信息" :visible.sync="formVisible">
      <el-form :model="form" label-width="100px">
        <template v-if="form.id"
          ><el-form-item label="状态">
            <el-select v-model="form.state" placeholder="筛选审核状态">
              <el-option label="等待审核" value="等待审核"></el-option>
              <el-option label="审核通过" value="审核通过"></el-option>
              <el-option label="审核驳回" value="审核驳回"></el-option>
            </el-select>
          </el-form-item>
        </template>
        <template v-else>
          <el-form-item label="申请理由">
            <el-input
              type="textarea"
              v-model="form.reason"
              placeholder="申请理由"
            />
          </el-form-item>
          <el-form-item label="请假时间">
            <el-input v-model="form.content" placeholder="请假时间" />
          </el-form-item>
        </template>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">提交信息</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-form :inline="true" size="small">
      <el-form-item label="状态:">
        <el-select
          v-model="searchParams.search"
          placeholder="筛选审核状态"
          clearable
        >
          <el-option label="等待审核" value="等待审核"></el-option>
          <el-option label="审核通过" value="审核通过"></el-option>
          <el-option label="审核驳回" value="审核驳回"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="fetchData">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="handleInsert">请假申请</el-button>
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
      <el-table-column align="center" label="申请人">
        <template slot-scope="scope">
          {{ scope.row.nickName }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="申请理由">
        <template slot-scope="scope">
          {{ scope.row.reason }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="请假时间">
        <template slot-scope="scope">
          {{ scope.row.content }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="状态">
        <template slot-scope="scope">
          {{ scope.row.state }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="申请时间">
        <template slot-scope="scope">
          {{ scope.row.createTime }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
        v-if="checkAnyRoles('admin')"
      >
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="handleUpdate(scope.row)"
            >审核</el-button
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
  </div>
</template>

<script>
import { leaveList, delLeave, saveLeave } from "@/api/hall/leave";

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
  created() {
    this.fetchData();
  },
  methods: {
    handleUpdate(row) {
      this.form = { ...row };
      this.formVisible = true;
    },
    handleInsert() {
      this.form = { state: "等待审核" };
      this.formVisible = true;
    },
    handleSubmit() {
      saveLeave(this.form).then(() => {
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
        delLeave(id).then(() => {
          this.$message.success("删除成功");
          this.fetchData();
        });
      });
    },
    fetchData() {
      this.listLoading = true;
      leaveList(this.searchParams).then((response) => {
        const { records, total } = response.data;
        this.list = records;
        this.searchParams.total = total;
        this.listLoading = false;
      });
    },
  },
};
</script>
