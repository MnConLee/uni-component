<template>
  <view v-if="Pop">
    <view class="masking"></view>
    <view class="jueduijz gdSencend" :class="gd?'gdfist':''">
      <view class="imgInfo">
        <image src="https://pic.tralife.cn/10001/20230810/11a2821ffe5036d6feffadbcc3963be8.png" class="imgInfo-img"
               mode="widthFix"></image>
        <view class="imgInfo_x">
          <view class="imgInfo-wxts">温馨提示</view>
          <view class="imgText">您还未进行实名认证，为更好的进行后续服务，请您先进行实名认证。</view>
          <view class="img-auth" @click="withdrawallink">马上认证</view>
          <view class="affterSad" @click="cancel">以后再说</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  data() {
    return {
      data: 0,
      Pop: false,
      gd: false
    };
  },
  methods: {
    withdrawallink(){
      this.cancel()
      this.$navTo('pages/realName/index')
    },
    cancel() {
      this.Pop = false
      this.gd = false
    },
    show() {
      this.Pop = true
      setTimeout(() => {
        this.gd = true
      }, '200')
    }
  }
}
</script>

<style lang="scss">


.gdSencend {
  opacity: 0;
  top: 60%;
  transition: all 0.6s;
}
.gdSencend.gdfist {
  opacity: 1;
  top: 50%;
}
.masking {
  position: fixed;
  top: 0;
  left: 0;
  width: 750rpx;
  height: 1624rpx;
  background: rgba(0, 0, 0, 0.4);
}

.imgInfo {
  position: relative;

  .imgInfo-img {
    width: 654rpx;
  }

  .imgInfo_x {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    text-align: center;

    .affterSad {
      font-size: 28rpx;
      font-weight: 400;
      color: #666666;
      margin-top: 38rpx;
    }

    .img-auth {
      display: inline-block;
      margin-top: 138rpx;
      width: 558rpx;
      padding: 32rpx 0rpx;
      font-size: 32rpx;
      font-weight: bold;
      color: #FFFFFF;
      text-align: center;
      background: linear-gradient(270deg, #649CFF 0%, #005DFF 100%);
      border-radius: 58rpx;
    }

    .imgInfo-wxts {
      padding-top: 370rpx;
      font-size: 40rpx;
      font-weight: 500;
      color: #333333;
    }

    .imgText {
      display: inline-block;
      width: 564rpx;
      margin-top: 50rpx;
      font-size: 28rpx;
      font-weight: 400;
      color: #333333;
    }

  }

}

</style>
