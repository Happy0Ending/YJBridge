<template>
  <div class="monitor-container" :class="{ dialog: isDialog }">
    <div class="monitor-title">
      <template v-if="!isDialog">
        <div class="monitor-title-content">
          <img src="/img/monitor.png" alt="" />
          <span class="linear-text">监控视频</span>
        </div>
        <div class="monitor-subtitle">dasfdsafasdfasdfadsf</div>
      </template>
      <template v-else>
        <div class="monitor-title-content">dasfdsafasdfasdfadsf</div>
        <div class="monitor-subtitle">dasfdsafasdfasdfadsf</div>
      </template>
    </div>
    <div class="monitor-video"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  isDialog: {
    type: Boolean,
    default: false,
  },
});
</script>
<style scoped>
.monitor-container {
  width: 401px;
  padding: 12px;
  background: url("/img/monitorBg.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  left: 50%;
  box-sizing: border-box;
  border-radius: 12px;
}
.monitor-container.dialog {
  width: 44vw;
  background: url("/img/monitorDialogBg.png");
}
.monitor-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  gap: 12px;
  font-weight: bold;
  color: #fff;
}
.monitor-container.dialog .monitor-title {
  margin-top: 1vh;
  font-weight: normal;
  font-size: 20px;
}
.monitor-container.dialog .monitor-subtitle {
  font-size: 20px;
  background: none;
  flex: 0;
}
.monitor-title-content {
  display: flex;
  align-items: center;
  gap: 12px;
}
.monitor-title img {
  width: 25px;
  height: 25px;
}
.monitor-subtitle {
  flex: 1;
  font-size: 14px;

  padding: 0 8px;
  background: url("/img/subtitle.png") no-repeat;
  background-size: 100% 100%;
  line-height: 1.8;
}
.monitor-video {
  margin-top: 12px;
  background: url("/img/videoBg.png") no-repeat;
  background-size: 100% 100%;
  padding-top: 56.25%;
  height: 0;
}
</style>
