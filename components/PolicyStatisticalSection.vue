<template>
  <div ref="chartRef" style="width: 100%; height: 600px;"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';

const chartRef = ref(null);
let myChart: echarts.ECharts | null;

// Declare the function once here
function randomData() {
  return Math.round(Math.random() * 500);
}

const mapData = [
    {name: '北京',value: randomData() },{name: '天津',value: randomData() },
    {name: '上海',value: randomData() },{name: '重庆',value: randomData() },
    {name: '河北',value: randomData() },{name: '河南',value: randomData() },
    {name: '云南',value: randomData() },{name: '辽宁',value: randomData() },
    {name: '黑龙江',value: randomData() },{name: '湖南',value: randomData() },
    {name: '安徽',value: randomData() },{name: '山东',value: randomData() },
    {name: '新疆',value: randomData() },{name: '江苏',value: randomData() },
    {name: '浙江',value: randomData() },{name: '江西',value: randomData() },
    {name: '湖北',value: randomData() },{name: '广西',value: randomData() },
    {name: '甘肃',value: randomData() },{name: '山西',value: randomData() },
    {name: '内蒙古',value: randomData() },{name: '陕西',value: randomData() },
    {name: '吉林',value: randomData() },{name: '福建',value: randomData() },
    {name: '贵州',value: randomData() },{name: '广东',value: randomData() },
    {name: '青海',value: randomData() },{name: '西藏',value: randomData() },
    {name: '四川',value: randomData() },{name: '宁夏',value: randomData() },
    {name: '海南',value: randomData() },{name: '台湾',value: randomData() },
    {name: '香港',value: randomData() },{name: '澳门',value: randomData() }
];


onMounted(async () => {
  //@ts-ignore (untyped data, but it's ok)
  await import("echarts-countries-js/echarts-countries-js/china");

  myChart = echarts.init(chartRef.value);

  const option = {
    series: [{
      type: 'map',
      map: 'china',
      roam: true,
      label: {
        show: true,
        color: '#133086',
      },
      itemStyle: {
        areaColor: '#c4dafb',
        borderColor: '#fff',
        borderWidth: 1,
      },
      zoom: 1.2,
      emphasis: {
        label: {
          color: '#fff',
          fontSize: 12
        },
        itemStyle: {
          areaColor: '#1bc1ad',
          borderColor: 'blue'
        }
      },
      // data: mapData
    }]
  } satisfies echarts.EChartsOption;

  myChart.setOption(option);
});

onBeforeUnmount(() => {
  if (myChart) {
    myChart.dispose();
  }
});
</script>

<style scoped>
/* You can add page-specific styles here */
</style>
