<template>
  <div class="view-body" v-on:click="backView">
    <div class="view"></div>
    <div>还原</div>
  </div>
</template>

<script setup lang="ts">
const backView = () => {
  const iframe = document.getElementById("iframeRender");
  if (iframe) {
    iframe.contentWindow.postMessage(JSON.stringify({ name: "back" }), "*");
    console.log("发送还原消息", "backView");
  }
};
</script>

<style scoped lang="scss">
.view-body {
  width: 48px;
  text-align: center;
  .view {
    width: 48px;
    height: 48px;
    background-image: url("/img/location-view.png");
    background-size: cover;
    background-position: center;
  }
}
</style>