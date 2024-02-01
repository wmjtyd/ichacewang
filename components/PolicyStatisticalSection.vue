<template>
  <div ref="chartRef" style="width: 100%; height: 600px;"></div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts';
import 'echarts/map/js/china';

const chartRef = ref(null);
let myChart = null;

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
 

onMounted(() => {
  myChart = echarts.init(chartRef.value);

  const option = {
    visualMap: {
      type: 'piecewise',
      show: true,
      splitList: [
        { start: 500, end: 600 },
        { start: 400, end: 500 },
        // ... other ranges
      ],
      color: ['#5475f5', '#9feaa5', '#85daef', '#74e2ca', '#e6ac53', '#9fb5ea'],
    },
    series: [{
      type: 'map',
      map: 'china',
      roam: true,
      label: {
        show: true,
        color: 'red',
        emphasis: {
          show: false
        }
      },
      itemStyle: {
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
      data: mapData
    }]
  };

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
