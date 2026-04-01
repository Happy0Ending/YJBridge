<template>
  <Dialog title="主梁挠度">
    <div class="echarts-container" ref="advancedChartRef"></div>
  </Dialog>
</template>

<script setup>
import Dialog from "./DialogBase.vue";
import * as echarts from "echarts";
import { ref, computed, onMounted } from "vue";

// 表格配置：10行 x 10列 = 100个单元格
const rows = 10;
const cols = 3;

// 生成行索引数组
const rowIndices = computed(() => {
  return Array.from({ length: rows }, (_, i) => i + 1);
});

// 生成列索引数组
const colIndices = computed(() => {
  return Array.from({ length: cols }, (_, i) => i + 1);
});
const advancedChartRef = ref(null);
onMounted(() => {
  initAdvancedChart();
});
const thresholds = ref({
  level1: -1750,
  level2: -2000,
  level3: -3000,
});
const initAdvancedChart = () => {
  if (!advancedChartRef.value) return;

  const chartInstance = echarts.init(advancedChartRef.value);
  const chartData = ref({
    dates: [
      "2026-03-18 00:10",
      "2026-03-18 01:47",
      "2026-03-18 02:47",
      "2026-03-18 03:17",
      "2026-03-18 04:17",
      "2026-03-18 05:56",
    ],
    values: [-1750, -2000, -3000, -4000, -1750, 1750],
  });
  const option = {
    title: {
      text: "(YD-DIS-G08-01)位移-竖向时程曲线",
      textStyle: {
        fontSize: 28,
        color: "#fff",
      },
    },
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        let result = `<strong>${params[0].axisValue}</strong><br/>`;
        params.forEach((param) => {
          const color = param.color;
          const value = param.value;
          let status = "";

          if (param.seriesName === "实时值") {
            if (value <= thresholds.value.level3) {
              status = " 🔴 严重告警";
            } else if (value <= thresholds.value.level2) {
              status = " 🟡 二级告警";
            } else if (value <= thresholds.value.level1) {
              status = " 🟠 一级告警";
            } else {
              status = " ✅ 正常";
            }
          }

          result += `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color};"></span>`;
          result += `${param.seriesName}: ${value} mm${status}<br/>`;
        });
        return result;
      },
    },
    legend: {
      data: ["实时值", "一级阈值", "二级阈值", "三级阈值"],
      left: "center",
      top: "10%",
      textStyle: {
        fontSize: 16,
        color: "#fff",
      },
    },
    grid: {
      left: "8%",
      right: "8%",
      bottom: "12%",
      top: "20%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: chartData.value.dates,
      axisLabel: {
        fontSize: 16,
        color: "#fff",
        formatter: (value) => {
          const date = value.substring(0, 10);
          const time = value.substring(11, 16);
          return `${date}\n${time}`;
        },
      },
      axisLine: {
        lineStyle: {
          color: "#fff",
          type: "dashed",
        },
      },
    },
    yAxis: {
      type: "value",
      name: "位移-竖向单位:mm",
      nameLocation: "middle",
      nameGap: 90,
      nameTextStyle: {
        fontSize: 18,
        color: "#fff",
      },
      axisLabel: {
        fontSize: 16,
        color: "#fff",
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
    },
    series: [
      {
        name: "实时值",
        type: "line",
        data: chartData.value.values,
        symbol: "circle",
        symbolSize: 8,
        lineStyle: {
          width: 3,
        },
        itemStyle: {
          color: (params) => {
            const value = params.value;
            if (value <= thresholds.value.level3) {
              return "#FF0000";
            } else if (value <= thresholds.value.level2) {
              return "#FF8C00";
            } else if (value <= thresholds.value.level1) {
              return "#FFD700";
            }
            return "#FF4D4F";
          },
          borderColor: "#fff",
          borderWidth: 2,
        },
        markLine: {
          label: {
            color: "#fff",
            fontSize: 14,
          },
          data: [
            {
              yAxis: 500,
              name: "一级阈值",
              lineStyle: { color: "#FFD700", width: 2, type: "solid" },
              label: {
                formatter: "一级阈值",
              },
            },
            {
              yAxis: thresholds.value.level1,
              name: "一级阈值",
              lineStyle: { color: "#FFD700", width: 2, type: "solid" },
              label: {
                formatter: "一级阈值",
              },
            },
            {
              yAxis: thresholds.value.level2,
              name: "二级阈值",
              lineStyle: { color: "#FF8C00", width: 2, type: "solid" },
              label: {
                formatter: "二级阈值",
              },  
            },
            {
              yAxis: thresholds.value.level3,
              name: "三级阈值",
              lineStyle: { color: "#FF0000", width: 2, type: "solid" },
              label: {
                formatter: "三级阈值",
              },  
            },
          ],
          symbol: "none",
        },
      },
    ],
  };
  chartInstance.setOption(option);
};
</script>

<style scoped>
.echarts-container {
  width: 100%;
  height: 100%;
}
</style>
