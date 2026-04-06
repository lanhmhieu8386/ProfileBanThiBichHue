<script setup>
import avatar from "@/assets/avatar.jpg";
import school1 from "@/assets/school1.jpg";
import school2 from "@/assets/school2.jpg";
import school3 from "@/assets/school3.jpg";
import avatar2 from "@/assets/avatar2.jpg";

import anh1 from "@/assets/anh1.jpg";
import anh2 from "@/assets/anh2.jpg";
import anh3 from "@/assets/anh3.jpg";
import anh4 from "@/assets/anh4.jpg";
import anh5 from "@/assets/anh5.jpg";
import anh6 from "@/assets/anh6.jpg";
import anh7 from "@/assets/anh7.jpg";
import anh8 from "@/assets/anh8.jpg";
import anh9 from "@/assets/anh9.jpg";
import anh10 from "@/assets/anh10.jpg";
import anh11 from "@/assets/anh11.jpg";
import anh12 from "@/assets/anh12.jpg";
import anh13 from "@/assets/anh13.jpg";
import anh14 from "@/assets/anh14.jpg";
import anh15 from "@/assets/anh15.jpg";
import anh16 from "@/assets/anh16.jpg";
import anh17 from "@/assets/anh17.jpg";
import anh18 from "@/assets/anh18.jpg";
import anh19 from "@/assets/anh19.jpg";
import anh20 from "@/assets/anh20.jpg";
</script>

<template>
  <main class="about-page">
    <section class="about-hero">
      <div class="container-fluid px-lg-5">
        <h1 class="reveal-text">The Essence of</h1>
        <h2 class="reveal-name">Bích Huệ</h2>
        <div class="hero-line"></div>
      </div>
    </section>

    <section class="story-section py-10">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-5">
            <div class="sticky-image">
              <img :src="anh7" alt="Bích Huệ" class="story-img" />
              <div class="img-caption">Defined by Elegance, 2026</div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="story-content">
              <span class="sub-title">01. Philosophy</span>
              <h3 class="modern-title">Tầm nhìn & Định hướng</h3>
              <p class="story-text">
                Không chỉ dừng lại ở việc học tập, Bích Huệ đại diện cho một thế
                hệ mới: Tri thức, tự tin và đầy khí chất. Với tầm nhìn vươn ra
                quốc tế, hành trình tại Đài Loan là bước đệm để xây dựng một đế
                chế cá nhân dựa trên sự tinh tế và kỷ luật.
              </p>

              <div class="quote-box">
                "Sự sang trọng không phải là nổi bật, mà là được ghi nhớ."
              </div>

              <div class="stats-grid mt-5">
                <div class="stat-item">
                  <h4>5+</h4>
                  <span>Năm kinh nghiệm</span>
                </div>
                <div class="stat-item">
                  <h4>Global</h4>
                  <span>Tư duy kết nối</span>
                </div>
                <div class="stat-item">
                  <h4>Excellence</h4>
                  <span>Tiêu chuẩn sống</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="lifestyle-grid py-10 bg-dark-minimal">
      <div class="container-fluid px-lg-5">
        <div class="section-header text-center mb-5">
          <span class="sub-title-gold">02. Visual Journey</span>
          <h2 class="title-white">Khoảnh Khắc Tinh Hoa</h2>
        </div>

        <div class="masonry-gallery">
          <div class="m-item h-2">
            <img :src="anh11" alt="Life" />
          </div>
          <div class="m-item">
            <img :src="anh8" alt="Life" />
          </div>
          <div class="m-item h-3">
            <img :src="anh13" alt="Life" />
          </div>
          <div class="m-item">
            <img :src="anh18" alt="Life" />
          </div>
          <div class="m-item">
            <img :src="anh6" alt="Life" />
          </div>
        </div>
      </div>
    </section>

    <section class="achievements-section py-10">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <span class="sub-title">03. Credentials</span>
            <h2 class="modern-title mb-5">Thành tựu nổi bật</h2>

            <div class="achievement-row">
              <span class="year">2024 - 2026</span>
              <div class="ach-info">
                <h4>Scholarship Excellence</h4>
                <p>
                  Nhận học bổng toàn phần tại Đài Loan, dẫn đầu các dự án nghiên
                  cứu văn hóa và kinh tế.
                </p>
              </div>
            </div>

            <div class="achievement-row">
              <span class="year">2025</span>
              <div class="ach-info">
                <h4>Brand Ambassador</h4>
                <p>
                  Đại diện hình ảnh cho các chuỗi cung ứng thời trang cao cấp
                  tại khu vực Đông Á.
                </p>
              </div>
            </div>

            <div class="achievement-row">
              <span class="year">Current</span>
              <div class="ach-info">
                <h4>Digital Strategy Lead</h4>
                <p>
                  Định hướng và phát triển thương hiệu cá nhân với hơn 100k+ sức
                  ảnh hưởng trên các nền tảng số.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* FONT PHẢI SANG CHẢNH */
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@200;400;600&display=swap");

.about-page {
  background: #fff;
  color: #1a1a1a;
  font-family: "Inter", sans-serif;
}

/* HERO SECTION */
.about-hero {
  padding: 150px 0 50px;
  background: #f9f9f9;
}

.reveal-text {
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 8px;
  color: #999;
  font-weight: 200;
}

.reveal-name {
  font-family: "DM Serif Display", serif;
  font-size: clamp(4rem, 15vw, 12rem);
  line-height: 0.9;
  margin-top: 10px;
  color: #111;
}

.hero-line {
  width: 100px;
  height: 2px;
  background: #c5a059;
  margin-top: 40px;
}

/* STORY SECTION */
.sticky-image {
  position: sticky;
  top: 120px;
}

.story-img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 4px;
}

.img-caption {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-top: 15px;
  color: #c5a059;
}

.sub-title {
  color: #c5a059;
  font-size: 12px;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: 600;
}

.modern-title {
  font-family: "DM Serif Display", serif;
  font-size: 48px;
  margin: 20px 0 40px;
}

.story-text {
  font-size: 20px;
  line-height: 1.8;
  color: #444;
  font-weight: 300;
}

.quote-box {
  margin-top: 40px;
  padding: 40px;
  border-left: 1px solid #c5a059;
  font-style: italic;
  font-size: 24px;
  font-family: "DM Serif Display", serif;
  background: #fdfaf4;
}

/* STATS */
.stats-grid {
  display: flex;
  gap: 40px;
}

.stat-item h4 {
  font-family: "DM Serif Display", serif;
  font-size: 32px;
  margin-bottom: 5px;
}

.stat-item span {
  font-size: 12px;
  text-transform: uppercase;
  color: #999;
}

/* MASONRY GALLERY */
.bg-dark-minimal {
  background: #111;
  padding: 150px 0;
}
.title-white {
  color: #fff;
  font-family: "DM Serif Display", serif;
  font-size: 56px;
}
.sub-title-gold {
  color: #c5a059;
  letter-spacing: 5px;
  font-size: 13px;
}

.masonry-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 250px;
  gap: 20px;
  margin-top: 80px;
}

.m-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 100%; /* 🔥 chỉnh ở đây */
}

.m-item:hover img {
  filter: grayscale(0);
  transform: scale(1.02);
}

.h-2 {
  grid-row: span 2;
}
.h-3 {
  grid-row: span 3;
}

/* ACHIEVEMENTS */
.achievement-row {
  display: grid;
  grid-template-columns: 200px 1fr;
  padding: 40px 0;
  border-bottom: 1px solid #eee;
  transition: 0.4s;
}

.achievement-row:hover {
  background: #fafafa;
  padding-left: 20px;
}

.year {
  font-weight: 600;
  color: #c5a059;
}

.ach-info h4 {
  font-family: "DM Serif Display", serif;
  font-size: 24px;
}
.ach-info p {
  color: #666;
  margin-top: 10px;
}

.py-10 {
  padding: 120px 0;
}

@media (max-width: 991px) {
  .achievement-row {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .stats-grid {
    flex-direction: column;
  }
}
/* TỐI ƯU LUXURY CHO MOBILE - PAGE ABOUT */
@media (max-width: 991px) {
  /* Hero Section: Giảm size chữ để không chiếm hết màn hình */
  .about-hero {
    padding: 100px 0 40px;
    text-align: center;
  }

  .reveal-name {
    font-size: clamp(3rem, 12vw, 5rem);
    letter-spacing: -2px;
  }

  .hero-line {
    margin: 30px auto 0;
  }

  /* Story Section: Bỏ Sticky để không bị đè chữ */
  .sticky-image {
    position: relative; /* Hết dính */
    top: 0;
    margin-bottom: 40px;
  }

  .story-img {
    height: 450px; /* Thu ngắn lại cho vừa tầm mắt phone */
  }

  .modern-title {
    font-size: 32px;
    text-align: center;
    margin-bottom: 20px;
  }

  .story-text {
    font-size: 16px;
    text-align: justify;
  }

  .quote-box {
    padding: 30px 20px;
    font-size: 20px;
    margin: 30px 0;
  }

  /* Stats: Chuyển sang Grid 2 cột cho gọn */
  .stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    text-align: center;
  }

  /* Masonry Gallery: Lỗi nặng nhất ở đây - Sửa thành 1 cột */
  .masonry-gallery {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 40px;
  }

  .m-item {
    height: 300px !important; /* Đồng nhất chiều cao trên mobile cho sang */
    grid-row: auto !important; /* Xóa bỏ span */
  }

  .bg-dark-minimal {
    padding: 80px 0;
  }

  .title-white {
    font-size: 36px;
  }

  /* Achievements: Tràn lề */
  .achievement-row {
    grid-template-columns: 1fr;
    padding: 30px 0;
    text-align: left;
  }

  .year {
    font-size: 14px;
    margin-bottom: 5px;
    display: block;
  }

  .ach-info h4 {
    font-size: 20px;
  }
}
</style>
