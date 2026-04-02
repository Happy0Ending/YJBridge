<template>
  <div class="JGJC">
    <div class="title-second">结构监测</div>
    <div class="JGJC-body">
      <div class="JGJC-flex">
        <div>
          <div class="image-style-46-66 image-style" :style="{ backgroundImage: `url(${'/img/主梁饶度.png'})` }"></div>
        </div>
        <div>
          <div>
            <span class="JGJC-unit-number">{{ getData.ZLRD }}</span><span class="JGJC-unit">{{ getData.ZLRDUnit
            }}</span>
          </div>
          <div class="JGJC-title">主梁挠度</div>
        </div>
      </div>
      <div class="JGJC-flex">
        <div>
          <div class="image-style-46-66 image-style" :style="{ backgroundImage: `url(${'/img/塔顶偏拉.png'})` }"></div>

        </div>
        <div>
          <div>
            <span class="JGJC-unit-number">{{ getData.TDPL }}</span><span class="JGJC-unit">{{ getData.TDPLUnit
            }}</span>
          </div>
          <div class="JGJC-title">塔顶偏拉</div>
        </div>
      </div>
      <div class="JGJC-flex">
        <div>
          <div class="image-style-46-66 image-style" :style="{ backgroundImage: `url(${'/img/梁端位移.png'})` }"></div>

        </div>
        <div>
          <div>
            <span class="JGJC-unit-number">{{ getData.LDWY }}</span><span class="JGJC-unit">{{ getData.LDWYUnit
            }}</span>
          </div>
          <div class="JGJC-title">梁端位移</div>
        </div>
      </div>
      <div class="JGJC-flex">
        <div>
          <div class="image-style-46-66 image-style" :style="{ backgroundImage: `url(${'/img/索力.png'})` }"></div>
        </div>
        <div>
          <div>
            <span class="JGJC-unit-number">{{ getData.SL }}</span><span class="JGJC-unit">{{ getData.SLUnit }}</span>
          </div>
          <div class="JGJC-title">索力</div>
        </div>
      </div>
    </div>
  </div>
  <div class="ZXFX">
    <div class="title-second">专项分析</div>
    <div class="ZXFX-body">
      <div class="title-third">长期性能分析</div>
      <div class="ZXFX-flex">
        <div class="ZXFX-modal">主梁下挠</div>
        <div class="ZXFX-modal">结构裂缝</div>
      </div>
    </div>
  </div>
  <div class="special-event-analysis">
    <div class="title-third">
      特殊事件分析
      <DateSwitch @change=""></DateSwitch>
    </div>
    <div class="special-event-analysis-body">
      <div class="flex-event" v-for="event in tesjfxList">
        <div :style="{
          width: '50px',
          height: '50px',
          backgroundImage: `url(${event.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"></div>
        <div>
          <div>{{ event.title }}</div>
          <div>{{ event.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useGetData } from "../store/useStore";
import DateSwitch from "./DateSwitch.vue";
const { getData } = useGetData();
const tesjfxList = [
  { title: "车辆超载", url: "/img/clcz.png", value: 65 },
  { title: "雨雪冰灾", url: "/img/yxbz.png", value: 65 },
  { title: "异常震动", url: "/img/yczd.png", value: 65 },
  { title: "船舶撞击", url: "/img/cbzj.png", value: 65 },
  { title: "强台风", url: "/img/qtf.png", value: 65 },
  { title: "地震", url: "/img/dz.png", value: 65 },
  { title: "涡振", url: "/img/wz.png", value: 65 },
];
</script>
<style scoped lang="scss">
.flex-event {
  display: flex;
  width: 150px;
  flex-wrap: wrap;
}

.title-third {
  background-image: url("/img/title-3.png");
  background-size: cover;
  background-position: center;
  height: 41px;
  line-height: 25px;
  font-size: 22px;
  padding-left: 30px;
  font-family: YouSheBiaoTiHei;
  font-weight: 400;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
}

.JGJC {
  flex: 1;
  display: flex;
  flex-direction: column;

  .JGJC-body {
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    align-content: space-around;
    flex: 1;

    .JGJC-flex {
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-image: url("/img/icon-bg.png");
      background-size: 100% 100%;
      background-position: center;
      padding: 10px;

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
  display: flex;
  flex-direction: column;
  flex: 1;

  .ZXFX-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
  }

  .ZXFX-flex {
    display: flex;
    justify-content: space-around;
    padding: 10px;
    gap: 10px;
  }

  .ZXFX-modal {
    background-size: 100% 100%;
    background-image: url("/img/zlxn.png");
    background-position: center;
    padding-right: 1vw;
    font-size: 16px;
    min-width: 150px;
    min-height: 84px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    aspect-ratio: 2/1;
    cursor: pointer;
  }
}

.special-event-analysis {
  display: flex;
  flex-direction: column;
  flex: 1;

  .special-event-analysis-body {
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    flex: 1;
    align-content: space-around;
  }
}
</style>