<template>
  <div class="carousel-container relative">
    <div class="carousel flex overflow-x-hidden">
      <div class="carousel-item" v-for="(image, index) in images" :key="index" :style="{ transform: `translateX(-${current * 100}%)` }">
        <img :src="image.src" :alt="image.alt" class="object-cover w-full h-96"/> <!-- 控制图片高度为 12rem (48 * 0.25rem) -->
      </div>
    </div>
    <button @click="prev" class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-3xl text-black">&lt;</button>
    <button @click="next" class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-3xl text-black">&gt;</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: 'https://picsum.photos/800/200?random=1', alt: 'Image 1' },
        { src: 'https://picsum.photos/800/200?random=2', alt: 'Image 2' },
        // ... other images
      ],
      current: 0,
      interval: null,
    };
  },
  mounted() {
    this.startRotation();
  },
  beforeDestroy() {
    this.stopRotation();
  },
  methods: {
    next() {
      this.current = (this.current + 1) % this.images.length;
    },
    prev() {
      this.current = (this.current + this.images.length - 1) % this.images.length;
    },
    startRotation() {
      this.interval = setInterval(this.next, 3000); // 每3秒切换图片
    },
    stopRotation() {
      clearInterval(this.interval);
    },
  },
};
</script>


<style>
.carousel-container {
  width: 100%;
  overflow: hidden;
}

.carousel {
  display: flex;
}

.carousel-item {
  width: 100%;
  flex-shrink: 0;
  transition: transform 0.5s ease;
}
</style>
