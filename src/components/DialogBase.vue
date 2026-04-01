<template>
  <div class="dialog-mask" v-if="visible">
    <div class="dialog">
      <div class="dialog-title">
        <div class="dialog-title-text">{{ title }}</div>
        <div class="dialog-title-close" @click="closeDialog" v-if="isDialog">x</div>
      </div>
      <div class="dialog-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from "vue";
const emit = defineEmits(["close"]);
const props = defineProps({
  title: {
    type: String,
    default: "提示",
  },
  visible: {
    type: Boolean,
    default: true,
  },
  isDialog: {
    type: Boolean,
    default: true,
  },
});
const visible = ref(props.visible);
const closeDialog = () => {
  visible.value = false;
  emit("close");
};
</script>
<style scoped>
.dialog-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;

  .dialog {
    width: 52vw;
    height: 36vw;
    background: url("/img/dialogBg.png") no-repeat center center;
    background-size: 100% 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0.8vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    .dialog-title {
      font-size: 32px;
      font-family: PMZD;
      color: #fff;
      height: 2.5vw;
      line-height: 2.5vw;
      position: relative;
      margin-bottom: 1vh;

      .dialog-title-close {
        width: 32px;
        height: 32px;
        position: absolute;
        top: 0;
        right: -2px;
        cursor: pointer;
      }
    }

    .dialog-content {
      flex: 1;
      overflow: auto;
    }
  }
}
</style>
