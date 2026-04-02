<template>
  <div>{{ nowTime }}</div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const nowTime = ref("");
const getTime = () => {
  const now = new Date();

  const year = now.getFullYear(); // 年
  const month = now.getMonth() + 1; // 月（注意：月份从0开始，所以要+1）
  const day = now.getDate(); // 日
  const hours = now.getHours(); // 时
  const minutes = now.getMinutes(); // 分
  const seconds = now.getSeconds(); // 秒
  const weekdays = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ];
  const weekday = weekdays[now.getDay()]; // 星期（0表示周日
  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds} ${weekday}`;
};
let timerInt:any =undefined;
onMounted(()=>{
  if(!timerInt){
    timerInt = setInterval(()=>{
      nowTime.value= getTime();
    },1000)
  }
});
onUnmounted(()=>{
  if(timerInt){
    clearInterval(timerInt);
  }
})
</script>
<style scoped lang="scss">
</style>