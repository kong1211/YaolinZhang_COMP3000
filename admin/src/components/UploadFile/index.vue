<template>
  <div style="width:100%">

    <el-upload
      :action="uploadAction"
      :list-type="type"
      :limit="count"
      :on-success="onSuccess"
      :on-remove="onRemove"
      :on-error="onError"
      :file-list="files"
    >
      <div :style="type==='file'?'width:100px;height:100px;border:1px solid #e5e5e5;text-align:center;display:flex;flex-direction: column;justify-content: center;':''">
        <i class="el-icon-plus" />
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  props: {
    fs: {
      type: Array,
      default: undefined
    },
    count: {
      type: Number,
      default: 1
    },
    type: {
      type: String,
      default: 'picture-card'
    }
  },
  data() {
    return {
      files: [],
      uploadAction: process.env.VUE_APP_BASE_API + '/upload'
    }
  },
  computed: {
    filelist() {
      return (this.fs || []).map((item, i) => {
        return {
          url: item,
          name: '文件' + i
        }
      })
    }
  },
  watch: {
    fs(v) {
      this.files = (v || []).map((item, i) => {
        return {
          url: item,
          uid: i,
          name: '文件' + i
        }
      })
    },
    files(v) {
      if (v.length > 0) {
        if (this.count === 1) {
          this.$emit('success', this.files[0].url)
        } else {
          this.$emit('success', this.files.map(item => item.url))
        }
      }
    }
  },
  created() {
    this.files = (this.fs || []).map((item, i) => {
      return {
        url: item,
        uid: i,
        name: '文件' + i
      }
    })
  },
  methods: {
    onSuccess(res) {
      this.files.push(res.data)
      this.$emit('success', `/dev-api/files/${res.data.url}`)
    },
    onRemove(e) {
      this.files = this.files.filter(item => {
        return item.uid !== e.uid
      })
    },
    onError() {
      this.$message.error('上传失败，上传文件最大为50MB')
    }
  }
}
</script>

  <style>

  </style>
