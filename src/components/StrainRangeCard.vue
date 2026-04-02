<template>
  <div class="strain-range-card">
    <div class="strain-card" v-for="item in options" :key="item.title">
      <div class="strain-header">
        <span class="strain-unit">单位：{{ item.unit }}</span>
        <h3 class="strain-title">{{ item.title }}</h3>
      </div>
      <div class="strain-bar-wrap">
        <div class="strain-bar" :style="{ background: item.gradient?.trim() ? item.gradient : defaultGradient }"></div>
      </div>
      <div class="strain-scale">
        <span>{{ item.minValue }}</span>
        <span>{{ item.maxValue }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props =
  defineProps<{
    options: {
      title: string;
      unit?: string;
      minValue: string | number;
      maxValue: string | number;
      gradient?: string;
    }[];
  }>()


const defaultGradient =
  "linear-gradient(90deg, #40e0d0 0%, #90ee90 35%, #ffa500 65%, #ff4500 100%)";
</script>

<style scoped>
.strain-range-card {
  width: 455px;
  position: absolute;
  top: 1000px;
  left: 100px;
}
.strain-card {
  padding: 14px 16px 12px;
  background: linear-gradient(180deg, #0d2a52 0%, #061a36 100%);
  box-sizing: border-box;
}

.strain-header {
  position: relative;
  min-height: 28px;
  margin-bottom: 14px;
}

.strain-unit {
  position: absolute;
  left: 0;
  top: 0;
  font-size: 13px;
  color: #e8f4ff;
  text-shadow: 0 0 8px rgba(100, 180, 255, 0.45);
}

.strain-title {
  margin: 0;
  padding: 0 72px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 0 10px rgba(120, 200, 255, 0.5);
  line-height: 1.4;
}

.strain-bar-wrap {
  padding: 0 2px;
}

.strain-bar {
  height: 12px;
  border-radius: 2px;
  width: 100%;
}

.strain-scale {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 14px;
  color: #fff;
  text-shadow: 0 0 6px rgba(150, 200, 255, 0.35);
}
</style>
