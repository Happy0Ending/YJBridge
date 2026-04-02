import { reactive } from "vue";

const getData = reactive({
  /* 桥梁介绍 */
  bridgeName: "汉江特大桥(京港澳高速)",
  introduction: "主桥全长760m，为(60+95+450+95+60)m双塔双索面混合式组合梁斜拉桥。斜拉索为平行素面，扇形布置，梁上索距中跨12m，边跨7.5m拉索横桥向中心距22.25m。桥面全宽为23.75m1.5(检修道+斜拉索锚固区)+0.75m(防撞护栏)+1.25m(左侧路肩带)+4x3.75m(机动车道)+3.0m(右侧路肩带)+0.75(防撞护栏)+1.5m(检修道+斜拉素错固区)。",
  bridgeImage: "",
  /* 已处理告警统计 */
  alarmLevel1: 413,
  alarmLevel2: 126,
  alarmLevel3: 57,
  /* 交通载荷 */
  sx: 12,//上行车辆
  xx: 20,//下行车辆
  cz: 100,//超载车辆
  cs: 20,//超速车辆
  /* 结构监测 */
  ZLRD: -88.6, //主梁扰度
  ZLRDUnit: "mm",
  TDPL: "295.3",//塔顶偏拉
  TDPLUnit: "mm",
  LDWY: 126.23,//梁端位移
  LDWYUnit: "mm",//
  SL: "6049.6",
  SLUnit: "N",
  /* 01 涡振
    02 强台风
    03 异常震动
    04 地震
    05 车辆超载
    06 船舶撞击
    07 雨雪冰灾 */
    /* 特殊事件模块 */
  eventWZ: 96,
  eventQTF: 43,
  eventYCZD: 22,
  eventDZ: 87,
  eventCLCZ: 34,
  eventCBZJ: 54,
  eventYXBZ: 99,
});

export const useGetData = ()=>{

  return {
    getData
  }
}