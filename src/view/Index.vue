<template>
  <div class="timer">
    <Timer></Timer>
  </div>
  <CGQModal v-if="showView === '结构监测'"></CGQModal>

  <div class="weather-top">
    <div class="back-index image-style" v-if="isShowBack && showView !== '首页'" v-on:click="switchView('首页')">
      返回
    </div>
    <div class="weather-icon1" v-on:click="
      () => {
        isShowTimeline = !isShowTimeline;
      }
    "></div>
    <div class="weather-icon2" v-on:click="
      () => {
        isShowWeather = !isShowWeather;
      }
    "></div>
  </div>
  <Weather v-if="isShowWeather && showView === '首页'"></Weather>
  <Timeline v-if="isShowTimeline && showView === '首页'"></Timeline>
  <FunList v-if="isShowFunlist && showView === '首页'" @switchView="switchView"></FunList>
  <div class="wheather"></div>
  <div class="top" id="top-id">京港澳高速汉江特大桥健康监测</div>
  <div class="left" id="left-id">
    <AlarmContent v-if="showView === '首页'" @handleAlarmLevel="handleAlarmLevel"></AlarmContent>
    <Monitor v-if="showView === '视频巡检'" id="1945332429128601600" @showDialog="showMonitorDialog"></Monitor>
    <CarList v-if="showView === '车辆跟踪'"></CarList>
    <FaceDirection v-if="showView === '数字漫游'"></FaceDirection>
  </div>
  <div class="right" id="right-id">
    <StateContent v-if="showView === '首页'"></StateContent>
    <Monitor v-if="showView === '视频巡检'" id="1945332493657968640" @showDialog="showMonitorDialog"></Monitor>
    <DeflectionGauge v-if="showView === '挠度孪生'" :value="10" :currentValue="10"></DeflectionGauge>
    <DeflectionCurve v-if="showView === '挠度孪生'"></DeflectionCurve>
    <StrainRangeCard v-if="showView === '结构云图'"
      :options="[{ title: '主梁应变范围', minValue: -30, maxValue: 30, unit: 'με' }, { title: '主塔应变范围', minValue: -10, maxValue: 10, unit: 'με' }]">
    </StrainRangeCard>
  </div>
  <div class="bottom" v-if="showView === '首页'">
    <div class="QJRQX">
      <div class="title-second">全桥挠曲线</div>
      <div id="QJRQX-chart"></div>
    </div>
    <div class="SLJC">
      <div class="title-second">索力监测</div>
      <div id="SLJC-chart"></div>
    </div>
  </div>
  <div class="bottom-view">
    <BackView></BackView>
  </div>
  <div class="center">
    <div class="center-modal" id="center-id"></div>
    <iframe id="iframeRender" style="width: 100%; height: 100%" :src="url"></iframe>
  </div>
  <!-- <div class="center">
    <iframe id="iframeRender" style="width: 100%; height: 100%"></iframe>
  </div> -->
  <StatisticsDialog v-if="alterVisible" @close="alterVisible = false" :title="title"></StatisticsDialog>

  <Monitor v-if="showView === '视频巡检' && isShowMonitorDialog" :flvUrl="monitorDialogFlvUrl" isDialog
    @closeDialog="closeMonitorDialog"></Monitor>
</template>
<script setup lang="ts">
import FaceDirection from "../components/FaceDirection.vue";
import StatisticsDialog from "../components/Statistics.vue";
import Monitor from "../components/Monitor.vue";
import StrainRangeCard from "../components/StrainRangeCard.vue";
import DeflectionGauge from "../components/DeflectionGauge.vue";
import DeflectionCurve from "../components/DeflectionCurve.vue";
import CarList from "../components/CarList.vue";
import AlarmContent from "../components/AlarmContent.vue";
import StateContent from "../components/StateContent.vue";
import { ref, onMounted, onUnmounted } from "vue";
import Timer from "../components/Timer.vue";
import Weather from "../components/Weather.vue";
import Timeline from "../components/Timeline.vue";
import FunList from "../components/FunList.vue";
import CGQModal from "../components/CGQModal.vue";
import { createQQNQX } from "../chart/qqnqx";
import { createSLJC } from "../chart/sljc";
const { getData } = useGetData();
const isShowBack = ref(true);
const isShowWeather = ref(true);
const isShowTimeline = ref(true);
const isShowFunlist = ref(true);

const showView = ref('首页');
const switchView = (key: string) => {
  if (key === '挠度孪生') {
    const iframe = document.getElementById("iframeRender");
    if (iframe) {
      iframe.contentWindow.postMessage(JSON.stringify({ name: "wz1" }), "*");
      console.log("发送天气消息", "wz");
    }
  }
  showView.value = key;
};
const url = "";
let chart1: any = null;
let chart2: any = null;
onMounted(() => {
  chart1 = createQQNQX();
  chart2 = createSLJC();
  // setTimeout(() => {
  //   isShowWeather.value = false;
  // }, 5000);
});
onUnmounted(() => {
  if (chart1) {
    chart1.dispose();
  }
  if (chart2) {
    chart2.dispose();
  }
});
import { useGetData } from "../store/useStore";
import BackView from "../components/BackView.vue";
const isShowMonitorDialog = ref(false);
const monitorDialogFlvUrl = ref<string>("");
const showMonitorDialog = (flvUrl: string) => {
  isShowMonitorDialog.value = true;
  monitorDialogFlvUrl.value = flvUrl;

};
const closeMonitorDialog = () => {
  isShowMonitorDialog.value = false;
};

const alterVisible = ref(false);
const title = ref<string>('');
const handleAlarmLevel = (level: string) => {
  alterVisible.value = true;
  title.value = `${level}车辆统计`;
};
</script>
<style lang="scss">
@keyframes aniCar {
  0% {
    margin-top: 0;
    opacity: 1;
  }

  100% {
    margin-top: 20px;
    opacity: 0;
  }
}

.title-second {
  width: 368px;
  height: 46px;
  background-image: url("/img/title-2.png");
  background-size: cover;
  background-position: center;
  font-size: 24px;
  line-height: 46px;
  font-family: PMZD;
  padding-left: 70px;
}

.left {
  z-index: 10;
  position: absolute;
  width: 20vw;
  height: calc(100% - 78px);
  left: 0%;
  top: 78px;
  transition: left 4s;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 0 0 10px;
}

.right {
  z-index: 10;
  position: absolute;
  width: 20vw;
  height: calc(100% - 78px);
  right: 0%;
  top: 78px;
  transition: right 4s;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 10px 0 0;


}


.bottom {
  z-index: 10;
  transition: bottom 4s;
  -webkit-transition: bottom 4s;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%);
  height: 300px;
  // width: 100%;
  display: flex;
  align-items: center;

  .QJRQX {
    width: 500px;
  }

  #QJRQX-chart {
    widows: 500px;
    height: 220px;
  }

  .SLJC {
    width: 500px;
    // height: 220px;
  }

  #SLJC-chart {
    widows: 500px;
    height: 220px;
  }
}

.top {
  z-index: 10;
  position: absolute;
  transition: top 4s;
  background-image: url("/img/topTitle.png");
  background-size: cover;
  background-position: center;
  -webkit-transition: top 4s;
  top: 0%;
  font-size: 48px;
  font-family: PMZD;
  text-align: center;
  color: #ffffff;
  height: 78px;
  line-height: 78px;
  width: 100%;
}

.center {
  width: 100%;
  height: 100%;

  position: relative;

  .center-modal {
    width: 100%;
    height: 100%;
    background: url("/img/蒙层.png") center no-repeat;
    background-size: 110% 120%;
    position: absolute;
    pointer-events: none;
    transition: opacity 4s;
    -webkit-transition: opacity 4s;
    top: 0%;
    left: 0%;
  }
}

.timer {
  position: absolute;
  left: 10px;
  top: 12px;
  z-index: 20;
  font-size: 20px;
}

.weather-top {
  position: absolute;
  right: 10px;
  z-index: 20;
  top: 30px;

  height: 44px;
  display: flex;
  gap: 15px;

  .weather-icon2 {
    width: 44px;
    height: 44px;
    background-image: url("/img/weather.png");
    background-size: cover;
    background-position: center;
    cursor: pointer;
  }

  .weather-icon1 {
    width: 44px;
    height: 44px;
    background-image: url("/img/timeline.png");
    background-size: cover;
    background-position: center;
    cursor: pointer;
  }

  .back-index {
    line-height: 44px;
    padding-right: 20px;
    // width: 89px;
    height: 40px;
    color: #ffffff;
    background-image: url("/img/返回背景.png");
    background-size: 100% 100%;
    font-size: 24px;
    font-family: PMZD;
    padding-left: 60px;
    cursor: pointer;
  }
}

.bottom-view {
  position: absolute;
  bottom: 300px;
  right: 22vw;
  z-index: 20;
}
</style>