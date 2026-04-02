<template>
  <Dialog ref="dialogRef">
    <div class="table-container">
     
      <TPagination
        v-if="data.length"
        :total="data.length"
        :page-size="10"
        :current-page.sync="currentPage"
        @change="handleChange"
      />
      <div class="empty-container" v-if="!data.length">
        <img src="/img/empty.png" alt="暂无数据" class="empty-img" />
        <div class="empty-text">NO DATA</div>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import Dialog from "./DialogBase.vue";
import { ref, computed } from "vue";
const currentPage = ref(1);
const handleChange = (page) => {
  currentPage.value = page;
};
const props = defineProps({
  columns: {
    type: Array,
    default: () => [],
  },
  data: {
    type: Array,
    default: () => [],
  },
  title: {
    type: String,
    default: "提示",
  },
});
// 表格配置：10行 x 10列 = 100个单元格
const rows = 10;
const cols = 3;

// 生成行索引数组
const rowIndices = computed(() => {
  return Array.from({ length: rows }, (_, i) => i + 1);
});

// 生成列索引数组
const colIndices = computed(() => {
  return Array.from({ length: cols }, (_, i) => i + 1);
});
</script>

<style scoped>
.table-container {
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #6babe1;
}

.numeric-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  text-align: center;
  color: #fff;
}
thead {
  background-color: #3698f2;
  font-size: 24px;
  font-weight: bold;
}

.table-cell {
  padding: 12px 8px;
  transition: all 0.2s ease;
  cursor: default;
}

/* 交替行背景色 */
.numeric-table tr:nth-child(even) .table-cell {
  background-color: #fafafa11;
}

.empty-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0;

  .empty-img {
    height: 150px;
    width: auto;
  }

  .empty-text {
    margin-top: 30px;
    font-size: 36px;
    font-family: PMZD;
    color: #fff;
  }
}
</style>
