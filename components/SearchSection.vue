<template>
  <div class="bg-blue-200"> <!-- or any other background color you need -->
    <!-- First row: Navigation Links centered -->
    <div class="flex justify-center py-2">
      <a href="#" class="px-3 text-gray-800 hover:text-blue-500">全部</a>
      <a href="#" class="px-3 text-gray-800 hover:text-blue-500">政策项目</a>
      <a href="#" class="px-3 text-gray-800 hover:text-blue-500">政策原文</a>
      <a href="#" class="px-3 text-gray-800 hover:text-blue-500">无感极速匹配</a>
      <a href="#" class="px-3 text-gray-800 hover:text-blue-500">资质荣誉</a>
      <a href="#" class="px-3 text-gray-800 hover:text-blue-500">已获资助</a>
      <a href="#" class="px-3 text-gray-800 hover:text-blue-500">创新载体</a>
    </div>
    <!-- Second row: Search bar with specific width -->
    <div class="flex justify-center space-x-2">
      <input
        class="w-1/2 border border-gray-300 rounded-full py-2 pl-6 pr-3"
        type="text"
        placeholder="输入关键词的公司"
      />
      <button class="bg-blue-500 text-white rounded-full py-2 px-6 hover:bg-blue-600">
        搜索
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomComponent',
  // ... component logic here
}
</script>

<style>
/* Custom styles if needed */
</style>
