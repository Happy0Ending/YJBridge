<template>
  <div class="CGQ-bg">
    <div style="position: relative">
      <div class="CGQ-body" v-for="(cgq,index) in CGQ.titles">
        <div class="title">{{ cgq }}</div>
        <div class="CGQ-content">
          <div class="CGQ-type"v-for="cgqtype in CGQ.CGQList[index]">
            {{cgqtype.title+`(${cgqtype.num})` }}
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGetData } from '../store/useStore';

const CGQ = useGetData().CGQData;

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
  .CGQ-content{
    padding: 20px 18px 44px 20px;
    display: flex;
    gap:20px;
    flex-wrap: wrap;
    .CGQ-type{
      height: 36px;
      line-height: 36px;
      background-image: url("/CGQ/CGQ-bg.png");
      // background-color: aqua;
      padding-left: 20px;
      padding-right: 10px;
      background-repeat: no-repeat;
    }
  }
}
</style>
