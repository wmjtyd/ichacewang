<template>
  <div class="bg-blue-200 p-5">
    <!-- Header with title and description -->
    <div class="flex items-center mb-8">
      <div class="bg-blue-500 p-2 mr-3"> <!-- Placeholder for logo -->
        <!-- Insert logo here -->
      </div>
      <h1 class="text-3xl font-bold text-gray-800">政策原文</h1>
      <span class="ml-4 text-gray-600">即时更新，政策早知道</span>
    </div>
    
    <!-- Content Area -->
    <div class="flex justify-between space-x-4">
      <!-- Left content card -->
      <div class="w-1/2 bg-white shadow-lg rounded-lg p-5">
        <div class="flex items-center mb-4">
          <div class="icon bg-blue-500 rounded-full p-3 mr-2">
            <!-- Icon placeholder -->
          </div>
          <h2 class="text-xl font-semibold">智能报表</h2>
        </div>
        <p class="text-sm text-gray-500 mb-4">政策性接口，高效接入</p>
        <!-- Replace with actual chart or content -->
      </div>

      <!-- Right content card -->
      <div class="w-1/2 bg-white shadow-lg rounded-lg p-5">
        <div class="flex items-center mb-4">
          <div class="icon bg-blue-500 rounded-full p-3 mr-2">
            <!-- Icon placeholder -->
          </div>
          <h2 class="text-xl font-semibold">智能匹配</h2>
        </div>
        <p class="text-sm text-gray-500 mb-4">政策智能匹配透视</p>
        <!-- Replace with actual chart or content -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  // Your component's data and methods here
};
</script>
