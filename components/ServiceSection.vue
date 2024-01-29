<template>
  <section class="service-section">
    <!-- Map and Legend -->
    <div class="map-container">
      <!-- Placeholder for the map -->
      <div class="map" id="china-map">
        <!-- The map would be rendered here by a JavaScript library -->
      </div>
      <!-- Legend for the map -->
      <div class="map-legend">
        <ul>
          <!-- Placeholder items for the legend -->
          <li><span class="legend-color color1"></span> > 20000</li>
          <li><span class="legend-color color2"></span> 10000 - 20000</li>
          <li><span class="legend-color color3"></span> 5000 - 10000</li>
          <!-- More legend items... -->
        </ul>
      </div>
    </div>

    <!-- Statistics and Information -->
    <div class="statistics">
      <h2>全国区块链数据</h2>
      <ul class="stats-list">
        <li>累计交易额 <strong>1,078,182 万元</strong></li>
        <li>区块链平台数量 <strong>9,794 个</strong></li>
        <!-- More stats... -->
      </ul>
      <div class="news-snippets">
        <!-- Placeholder elements for news or updates -->
        <p>[深圳] 最高600万! 新能源汽车补助...</p>
        <p>[成都] 781家企业享受科技企业税务...</p>
        <!-- More news... -->
      </div>
    </div>
  </section>
</template>

<script setup>
// Include component logic, data properties, and imports for any charting libraries here
</script>

<style scoped>
.service-section {
  display: flex;
  justify-content: space-between;
}

.map-container {
  width: 60%;
}

.map {
  /* The map would be styled by the charting library, but you can add dimensions */
  width: 100%;
  height: 400px;
}

.map-legend {
  /* Style as needed */
}

.map-legend ul {
  list-style: none;
  padding: 0;
}

.map-legend .legend-color {
  display: inline-block;
  width: 20px;
  height: 20px;
}

.color1 { background-color: #003366; }
.color2 { background-color: #336699; }
.color3 { background-color: #6699cc; }
/* Additional color classes... */

.statistics {
  width: 35%;
  padding-left: 20px;
}

.stats-list {
  list-style: none;
  padding: 0;
}

.news-snippets {
  margin-top: 20px;
}
</style>
