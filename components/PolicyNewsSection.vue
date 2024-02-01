<template>
  <div class="bg-blue-200 p-5">
    <!-- Header Section -->
    <div class="flex items-center mb-5">
      <div class="bg-blue-500 w-10 h-10"></div> <!-- Placeholder for the graphic element -->
      <h1 class="text-2xl font-bold ml-2">政策原文</h1>
      <p class="text-gray-500 text-sm ml-2">即时更新，政策早知道</p>
    </div>
    
    <!-- Columns Section -->
    <div class="flex divide-x divide-gray-300">
      <!-- First Column: 中部通知 -->
      <div class="w-1/3 px-5">
        <h2 class="text-lg font-bold text-gray-800 mb-4">中部通知</h2>
        <ul class="space-y-3 mb-4">
          <li v-for="item in centralNotices" :key="item.id" class="bg-white p-3 shadow rounded">
            <a href="#" class="text-blue-600 hover:text-blue-700">{{ item.title }}</a>
            <p class="text-sm text-gray-500">{{ item.date }}</p>
          </li>
        </ul>
        <a href="#" class="text-blue-600 hover:underline">更多 ></a>
      </div>

      <!-- Second Column: 公示公告 -->
      <div class="w-1/3 px-5">
        <h2 class="text-lg font-bold text-gray-800 mb-4">公示公告</h2>
        <!-- Content similar to the first column -->
      </div>

      <!-- Third Column: 政策法规 -->
      <div class="w-1/3 px-5">
        <h2 class="text-lg font-bold text-gray-800 mb-4">政策法规</h2>
        <!-- Content similar to the first column -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PolicyLayout',
  data() {
    return {
      centralNotices: [
        { id: 1, title: '通知标题一', date: '01-31' },
        { id: 2, title: '通知标题二', date: '01-30' },
        // ... other notices
      ],
      // Define similar data arrays for 公示公告 and 政策法规
    };
  },
};
</script>
