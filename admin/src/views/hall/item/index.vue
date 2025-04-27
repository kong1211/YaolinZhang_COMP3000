<template>
  <div class="app-container">
    <el-dialog title="保存信息" :visible.sync="formVisible">
      <el-form :model="form" label-width="100px">
        <el-form-item label="菜品名称">
          <el-input v-model="form.name" placeholder="菜品名称" />
        </el-form-item>
        <el-form-item label="菜品详情">
          <el-input    
            v-model="form.detail"
            type="textarea"
            placeholder="菜品详情"
          />
        </el-form-item> 
        <el-form-item label="菜品价格">
          <el-input v-model="form.price" placeholder="菜品价格" />
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
      <el-table-column align="center" label="菜品名称">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="菜品详情">
        <template slot-scope="scope">
          {{ scope.row.detail }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="菜品价格">
        <template slot-scope="scope">
          {{ scope.row.price }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
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
import { itemList, delItem, saveItem } from "@/api/hall/item";

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
      this.form = {};
      this.formVisible = true;
    },
    handleSubmit() {
      saveItem(this.form).then(() => {
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
        delItem(id).then(() => {
          this.$message.success("删除成功");
          this.fetchData();
        });
      });
    },
    fetchData() {
      this.listLoading = true;
      itemList(this.searchParams).then((response) => {
        const { records, total } = response.data;
        this.list = records;
        this.searchParams.total = total;
        this.listLoading = false;
      });
    },
  },
};
</script>
