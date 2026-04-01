<template>
  <div class="fun-body">
    <div class="fun-tab" v-for="fun in funList" v-on:click="fun.fun()">
      {{ fun.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
const funList = [
  { title: "建构监测", fun: () => {} },
  { title: "挠度孪生", fun: () => {} },
  { title: "结构云图", fun: () => {} },
  { title: "视频巡检", fun: () => {} },
  { title: "数字漫游", fun: () => {} },
  { title: "车辆跟踪", fun: () => {} },
];
</script>

<style lang="scss" scoped>
.fun-body {
  position: absolute;
  left: 480px;
  top: 100px;
  .fun-tab {
    width:125px ;
    height: 34px;
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
