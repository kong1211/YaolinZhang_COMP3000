<template>
  <div class="app-container">
    <el-form :inline="true" size="small">
      <el-form-item label="customer:">
        <el-input v-model="searchParams.search" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="fetchData">Search</el-button>
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
      <el-table-column align="center" label="order number">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="customer">
        <template slot-scope="scope">
          {{ scope.row.nickName }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="cost">
        <template slot-scope="scope">
          {{ scope.row.totalAmount }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="time">
        <template slot-scope="scope">
          {{ scope.row.createTime }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="order status">
        <template slot-scope="scope">
          {{ scope.row.state }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Handle">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="handleShow(scope.row)"
            >View</el-button
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
      :visible.sync="formVisible"
      title="order info"
      width="80%"
      append-to-body
    >
      <el-card>
        <p>order number：{{ form.id }}</p>
        <p>cost：{{ form.totalAmount }}</p>
        <p>time：{{ form.createTime }}</p>
        <p>order人：{{ form.nickName }}</p>
        <p>order status：{{ form.state }}</p>
        <p>customer evaluate：{{ form.comment || "nothing" }}</p>
      </el-card>
      <br />
      <el-card>
        <el-table :data="form.items" fit border>
          <el-table-column
            label="dish name"
            align="center"
            prop="itemName"
          ></el-table-column>
          <el-table-column
            label="单价"
            align="center"
            prop="unitPrice"
          ></el-table-column>
          <el-table-column
            label="number"
            align="center"
            prop="num"
          ></el-table-column>
          <el-table-column
            label="money"
            align="center"
            prop="totalPrice"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-dialog>

    <el-dialog
      :visible.sync="updateVisible"
      title="order status"
      append-to-body
      width="80"
    >
      <el-form :model="form" label-width="100px">
        <el-form-item label="evaluate" v-if="checkAnyRoles('customer')">
          <el-input
            v-model="form.comment"
            type="textarea"
            placeholder="evaluate"
          />
        </el-form-item>
        <el-form-item label="order status" v-else>
          <el-select v-model="form.state" placeholder="plschooseorder status">
            <el-option label="orderd" value="orderd"></el-option>
            <el-option label="prepare materials" value="prepare materials"></el-option>
            <el-option label="cooking" value="cooking"></el-option>
            <el-option label="meal waiting" value="meal waiting"></el-option>
            <el-option label="meal successful" value="meal successful"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">Submit</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import {
  getOrders,
  deleteOrder,
  updateOrder,
  getOrder,
} from "@/api/hall/order";

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
      updateVisible: false,
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
      this.updateVisible = true;
    },
    handleShow(row) {
      getOrder(row.id).then((res) => {
        this.formVisible = true;
        this.form = res.data;
      });
    },
    handleSubmit() {
      updateOrder(this.form).then(() => {
        this.$message.success("Save infosuccessful");
        this.fetchData();
        this.updateVisible = false;
      });
    },
    handleDelete({ id }) {
      this.$confirm("delete the info？", "warning", {
        cancelButtonText: "cancel",
        confirmButtonText: "confirm",
      }).then(() => {
        deleteOrder(id).then(() => {
          this.$message.success("delete successful");
          this.fetchData();
        });
      });
    },
    fetchData() {
      this.listLoading = true;
      getOrders(this.searchParams).then((response) => {
        const { records, total } = response.data;
        this.list = records;
        this.searchParams.total = total;
        this.listLoading = false;
      });
    },
  },
};
</script>
