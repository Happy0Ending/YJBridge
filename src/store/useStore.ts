import { reactive } from "vue";

const getData = reactive({
  /* 桥梁介绍 */
  bridgeName: "汉江特大桥(京港澳高速)",
  introduction: "主桥全长760m，为(60+95+450+95+60)m双塔双索面混合式组合梁斜拉桥。斜拉索为平行素面，扇形布置，梁上索距中跨12m，边跨7.5m拉索横桥向中心距22.25m。桥面全宽为23.75m1.5(检修道+斜拉索锚固区)+0.75m(防撞护栏)+1.25m(左侧路肩带)+4x3.75m(机动车道)+3.0m(右侧路肩带)+0.75(防撞护栏)+1.5m(检修道+斜拉素错固区)。",
  bridgeImage: "",
  /* 已处理告警统计 */
  alarmLevel1: 413,
  alarm1List: [],

  alarmLevel2: 126,
  alarm2List: [],

  alarmLevel3: 57,
  alarm3List: [],
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
  /* 全桥梁挠度曲线 */
  QQ_xaxis: [],
  QQ_XYValue: [],
  QQ_XYName: [],
  QQ_SYValue: [],
  QQ_SYName: [],
  /* 索力监测 */
  SLaxis: [],
  SLbjsx3: [],
  SLcds: [],
  SLbjsx2: [],
  SLcsz: [],
  SLbjxx2: [],
  SLcqz: [],
  SLbjxx3: [],
  /* 汽车监测 */
  carList: []
});

const CGQData = reactive({
  titles: [],
  CGQList: [],
})
CGQData.titles = ["作用", "响应"] as any;
CGQData.CGQList = [
  [
    { title: "结构温度", num: 12 },
    { title: "斜拉索温度", num: 20 },
  ],
  [
    { title: "主梁竖向位移", num: 23 },
    { title: "支座位移", num: 23 },
    { title: "梁端纵向位移", num: 23 },
    { title: "塔顶偏位", num: 23 },
    { title: "主梁应变", num: 23 },
    { title: "斜拉索索力", num: 23 },
    { title: "拉索（吊杆、索股）振动", num: 23 },
  ]
] as any;
export const useGetData = () => {

  return {
    CGQData,
    getData
  }
}