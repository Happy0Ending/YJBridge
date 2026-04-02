<template>
  <div class="date-switch-container" :class="isOneDay ? 'one-day' : 'seven-day'">
    <div @click="handleChange('24小时内')">24小时内</div>
    <div @click="handleChange('近七日')">近七日</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const emit = defineEmits<{
  (e: "change", payload: { startDate: string; endDate: string }): void;
}>();

const pad2 = (n: number) => String(n).padStart(2, "0");
const pad3 = (n: number) => String(n).padStart(3, "0");
const isOneDay = ref(true);
const formatDateTimeMs = (d: Date) => {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())} ${pad2(d.getHours())}:${pad2(
    d.getMinutes()
  )}:${pad2(d.getSeconds())}.${pad3(d.getMilliseconds())}`;
};

const handleChange = (range: "24小时内" | "近七日") => {
  isOneDay.value = range === "24小时内";
  const endDate = new Date();
  const startDate =
    range === "24小时内"
      ? new Date(endDate.getTime() - 24 * 60 * 60 * 1000)
      : new Date(endDate.getTime() - 7 * 24 * 60 * 60 * 1000);

  emit("change", {
    startDate: formatDateTimeMs(startDate),
    endDate: formatDateTimeMs(endDate),
  });
};
</script>
<style scoped lang="scss">
.date-switch-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  height: 25px;
  font-size: 12px;
  font-weight: normal;
  padding: 0 5px;
  cursor: pointer;
}

.one-day {
  background: url("/img/24h.png") no-repeat;
  background-size: 100% 100%;
}

.seven-day {
  background-image: url("/img/week.png");
  background-size: 100% 100%;
}
</style>