<template>
  <section class="main-section">
    <!-- Carousel-like navigation arrows -->
    <div class="navigation-arrows">
      <button class="arrow left-arrow">＜</button>
      <button class="arrow right-arrow">＞</button>
    </div>

    <!-- Isometric graphics and text -->
    <div class="isometric-graphics">
      <!-- Placeholder for your isometric graphics -->
      <div class="graphic" id="graphic-1"></div>
      <div class="graphic" id="graphic-2"></div>
      <div class="graphic" id="graphic-3"></div>
    </div>

    <!-- Main text and search bar -->
    <div class="text-and-search">
      <div class="main-text">
        <h1>3分钟掌握区块链全景信息</h1>
        <p>产业大数据API服务 · 统计 · 分析 · 趋势 · 投资</p>
      </div>
      <div class="search-bar">
        <input type="text" placeholder="搜索200次免费调用">
        <button class="search-button">搜索</button>
      </div>
    </div>
  </section>
</template>

<script setup>
// Script setup area (if you need any reactive data or methods)
</script>

<style scoped>
.main-section {
  position: relative;
  background: #eceff1; /* Replace with your desired background color */
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navigation-arrows {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
}

.arrow {
  background: none;
  border: none;
  color: #333; /* Replace with your desired arrow color */
  font-size: 2rem;
  cursor: pointer;
}

.isometric-graphics {
  /* Placeholder for the isometric graphics styles */
}

.graphic {
  width: 100px; /* Adjust size as needed */
  height: 100px; /* Adjust size as needed */
  margin: 0.5em;
  /* Add backgrounds or images for each graphic ID */
}

#graphic-1 { background: url('/path-to-your-graphic-1.png'); }
#graphic-2 { background: url('/path-to-your-graphic-2.png'); }
#graphic-3 { background: url('/path-to-your-graphic-3.png'); }

.text-and-search {
  text-align: center;
  flex-grow: 1;
}

.main-text h1 {
  color: #d32f2f; /* Replace with your desired color */
  font-size: 2em;
}

.main-text p {
  color: #666; /* Replace with your desired color */
  margin-top: 0.5em;
}

.search-bar {
  margin-top: 1em;
  display: flex;
  justify-content: center;
}

.search-bar input {
  padding: 0.5em;
  margin-right: 0.5em;
  border: 1px solid #ccc; /* Replace with your desired border color */
  outline: none;
}

.search-button {
  padding: 0.5em 1em;
  background-color: #007bff; /* Replace with your desired button color */
  color: white;
  border: none;
  cursor: pointer;
}
</style>
