<template>
  <div class="app-container">
    <el-dialog title="Save info" :visible.sync="formVisible" append-to-body>
      <el-form :model="form" label-width="100px">
        <el-form-item label="punish type">
          <el-select v-model="form.type" placeholder="plschoosepunish type">
            <el-option label="punish" value="punish"></el-option>
            <el-option label="开除" value="开除"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Reason">
          <el-input
            v-model="form.reason"
            type="textarea"
            placeholder="Reason"
          />
        </el-form-item>
        <el-form-item label="punish detail">
          <el-input
            v-model="form.content"
            type="textarea"
            placeholder="punish detail"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">Submit</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-form :inline="true" size="small" v-if="checkAnyRoles('admin')">
      <el-form-item>
        <el-button type="primary" @click="fetchData">refresh</el-button>
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
      <el-table-column align="center" label="punish type">
        <template slot-scope="scope">
          {{ scope.row.type }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Reason">
        <template slot-scope="scope">
          {{ scope.row.reason }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="punish detail">
        <template slot-scope="scope">
          {{ scope.row.content }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="punish时间">
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
            >change</el-button
          >
          <el-button type="text" size="mini" @click="handleDelete(scope.row)"
            >delete</el-button
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
        delExpel(id).then(() => {
          this.$message.success("delete successful");
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
