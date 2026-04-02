<template>
  <div class="car-list-container">
    <div class="car-list-title">
      <div class="car-list-title-text">实时车辆监测</div>
    </div>
    <div class="dialog-content">
      <div class="table-container">
        <table class="numeric-table">
          <thead>
            <tr>
              <th v-for="col in columns" :key="col" class="table-cell">{{ col }}</th>
            </tr>
          </thead>
          <tbody v-if="carList.length">
            <tr v-for="row in carList" :key="row">
              <td v-for="(col, key) in row" :key="col" class="table-cell">
                <img :src="col" alt="" v-if="key === 'carImage'" class="car-image">
                <div v-else>{{ col }}</div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- <TPagination v-if="carList.length" :total="data.length" :page-size="10" :current-page.sync="currentPage"
          @change="handleChange" /> -->
        <div class="empty-container" v-if="!carList.length">
          <img src="/img/empty.png" alt="暂无数据" class="empty-img" />
          <div class="empty-text">NO DATA</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Dialog from "./DialogBase.vue";
import { ref, computed } from "vue";
const currentPage = ref(1);
import { useGetData } from "../store/useStore";
const { getData } = useGetData();
const handleChange = (page) => {
  currentPage.value = page;
};
const columns = ref(["照片", "车牌", "车道", "称重", "轴数", "速度"]);
const carList = computed(() =>{
  console.log(getData.carList);
 return getData.carList});
</script>

<style scoped>
.car-list-container {
  width: 44vw;
  height: 31.25vw;
  background: url("/img/dialogBg.png") no-repeat center center;
  background-size: 100% 100%;
  padding: 0.5vw;
}

.car-list-title {
  font-size: 32px;
  font-family: PMZD;
  color: #fff;
  height: 2.5vw;
  line-height: 2.5vw;
  position: relative;
  margin-bottom: 1vh;
}

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

.car-image {
  width: 100px;
  height: 85px;
}
</style>
