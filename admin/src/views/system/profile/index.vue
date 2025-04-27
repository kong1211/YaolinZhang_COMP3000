<template>
  <div class="app-container">
    <el-form :model="form" label-width="100px">
      <el-form-item label="Avatar">
        <UploadFile :fs="avatar" @success="(v) => (form.avatar = v)" />
      </el-form-item>
      <el-form-item label="Username">
        <el-input v-model="form.username" placeholder="Username" />
      </el-form-item>
      <el-form-item label="Name">
        <el-input v-model="form.name" placeholder="Nickname" />
      </el-form-item>
      <el-form-item label="Phone Number">
        <el-input v-model="form.phone" placeholder="Phone Number" />
      </el-form-item>

      <el-form-item label="Old Password">
        <el-input
          v-model="form.oldPwd"
          placeholder="Old password (leave blank to not modify)"
          type="password"
        />
      </el-form-item>
      <el-form-item label="New Password">
        <el-input
          v-model="form.newPwd"
          placeholder="New password (leave blank to not modify)"
          type="password"
        />
      </el-form-item>
      <el-form-item label="Confirm Password">
        <el-input
          v-model="form.confirmPwd"
          placeholder="Confirm password (leave blank to not modify)"
          type="password"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">Update Personal Information</el-button>
      </el-form-item>
    </el-form>
    <div v-if="!checkAnyRoles('admin')">
      <h3>Penalty Records</h3>
      <Expel :userId="form.id" v-if="form.id" />
    </div>
  </div>
</template>

<script>
import UploadFile from "@/components/UploadFile";
import { getUserProfile, updateProfile } from "@/api/user";

export default {
  components: {
    UploadFile,
    Expel: () => import("@/views/hall/expel"),
  },
  data() {
    return {
      form: {},
      avatar: [],
    };
  },
  created() {
    this.getProfile();
  },
  methods: {
    getProfile() {
      getUserProfile().then((res) => {
        this.form = res.data;
        this.avatar = [res.data.avatar];
      });
    },
    handleSubmit() {
      this.$confirm("Are you sure you want to update your personal information?", "Warning").then(() => {
        updateProfile(this.form).then(() => {
          this.$message.success("Personal information updated successfully");
        });
      });
    },
    checkAnyRoles(role) {
      // Here you need to implement the actual logic to check roles
      // For simplicity, it returns false for now
      return false;
    }
  },
};
</script>

<style></style>
