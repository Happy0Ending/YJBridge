<template>
  <div class="CGQ-bg">
    <div style="position: relative">
      <div class="close" @click="emit('close')"></div>
      <div class="CGQ-body">
        <div class="title">作用</div>
        <div class="CGQ-content"></div>
      </div>
      <div class="CGQ-body">
        <div class="title">响应</div>
        <div class="CGQ-content"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["close"]);
</script>

<style scoped lang="scss">
.close {
  position: absolute;
  // top:10%;
  right: 0%;
  width: 32px;
  height: 32px;
  background-image: url("/CGQ/close.png");
  background-size: cover;
  z-index: 20;
  background-position: center;
}
.CGQ-bg {
  position: absolute;
  top: 40%;
  left: 1%;
  width: 706px;
  height: 444px;
  background-image: url("/CGQ/bg.png");
  background-size: cover;
  z-index: 20;
  background-position: center;
  padding-top: 26px;
  .CGQ-body {
    width: 653px;
  }
  .title {
    width: 653px;
    height: 44px;
    font-size: 28px;
    line-height: 44px;
    font-family: PMZD;
    padding-left: 32px;
    background-image: url("/CGQ/title.png");
    background-size: cover;
    background-position: center;
  }
}
</style>
