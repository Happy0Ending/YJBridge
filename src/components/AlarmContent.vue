<template>
  <div class="left-bridge-base">
    <div class="base-title">{{ getData.bridgeName }}</div>
    <div class="bridge-base-content">
      <div class="location">
        <div class="">位置：</div>
        <div class="location-text">湖北省-武汉市蔡甸区</div>
      </div>
      <div class="bridge-image-content">
        <img src="/img/bridge-image.png" alt="" />
      </div>
      <div class="bridge-text-content">
        {{ getData.introduction }}
      </div>
    </div>
  </div>
  <div class="alarm-content">
    <div class="title-second">
      已处理告警统计
      <DateSwitch></DateSwitch>
    </div>
    <div class="alarm-level-content">
      <div class="alarm-body">
        <div class="alarm-number" @click="handleAlarmLevel('超限一级')">{{ getData.alarmLevel1 }}</div>
        <img src="/img/alarm1.png" alt="">
        <div class="alarm-tag">超限一级</div>
      </div>
      <div class="alarm-body">
        <div class="alarm-number" @click="handleAlarmLevel('超限二级')">{{ getData.alarmLevel2 }}</div>
        <img src="/img/alarm2.png" alt="">
        <div class="alarm-tag">超限二级</div>
      </div>
      <div class="alarm-body">
        <div class="alarm-number" @click="handleAlarmLevel('超限三级')">{{ getData.alarmLevel3 }}</div>
        <img src="/img/alarm3.png" alt="">
        <div class="alarm-tag">超限三级</div>
      </div>
    </div>
  </div>
  <div class="JTZH-TJ">
    <div class="title-second">交通载荷统计</div>
    <div class="grid-content">
      <div class="top-left">
        <div>
          <span class="JTZH-title">左幅：上行</span><span class="JTZX-unit">(辆)</span>
        </div>
        <div class="JTZX-number">{{ getData.sx }}</div>
      </div>

      <!-- 左下：第二行第一列 -->
      <div class="bottom-left">
        <div>
          <span class="JTZH-title">总超重车辆</span><span class="JTZX-unit">(辆)</span>
        </div>
        <div class="JTZX-number">{{ getData.cz }}</div>
      </div>

      <!-- 合并区域：占据第二列（跨两行） -->
      <div class="merged-area" style="position: relative">
        <div class="image-style car-animation" :style="{
          width: '110px',
          height: '60px',
          backgroundImage: `url('/img/car.png')`,
        }"></div>

        <div class="image-style" :style="{
          position: 'absolute',
          top: '50%',
          left: '40%',
          transform: 'translate(-50%)',
          width: '105px',
          height: '80px',
          backgroundImage: `url('/img/car-station.png')`,
        }"></div>
      </div>

      <!-- 右上：第一行第三列 -->
      <div class="top-right">
        <div>
          <span class="JTZH-title">右幅：下行</span><span class="JTZX-unit">(辆)</span>
        </div>
        <div class="JTZX-number">{{ getData.xx }}</div>
      </div>

      <!-- 右下：第二行第三列 -->
      <div class="bottom-right">
        <div>
          <span class="JTZH-title">总超速车辆</span><span class="JTZX-unit">(辆)</span>
        </div>
        <div class="JTZX-number">{{ getData.cs }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGetData } from "../store/useStore";
import DateSwitch from "./DateSwitch.vue";
const emit = defineEmits(["handleAlarmLevel"]);
const handleAlarmLevel = (level: string) => {
  emit("handleAlarmLevel", level);
};
const { getData } = useGetData();
</script>

<style scoped lang="scss">
  .left-bridge-base {
    display: flex;
    flex-direction: column;
    flex: 1;

    .base-title {
      line-height: 54px;
      font-size: 20px;
      padding-left: 80px;
      color: #ffffff;
      background-image: url("/img/bridge-bg.png");
      background-size: cover;
      background-position: center;
    }

    .bridge-base-content {
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      flex: 1;

      .location {
        display: flex;
        font-size: 16px;

        .location-text {
          display: flex;
          font-family: Alibaba PuHuiTi 2, Alibaba PuHuiTi 2-400;
          font-weight: 400;
          text-align: left;
          color: #60ebff;
        }
      }

      .bridge-image-content {
        height: 133px;
        padding: 10px;
        background: linear-gradient(246deg,
            #42bdff 0%,
            rgba(96, 184, 238, 0.5) 18%,
            rgba(125, 178, 221, 0) 51%,
            rgba(95, 184, 238, 0.51) 82%,
            #42bdff 100%);
        border-radius: 4px;
        flex: 1;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .bridge-text-content {
        font-size: 14px;
        line-height: 24px;
      }
    }
  }

  .alarm-content {
    display: flex;
    flex-direction: column;
    flex: 1;

    .title-second {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .alarm-level-content {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      flex: 1;

      .alarm-body {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        .alarm-number {
          font-family: PMZD;
          color: transparent;
          background-image: linear-gradient(180deg, #ffffff, #0ea8c0);
          font-size: 36px;
          -webkit-background-clip: text;
          background-clip: text;
          cursor: pointer;
        }

       

        .alarm-tag {
          padding-top: 5px;
          font-size: 14px;
        }
      }
    }
  }

  .JTZH-TJ {
    display: flex;
    flex-direction: column;
    flex: 1;

    .car-animation {
      margin-top: 20px;
      animation: aniCar 1s ease-in-out infinite alternate;
    }

    .grid-content {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr 1.2fr 1fr;
      /* 三列，中间列稍宽可突出合并区域 */
      /* 两行，高度由内容撑开 */
      grid-template-areas:
        "top-left    merged-area    top-right"
        "bottom-left merged-area    bottom-right";
      align-content: space-around;
      padding: 10px;

      .top-left {
        grid-area: top-left;
      }

      /* 左下区域 */
      .bottom-left {
        grid-area: bottom-left;
      }

      /* 合并区域（第二列跨两行） */
      .merged-area {
        grid-area: merged-area;
      }

      /* 右上区域 */
      .top-right {
        grid-area: top-right;
      }

      /* 右下区域 */
      .bottom-right {
        grid-area: bottom-right;
      }
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
</style>