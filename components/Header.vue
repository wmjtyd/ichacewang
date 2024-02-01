<template>
  <header class="bg-blue-600 text-white">
    <nav class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <div class="text-lg font-bold">
        <nuxt-link to="/" class="hover:text-gray-300">CHACEWANG.COM</nuxt-link>
      </div>

      <!-- Navigation Links -->
      <div class="hidden md:flex md:items-center md:gap-4">
        <nuxt-link class="hover:bg-blue-700 px-3 py-2 rounded" to="/">首页</nuxt-link>
        <nuxt-link class="hover:bg-blue-700 px-3 py-2 rounded" to="/about">公司介绍</nuxt-link>
        <nuxt-link class="hover:bg-blue-700 px-3 py-2 rounded" to="/services">查政策</nuxt-link>
        <nuxt-link class="hover:bg-blue-700 px-3 py-2 rounded" to="/news">查企业</nuxt-link>
        <nuxt-link class="hover:bg-blue-700 px-3 py-2 rounded" to="/contact">政策匹配</nuxt-link>
        <nuxt-link class="hover:bg-blue-700 px-3 py-2 rounded" to="/contact">企业诊断</nuxt-link>
        <nuxt-link class="hover:bg-blue-700 px-3 py-2 rounded" to="/contact">政策工具</nuxt-link>
        <nuxt-link class="hover:bg-blue-700 px-3 py-2 rounded" to="/contact">商务合作</nuxt-link>
      </div>
      <!-- Right Aligned Items, separated with a border or different background -->
      <div class="hidden md:flex md:items-center md:gap-2 md:border-l md:border-white md:pl-4">
        <nuxt-link class="hover:bg-blue-800 px-3 py-2 rounded" to="/login">注册/登录</nuxt-link>
        <nuxt-link class="hover:bg-blue-800 px-3 py-2 rounded" to="/profile">会员中心</nuxt-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
// Script setup is empty since no additional JavaScript is needed for this example
</script>