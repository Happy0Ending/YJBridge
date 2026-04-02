<template>
  <div class="deflection-gauge">
    <div class="gauge-head">
      <span>跨中挠度指标</span>
      <span class="gauge-badge" :class="{ warn: !normal }">{{ statusText }}</span>
    </div>
    <div class="gauge-main" ref="gaugeMainRef">
      <div class="gauge-main-dash"></div>
      <div class="gauge-main-value-wrap">
        <div class="gauge-main-kedu" v-for="item in thresholds" :key="item.value" :style="{
          top: valuePct(item.value) + '%',
          color: item.color,
        }">
          <div class="gauge-main-value-iconLine" :style="{
            backgroundColor: item.color,
          }"></div>
          <span class="gauge-main-value-text">{{ item.label }}</span>
          <span class="gauge-main-value-unit">{{ item.value }}mm</span>
        </div>
        <div class="gauge-main-value">
        <div>
          <div class="gauge-main-value-text">{{ valueLabel }}</div>
          <div>{{ value }}mm</div>
        </div>
        <img src="/img/arrow.png" alt="" class="gauge-main-value-arrow">
      </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export type ThresholdLine = {
  value: number;
  color: string;
  label: string;
};

const props = withDefaults(
  defineProps<{
    title?: string;
    statusText?: string;
    normal?: boolean;
    valueLabel?: string;
    value: number;
    currentValue: number;
    unit?: string;
    min?: number;
    max?: number;
    thresholds?: ThresholdLine[];
  }>(),
  {
    title: "跨中挠度指标",
    statusText: "正常",
    normal: true,
    valueLabel: "跨中最大挠度",
    value: 10,
    min: -50,
    max: 50,
    thresholds: () => [
      { value: 50, color: "#ff4d4f", label: "一级阈值上限: " },
      { value: 40, color: "#ff8c00", label: "二级阈值上限: " },
      { value: 30, color: "#f5d742", label: "三级阈值上限: " },
      { value: -30, color: "#f5d742", label: "一级阈值下限: " },
      { value: -40, color: "#ff8c00", label: "二级阈值下限: " },
      { value: -50, color: "#ff4d4f", label: "三级阈值下限: " },
    ],
  }
);

function valuePct(v: number) {
  const span = props.max - props.min;
  if (span <= 0) return 50;
  const p = ((props.max - v) / span) * 100;
  console.log(p, props.max, v, span);
  return Math.min(100, Math.max(0, p));
}
</script>

<style scoped>
.deflection-gauge {
  position: absolute;
  top: 100px;
  left: 600px;
  box-sizing: border-box;
  padding: 12px;
  border-radius: 8px;
  width: 455px;
  height: 547px;
  background: url("/img/deflection1Bg.png") no-repeat center center;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
}

.gauge-head {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #fff;
  margin-bottom: 12px;
}

.gauge-badge {
  padding: 2px 12px;
  font-size: 13px;
  color: #7bed9f;
  border: 1px solid rgba(80, 220, 140, 1);
  border-radius: 4px;
  background: rgba(80, 220, 140, 0.35);
  margin-left: 12px;
}

.gauge-main {
  flex: 1;
  position: relative;
}

.gauge-main-dash {
  width: 2px;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(180deg, #ff4d4f88 0%, #f5d74288 100%);
  -webkit-mask-image: repeating-linear-gradient(
    to bottom,
    #000 0,
    #000 5px,
    transparent 5px,
    transparent 10px
  );
  mask-image: repeating-linear-gradient(
    to bottom,
    #000 0,
    #000 5px,
    transparent 5px,
    transparent 10px
  );
}

.gauge-main-value-wrap {
  height: 90%;
  position: absolute;
  left: 0;
  right: 0;
  top: 5%;
  bottom: 0;
}

.gauge-main-kedu {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: calc(50% - 25px);
  font-size: 18px;
}

.gauge-main-value-iconLine {
  width: 50px;
  height: 2px;
  margin-right: 12px;
}

.gauge-main-value {
  position: absolute;
  right: 40%;
  transform: translateY(-50%);
  width: 50%;
  height: 50px;
  display: flex;
  align-items: flex-start;
  font-size: 18px;
  color: #fff;
}

.gauge-main-value-arrow {
  height: 32px;
  width: 48px;
}

</style>
