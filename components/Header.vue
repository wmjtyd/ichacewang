<template>
  <header class="main-header">
    <nav class="navbar">
      <div class="container">
        <!-- Logo -->
        <div class="logo">
          <nuxt-link to="/">CHACEWANG.COM</nuxt-link>
        </div>

        <!-- Navigation Links -->
        <div class="navbar-menu">
          <nuxt-link class="navbar-item" to="/">首页</nuxt-link>
          <nuxt-link class="navbar-item" to="/about">公司介绍</nuxt-link>
          <!-- Add more links as needed -->
          <nuxt-link class="navbar-item" to="/services">金融服务</nuxt-link>
          <nuxt-link class="navbar-item" to="/news">新闻中心</nuxt-link>
          <nuxt-link class="navbar-item" to="/contact">联系我们</nuxt-link>
        </div>

        <!-- Right Aligned Items -->
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/login">注册/登录</nuxt-link>
          <nuxt-link class="navbar-item" to="/profile">会员中心</nuxt-link>
          <!-- Search or other icons can go here -->
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
// Import the NuxtLink component if needed, though it should be globally registered in Nuxt 3
</script>

<style scoped>
.main-header {
  background-color: #007BFF; /* Change this to match the exact blue color from the design */
  color: white;
  padding: 1rem 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.navbar-item {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

.navbar-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.navbar-end {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
