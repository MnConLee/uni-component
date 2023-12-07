<template>
  <view class="row">
    <view class="col" v-for="(item, index) in data" :key="index" @click="tourl(item)">
      <view>
        <image :src="item.img" mode="widthFix"></image>
        <text>{{ item.text }}</text>
      </view>
    </view>
  </view>
</template>

<script>
import * as UserApi from '@/api/user'
import customerService from "@/utils/customerService.js";
export default {
  mixins: [customerService],
  data() {
    return {};
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  methods: {
    tourl(item) {
      console.log('item')
      console.log(item)
      if (item.url ==''){
        this.$toast('功能尚在测试中')
        return
      }
      if (item.url =='客服'){
        this.helpList('万家康享企业微信客服')
        return
      }
      this.$navTo(item.url)
    }
  }
}
</script>

<style scoped lang="scss">
.row {
  padding-top: 40rpx;

  &:after {
    content: '';
    clear: both;
    display: block;
  }

  .col {
    float: left;
    width: 25%;
    margin-bottom: 40rpx;
    text-align: center;

    image {
      width: 52rpx;
      height: auto;
      display: block;
      margin: 0 auto;
      margin-bottom: 12rpx;
    }

    text {
      display: block;
      font-size: 24rpx;
      color: #666666;
    }
  }
}
</style>

