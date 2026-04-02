<template>
  <div class="deflection-curve">
    <div class="deflection-curve-title">
      <img src="/img/deflectionIcon.png" alt="">
      全桥挠度曲线
    </div>
    <div class="deflection-curve-container" ref="deflectionCurveRef">

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';
import type { ECharts } from 'echarts';

const deflectionCurveRef = ref<HTMLDivElement | null>(null);
const chartInstance = ref<ECharts | null>(null);
let resizeObserver: ResizeObserver | null = null;

const stationPositions = ['0', '30', '107.5', '155', '211.25', '267.5', '323.75', '380'];
const stationCodes = ['', 'G01', 'G03', 'T01', 'G04', 'G05', 'G06', 'G07'];

const leftSeries = [48, 55, 42, 50, 58, 44, 52, 46];
const rightSeries = [32, 38, 45, 33, 40, 48, 56, 42];
const highlightIdx = 6;

const axisMuted = 'rgba(200, 220, 245, 0.55)';
const gridMuted = 'rgba(255, 255, 255, 0.14)';

function buildOption(): echarts.EChartsOption {
  const orange = '#FF9F43';
  const cyan = '#5DEDE0';
  return {
    backgroundColor: 'transparent',
    textStyle: { color: axisMuted },
    grid: {
      left: 10,
      right: 14,
      top: 40,
      bottom: 28,
      containLabel: true,
    },
    legend: {
      right: 8,
      top: 4,
      itemWidth: 16,
      itemHeight: 3,
      icon: 'rect',
      itemGap: 18,
      textStyle: { color: 'rgba(255,255,255,0.78)', fontSize: 12 },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: stationPositions,
      axisLine: { lineStyle: { color: gridMuted } },
      axisTick: { show: false },
      axisLabel: {
        margin: 10,
        fontSize: 11,
        color: axisMuted,
        formatter: (value: string, index: number) => {
          const code = stationCodes[index];
          return code ? `${value}\n${code}` : value;
        },
      },
      splitLine: { show: false },
    },
    yAxis: {
      type: 'value',
      min: -20,
      max: 70,
      name: '单位:mm',
      nameLocation: 'end',
      nameGap: 8,
      nameTextStyle: { color: axisMuted, fontSize: 12, align: 'left' },
      axisLine: { show: true, lineStyle: { color: gridMuted } },
      axisLabel: { fontSize: 11, color: axisMuted },
      splitLine: {
        lineStyle: { type: 'dashed', color: 'rgba(255,255,255,0.12)' },
      },
    },
    series: [
      {
        name: '左幅:上行',
        type: 'line',
        smooth: true,
        showSymbol: false,
        lineStyle: { width: 2, color: orange },
        itemStyle: { color: orange },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(255, 159, 67, 0.42)' },
            { offset: 1, color: 'rgba(255, 159, 67, 0)' },
          ]),
        },
        data: leftSeries,
      },
      {
        name: '右幅:下行',
        type: 'line',
        smooth: true,
        showSymbol: false,
        lineStyle: { width: 2, color: cyan },
        itemStyle: { color: cyan },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(93, 237, 224, 0.38)' },
            { offset: 1, color: 'rgba(93, 237, 224, 0)' },
          ]),
        },
        data: rightSeries,
        markPoint: {
          symbol: 'circle',
          symbolSize: 16,
          label: { show: false },
          itemStyle: {
            color: '#fff',
            borderColor: cyan,
            borderWidth: 2,
            shadowBlur: 14,
            shadowColor: 'rgba(93, 237, 224, 0.85)',
          },
          data: [
            {
              name: 'peak',
              coord: [stationPositions[highlightIdx]!, rightSeries[highlightIdx]!],
            },
          ],
        },
      },
    ],
  };
}

onMounted(() => {
  const el = deflectionCurveRef.value;
  if (!el) return;
  chartInstance.value = echarts.init(el, undefined, { renderer: 'canvas' });
  chartInstance.value.setOption(buildOption());
  resizeObserver = new ResizeObserver(() => chartInstance.value?.resize());
  resizeObserver.observe(el);
});

onUnmounted(() => {
  resizeObserver?.disconnect();
  resizeObserver = null;
  chartInstance.value?.dispose();
  chartInstance.value = null;
});
</script>
<style scoped>
.deflection-curve {
  width: 455px;
  height: 403px;
  position: absolute;
  top: 100px;
  left: 1200px;
  padding: 12px;
  box-sizing: border-box;
  background: url("/img/deflectionBg.png") no-repeat center center;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
}

.deflection-curve-title {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: url("/img/deflectionTitleBg.png") no-repeat center center;
  background-size: 100% 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.deflection-curve-title img {
  width: 50px;
  height: 50px;
  margin-right: 8px;
  margin-left: 24px;
}
.deflection-curve-container {
  flex: 1;
  min-height: 0;
  width: 100%;
}
</style>