<template>
  <div class="app-container">
    <h2>order</h2>
    <el-form
      v-for="(item, i) in orderForm.items"
      :key="i"
      :model="item"
      :inline="true"
      label-width="80px"
    >
      <el-form-item label="dish name">
        <el-input readonly :value="item.itemName"></el-input>
      </el-form-item>
      <el-form-item label="cost">
        <el-input readonly :value="item.unitPrice"></el-input>
      </el-form-item>
      <el-form-item label="number">
        <el-input-number
          v-model="item.num"
          :min="0"
          :max="10"
          label="pls输入number"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="money">
        ￥{{ item.num * item.unitPrice }}
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="handleSubmit"
      >buy（￥{{ sumAmount }}）</el-button
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
        this.$message.error("plschoose菜品");
      } else {
        this.$confirm("confirmorder吗？", "提示")
          .then(() => {
            return insertOrder(this.orderForm);
          })
          .then(() => {
            this.$message.success("order successful");
          });
      }
    },
  },
};
</script>

<style></style>
