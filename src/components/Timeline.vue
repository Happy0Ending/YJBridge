<template>
  <div class="timeline-axis">
    <div style="width: 90%">
      <!-- 滑块核心区域 -->
      <div class="slider-wrapper">
        <!-- 黑色背景轨道（未走过区域） -->
        <div class="track-bg">
          <!-- 已走过渐变进度条，宽度随当前值动态变化 -->
          <div class="progress-fill" :style="{ width: `${percent}%` }"></div>
        </div>

        <!-- 自定义渐变滑块，位置随当前值动态变化 -->
        <div class="custom-thumb" :style="{ left: `${percent}%` }"></div>

        <!-- 原生range滑块（透明但完全可交互） -->
        <input
          type="range"
          class="range-input"
          min="0"
          max="24"
          step="0.01"
          v-model="timeValue"
        />
      </div>

      <!-- 刻度尺：0, 6, 12, 18, 24 -->
      <div class="tick-marks">
        <div
          v-for="tick in tickValues"
          :key="tick"
          class="tick"
          :style="{ left: `${(tick / 24) * 100}%` }"
          @click="setValue(tick)"
        >
          <span style="margin-top: -10px;">{{ tick }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed,watch } from "vue";

// 刻度数值
const tickValues = [0, 6, 12, 18, 24];

// 当前时间值（0～24）
const timeValue = ref(12);

// 计算滑块位置与进度条宽度的百分比
const percent = computed(() => (timeValue.value / 24) * 100);

watch(timeValue, (newVal) => {
  // const iframe = document.getElementById("iframeRender");
  console.log("newtime:", newVal);
});
// 点击刻度时直接跳转
const setValue = (val) => {
  timeValue.value = val;
};
</script>

<style scoped>
.timeline-axis {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%);
  z-index: 20;
  width: 546px;
  height: 67px;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(43, 129, 220, 0.1) 6%,
    rgba(43, 129, 220, 0.46) 27%,
    rgba(43, 129, 220, 0.5) 49%,
    #2b81dc 93%
  );
  border: 1px solid;
  border-image: linear-gradient(180deg, rgba(136, 223, 255, 0), #6ac6ff 100%) 1
    1;
  border-radius: 4px;
}

/* 滑块外层容器（相对定位，供自定义滑块和原生滑块定位） */
.slider-wrapper {
  position: relative;
  width: 100%;
  margin: 5px 0 1rem;
  padding: 10px 0;
}

/* 黑色背景轨道（未走过区域） */
.track-bg {
  position: relative;
  width: 100%;
  height: 10px;
  border: solid 1px rgba(255, 255, 255, 0.6);
  background-color: #00000000;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.6),
    0 1px 1px rgba(255, 255, 255, 0.1);
}

/* 已走过渐变进度条 */
.progress-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #d0f9ff, #5ffffa 100%);
  border-radius: 20px;
  transition: width 0.05s linear;
  box-shadow: 0 0 6px rgba(95, 255, 250, 0.5);
  pointer-events: none;
}

/* 自定义渐变滑块 */
.custom-thumb {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 46px;
  height: 24px;
  background: linear-gradient(145deg, #72fff8, #00a6ff);
  border-radius: 30%;
  box-shadow: 0 4px 12px rgba(0, 166, 255, 0.5),
    0 0 0 3px rgba(114, 255, 248, 0.3);
  cursor: grab;
  transition: transform 0.05s ease, box-shadow 0.2s;
  pointer-events: none; /* 让鼠标穿透，由原生range接管拖动 */
  z-index: 12;
  backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.custom-thumb:active {
  cursor: grabbing;
  transform: translate(-50%, -50%) scale(1.08);
  box-shadow: 0 0 18px #72fff8;
}

/* 原生range滑块（完全透明，接收所有交互） */
.range-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 30;
  margin: 0;
  padding: 0;
}

/* 让原生滑块的thumb区域足够大，方便拖拽 */
.range-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 28px;
  height: 28px;
  background: transparent;
  cursor: pointer;
  border: none;
}

.range-input::-moz-range-thumb {
  width: 28px;
  height: 28px;
  background: transparent;
  cursor: pointer;
  border: none;
}

/* 刻度尺容器 */
.tick-marks {
  position: relative;
  width: 100%;
  margin-top: 0px;
 
}

/* 单个刻度样式 */
.tick {
  position: absolute;
  transform: translateX(-50%);
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  color: #cbd5ff;
  text-shadow: 0 1px 2px black;
  cursor: pointer;
  transition: color 0.2s;
  white-space: nowrap;
}

.tick span {
  display: block;
  font-size: 0.75rem;
  margin-top: 6px;
  opacity: 0.85;
  background: rgba(0, 0, 0, 0.5);
  padding: 2px 6px;
  border-radius: 20px;
  backdrop-filter: blur(2px);
  pointer-events: none; /* 让点击事件由父级.tick处理 */
}

/* 刻度装饰短线 */
.tick::before {
  content: "";
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 5px;
  background: #5ffffa;
  border-radius: 2px;
  opacity: 0.6;
}

/* 悬停效果 */
.tick:hover span {
  background: rgba(95, 255, 250, 0.3);
  color: #ffffff;
}

/* 响应式调整 */
@media (max-width: 580px) {
  .timeline-axis {
    padding: 1rem 0.25rem;
  }
  .custom-thumb {
    width: 22px;
    height: 22px;
  }
  .track-bg {
    height: 8px;
  }
  .tick span {
    font-size: 0.65rem;
    padding: 1px 4px;
  }
}
</style>