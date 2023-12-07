<template>
  <!--  遮罩-->
  <view class="masking" @click="onCloseForMask" v-if="showPop">
    <view class="mask-window"  @click.stop :style="[windowStyle]">
      <!-- 内容-->
      <view class="content" :style="[contStyle]">
        <!-- 标题-->
        <text class="title-text" :style="[titleStyle]">{{ title }}</text>
        <!-- 关闭栏 -->
        <view @click="onClose" class="contClose">
          <view class="btnClose"></view>
        </view>
        <!-- 自定义文本-->
        <view :style="[textStyle]">
          <slot></slot>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    // 标题
    title: {
      type: String,
      default: '标题传参title'
    },
    // 窗口宽度
    windowWidth: {
      type: String,
      default: '678'
    },
    // 控制遮罩点击关闭，默认开启 false开启，true关闭
    maskClose: {
      type: Boolean,
      default: false
    },
    // 内容距离顶部距离
    contTopPadding: {
      type: String,
      default: '40'
    },
    // 内容距离底部距离
    contBotPadding: {
      type: String,
      default: '60'
    },
    // 内容左右距离
    contPadding: {
      type: String,
      default: '24'
    },
    // 标题距离文段距离
    titleBotPadding: {
      type: String,
      default: '40'
    },
    // 文本默认对齐方式，默认居中
    textAlign: {
      type: String,
      default: 'center'
    }
  },

  data() {
    return {
      // 弹窗显示控制
      showPop: false,
      // 窗口样式
      windowStyle: {
        'width': this.windowWidth + 'rpx'
      },
      // 内容样式
      contStyle: {
        'padding-top': this.contTopPadding + 'rpx',
        'padding-bottom': this.contBotPadding + 'rpx',
        'padding-left': this.contPadding + 'rpx',
        'padding-right': this.contPadding + 'rpx'
      },
      // 标题样式
      titleStyle: {
        'padding-bottom': this.titleBotPadding + 'rpx'
      },
      // 文本对齐
      textStyle: {
        'text-align': this.textAlign
      }

    }
  },
  created() {

  },
  mounted() {
    this.$forceUpdate()
  },
  methods: {
    // 控制遮罩层点击是否能够关闭窗口
    onCloseForMask() {
      this.showPop = this.maskClose
    },
    // 关闭窗口      this.$refs.tip_pop.onClose()
    /* 单屏多窗口操作文档案例
        openPop('tip_pop1'),
          openPop(e) {
             this.$refs[e].openWindow()
         },
    */
    onClose() {
      this.showPop = false
    },
    // 打开窗口      this.$refs.tip_pop.openWindow()
    openWindow() {
      this.showPop = true
    },

  }
}
</script>

<style scoped lang="scss">
.masking {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  height: 100%;
  background: rgba(0, 0, 0, 0.40);

  .mask-window {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #FFFFFF;
    border-radius: 12rpx;

    .content {
      position: relative;
      text-align: center;

      .contClose {
        position: absolute;
        right: 0;
        top: 0;
        margin-top: 24rpx;
        margin-right: 24rpx;
      }

      .title-text {
        display: block;
        font-size: 36rpx;
        font-weight: bold;
        color: #333333;
      }
    }
  }


  // 关闭窗口样式
  .btnClose {
    /* 自定义配置 */
    --btn-size: 28rpx; /* 按钮的宽高 */
    --btn-x-size: 4rpx; /* X号线条粗细 */
    --color: #333; /* 颜色 */
    /* 配置 END */

    position: relative;
    width: var(--btn-size);
    height: var(--btn-size);

    /* X线条旋转后会有偏移，使用 flex 进行居中对齐修正 */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* 绘制X线条 */
  .btnClose::after, .btnClose::before {
    content: "";
    position: absolute;
    width: var(--btn-x-size);
    height: var(--btn-size);
    background-color: var(--color);
    border-radius: calc(var(--btn-x-size) / 2);
  }

  /* 两条线条各向左右分别旋转 45 度*/
  .btnClose::after {
    transform: rotate(45deg);
  }

  .btnClose::before {
    transform: rotate(-45deg);
  }


}
</style>
