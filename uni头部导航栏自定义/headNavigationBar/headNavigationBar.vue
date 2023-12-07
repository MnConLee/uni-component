<template>
  <view class="head_k" :style="{height: head_height+'px'}">
    <image :src="bg"
           class="head_image"
           mode="widthFix"/>
    <view class="head_k2" :style="{height: head_height+'px'}">
      <image :src="bg" class="head_image2"
             mode="widthFix"/>
      <view class="head" :style="{'padding-top': head_top+ 'px'}">
        <view class="status_bar">
          <image v-if="judge()" :src="fontColor=='#333333'?'https://pic.tralife.cn/10001/20230730/0e13dca75a69444f0daad3b09a5f5e77.png':'https://wjkx-pic.tralife.cn/10001/20230811/f03675bcac4ceb768235a3fd8b350a42.png'"
                 class="head_jt"
                 mode="widthFix" @click="returnStep"></image>
          <text :style="{color: fontColor}" class="status_text">
            <slot></slot>
          </text>
        </view>
      </view>
    </view>
  </view>
</template>
<script>

export default {
  components: {},
  data() {
    return {
      statusLineHeight: this.$navigationAltitude, // 状态栏高度也就是状态栏下面要展示内容的位置
      menuButtonInfo: {},
      head_height: 0,
      head_top: 0,
      pathlist: ['pages/user/index', 'pages/order/index', 'pages/index/index']
    };
  },
  props: {
    bg: {
      type: String,
      default: 'https://pic.tralife.cn/10001/20230727/05cd7322d98b5f4de4e9a5cbec8f28d0.png'
    },
    fontColor: {
      type: String,
      default: '#333333'
    }
  },
  created() {
    this.head_height = this.statusLineHeight.top + this.statusLineHeight.height + 10
    this.head_top = this.statusLineHeight.top
  },
  methods: {
    judge() {
      if (this.pathlist.indexOf(getCurrentPages()[getCurrentPages().length - 1].route) == '-1') {
        return true
      }
      return false
    },

    returnStep() {
      if (getCurrentPages().length === 1) {
        uni.switchTab({url: '/pages/index/index'})
      } else {
        uni.navigateBack({
          delta: 1
        })
      }
    }
  }
}
</script>

<style lang="scss">
.head {
  position: relative;
  z-index: 2;
  height: 64rpx;
  line-height: 64rpx;
  box-sizing: content-box;

  .status_bar {
    height: 100%;
  }

  .head_jt {
    position: absolute;
    left: 32rpx;
    bottom: 14rpx;
    width: 22rpx;
    height: auto;
  }
}

.head_k2 {
  position: fixed;
  left: 0;
  width: 100%;
  top: 0;
  z-index: 2;
  overflow: hidden;
}

.head_image {
  position: fixed;
  z-index: -2;
  left: 0;
  top: 0;
  width: 100%;
}

.head_image2 {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
}

.status_bar {
  display: flex;
  height: var(--status-bar-height);
  width: 100%;
  align-items: center;

  .status_text {
    font-size: 20rpx;
    display: block;
    width: 200rpx;
    margin: 0 auto;
    text-align: center;
    font-size: 36rpx;
    font-weight: 500;

  }
}
</style>
