<template>
  <div class="timeline-body">
    <div class="">
      
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.timeline-body {
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translate(-50%);
  width: 546px;
  height: 67px;
  background: linear-gradient(
    180deg,
    rgba(43, 129, 220, 0.1) 6%,
    rgba(43, 129, 220, 0.46) 27%,
    rgba(43, 129, 220, 0.5) 49%,
    #2b81dc 93%
  );
  border: 1px solid;
  border-image: linear-gradient(180deg, rgba(136, 223, 255, 0), #6ac6ff 100%) 1
    1;
  border-radius: 4px;
}
</style>