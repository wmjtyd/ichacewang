<template>
  <section class="information-section">
    <!-- Analytics Overview -->
    <div class="analytics-overview">
      <h2>报表服务</h2>
      <p>智慧医疗，智慧城市</p>
      <div class="analytics-cards">
        <!-- Card for Analytics Type 1 -->
        <div class="analytics-card">
          <div class="icon">
            <!-- Icon Placeholder -->
            <img src="" alt="Analytics" />
          </div>
          <div class="content">
            <h3>智慧医疗</h3>
            <p>医疗健康，高效服务</p>
            <a href="/analytics/medical" class="view-detail">查看详情</a>
          </div>
        </div>

        <!-- Card for Analytics Type 2 -->
        <div class="analytics-card">
          <!-- Similar structure to the first card -->
        </div>

        <!-- Add more cards if necessary -->
      </div>
    </div>
  </section>
</template>

<script setup>
// Script setup area if needed for any reactive properties or methods
</script>

<style scoped>
.information-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #f0f4f8; /* Your preferred background color */
}

.analytics-overview h2 {
  color: #333; /* Title color */
}

.analytics-overview p {
  color: #555; /* Subtitle color */
}

.analytics-cards {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.analytics-card {
  background: #fff; /* Card background color */
  padding: 20px;
  border-radius: 10px; /* Adjust the border-radius as needed */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  width: 250px; /* Adjust width as needed */
  text-align: center; /* Center the text */
}

.analytics-card .icon img {
  width: 50px; /* Adjust icon size as needed */
}

.analytics-card .content h3 {
  margin-top: 10px;
  color: #333; /* Heading color */
}

.analytics-card .content p {
  color: #666; /* Text color */
}

.view-detail {
  display: inline-block;
  margin-top: 15px;
  color: #0066cc; /* Link color */
  text-decoration: none;
  font-weight: bold;
}
</style>
