<template>
  <div class="face-direction-container">
    <div class="face-direction-btn" @click="handleDirection('beijing')">北京向</div>
    <div class="face-direction-btn" @click="handleDirection('gangao')">港澳向</div>
  </div>
</template>
<script setup lang="ts">
const handleDirection = (direction: string) => {
  const iframe = document.getElementById("iframeRender");
  if (iframe) {
    iframe.contentWindow.postMessage(JSON.stringify({ name: "direction" }), "*");
    console.log("发送天气消息", "wz");
  }
};
</script>
<style scoped lang="scss">
.face-direction-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;
  flex:1;
  gap: 20px;
}
.face-direction-btn {
  width: 196px;
  height: 56px;
  background: url("/img/btnBg.png") no-repeat center center;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  font-family: PMZ;
  cursor: pointer;
}
</style>