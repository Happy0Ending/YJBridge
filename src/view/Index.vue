<template>
  <div class="left" id="left-id">
    <div class=""></div>
  </div>
  <div class="right" id="right-id"></div>
  <div class="top" id="top-id">京港澳高速汉江特大桥健康监测</div>
  <div class="bottom"></div>
  <div class="center">
    <iframe id="iframeRender" style="width: 100%; height: 100%"></iframe>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss">
.left {
  z-index: 10;
  position: absolute;
  width: 400px;
  height: calc(100% - 78px);
  left: 0%;
  top: 78px;
  transition: left 4s;
  background-color: red
}
.right {
  z-index: 10;
  position: absolute;
  width: 440px;
  height: 95%;
  right: 0%;
  top: 78px;
  transition: right 4s;
}
.bottom {
  z-index: 10;
  transition: bottom 4s;
  -webkit-transition: bottom 4s;
  position: absolute;
  bottom: 0%;
  height: 4%;
  width: 100%;
  background: url("/img/3D/底部装饰.png") no-repeat center;
  background-size: contain;
  display: flex;
  align-items: center;
}
.top {
  z-index: 10;
  position: absolute;
  transition: top 4s;
  background-image: url("/img/topTitle.png");
  background-size: cover;
  background-position: center;
  -webkit-transition: top 4s;
  top: 0%;
  font-size: 48px;
  font-family: PMZD;
  text-align: center;
  color: #ffffff;
  height: 78px;
  line-height: 78px;
  width: 100%;
}
</style>