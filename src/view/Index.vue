<template>
  <div class="timer">
    <Timer></Timer>
  </div>
  <CGQModal
    v-if="isShowCGQ"
    @close="
      () => {
        isShowCGQ = false;
      }
    "
  ></CGQModal>
  返回

  <div class="weather-top">
    <div
      class="back-index image-style"
      v-if="isShowBack"
      v-on:click="backIndex"
    >
      返回
    </div>
    <div
      class="weather-icon1"
      v-on:click="
        () => {
          isShowTimeline = !isShowTimeline;
        }
      "
    ></div>
    <div
      class="weather-icon2"
      v-on:click="
        () => {
          isShowWeather = !isShowWeather;
        }
      "
    ></div>
  </div>
  <Weather v-if="isShowWeather"></Weather>
  <Timeline v-if="isShowTimeline"></Timeline>
  <FunList v-if="isShowFunlist"></FunList>
  <div class="wheather"></div>
  <div class="top" id="top-id">京港澳高速汉江特大桥健康监测</div>
  <div class="left" id="left-id">
    <div class="left-bridge-base">
      <div class="base-title">{{ getData.bridgeName }}</div>
      <div class="style-flex">
        <div class="">位置：</div>
        <div class="location-text">湖北省-武汉市蔡甸区</div>
      </div>
      <div class="bridge-image-content">
        <img width="309px" height="131px" src="/img/bridge-image.png" alt="" />
      </div>
      <div class="bridge-text-content">
        {{ getData.introduction }}
      </div>
    </div>
    <div class="alarm-content">
      <div class="title-second">已处理告警统计</div>
      <div class="alarm-level-content">
        <div class="alarm-body">
          <div class="alarm-number">{{ getData.alarmLevel1 }}</div>
          <div
            class="image-style"
            :style="{
              width: '104px',
              height: '65px',
              backgroundImage: `url('/img/alarm1.png')`,
            }"
          ></div>
          <div class="alarm-tag">超限一级</div>
        </div>
        <div class="alarm-body">
          <div class="alarm-number">{{ getData.alarmLevel2 }}</div>
          <div
            class="image-style"
            :style="{
              width: '104px',
              height: '65px',
              backgroundImage: `url('/img/alarm2.png')`,
            }"
          ></div>
          <div class="alarm-tag">超限二级</div>
        </div>
        <div class="alarm-body">
          <div class="alarm-number">{{ getData.alarmLevel3 }}</div>
          <div
            class="image-style"
            :style="{
              width: '104px',
              height: '65px',
              backgroundImage: `url('/img/alarm3.png')`,
            }"
          ></div>
          <div class="alarm-tag">超限三级</div>
        </div>
      </div>
    </div>
    <div class="JTZH-TJ">
      <div class="title-second">交通载荷统计</div>
      <div class="grid-content">
        <div class="top-left">
          <div>
            <span class="JTZH-title">左幅：上行</span
            ><span class="JTZX-unit">(辆)</span>
          </div>
          <div class="JTZX-number">{{ getData.sx }}</div>
        </div>

        <!-- 左下：第二行第一列 -->
        <div class="bottom-left">
          <div>
            <span class="JTZH-title">总超重车辆</span
            ><span class="JTZX-unit">(辆)</span>
          </div>
          <div class="JTZX-number">{{ getData.cz }}</div>
        </div>

        <!-- 合并区域：占据第二列（跨两行） -->
        <div class="merged-area" style="position: relative">
          <div
            class="image-style car-animation"
            :style="{
              width: '110px',
              height: '60px',
              backgroundImage: `url('/img/car.png')`,
            }"
          ></div>

          <div
            class="image-style"
            :style="{
              position: 'absolute',
              top: '50%',
              left: '40%',
              transform: 'translate(-50%)',
              width: '105px',
              height: '80px',
              backgroundImage: `url('/img/car-station.png')`,
            }"
          ></div>
        </div>

        <!-- 右上：第一行第三列 -->
        <div class="top-right">
          <div>
            <span class="JTZH-title">右幅：下行</span
            ><span class="JTZX-unit">(辆)</span>
          </div>
          <div class="JTZX-number">{{ getData.xx }}</div>
        </div>

        <!-- 右下：第二行第三列 -->
        <div class="bottom-right">
          <div>
            <span class="JTZH-title">总超速车辆</span
            ><span class="JTZX-unit">(辆)</span>
          </div>
          <div class="JTZX-number">{{ getData.cs }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="right" id="right-id">
    <div class="JGJC">
      <div class="title-second">结构监测</div>
      <div class="JGJC-body">
        <div class="JGJC-flex">
          <div>
            <div class="image-style-46-66 image-style" :style="{backgroundImage:`url(${'/img/主梁饶度.png'})`}"></div>
          </div>
          <div>
            <div>
              <span class="JGJC-unit-number">{{getData.ZLRD}}</span
              ><span class="JGJC-unit">{{ getData.ZLRDUnit }}</span>
            </div>
            <div class="JGJC-title">主梁挠度</div>
          </div>
        </div>
        <div class="JGJC-flex">
          <div>
            <div class="image-style-46-66 image-style" :style="{backgroundImage:`url(${'/img/塔顶偏拉.png'})`}"></div>
           
          </div>
          <div>
            <div>
              <span class="JGJC-unit-number">{{getData.TDPL}}</span
              ><span class="JGJC-unit">{{getData.TDPLUnit}}</span>
            </div>
            <div class="JGJC-title">塔顶偏拉</div>
          </div>
        </div>
        <div class="JGJC-flex">
          <div>
             <div class="image-style-46-66 image-style" :style="{backgroundImage:`url(${'/img/梁端位移.png'})`}"></div>
           
          </div>
          <div>
            <div>
              <span class="JGJC-unit-number">{{ getData.LDWY }}</span
              ><span class="JGJC-unit">{{ getData.LDWYUnit }}</span>
            </div>
            <div class="JGJC-title">梁端位移</div>
          </div>
        </div>
        <div class="JGJC-flex">
          <div>
             <div class="image-style-46-66 image-style" :style="{backgroundImage:`url(${'/img/索力.png'})`}"></div>
          </div>
          <div>
            <div>
              <span class="JGJC-unit-number">{{ getData.SL }}</span
              ><span class="JGJC-unit">{{ getData.SLUnit }}</span>
            </div>
            <div class="JGJC-title">索力</div>
          </div>
        </div>
      </div>
    </div>
    <div class="ZXFX">
      <div class="title-second">专项分析</div>
      <div>
        <div class="title-third">长期性能分析</div>
        <div class="style-flex">
          <div class="modal-zl">主梁下挠</div>
          <div class="modal-jg">结构裂缝</div>
        </div>
      </div>
      <div>
        <div class="title-third">特殊事件分析</div>
        <div class="flex-1">
          <div class="flex-event" v-for="event in tesjfxList">
            <div
              :style="{
                width: '50px',
                height: '50px',
                backgroundImage: `url(${event.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }"
            ></div>
            <div>
              <div>{{ event.title }}</div>
              <div>{{ event.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom">
    <div class="QJRQX">
      <div class="title-second">已处理告警统计</div>
      <div id="QJRQX-chart"></div>
    </div>
    <div class="SLJC">
      <div class="title-second">已处理告警统计</div>
      <div id="SLJC-chart"></div>
    </div>
  </div>
  <div class="bottom-view">
    <BackView></BackView>
  </div>
  <div class="center">
    <div class="center-modal" id="center-id"></div>
    <iframe
      id="iframeRender"
      style="width: 100%; height: 100%"
      :src="url"
    ></iframe>
  </div>
  <!-- <div class="center">
    <iframe id="iframeRender" style="width: 100%; height: 100%"></iframe>
  </div> -->
  <!-- <AlterDialog ref="dialogRef"></AlterDialog> -->
  <!-- <StatisticsDialog ref="statisticsDialogRef"></StatisticsDialog>
  <StrainRangeCard :options="[{ title: '主梁应变范围', minValue: -30, maxValue: 30, unit: 'με' }, { title: '主塔应变范围', minValue: -10, maxValue: 10, unit: 'με' }]" /> -->
  <!-- <Monitor ></Monitor> -->
  <!-- <DeflectionThresholdGauge title="跨中挠度指标" :currentValue="10" />
  <DeflectionCurve /> -->
</template>
<script setup lang="ts">
import AlterDialog from "../components/MainBeamDeflection.vue";
import StatisticsDialog from "../components/Statistics.vue";
import Monitor from "../components/Monitor.vue";
import StrainRangeCard from "../components/StrainRangeCard.vue";
import DeflectionThresholdGauge from "../components/DeflectionThresholdGauge.vue";
import DeflectionCurve from "../components/DeflectionCurve.vue";
import { ref, onMounted, onUnmounted } from "vue";
import Timer from "../components/Timer.vue";
import Weather from "../components/Weather.vue";
import Timeline from "../components/Timeline.vue";
import FunList from "../components/FunList.vue";
import CGQModal from "../components/CGQModal.vue";
import { createQQNQX } from "../chart/qqnqx";
import { createSLJC } from "../chart/sljc";
const { getData } = useGetData();
const isShowCGQ = ref(true);
const isShowBack = ref(true);
const backIndex = () => {
  console.log("back");
};
const isShowWeather = ref(true);
const isShowTimeline = ref(true);
const isShowFunlist = ref(true);
const url = "";
const tesjfxList = [
  { title: "车辆超载", url: "/img/clcz.png", value: 65 },
  { title: "雨雪冰灾", url: "/img/yxbz.png", value: 65 },
  { title: "异常震动", url: "/img/yczd.png", value: 65 },
  { title: "船舶撞击", url: "/img/cbzj.png", value: 65 },
  { title: "强台风", url: "/img/qtf.png", value: 65 },
  { title: "地震", url: "/img/dz.png", value: 65 },
  { title: "涡振", url: "/img/wz.png", value: 65 },
];
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
.style-flex {
  display: flex;
  padding-left: 26px;
  padding-top: 10px;
}
.flex-1 {
  display: flex;
  padding-left: 30px;
  padding-top: 25px;
  flex-wrap: wrap;
  gap: 40px;
}
.flex-event {
  display: flex;
  width: 150px;
  flex-wrap: wrap;
}
.title-third {
  background-image: url("/img/title-3.png");
  background-size: cover;
  background-position: center;
  margin-top: 24px;
  width: 360px;
  height: 41px;
  line-height: 25px;
  font-size: 22px;
  padding-left: 30px;
  font-family: YouSheBiaoTiHei;
  font-weight: 400;
  text-align: LEFT;
  color: #ffffff;
  text-shadow: 0px 2px 4px 0px #1d7ac0;
}
.left {
  z-index: 10;
  position: absolute;
  width: 401px;
  height: calc(100% - 78px);
  left: 0%;
  top: 78px;
  transition: left 4s;
  // background-color: red;

  .location-text {
    width: 156px;
    height: 22px;
    // background: #60ebff;
    font-size: 16px;
    font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 2-400;
    font-weight: 400;
    text-align: LEFT;
    color: #60ebff;
  }

  .left-bridge-base {
    padding-bottom: 30px;
    .base-title {
      margin-left: 10px;
      width: 374px;
      height: 54px;
      line-height: 54px;
      font-size: 20px;
      padding-left: 80px;
      color: #ffffff;
      background-image: url("/img/bridge-bg.png");
      background-size: cover;
      background-position: center;
    }
    .bridge-image-content {
      width: 310px;
      height: 133px;
      margin-left: 26px;
      margin-top: 10px;
      padding: 11px;
      background: linear-gradient(
        246deg,
        #42bdff 0%,
        rgba(96, 184, 238, 0.5) 18%,
        rgba(125, 178, 221, 0) 51%,
        rgba(95, 184, 238, 0.51) 82%,
        #42bdff 100%
      );
      border-radius: 4px;
    }
    .bridge-text-content {
      margin-left: 26px;
      font-size: 14px;
      margin-top: 12px;
      width: 336px;
      line-height: 24px;
    }
  }
  .alarm-content {
    padding-left: 12px;
    padding-bottom: 30px;
    .alarm-level-content {
      display: flex;
      // height: 186px;
      margin: auto;
      gap: 25px;
      .alarm-body {
        // background: #42bdff;
        text-align: center;
        position: relative;
        padding-top: 50px;
        .alarm-number {
          position: absolute;
          top: 25%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-family: PMZD;
          /*  */
          /* background: linear-gradient(90deg, #ffffff, #0ea8c0); */
          color: transparent;
          /* 设置线性渐变，从红色渐变到蓝色 */
          background-image: linear-gradient(180deg, #ffffff, #0ea8c0);
          font-size: 36px;
          /* 使用 -webkit-background-clip 属性将背景剪裁至文本形状 */
          -webkit-background-clip: text;
          /* 非Webkit内核浏览器需要使用标准前缀 */
          background-clip: text;
        }
        .alarm-tag {
          padding-top: 5px;
          font-size: 14px;
        }
      }
    }
  }
  .JTZH-TJ {
    padding-left: 12px;
    padding-bottom: 48px;
    .car-animation {
      margin-top: 20px;
      animation: aniCar 1s ease-in-out infinite alternate;
    }
    .grid-content {
      height: 212px;
      display: grid;
      grid-template-columns: 1fr 1.2fr 1fr; /* 三列，中间列稍宽可突出合并区域 */
      grid-template-rows: 70px 50px; /* 两行，高度由内容撑开 */
      grid-template-areas:
        "top-left    merged-area    top-right"
        "bottom-left merged-area    bottom-right";
      .top-left {
        grid-area: top-left;
        width: 130px;
        height: 50px;
        // background-color: #898b8b;
      }

      /* 左下区域 */
      .bottom-left {
        grid-area: bottom-left;
        width: 130px;
        height: 46px;
        // background-color: #6eee06;
      }

      /* 合并区域（第二列跨两行） */
      .merged-area {
        grid-area: merged-area;
        // background: #0b7ae9;
        // border-color: #94a3b8;
        width: 130px;
        // height: 200px;
      }

      /* 右上区域 */
      .top-right {
        grid-area: top-right;
        width: 130px;
        height: 50px;
        // background-color: #d400ff;
      }

      /* 右下区域 */
      .bottom-right {
        grid-area: bottom-right;
        width: 130px;
        height: 50px;
        // background-color: #1e1f1d;
      }
    }
    .JTZH-title {
      font-size: 18px;
    }

    .JTZX-number {
      width: 55px;
      height: 41px;
      // background: #60ecff;
      font-size: 36px;
      font-family: PMZD;
      font-weight: 400;
      text-align: left;
      color: #60ecff;
    }

    .JTZH-unit {
      font-size: 12px;
    }
  }
}
.right {
  z-index: 10;
  position: absolute;
  width: 400px;
  height: calc(100% - 78px);
  right: 0%;
  top: 78px;
  transition: right 4s;
  // background-color: #0b7ae9;
  .JGJC {
    padding-right: 18px;
    .JGJC-body {
      padding-top: 24px;
      padding-left: 19px;
      padding-bottom: 40px;
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
      .JGJC-flex {
        width: 167px;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url("/img/icon-bg.png");
        background-size: cover;
        background-position: center;
        .JGJC-unit-number {
          font-size: 22px;
          height: 25px;
          line-height: 10px;
          font-family: PMZD;
        }
        .JGJC-unit {
          height: 17px;
          // background: #abd5ee;
          font-size: 12px;
          // font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 2-700;
          font-weight: 700;
          text-align: LEFT;
          color: #abd5ee;
        }
        .JGJC-title {
          height: 22px;
          // background: #e2f4ff;
          font-size: 16px;
          // font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 2-700;
          // font-weight: 700;
          text-align: center;
          color: #e2f4ff;
        }
      }
    }
  }
  .ZXFX {
    .modal-zl {
      width: 150px;
      height: 84px;
      background-image: url("/img/zlxn.png");
      background-size: cover;
      background-position: center;
      line-height: 84px;
      padding-right: 25px;
      text-align: right;
      font-size: 16px;
    }
    .modal-jg {
      width: 150px;
      height: 84px;
      background-image: url("/img/jglf.png");
      background-size: cover;
      background-position: center;
      line-height: 84px;
      padding-right: 25px;
      text-align: right;
      font-size: 16px;
    }
  }
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
    width: 89px;
    height: 40px;
    color: #ffffff;
    background-image: url("/img/返回背景.png");
    font-size: 24px;
    font-family: PMZD;
    padding-left: 60px;
  }
}
.bottom-view {
  position: absolute;
  bottom: 300px;
  right: 430px;
  z-index: 20;
}
</style>