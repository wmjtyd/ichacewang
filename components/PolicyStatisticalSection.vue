<template>
  <div ref="chartRef" style="width: 100%; height: 600px;"></div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';
import 'echarts/map/js/china';

const chartRef = ref(null);
let myChart = null;

// Declare the randomData function only once in your script
const randomData = () => Math.round(Math.random() * 500);

// Define the map data using the randomData function for value generation
const mapData = [
  { name: '北京', value: randomData() },
  // ... add other regions as needed
  // Ensure that you don't have another randomData function or import that might conflict
];

onMounted(() => {
  myChart = echarts.init(chartRef.value);

  // ... (rest of your ECharts option configuration)

  myChart.setOption(option);
});

onBeforeUnmount(() => {
  if (myChart) {
    myChart.dispose();
  }
});
</script>
