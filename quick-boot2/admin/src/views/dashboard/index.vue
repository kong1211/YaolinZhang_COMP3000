<template>
  <div class="dashboard-container">
    <Particles />
    <transition name="el-fade-in-linear">
      <el-card v-show="visiable" class="info-card">
        <h2>
          {{ info.title }}
        </h2>
        <div v-html="info.content" />
      </el-card>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getInfoList } from '@/api/system/info'
import Particles from '@/components/Particles'
export default {
  name: 'Dashboard',
  components: { Particles },
  data() {
    return {
      visiable: false,
      info: {}
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  mounted() {
    this.fetchData()
    setTimeout(() => {
      this.visiable = true
    }, 500)
  },
  methods: {
    fetchData() {
      getInfoList({
        pageNum: 1,
        pageSize: 1,
        search: ''
      }).then(res => {
        const [info] = res.data.records
        this.info = info
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  background-color: #2D3A4B;

  .info-card {
    position: absolute;
    z-index: 1;
    width: 70%;
    inset: 50% 0 0 50%;
    transform: translateX(-50%) translateY(-50%);
    line-height: 30px;
    height: 400px;
    overflow-y: scroll;
    box-shadow: 0 2px 12px 0 #304156 !important;
  }

  .info-card::-webkit-scrollbar {
    display: none;
  }
}
</style>
