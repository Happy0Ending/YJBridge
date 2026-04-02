import axios from 'axios'
import { useGetData } from '../store/useStore';
const urls = {
  getBridgeBaseInfo: "http://10.11.2.125/smartBridgeApi/wutos/bridge/findById?id=acf3b2c1d3b8f5ec555ec90a5cbff123",
  getBridgeImage: "http://10.11.2.125/smartBridgeApi/wutos/bridge/getImage/",
  getAlarmStatistics: "http://10.11.2.125/smartBridgeApi/wutos/smartbridge/monitorOverlimitAlarm/pages",
  bridgeId: "696ec98e068e4064f391492148060808",
  trafficLoad: "http://10.11.2.125/smartBridgeApi/wutos/smartbridge/visual/single/day/cll/19929c62461e2e91c0a75d01fa0ced5a",
  structuralMonitoring: "http://10.11.2.125/smartBridgeApi/wutos/smartbridge/visual/single/struct/moni/",
  structuralMonitoringDetails: "http://10.11.2.125/smartBridgeApi/wutos/smartbridge/sensor/historyRecord",
  specialEvent: "http://10.11.2.125/smartBridgeApi/wutos/smartbridge/specialEvent/queryPage",
  fullBridgeDeflectionCurve: ""
};
// const getData = {
//   /* 桥梁介绍 */
//   bridgeName: "",
//   introduction: "",
//   bridgeImage: "",
//   /* 已处理告警统计 */
//   alarmLevel1: 1,
//   alarmLevel2: 1,
//   alarmLevel3: 1,
//   /* 交通载荷 */
//   sx: 12,//上行车辆
//   xx: 20,//下行车辆
//   cz: 100,//超载车辆
//   cs: 20,//超速车辆
//   /* 结构监测 */
//   ZLRD: -88.6, //主梁扰度
//   ZLRDUnit: "mm",
//   TDPL: "295.3",//塔顶偏拉
//   TDPLUnit: "mm",
//   LDWY: 126.23,//梁端位移
//   LDWYUnit: "mm",//
//   SL: "6049.6",
//   SLUnit: "N",
//   /* 01 涡振
//     02 强台风
//     03 异常震动
//     04 地震
//     05 车辆超载
//     06 船舶撞击
//     07 雨雪冰灾 */
//     /* 特殊事件模块 */
//   eventWZ: 96,
//   eventQTF: 43,
//   eventYCZD: 22,
//   eventDZ: 87,
//   eventCLCZ: 34,
//   eventCBZJ: 54,
//   eventYXBZ: 99,
// }
const {getData} = useGetData();
axios.get(urls.getBridgeBaseInfo).then((res1) => {
  if (res1.data) {
    getData.bridgeName = res1.data.name;
    getData.introduction = res1.data.introduction;
    getData.bridgeImage = urls.getBridgeImage + res1.data.bridgeImage;

  }
})
axios.post(urls.getAlarmStatistics,
  {
    "bridgeId": urls.bridgeId, "dealState": 1, "dealResult": 1, "page": 1, "size": 1000000,
    "startTime": "2026-03-20 00:00:00", "endTime": "2026-03-26 10:11:14"
  }).
  then((res2) => {
    if (res2.data) {
      getData.alarmLevel1 = res2.data.data.list.filter((alarm:any) => alarm.alarmLevel == 1).length;
      getData.alarmLevel2 = res2.data.data.list.filter((alarm:any) => alarm.alarmLevel == 2).length;
      getData.alarmLevel3 = res2.data.data.list.filter((alarm:any) => alarm.alarmLevel == 3).length;
    }
  });
axios.get(urls.trafficLoad).then((res) => {
  if (res.data?.code == 0) {
    getData.cs = res.data.data.cs;
    getData.sx = res.data.data.sx;
    getData.xx = res.data.data.xx;
    getData.cz = res.data.data.cz;
  }
})
axios.get(urls.structuralMonitoring).then((res) => {
  if (res.data?.code == 0) {
    res.data.data.forEach((element:any) => {
      if (element.name == "主梁挠度") {
        getData.ZLRD = element.value;
        getData.ZLRDUnit = element.unit;
      } else if (element.name == "塔顶偏位") {
        getData.TDPL = element.value;
        getData.TDPLUnit = element.unit;
      } else if (element.name == "梁端位移") {
        getData.LDWY = element.value;
        getData.LDWYUnit = element.unit;
      } else if (element.name == "索力") {
        getData.SL = element.value;
        getData.SLUnit = element.unit;
      }
    });
  }
});

axios.post(urls.structuralMonitoringDetails, {
  "value": "-84.6",
  "theDate": "2026-03-26 09:03:48.847",
  "dataValueType": "", "dataGranularity": "real",
  "startDate": "2026-03-26 08:53:48.847",
  "endDate": "2026-03-26 09:13:48.847",
  "sensorId": "908f5234b4a27fb15aec72d2cb6d6186",
  "tbList": ["wysx", "sl"], "dataType": "relative"
}).then(() => {

});

axios.post(urls.specialEvent, {
  "bridgeId": urls.bridgeId,
  "startTime": "",
  "endTime": "",
  "dealState": 1,
  "page": 1,
  "size": 1000000
}).then((res) => {
  /*
    01 涡振
    02 强台风
    03 异常震动
    04 地震
    05 车辆超载
    06 船舶撞击
    07 雨雪冰灾
  */
  if (res.data?.code == 0) {
    getData.eventWZ =
      res.data.data.list.filter((element:any) => element.eventType == "01").length;
    getData.eventQTF =
      res.data.data.list.filter((element:any) => element.eventType == "02").length;
    getData.eventYCZD =
      res.data.data.list.filter((element:any) => element.eventType == "03").length;
    getData.eventDZ =
      res.data.data.list.filter((element:any) => element.eventType == "04").length;
    getData.eventCLCZ =
      res.data.data.list.filter((element:any) => element.eventType == "05").length;
    getData.eventCBZJ =
      res.data.data.list.filter((element:any) => element.eventType == "06").length;
    getData.eventYXBZ =
      res.data.data.list.filter((element:any) => element.eventType == "07").length;
  }
})
