
<template>
  <div class="weather-body">
    <div class="weather-bg"><span>天气系统</span></div>
    <div class="weather-type">
      <div
        v-for="weatherType in weatherTypes"
        class="weatherType-body"
        v-on:click="
          () => {
            sendMessage(weatherType.message);
          }
        "
      >
        <div
          :style="{
            width: '20px',
            height: '20px',
            backgroundImage: `url(${weatherType.url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }"
        ></div>
        <div class="weather-title">{{ weatherType.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const sendMessage = (message: string) => {
  const iframe = document.getElementById("iframeRender");
  if (iframe) {
    iframe.contentWindow.postMessage(JSON.stringify({ name: message }), "*");
    console.log("发送天气消息", message);
  }
};
const weatherTypes = [
  { title: "晴天", url: "/weather/qingtian.png", message: "qingtian" },
  { title: "多云", url: "/weather/duoyun.png", message: "duoyun" },
  { title: "阴天", url: "/weather/yintian.png", message: "yintian" },
  { title: "小雨", url: "/weather/xiaoyu.png", message: "xiaoyu" },
  { title: "中雨", url: "/weather/xiaoyu.png", message: "zhongyu" },
  { title: "大雨", url: "/weather/dayu.png", message: "dayu" },
  { title: "雾天", url: "/weather/wutian.png", message: "wu" },
  { title: "小雪", url: "/weather/xiaoxue.png", message: "xiaoxue" },
  { title: "中雪", url: "/weather/zhongxue.png", message: "zhongxue" },
  { title: "大雪", url: "/weather/daxue.png", message: "daxue" },
];
</script>

<style scoped lang="scss">
.weather-body {
  user-select: none;
  position: absolute;
  top: 88px;
  right: 21vw;
  width: 132px;
  // height: 258px;
  z-index: 20;
  background: linear-gradient(
    180deg,
    #2b81dc 7%,
    rgba(0, 83, 156, 0.5) 50%,
    rgba(43, 129, 220, 0.5) 100%
  );
  border: 1px solid;
  border-image: linear-gradient(180deg, rgba(136, 223, 255, 0), #6ac6ff 100%) 1
    1;
  border-radius: 4px;
  .weather-bg {
    background-image: url("/weather/back.png");
    background-size: cover;
    background-position: center;
    text-align: center;
    height: 30px;
    width: 133px;
    line-height: 30px;
    font-size: 18px;
    font-family: PMZD;
    &span {
      background: linear-gradient(180deg, #ffffff 19%, #91fdff 100%);
      font-size: 18px;
      font-family: PMZD;
      font-weight: 400;
      /* 使用 -webkit-background-clip 属性将背景剪裁至文本形状 */
      -webkit-background-clip: text;
      /* 非Webkit内核浏览器需要使用标准前缀 */
      background-clip: text;
    }
  }
  .weather-type {
    padding: 8px 10.5px 9.5px 9.5px;
    .weatherType-body {
      width: 112px;
      height: 28px;
      margin-top: 3px;
      display: flex;
      justify-content: center;
      gap: 10px;
      align-items: center;
      line-height: 28px;
      background-image: url("/weather/wea-bg.png");
      background-size: cover;
      background-position: center;
      cursor: pointer;
      .weather-title {
        background: linear-gradient(180deg, #ffffff 39%, #aee3ff 74%);
        font-size: 16px;
        // font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 2-500;
        font-weight: 500;
        text-align: LEFT;
        text-shadow: 0px 2px 4px 0px #006ac7;
        /* 使用 -webkit-background-clip 属性将背景剪裁至文本形状 */
        -webkit-background-clip: text;
        /* 非Webkit内核浏览器需要使用标准前缀 */
        background-clip: text;
      }
    }
  }
}
</style>