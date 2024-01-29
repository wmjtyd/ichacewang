<template>
  <section class="information-section">
    <!-- Category 1 -->
    <div class="category">
      <div class="category-header">
        <h2>快讯通知</h2>
        <a href="/news" class="view-all">更多 ></a>
      </div>
      <ul class="news-list">
        <!-- News items -->
        <li v-for="item in newsCategory1" :key="item.id">
          <a :href="item.link">
            <span class="news-title">{{ item.title }}</span>
            <span class="news-date">{{ item.date }}</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- Category 2 -->
    <div class="category">
      <!-- Similar structure to Category 1 -->
    </div>

    <!-- Category 3 -->
    <div class="category">
      <!-- Similar structure to Category 1 -->
    </div>
  </section>
</template>

<script setup>
// Dummy data, replace with real data or fetch from an API
const newsCategory1 = [
  { id: 1, title: '某某快讯通知内容...', date: '01-29', link: '/link-to-article' },
  // More news items...
];
</script>

<style scoped>
.information-section {
  display: flex;
  justify-content: space-between;
  background: #f0f4f8; /* Choose a background color that matches your design */
  padding: 20px;
}

.category {
  flex: 1;
  margin: 0 10px;
  background: #ffffff; /* or any color that matches your design */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* subtle shadow for depth */
  border-radius: 4px; /* if you want rounded corners */
}

.category-header {
  padding: 10px;
  border-bottom: 1px solid #eaeaea; /* subtle line to separate the header */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.category-header h2 {
  margin: 0;
  font-size: 1.1em;
  color: #333; /* Title color */
}

.view-all {
  color: #0066cc; /* Link color */
  text-decoration: none;
}

.news-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.news-list li {
  padding: 10px;
  border-bottom: 1px solid #eaeaea; /* subtle line between items */
}

.news-list li:last-child {
  border-bottom: none; /* No border for the last item */
}

.news-title {
  display: block;
  color: #333; /* News title color */
}

.news-date {
  display: block;
  color: #666; /* Date color */
  font-size: 0.9em;
}
</style>
