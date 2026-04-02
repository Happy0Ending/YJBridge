<template>
  <Dialog ref="dialogRef" @close="emit('close')" :title="title">
    <div class="table-container">
      <table class="numeric-table">
        <thead>
          <tr>
            <th v-for="col in columns" :key="col" class="table-cell">{{ col }}</th>
          </tr>
        </thead>
        <tbody  v-if="data.length">
          <tr v-for="row in data" :key="row">
            <td v-for="col in cols" :key="col" class="table-cell">
              {{ (row - 1) * cols + col }}
            </td>
          </tr>
        </tbody>
      </table>
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
import { ref, computed, onMounted, watch } from "vue";
const emit = defineEmits(["close"]);
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
