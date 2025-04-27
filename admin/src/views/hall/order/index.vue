<template>
  <div class="app-container">
    <el-form :inline="true" size="small">
      <el-form-item label="客户:">
        <el-input v-model="searchParams.search" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="fetchData">搜索</el-button>
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
      <el-table-column align="center" label="订单号">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="客户">
        <template slot-scope="scope">
          {{ scope.row.nickName }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="总金额">
        <template slot-scope="scope">
          {{ scope.row.totalAmount }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="下单时间">
        <template slot-scope="scope">
          {{ scope.row.createTime }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="订单状态">
        <template slot-scope="scope">
          {{ scope.row.state }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="handleShow(scope.row)"
            >查看</el-button
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
      :visible.sync="formVisible"
      title="订单详情"
      width="80%"
      append-to-body
    >
      <el-card>
        <p>订单号：{{ form.id }}</p>
        <p>订单总额：{{ form.totalAmount }}</p>
        <p>下单时间：{{ form.createTime }}</p>
        <p>下单人：{{ form.nickName }}</p>
        <p>订单状态：{{ form.state }}</p>
        <p>客户评价：{{ form.comment || "暂未评价" }}</p>
      </el-card>
      <br />
      <el-card>
        <el-table :data="form.items" fit border>
          <el-table-column
            label="菜品名称"
            align="center"
            prop="itemName"
          ></el-table-column>
          <el-table-column
            label="单价"
            align="center"
            prop="unitPrice"
          ></el-table-column>
          <el-table-column
            label="数量"
            align="center"
            prop="num"
          ></el-table-column>
          <el-table-column
            label="小计"
            align="center"
            prop="totalPrice"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-dialog>

    <el-dialog
      :visible.sync="updateVisible"
      title="订单跟进"
      append-to-body
      width="80"
    >
      <el-form :model="form" label-width="100px">
        <el-form-item label="菜品评价" v-if="checkAnyRoles('customer')">
          <el-input
            v-model="form.comment"
            type="textarea"
            placeholder="菜品评价"
          />
        </el-form-item>
        <el-form-item label="订单状态" v-else>
          <el-select v-model="form.state" placeholder="请选择订单状态">
            <el-option label="已下单" value="已下单"></el-option>
            <el-option label="备材料" value="备材料"></el-option>
            <el-option label="制作中" value="制作中"></el-option>
            <el-option label="待取餐" value="待取餐"></el-option>
            <el-option label="取餐成功" value="取餐成功"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">提交信息</el-button>
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
        this.$message.success("保存信息成功");
        this.fetchData();
        this.updateVisible = false;
      });
    },
    handleDelete({ id }) {
      this.$confirm("确认删除此信息吗？", "警告", {
        cancelButtonText: "取消",
        confirmButtonText: "确认",
      }).then(() => {
        deleteOrder(id).then(() => {
          this.$message.success("删除成功");
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
