<template>
  <div>
    <!-- 在页面顶部插入 Header 组件 -->
    <Header />

    <!-- Nuxt 子页面将渲染在这里 -->
    <Nuxt />

    <!-- 在页面底部插入 Footer 组件 -->
    <Footer />
  </div>
</template>

<script>
// 导入你的 Header 和 Footer 组件
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
/* 在这里添加全局 CSS 样式 */
</style>
