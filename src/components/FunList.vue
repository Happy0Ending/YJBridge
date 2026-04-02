<template>
  <div class="fun-body">
    <div class="fun-tab" v-for="fun in funList" v-on:click="showView(fun.title)">
      {{ fun.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
const funList = [
  {
    title: "结构监测",
  },
  {
    title: "挠度孪生",

  },
  {
    title: "结构云图",
  },
  {
    title: "视频巡检",
  },
  {
    title: "数字漫游",
  },
  {
    title: "车辆跟踪",
  },
  {
    title: "车辆引导",
  }
];
const emit = defineEmits(["switchView"]);
const showView = (key: string) => {
  emit("switchView", key);
};
</script>

<style lang="scss" scoped>
.fun-body {
  position: absolute;
  left: 21vw;
  top: 100px;
  z-index: 20;
  .fun-tab {
    width: 125px;
    height: 34px;
    cursor: pointer;
    background-image: url("/img/fun-bg.png");
    background-size: cover;
    background-position: center;
    margin-top: 6px;
    font-size: 18px;
    padding-left: 17px;
    line-height: 34px;
  }
}
</style>
