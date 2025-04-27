<template>
  <div class="app-container">
    <el-dialog title="Save info" :visible.sync="formVisible">
      <el-form :model="form" label-width="100px">
        <el-form-item label="dish name">
          <el-input v-model="form.name" placeholder="dish name" />
        </el-form-item>
        <el-form-item label="dish info">
          <el-input
            v-model="form.detail"
            type="textarea"
            placeholder="dish info"
          />
        </el-form-item>
        <el-form-item label="dish price">
          <el-input v-model="form.price" placeholder="dish price" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">Submit</el-button>
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
        <el-button type="success" @click="handleInsert">Add info</el-button>
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
      <el-table-column align="center" label="dish name">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="dish info">
        <template slot-scope="scope">
          {{ scope.row.detail }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="dish price">
        <template slot-scope="scope">
          {{ scope.row.price }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Handle">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="handleUpdate(scope.row)"
            >change</el-button
          >
          <el-button type="text" size="mini" @click="handleDelete(scope.row)"
            >delete</el-button
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
        this.$message.success("Save infosuccessful");
        this.fetchData();
        this.formVisible = false;
      });
    },
    handleDelete({ id }) {
      this.$confirm("delete the info？", "warning", {
        cancelButtonText: "cancel",
        confirmButtonText: "confirm",
      }).then(() => {
        delItem(id).then(() => {
          this.$message.success("delete successful");
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
