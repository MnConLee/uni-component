<template>
  <el-form ref="detailForm" :inline="true" :model="detailData" label-width="120px">
    <div>
      <el-form-item prop="name" label="书名">
        <el-input class="widee" v-model="detailData.bookName" placeholder="请输入书名"></el-input>
      </el-form-item>
    </div>

    <el-form-item prop="age" label="内容">
      <el-input class="widee" v-model="detailData.book_text" :rows='10' type="textarea"
                placeholder="较长内容建议从记事本复制过来"></el-input>
    </el-form-item>
    <el-form-item prop="img" label="书封面">
      <el-input v-model="detailData.imgurl" v-if="false"></el-input>
      <el-upload
        action="#"
        :limit=1
        list-type="picture-card"
        :http-request="upload"
        :data="detailData">
        <i slot="default" class="el-icon-plus"></i>
      </el-upload>
    </el-form-item>
    <div style="text-align:right;margin:10px 0 0 0">
      <el-button type="primary" @click="save">保存</el-button>
      <el-button type="primary" @click="cancel">取消</el-button>
    </div>
  </el-form>
</template>

<script>
const COS = require('cos-js-sdk-v5')
const cos = new COS({
  SecretId: '', // 身份识别ID
  SecretKey: '' // 身份秘钥
})
export default {
  name: 'detailInofo',
  dialogImageUrl: '',
  dialogVisible: false,
  disabled: false,
  props: {
    detailData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      imageUrl: '',
      name: [{
        required: true,
        message: '请输入用户名',
        trigger: 'blur'
      }, {
        pattern: '',   //输入需要的正则表达式
        message: '用户名只能是中文等字符构成',
        trigger: 'blur'
      }]
    }
  },
  created() {

  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    // 头像上传
    upload(params) {
      if (params.file) {
        cos.putObject({
          Bucket: 'sdapp-1308176051', /* 存储桶 */
          Region: 'ap-shanghai', /* 存储桶所在地域，必须字段 */
          Key: params.file.name, /* 文件名 */
          StorageClass: 'STANDARD', // 上传模式, 标准模式
          Body: params.file, // 上传文件对象
          onProgress: (progressData) => {
            this.percentage = progressData.percent * 100  //这句是给上传加个进度条
            console.log(JSON.stringify(progressData))
          }
        }, (err, data) => {
          console.log(err || data)
          if (data.statusCode === 200) {
            this.imageUrl = `https:${data.Location}`  //写到这,图片已经可以看到啦
          }
        })
    }
  },
  save() {
      this.$emit('success')
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>
<style scoped lang="less">

</style>
