import { reactive } from "vue";
import axios from "axios";
export const useMonitor = () => {
  const monitorList = reactive<{ name: string; id: string }[]>([
    {
      name: "122",
      id: "122"
    },
    {
      name: "222",
      id: "222"
    },
    {
      name: "222",
      id: "222"
    }
  ]);

  const getMonitor = async (id: string) => {
    const res: any = await axios.get(
      `http://10.11.2.125/wscApi/api/Camera/GetAllCameraTree?areaId=${id}`
    );
    if (res?.code == 200) {
      const cameras = res?.data?.cameras;
      if (cameras && Array.isArray(cameras)) {
        cameras.forEach((item: any) => {
          const bridges = item.children;
          if (bridges && Array.isArray(bridges)) {
            bridges.forEach((child: any) => {
              const monitors = child.children;
              if (monitors && Array.isArray(monitors)) {
                monitors.forEach((monitor: any) => {
                  monitorList.push({
                    id: monitor.id,
                    name: monitor.name,
                  });
                });
              }
            });
          }
        });
      }
    }
  };

  const getMonitorFlvUrl = async (id: string) => {
    const res: any = await axios.get(
      `http://10.11.2.125/wscApi/api/Camera/GetByCameraId?id=${id}`
    );
    if (res?.code == 200) {
      const addressProperties = res?.data.addressProperties;
      const regex = /"Channel":"([a-f0-9]{32})"/;
      const match = addressProperties.match(regex);

      if (match) {
        return fetchMonitorFlvUrl(match[1])
      }
    }
  };

  const fetchMonitorFlvUrl = async (id: string):Promise<string> => {
    const res: any = await axios.post(
      "http://10.11.2.125/smartBridgeApi/wutos/smartbridge/videoAttribute/getFlvByHkCameraChannels",{
        data:[id]
      }
    );
    if (res?.code == 200) {
      return res?.data?.[0]?.url;
    }
    return ''
  };

  return {
    monitorList,
    getMonitorFlvUrl,
    getMonitor
  };
};
export default useMonitor;
