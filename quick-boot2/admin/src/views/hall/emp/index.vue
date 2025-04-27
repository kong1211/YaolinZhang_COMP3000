<template>
  <div class="app-container">
    <el-dialog title="Save info" :visible.sync="formVisible">
      <el-form :model="form" label-width="100px">
        <el-form-item label="staff name">
          <el-input v-model="form.name" placeholder="staff name" />
        </el-form-item>
        <el-form-item label="staff psw">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="staff psw"
          />
        </el-form-item>
        <el-form-item label="staff info">
          <el-input
            v-model="form.detail"
            type="textarea"
            placeholder="staff info"
          />
        </el-form-item>
        <el-form-item label="staff tel">
          <el-input v-model="form.phone" placeholder="staff tel(loginaccount)" />
        </el-form-item>
        <el-form-item label="staff sex">
          <el-select placeholder="plschoosesex" v-model="form.sex">
            <el-option label="male" value="male"></el-option>
            <el-option label="female" value="female"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="status">
          <el-select placeholder="plschoosestatus" v-model="form.state">
            <el-option label="on duty" value="on duty"></el-option>
            <el-option label="quit" value="quit"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="role" v-if="!form.id">
          <el-select placeholder="plschooserole" v-model="form.role">
            <el-option label="cook" value="cook"></el-option>
            <el-option label="window-worker" value="job"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="time of work">
          <el-input v-model="form.jobTime" placeholder="time of work" />
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
      <el-table-column align="center" label="staff name">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="staff info">
        <template slot-scope="scope">
          {{ scope.row.detail }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="staff sex">
        <template slot-scope="scope">
          {{ scope.row.sex }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="staff tel">
        <template slot-scope="scope">
          {{ scope.row.phone }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="status">
        <template slot-scope="scope">
          {{ scope.row.state }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="role">
        <template slot-scope="scope">
          {{ { job: "window-worker", cook: "cook" }[scope.row.role] }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="time of work">
        <template slot-scope="scope">
          {{ scope.row.jobTime }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="time of attend">
        <template slot-scope="scope">
          {{ scope.row.joinTime }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Handle">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="handleShowExpel(scope.row)"
            >punish</el-button
          >
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

    <el-dialog
      :visible.sync="expel.visible"
      title="punish info"
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
        delEmp(id).then(() => {
          this.$message.success("delete successful");
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
