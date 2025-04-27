<template>
  <div class="app-container">
    <h2>下单</h2>
    <el-form
      v-for="(item, i) in orderForm.items"
      :key="i"
      :model="item"
      :inline="true"
      label-width="80px"
    >
      <el-form-item label="菜品名称">
        <el-input readonly :value="item.itemName"></el-input>
      </el-form-item>
      <el-form-item label="菜品单价">
        <el-input readonly :value="item.unitPrice"></el-input>
      </el-form-item>
      <el-form-item label="数量">
        <el-input-number
          v-model="item.num"
          :min="0"
          :max="10"
          label="请输入数量"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="小计">
        ￥{{ item.num * item.unitPrice }}
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="handleSubmit"
      >点击下单（￥{{ sumAmount }}）</el-button
    >
  </div>
</template>

<script>
import { itemList } from "@/api/hall/item";
import { insertOrder } from "@/api/hall/order";

export default {
  data() {
    return {
      orderForm: {
        items: [],
      },
      rules: [],
    };
  },
  created() {
    this.loadOrder();
  },
  computed: {
    sumAmount() {
      let sum = 0;
      this.orderForm.items.forEach((item) => {
        sum += item.unitPrice * item.num;
      });
      return sum;
    },
  },
  methods: {
    loadOrder() {
      itemList({ pageNum: 1, pageSize: 9999, search: "" })
        .then((res) => {
          return res.data.records;
        })
        .then((menus) => {
          this.orderForm.items = menus.map((item) => {
            return {
              num: 0,
              itemName: item.name,
              itemId: item.id,
              unitPrice: item.price,
            };
          });
        });
    },
    handleSubmit() {
      if (this.sumAmount < 1) {
        this.$message.error("请选择菜品");
      } else {
        this.$confirm("确认下单吗？", "提示")
          .then(() => {
            return insertOrder(this.orderForm);
          })
          .then(() => {
            this.$message.success("下单成功");
          });
      }
    },
  },
};
</script>

<style></style>
