<template>
  <Header />
  <Carousel />
  <SearchSection />
  <PolicyStatisticalSection />
  <PolicyNewsSection />
  <PolicyServiceSection />
  <Footer />
</template>

<script setup>
import Header from '@/components/Header.vue';
import Carousel from '@/components/Carousel.vue';
import SearchSection from '@/components/SearchSection.vue';
import PolicyStatisticalSection from '@/components/PolicyStatisticalSection.vue';
import PolicyNewsSection from '@/components/PolicyNewsSection.vue';
import PolicyServiceSection from '@/components/PolicyServiceSection.vue';
import Footer from '@/components/Footer.vue';
</script>

<style>
/* 这里放置全局样式 */
</style>

<!--
<template>
  <div>index.vue works!</div>
</template>
-->