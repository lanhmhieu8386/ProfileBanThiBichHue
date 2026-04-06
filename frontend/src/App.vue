<script setup lang="ts">
import Header from "./component/Header.vue";
import HomeView from "./component/HomeView.vue";
import Footer from "./component/Footer.vue";
</script>

<template>
  <Header />

  <main class="main-content">
    <router-view />
  </main>

  <Footer />
</template>

<style>
/* reset để không bị hở lề trắng xấu xí */
body {
  margin: 0;
  padding: 0;
  background-color: #fff;
}

.main-content {
  /* đẩy nội dung xuống một khoảng bằng chiều cao header (khoảng 80px-100px)
     để HomeView không bị header đè lên "mặt tiền"
  */
  padding-top: 90px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* hiệu ứng cuộn trang mượt mà cho đúng chất đại gia */
html {
  scroll-behavior: smooth;
}
</style>
