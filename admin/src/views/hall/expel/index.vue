<template>
  <div class="app-container">
    <el-dialog title="保存信息" :visible.sync="formVisible" append-to-body>
      <el-form :model="form" label-width="100px">
        <el-form-item label="处罚类型">
          <el-select v-model="form.type" placeholder="请选择处罚类型">
            <el-option label="处罚" value="处罚"></el-option>
            <el-option label="开除" value="开除"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="处罚理由">
          <el-input
            v-model="form.reason"
            type="textarea"
            placeholder="处罚理由"
          />
        </el-form-item>
        <el-form-item label="处罚内容">
          <el-input
            v-model="form.content"
            type="textarea"
            placeholder="处罚内容"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">提交信息</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-form :inline="true" size="small" v-if="checkAnyRoles('admin')">
      <el-form-item>
        <el-button type="primary" @click="fetchData">刷新</el-button>
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
      <el-table-column align="center" label="处罚类型">
        <template slot-scope="scope">
          {{ scope.row.type }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="处罚理由">
        <template slot-scope="scope">
          {{ scope.row.reason }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="处罚内容">
        <template slot-scope="scope">
          {{ scope.row.content }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="处罚时间">
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
            >修改</el-button
          >
          <el-button type="text" size="mini" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getExpelList, delExpel, saveExpel } from "@/api/hall/expel";

export default {
  props: ["userId"],
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
      this.form = {};
      this.formVisible = true;
    },
    handleSubmit() {
      saveExpel({
        ...this.form,
        userId: this.userId,
      }).then(() => {
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
        delExpel(id).then(() => {
          this.$message.success("删除成功");
          this.fetchData();
        });
      });
    },
    fetchData() {
      this.listLoading = true;
      getExpelList(this.userId).then((response) => {
        const data = response.data;
        this.list = data;
        this.listLoading = false;
      });
    },
  },
};
</script>
