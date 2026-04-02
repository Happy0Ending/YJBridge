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
  fullBridgeDeflectionCurve: "http://10.11.2.125/smartBridgeApi/wutos/smartbridge/visual/single/qqxx/acf3b2c1d3b8f5ec555ec90a5cbff123/relative",
  /* 传感器分类列表 */
  CGQList:"http://10.11.2.125/smartBridgeApi/wutos/smartbridge/section/getDeptSensor?bridgeId=acf3b2c1d3b8f5ec555ec90a5cbff123",
  /* 索力监测 */
  forceMonitoring: "http://10.11.2.125/smartBridgeApi/wutos/smartbridge/visual/single/sl/acf3b2c1d3b8f5ec555ec90a5cbff123/-1/500",
  /* 实时车辆监测 */
  vehicleMonitoring: "http://10.11.2.125/smartBridgeApi/wutos/smartbridge/visual/single/recent/cl/19929c62461e2e91c0a75d01fa0ced5a",
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
const { getData,CGQData } = useGetData();


export function fetchOnce(){
  
  axios.get(urls.CGQList).then((res)=>{
    if(res.data.data){
      const titles = [];
      const childrenTitle = [];
      res.data.data.children.forEach((child:any)=>{
        titles.push(child.title);
        const ccObj = child.children.map((cc)=>{
          return {
            title:cc.title,
            num:cc.num,
          }
        });
        childrenTitle.push(ccObj);
      })
    };
  })
}

export function fetchHttpData() {
  axios.get(urls.getBridgeBaseInfo).then((res1) => {
    if (res1.data) {
      getData.bridgeName = res1.data.name;
      getData.introduction = res1.data.introduction;
      getData.bridgeImage = urls.getBridgeImage + res1.data.bridgeImage;

    }
  }).catch((err) => {
    console.log("sL err");
  })

  axios.post(urls.getAlarmStatistics,
    {
      "bridgeId": urls.bridgeId, "dealState": 1, "dealResult": 1, "page": 1, "size": 1000000,
      "startTime": "2026-03-20 00:00:00", "endTime": "2026-03-26 10:11:14"
    }).
    then((res2) => {
      if (res2.data) {

        const alarm1list: any = [];
        const alarm2list: any = [];
        const alarm3list: any = [];

        res2.data.data.list.filter((alarm: any) => {
          const alarmInfo = {
            pointName: alarm.pointName,
            monitorContentName: alarm.monitorContentName,

          }
          if (alarm.alarmLevel == 1) {

          } else if (alarm.alarmLevel == 2) {

          } else if (alarm.alarm3Level == 3) {

          }
        })
        getData.alarm1List = alarm1list;
        getData.alarm2List = alarm2list;
        getData.alarm3List = alarm3list;
        getData.alarmLevel1 = alarm1list.length;
        getData.alarmLevel2 = alarm1list.length;
        getData.alarmLevel3 = alarm1list.length;
      }
    });
  axios.get(urls.trafficLoad).then((res) => {
    if (res.data?.code == 0) {
      getData.cs = res.data.data.cs;
      getData.sx = res.data.data.sx;
      getData.xx = res.data.data.xx;
      getData.cz = res.data.data.cz;
    }
  }).catch((err) => {
    console.log("sL err");
  });

  axios.get(urls.structuralMonitoring).then((res) => {
    if (res.data?.code == 0) {
      res.data.data.forEach((element: any) => {
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
  }).catch((err) => {
    console.log("sL err");
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

  }).catch((err) => {
    console.log("sL err");
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
        res.data.data.list.filter((element: any) => element.eventType == "01").length;
      getData.eventQTF =
        res.data.data.list.filter((element: any) => element.eventType == "02").length;
      getData.eventYCZD =
        res.data.data.list.filter((element: any) => element.eventType == "03").length;
      getData.eventDZ =
        res.data.data.list.filter((element: any) => element.eventType == "04").length;
      getData.eventCLCZ =
        res.data.data.list.filter((element: any) => element.eventType == "05").length;
      getData.eventCBZJ =
        res.data.data.list.filter((element: any) => element.eventType == "06").length;
      getData.eventYXBZ =
        res.data.data.list.filter((element: any) => element.eventType == "07").length;
    }
  }).catch((err) => {
    console.log("sL err");
  })

  //全桥挠度曲线
  axios.get(urls.fullBridgeDeflectionCurve).then((res) => {
    if (res.data) {
      getData.QQ_xaxis = res.data.data.xaxis;
      let xyNames: any = [];
      let xyValues: any = []
      res.data.data.xy.forEach((xy: string) => {
        const datas = xy.split("&&");
        xyNames.push(datas[0]);
        xyValues.push(datas[1]);
      });
      getData.QQ_XYName = xyNames;
      getData.QQ_XYValue = xyValues;
      let syNames: any = [];
      let syValues: any = [];
      res.data.data.sy.forEach((sy: string) => {
        const datas = sy.split("&&");
        syNames.push(datas[0]);
        syValues.push(datas[1]);
      });
      getData.QQ_SYName = syNames;
      getData.QQ_SYValue = syValues;
    }
  }).catch((err) => {
    console.log("sL err");
  });

  //索力监测
  axios.get(urls.forceMonitoring).then((res) => {
    /* 
    SLaxis:[],
    SLbjsx3:[],
    SLcds:[],
    SLbjsx2:[],
    SLcsz:[],
    slbjxx2:[],
    SLcqz:[],
    SLbjxx3:[]
    */
    if (res.data?.data) {
      getData.SLaxis = res.data.data.xaxis;
      getData.SLbjsx2 = res.data.data.bjsx2;
      getData.SLcds = res.data.data.cds;
      getData.SLbjsx3 = res.data.data.bjsx3;
      getData.SLbjxx2 = res.data.data.bjxx2;
      getData.SLcsz = res.data.data.csz;
      getData.SLcqz = res.data.data.cqz;
      getData.SLbjxx3 = res.data.data.bjxx3;
    }
  }).catch((err) => {
    console.log("sL err");
  })

  //车辆监测
  axios.get(urls.vehicleMonitoring).then((res) => {
    if (res.data?.data) {
      const carList = res.data.data.map((car: any) => {
        return {
          carImage: car.tbbh,
          carID: car.cp,
          speed: car.sd,
          Lane: car.sxxcd,
          clzs: car.clzs,
          weight: car.cz
        }
      });
      getData.carList = carList;
    }
  }).catch((err) => {
    console.log("sL err");
  })

}
