<script>
export default {

  /**
   * 全局变量
   */
  globalData: {},

  /**
   * 初始化完成时触发
   */
  onLaunch() {
    // 小程序主动更新
    this.updateManager()

  },

  methods: {
    /**
     * 小程序主动更新
     */
    updateManager() {
      const updateManager = uni.getUpdateManager();
      updateManager.onCheckForUpdate(res => {
        // 请求完新版本信息的回调
        // console.log(res.hasUpdate)
      })
      updateManager.onUpdateReady(() => {
        uni.showModal({
          title: '更新提示',
          content: '新版本已经准备好，即将重启应用',
          showCancel: false,
          success(res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate()
            }
          }
        })
      })
      updateManager.onUpdateFailed(() => {
        // 新的版本下载失败
        uni.showModal({
          title: '更新提示',
          content: '新版本下载失败',
          showCancel: false
        })
      })
    }

  }

}
</script>

<style lang="scss">
/* 引入uView库样式 */
@import "uview-ui/index.scss";
</style>

<style>
/* 项目基础样式 */
@import "./app.scss";
image {
  height: auto
}
.pad {
  padding: 0 32rpx;
}
.Y::before {
  content: "￥";
  font-size: 0.9em;
  display: inline-block;
}
.ques::after {
  margin-left: 8rpx;
  border: #ccc solid 2rpx;
  border-radius: 50%;
  display: inline-block;
  width: 24rpx;
  height: 24rpx;
  line-height: 24rpx;
  text-align: center;
  background: #f3f3f3;
  font-size: 20rpx;
  content: "?";
  color: #999;
  font-weight: bold;
}
.coll {
  font-size: 0;
  overflow: auto;
  white-space: nowrap;
}
.row {
  margin: 0 -10rpx;
}
.row .col {
  width: 25%;
  float: left;
  padding: 0 10rpx;
}
.row::after {
  content: "";
  clear: both;
  display: block;
}
.jueduijz {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
}
.db {
  display: block;
}
.dib {
  display: inline-block;
}
.oneline-hide {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.twoline-hide {
  display: -webkit-box;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.xiagd {
  padding: 25rpx 0px;
  text-align: center;
  font-size: 0
}
.xiagd text {
  display: inline-block;
  vertical-align: middle;
  color: #999;
  font-size: 24rpx;
  padding-bottom: calc(env(safe-area-inset-bottom) / 2);
}
.inset-bottom {
  padding-bottom: calc(env(safe-area-inset-bottom) / 2);
}
.common-card {
  background: #FFFFFF;
  border-radius: 16rpx;
  padding: 0 24rpx;
  margin: 20rpx 0;
}
.henxgduiq_x {
  display: flex;
  align-items: center;
}
.henxgduiq {
  display: -webkit-flex;
  -webkit-justify-content: space-between;
  display: flex;
  justify-content: space-between;
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.uni-app--showlayout + uni-tabbar.uni-tabbar-bottom,
.uni-app--showlayout + uni-tabbar.uni-tabbar-bottom .uni-tabbar,
.uni-app--showlayout + uni-tabbar.uni-tabbar-top,
.uni-app--showlayout + uni-tabbar.uni-tabbar-top .uni-tabbar {
  left: var(--window-left);
  right: var(--window-right);
}

</style>
