<template>
  <div class="app-container">
    <el-dialog title="Save info" :visible.sync="formVisible">
      <el-form :model="form" label-width="100px">
        <template v-if="form.id"
          ><el-form-item label="status">
            <el-select v-model="form.state" placeholder="filtratestatus">
              <el-option label="wait for check" value="wait for check"></el-option>
              <el-option label="check pass" value="check pass"></el-option>
              <el-option label="check denied" value="check denied"></el-option>
            </el-select>
          </el-form-item>
        </template>
        <template v-else>
          <el-form-item label="reason">
            <el-input
              type="textarea"
              v-model="form.reason"
              placeholder="reason"
            />
          </el-form-item>
          <el-form-item label="date">
            <el-input v-model="form.content" placeholder="date" />
          </el-form-item>
        </template>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">Submit</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <el-form :inline="true" size="small">
      <el-form-item label="status:">
        <el-select
          v-model="searchParams.search"
          placeholder="filtratestatus"
          clearable
        >
          <el-option label="wait for check" value="wait for check"></el-option>
          <el-option label="check pass" value="check pass"></el-option>
          <el-option label="check denied" value="check denied"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="fetchData">search</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="handleInsert">leave request</el-button>
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
      <el-table-column align="center" label="proposer">
        <template slot-scope="scope">
          {{ scope.row.nickName }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="reason">
        <template slot-scope="scope">
          {{ scope.row.reason }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="date">
        <template slot-scope="scope">
          {{ scope.row.content }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="status">
        <template slot-scope="scope">
          {{ scope.row.state }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="request time">
        <template slot-scope="scope">
          {{ scope.row.createTime }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="Handle"
        v-if="checkAnyRoles('admin')"
      >
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="handleUpdate(scope.row)"
            >check</el-button
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
      this.form = { state: "wait for check" };
      this.formVisible = true;
    },
    handleSubmit() {
      saveLeave(this.form).then(() => {
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
        delLeave(id).then(() => {
          this.$message.success("delete successful");
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
