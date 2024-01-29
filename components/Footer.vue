<template>
  <footer class="site-footer">
    <div class="contact-info">
      <div>
        <h3>服务热线：</h3>
        <p>400-004-5577</p>
      </div>
      <div>
        <h3>企划执务商务合作：</h3>
        <p>15013822990</p>
        <p>周一至周日，8:00am~18:00pm</p>
      </div>
      <div>
        <h3>关于我们</h3>
        <p>公司地址：[公司地址]</p>
        <p>邮箱：service@yourcompany.com</p>
      </div>
    </div>
    <div class="legal-info">
      <p>版权所有 © 2018-2024 公司名 版权所有 | 京ICP备18024597号</p>
    </div>
  </footer>
</template>

<script setup>
// Footer script setup (if needed)
</script>

<style scoped>
.site-footer {
  background-color: #005792; /* Your desired footer background color */
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.contact-info {
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-bottom: 1px solid #0277bd; /* A lighter blue border */
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.contact-info > div {
  margin: 0 20px;
}

.contact-info h3 {
  margin: 0;
  font-size: 1.2rem;
}

.contact-info p {
  margin: 5px 0;
}

.legal-info {
  font-size: 0.75rem;
  text-align: center;
}
</style>
