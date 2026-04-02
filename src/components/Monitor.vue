<template>
  <div class="monitor-container" :class="{ dialog: isDialog }">
    <div class="monitor-title">
      <template v-if="!isDialog">
        <div class="monitor-title-content">
          <div>
            <img src="/img/monitor.png" alt="" @click="showDialog"/>
            <span class="linear-text">监控视频</span>
          </div>
        </div>
        <!-- <div class="monitor-subtitle">dasfdsafasdfasdfadsf</div> -->
        <t-select v-model="currentMonitor" placeholder="请选择监控" @change="handleMonitorChange">
          <t-option v-for="item in monitorList" :key="item.id" :value="item.id" :label="item.name">
          </t-option>
        </t-select>
      </template>
      <template v-else>
        <div class="monitor-title-content">{{ time  }}</div>
        <div class="monitor-subtitle">{{ title }}</div>
        <span @click="closeDialog" class="dialog-close">x</span>
      </template>
    </div>
    <div class="monitor-video">
      <video ref="videoRef" :src="currentFlvUrl" autoplay muted playsinline></video>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";
import flvjs from "flv.js";
import { useMonitor } from "../store/useMonitor";
const { getMonitorFlvUrl, getMonitor, monitorList } = useMonitor();
const currentMonitor = ref("");
const currentFlvUrl = ref<string>("");
const props = defineProps({
  isDialog: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: "",
  },
  flvUrl: {
    type: String,
    default: "",
  },
  title:{
    type: String,
    default: "",
  }
});
const emit = defineEmits(["showDialog", "closeDialog"]);
const showDialog = () => {
  emit("showDialog", currentFlvUrl.value);
};
const closeDialog = () => {
  emit("closeDialog");
};
const videoRef = ref<HTMLVideoElement | null>(null);
let flvPlayer: ReturnType<typeof flvjs.createPlayer> | null = null;

function destroyFlv() {
  if (!flvPlayer) return;
  flvPlayer.pause();
  flvPlayer.unload();
  flvPlayer.detachMediaElement();
  flvPlayer.destroy();
  flvPlayer = null;
}

function setupFlv(url: string) {
  const el = videoRef.value;
  if (!el || !url.trim()) return;
  destroyFlv();
  if (!flvjs.isSupported()) {
    console.warn("flv.js: 当前环境不支持 MSE");
    return;
  }
  flvPlayer = flvjs.createPlayer(
    {
      type: "flv",
      url: url.trim(),
      isLive: true,
      cors: true,
    },
    {
      enableWorker: false,
      lazyLoad: false,
    }
  );
  flvPlayer.attachMediaElement(el);
  flvPlayer.load();
  void flvPlayer.play().catch(() => { });
}

const handleMonitorChange = async (value: string) => {
  currentFlvUrl.value = await getMonitorFlvUrl(value) || '';
};
const formatNow = (d: Date = new Date()) => {
  const weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"][d.getDay()];
  const pad2 = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}年${pad2(d.getMonth() + 1)}月${pad2(d.getDate())}日 ${weekday} ${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`;
};
let timerInt:any = undefined;
const time = ref("");
onMounted(async () => {
  if(props.isDialog) {
    currentFlvUrl.value = props.flvUrl;
    timerInt = setInterval(() => {
      time.value = formatNow(new Date());
    }, 1000);
    return;
  }
  if (props.id) {
    await getMonitor(props.id);
    currentMonitor.value = monitorList[0].id || '';
    currentFlvUrl.value = await getMonitorFlvUrl(currentMonitor.value) || '';
  };
});


watch(
  () => currentFlvUrl.value,
  (u) => {
    if (u) setupFlv(u);
    else {
      destroyFlv();
      const el = videoRef.value;
      if (el) {
        void el.play().catch(() => { });
      }
    }
  }
);

onUnmounted(() => {
  clearInterval(timerInt);
  destroyFlv();
});
</script>
<style scoped lang="scss">
:deep(.t-select__wrap) {
  width: 50%;
  .t-input {
    background: url("/img/subtitle.png") no-repeat;
    background-size: 100% 100%;
    border: none;
    width: 100%;
    &:focus {
      box-shadow: none;
    }
    
    .t-input__inner{
      color: #fff;
      &::placeholder{
        color: #ffffff99;
      }
    }
    .t-input__suffix svg{
      color: #fff;
    }
  }
}
.monitor-container {
  z-index: 100;
  padding: 12px;
  background: url("/img/monitorBg.png") no-repeat;
  
  border-radius: 12px;
}

.monitor-container.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 44vw;
  background: url("/img/monitorDialogBg.png");
}

.monitor-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  gap: 12px;
  font-weight: bold;
  color: #fff;
}

.dialog-close{
  cursor: pointer;
  font-size: 28px;
  margin-right: 20px;
  margin-left: 20px;
  font-weight: bold;
}

.monitor-container.dialog .monitor-title {
  margin-top: 1vh;
  font-weight: normal;
  font-size: 20px;
}

.monitor-container.dialog .monitor-subtitle {
  font-size: 20px;
  background: none;
  flex: 0;
}

.monitor-title-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.monitor-title img {
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-right: 20px;
}

.monitor-subtitle {
  flex: 1;
  font-size: 14px;

  padding: 0 8px;
  background: url("/img/subtitle.png") no-repeat;
  background-size: 100% 100%;
  line-height: 1.8;
}

.monitor-video {
  position: relative;
  margin-top: 12px;
  background: url("/img/videoBg.png") no-repeat;
  background-size: 100% 100%;
  padding-top: 56.25%;
  height: 0;
}

.monitor-video video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;

}
</style>
