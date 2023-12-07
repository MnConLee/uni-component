<template>
    <view class="diy-banner">
      <!-- 图片轮播 -->
      <view class="setBanner" :style="'height:'+heights+'rpx'">
      <swiper class="swiper-box" :autoplay="autoplay" :duration="duration" :circular="true"
              :interval="itemStyle.interval * 1000" @change="_bindChange">
        <swiper-item v-for="(dataItem, index) in dataList" :key="index">
          <image mode="aspectFill" class="slide-image" :src="dataItem.imgUrl||dataItem.external_url" @click="onLink(dataItem.link)"
                 @load="_imagesHeight"/>
        </swiper-item>
      </swiper>
        <!-- 指示点 -->
        <view class="indicator-dots" :class="itemStyle.btnShape">
          <view class="dots-item" :class="{ active: imgCurrent == index }"
                :style="{ backgroundColor: itemStyle.btnColor }"
                v-for="(dataItem, index) in dataList" :key="index"></view>
        </view>
      </view>
    </view>
</template>
<script>
export default {
  name: 'Banner',

  /**
   * 组件的属性列表
   * 用于组件自定义设置
   */
  props: {
    // 轮播图切换
    itemStyle:{
      type:Object,
      default:{
        // 时间
        'interval': 2.5,
        // 是否圆角等风格
        'btnShape': 'round',
        // 底部栏点
        'btnColor': '#fffff'
      }
    },
    //高度
    heights:{
      type:String,
      default:'280'
    },
    /*
    * 图片数据 数组
    *[{
    * imgUrl,external_url:图片路径，
    * link: 点击banner链接地址
    * }]
    * */
    dataList: Array
  },

  /**
   * 私有数据,组件的初始数据
   * 可用于模版渲染
   */
  data() {
    return {
      windowWidth: 750,
      indicatorDots: false, // 是否显示面板指示点
      autoplay: true, // 是否自动切换
      duration: 800, // 滑动动画时长
      imgHeights: [], // 图片的高度
      imgCurrent: 0 // 当前banne所在滑块指针
    };
  },

  created() {
    const app = this;
    uni.getSystemInfo({
      success({windowWidth}) {
        app.windowWidth = windowWidth > 750 ? 750 : windowWidth;
      }
    });
  },

  /**
   * 组件的方法列表
   * 更新属性和数据的方法与更新页面数据的方法类似
   */
  methods: {
    /**
     * 计算图片高度
     */
    _imagesHeight({detail}) {
      const app = this;
      // 获取图片真实宽度
      const {width, height} = detail;
      // 宽高比
      const ratio = width / height;
      // 计算的高度值
      const viewHeight = app.windowWidth / ratio;
      // 把每一张图片的高度记录到数组里
      app.imgHeights.push(viewHeight);
    },

    /**
     * 记录当前指针
     */
    _bindChange(e) {
      this.imgCurrent = e.detail.current;
    },
    /**
     * link对象点击事件
     * 支持tabBar页面
     */
    onLink(linkObj) {
      if (!linkObj) return false
      // 跳转到指定页面
      if (linkObj.type === 'PAGE') {
        this.$navTo(linkObj.param.path, linkObj.param.query)
      }
      return true
    }
  }
};
</script>

<style lang="scss" scoped>


.diy-banner {
  position: relative;

  .setBanner {
    position: relative;
    height: 280rpx;
    border-radius: 16rpx;
    overflow: hidden;
  }
  // swiper组件
  .swiper-box {
    height: 100%;

    .slide-image {
      width: 100%;
      height: 100%;
      border-radius: 16rpx;
      margin: 0 auto;
      display: block;
    }
  }

  /* 指示点 */
  .indicator-dots {
    width: 100%;
    height: 28rpx;
    padding: 0 20rpx;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20rpx;
    opacity: 0.8;
    display: flex;
    justify-content: center;

    .dots-item {
      width: 16rpx;
      height: 16rpx;
      margin-right: 8rpx;
      background-color: #fff;

      &:last-child {
        margin-right: 0;
      }

      &.active {
        background-color: #313131 !important;
      }
    }

    // 圆形
    &.round .dots-item {
      width: 16rpx;
      height: 16rpx;
      border-radius: 20rpx;
    }

    // 正方形
    &.square .dots-item {
      width: 16rpx;
      height: 16rpx;
    }

    // 长方形
    &.rectangle .dots-item {
      width: 22rpx;
      height: 14rpx;
    }
  }
}
</style>
