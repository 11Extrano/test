<template>
  <div>
    <div class="product-info">
      <div class="info-title">基础信息</div>
      <ul class="massage">
        <li>
          <span>品牌</span>
          <p>魅族</p>
        </li>
        <li>
          <span>型号</span>
          <p>魅族 16th Plus</p>
        </li>
        <li>
          <span>尺寸</span>
          <p>150.5*73.2*7.3mm</p>
        </li>
        <li>
          <span>电池容量</span>
          <p>3010mAh</p>
        </li>
        <li>
          <span>重量</span>
          <p>125g</p>
        </li>
      </ul>
      <div class="info-title">屏幕</div>
      <ul class="screen">
        <li>
          <span>屏幕尺寸</span>
          <p>3.0英寸</p>
        </li>
        <li>
          <span>对比度</span>
          <p>100000:1</p>
        </li>
        <li>
          <span>分辨率</span>
          <p>2160x1080</p>
        </li>
        <li>
          <span>PPI</span>
          <p>402</p>
        </li>
        <li>
          <span>亮度</span>
          <p>430cd/m²（典型值）</p>
        </li>
        <li>
          <span>制造工艺</span>
          <p>On-Cell 全贴合</p>
        </li>
      </ul>
      <div class="info-title">摄像</div>
      <ul class="camera">
        <li class="camera">
          <span>前置摄像头</span>
          <div>
            <p>2000 万像素</p>
            <p>ƒ/2.0大光圈</p>
            <p>5片式定制镜头</p>
            <p>AI 人脸识别解锁</p>
            <p>智能背景虚化功能</p>
            <p>ArcSoft® 美颜算法 自适应美肤技术</p>
            <p>Face AE人脸自动亮度增强</p>
          </div>
        </li>
        <li>
          <span>后置摄像头</span>
          <div>
            <p>1200 万像素 + 2000 万像素双摄</p>
            <p>光学防抖（主摄）</p>
            <p>人像背景虚化模式</p>
            <p>3倍无损变焦模式</p>
            <p>ƒ/1.8 超大光圈，ƒ/2.6 大光圈</p>
            <p>6片式定制镜头5片式定制镜头</p>
            <p>激光对焦</p>
            <p>双ISP图像信号处理器</p>
            <p>连拍模式</p>
            <p>全景模式</p>
            <p>环形6-LED闪光灯 补光自然均匀</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
 
<style lang = "less" scoped>
.product-info {
  width: 100%;
  background-color: #eee;
  .info-title {
    height: 0.5rem;
    line-height: 0.5rem;
    padding-left: 0.2rem;
  }
  .massage,
  .screen {
    width: 100%;
    background-color: #fff;
    li {
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: left;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 0.2rem;
      span {
        color: #ccc;
        width: 35%;
      }
      > p {
        flex: 1;
      }
      > div {
        flex: 1;
      }
    }
  }
  .camera {
    background-color: #fff;
    li {
      display: flex;
      justify-content: space-between;
      padding-left: 0.2rem;
      padding-top: 0.15rem;
      span {
        width: 35%;
        color: #ccc;
      }
      div {
        flex: 1;
        line-height: 0.16rem;
      }
    }
  }
}
</style>