<template>
  <div class="top" id="top-id">京港澳高速汉江特大桥健康监测</div>
  <div class="left" id="left-id">
    <div class="left-bridge-base">
      <div class="base-title">汉江特大桥(京港澳高速）</div>
      <div class="style-flex">
        <div class="">位置：</div>
        <div class="location-text">湖北省-武汉市蔡甸区</div>
      </div>
      <div class="bridge-image-content">
        <img width="309px" height="131px" src="/img/bridge-image.png" alt="" />
      </div>
      <div class="bridge-text-content">
        主桥全长760m，为(60+95+450+95+60)m双塔双索面混合式组合梁斜拉桥。斜拉索为平行素面，扇形布置，梁上索距中跨12m，边跨7.5m拉索横桥向中心距22.25m。桥面全宽为23.75m1.5(检修道+斜拉索锚固区)+0.75m(防撞护栏)+1.25m(左侧路肩带)+4x3.75m(机动车道)+3.0m(右侧路肩带)+0.75(防撞护栏)+1.5m(检修道+斜拉素错固区)。
      </div>
    </div>
    <div class="alarm-content">
      <div class="title-second">已处理告警统计</div>
      <div class="alarm-level-content">
        <div class="alarm-body">
          <div class="alarm-number">413</div>
          <image src="/img/alarm1.png"></image>
          <div class="alarm-tag">超限一级</div>
        </div>
        <div class="alarm-body">
          <div class="alarm-number">413</div>
          <image src="/img/alarm2.png"></image>
          <div class="alarm-tag">超限二级</div>
        </div>
        <div class="alarm-body">
          <div class="alarm-number">413</div>
          <image src="/img/alarm3.png"></image>
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
          <div class="JTZX-number">12</div>
        </div>

        <!-- 左下：第二行第一列 -->
        <div class="bottom-left">
          <div>
            <span class="JTZH-title">总超重车辆</span
            ><span class="JTZX-unit">(辆)</span>
          </div>
          <div class="JTZX-number">12</div>
        </div>

        <!-- 合并区域：占据第二列（跨两行） -->
        <div class="merged-area" style="position: relative">
          <image src="/img/car.png" class="car-animation"></image>

          <image
            src="/img/car-station.png"
            style="position: absolute; top:50%;left: 40%;transform: translate(-50%);"
            width="105"
            height="70"
          ></image>
        </div>

        <!-- 右上：第一行第三列 -->
        <div class="top-right">
          <div>
            <span class="JTZH-title">右幅：下行</span
            ><span class="JTZX-unit">(辆)</span>
          </div>
          <div class="JTZX-number">12</div>
        </div>

        <!-- 右下：第二行第三列 -->
        <div class="bottom-right">
          <div>
            <span class="JTZH-title">总超速车辆</span
            ><span class="JTZX-unit">(辆)</span>
          </div>
          <div class="JTZX-number">12</div>
        </div>
      </div>
    </div>
  </div>
  <div class="right" id="right-id">
    <div class="JGJC">
      <div class="title-second">交通载荷统计</div>
      <div class="JGJC-body">
        <div class="JGJC-flex">
          <div>
            <image src="/img/主梁饶度.png" width="66px" height="46px"></image>
          </div>
          <div>
            <div>
              <span class="JGJC-unit-number">-88.6</span
              ><span class="JGJC-unit">mm</span>
            </div>
            <div class="JGJC-title">主梁挠度</div>
          </div>
        </div>
        <div class="JGJC-flex">
          <div>
            <image src="/img/塔顶偏拉.png" width="66px" height="46px"></image>
          </div>
          <div>
            <div>
              <span class="JGJC-unit-number">-88.6</span
              ><span class="JGJC-unit">mm</span>
            </div>
            <div class="JGJC-title">塔顶偏拉</div>
          </div>
        </div>
        <div class="JGJC-flex">
          <div>
            <image src="/img/梁端位移.png" width="66px" height="46px"></image>
          </div>
          <div>
            <div>
              <span class="JGJC-unit-number">-88.6</span
              ><span class="JGJC-unit">mm</span>
            </div>
            <div class="JGJC-title">梁端位移</div>
          </div>
        </div>
        <div class="JGJC-flex">
          <div>
            <image src="/img/索力.png" width="66px" height="46px"></image>
          </div>
          <div>
            <div>
              <span class="JGJC-unit-number">-88.6</span
              ><span class="JGJC-unit">KN</span>
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
  <div class="bottom"></div>
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
</template>
<script setup lang="ts">
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
</script>
<style lang="scss">
@keyframes aniCar {
0% { margin-top: 0; opacity: 1}

100% { margin-top: 20px; opacity: 0}
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
  flex-wrap: wrap;
  gap: 20px;
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
      margin-left: -20px;
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
      height: 25vh;
      display: flex;
      gap: 10px;
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
  bottom: 0%;
  height: 4%;
  width: 100%;
  background: url("/img/3D/底部装饰.png") no-repeat center;
  background-size: contain;
  display: flex;
  align-items: center;
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
</style>