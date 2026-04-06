<script setup>
import avatar from "@/assets/avatar.jpg";
import school1 from "@/assets/school1.jpg";
import school2 from "@/assets/school2.jpg";
import school3 from "@/assets/school3.jpg";
import fptLogo from "@/assets/fpt-logo.png";
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
  <main class="bich-hue-main">
    <section id="home" class="hero-minimal">
      <div class="container-fluid px-lg-5">
        <div class="row align-items-center min-vh-100">
          <div class="col-lg-6 order-2 order-lg-1">
            <div class="hero-text-box">
              <span class="top-label">Exquisite Journey</span>
              <h1 class="display-title">Bích Huệ</h1>
              <p class="hero-intro">
                Khám phá hành trình tri thức và những trải nghiệm sống tinh tế
                tại Đài Loan. Nơi vẻ đẹp của sự học hỏi gặp gỡ phong cách sống
                hiện đại.
              </p>
              <div class="hero-cta">
                <a href="#about" class="btn-explore">
                  <span>Khám phá ngay</span>
                  <i class="bi bi-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2">
            <div class="hero-image-wrapper">
              <div class="image-overlay-card">
                <img :src="anh4" alt="Bích Huệ" class="main-hero-img" />
                <div class="experience-tag">Taiwan '26</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="about-editorial py-10">
      <div class="container">
        <div class="row align-items-center mb-10">
          <div class="col-md-5">
            <div class="editorial-img-box">
              <img :src="anh20" alt="About" class="editorial-img" />
            </div>
          </div>
          <div class="col-md-6 offset-md-1">
            <div class="editorial-content">
              <span class="section-tag">01. About Me</span>
              <h2 class="section-title">Hành trình <br />tại Đài Loan</h2>
              <p class="section-desc">
                Không chỉ là học tập, đây là hành trình định vị bản thân giữa
                những giá trị truyền thống và nhịp sống hối hả của Taipei.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="study" class="gallery-modern py-10">
      <div class="container-fluid px-lg-5">
        <div
          class="gallery-header d-flex justify-content-between align-items-end mb-5"
        >
          <div>
            <span class="section-tag">02. Life & Study</span>
            <h2 class="section-title">Không gian sống</h2>
          </div>
          <div class="fpt-branding"></div>
        </div>

        <div class="row g-4">
          <div class="col-md-4">
            <div class="gallery-card">
              <img :src="anh17" alt="School" />
              <div class="card-caption">Campus Life</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="gallery-card mt-md-5">
              <img :src="anh5" alt="School" />
              <div class="card-caption">Dissipated</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="gallery-card">
              <img :src="anh12" alt="School" />
              <div class="card-caption">Taipei Vibes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.bich-hue-main {
  background: #fff;
  color: #111;
  font-family: "Inter", sans-serif;
}

/* HERO */
.hero-minimal {
  background: linear-gradient(to right, #fcfcfc 50%, #f3f3f3 50%);
}

.top-label {
  font-size: 11px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #c5a059;
  display: block;
  margin-bottom: 20px;
}

.display-title {
  font-family: "DM Serif Display", serif;
  font-size: clamp(4rem, 12vw, 9rem);
  line-height: 0.85;
  margin-left: -5px;
  margin-bottom: 30px;
}

.hero-intro {
  font-size: 18px;
  color: #666;
  max-width: 450px;
  line-height: 1.8;
  font-weight: 300;
}

.btn-explore {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  color: #111;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 40px;
  padding: 10px 0;
  border-bottom: 1px solid #111;
  transition: 0.3s;
}

.btn-explore:hover {
  gap: 25px;
  color: #c5a059;
  border-color: #c5a059;
}

.hero-image-wrapper {
  padding: 50px;
}

.image-overlay-card {
  position: relative;
  box-shadow:
    50px 50px 0px -10px #fff,
    50px 50px 0px 0px #c5a059;
}

.main-hero-img {
  width: 100%;
  height: 650px;
  object-fit: cover;
  display: block;
}

.experience-tag {
  position: absolute;
  bottom: 30px;
  right: -20px;
  background: #000;
  color: #fff;
  padding: 10px 25px;
  font-size: 12px;
  letter-spacing: 2px;
  transform: rotate(-90deg);
  transform-origin: bottom right;
}

.section-tag {
  color: #c5a059;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 20px;
  display: block;
}

.section-title {
  font-family: "DM Serif Display", serif;
  font-size: 56px;
  margin-bottom: 30px;
}

.editorial-img-box {
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%);
}

.editorial-img {
  width: 100%;
  transition: 1s ease;
}

.editorial-img-box:hover .editorial-img {
  transform: scale(1.05);
}

.link-luxury {
  text-decoration: none;
  color: #111;
  font-weight: 600;
  font-size: 14px;
  transition: 0.3s;
}

.link-luxury:hover {
  color: #c5a059;
  padding-left: 10px;
}

.gallery-card {
  position: relative;
  overflow: hidden;
}

.gallery-card img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  filter: grayscale(100%);
  object-position: center 60%;
  transition: 0.6s;
}

.gallery-card:hover img {
  filter: grayscale(0%);
}

.card-caption {
  margin-top: 15px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #999;
}

.fpt-logo-minimal {
  filter: grayscale(1) contrast(0.5);
  opacity: 0.5;
}

.py-10 {
  padding: 120px 0;
}
.mb-10 {
  margin-bottom: 120px;
}

@media (max-width: 991px) {
  .hero-minimal {
    background: #fff;
  }
  .display-title {
    font-size: 5rem;
  }
  .main-hero-img {
    height: 450px;
  }
  .hero-image-wrapper {
    padding: 0;
    margin-top: 50px;
  }
  .image-overlay-card {
    box-shadow: 20px 20px 0px 0px #c5a059;
  }
}
/* SIÊU TINH CHỈNH MOBILE - LUXURY RESPONSIVE */
@media (max-width: 991px) {
  .hero-minimal {
    background: #fff; /* Bỏ gradient chia đôi vì mobile chỉ có 1 cột */
    padding-top: 100px; /* Tránh đè Header */
    padding-bottom: 50px;
  }

  /* Căn giữa chữ cho cân đối trên phone */
  .hero-text-box {
    text-align: center;
    padding: 0 15px;
    margin-bottom: 40px;
  }

  .display-title {
    font-size: clamp(3.5rem, 15vw, 5rem); /* Chữ to nhưng không tràn */
    margin-left: 0;
    line-height: 1;
  }

  .hero-intro {
    margin: 0 auto;
    font-size: 16px;
  }

  .btn-explore {
    justify-content: center;
  }

  /* Xử lý ảnh Hero - Quan trọng nhất */
  .hero-image-wrapper {
    padding: 20px; /* Giảm padding cho đỡ chiếm diện tích */
    margin-top: 0;
  }

  .image-overlay-card {
    /* Bỏ cái bóng trắng khổng lồ gây lỗi tràn lề, chỉ giữ bóng gold nhẹ */
    box-shadow: 15px 15px 0px 0px #c5a059;
    margin: 0 auto;
    max-width: 90%;
  }

  .main-hero-img {
    height: 400px; /* Thu ngắn ảnh cho đỡ cuộn mỏi tay */
  }

  .experience-tag {
    /* Xoay lại tag cho nằm ngang trên mobile cho dễ đọc */
    transform: rotate(0);
    position: absolute;
    bottom: -15px;
    right: 15px;
    font-size: 10px;
    padding: 5px 15px;
  }

  /* Các Section bên dưới */
  .py-10 {
    padding: 60px 0; /* Giảm khoảng cách cho gọn */
  }

  .section-title {
    font-size: 38px;
    text-align: center;
  }

  .section-desc {
    text-align: center;
  }

  .editorial-img-box {
    margin-bottom: 30px;
    clip-path: none; /* Bỏ vát góc trên mobile nhìn cho thoáng */
    border-radius: 10px;
  }

  /* Thư viện ảnh: Mobile nên hiện màu luôn cho đẹp */
  .gallery-card img {
    filter: grayscale(0%);
    height: 350px;
  }

  .gallery-card.mt-md-5 {
    margin-top: 0 !important; /* Bỏ lệch tầng trên mobile */
  }
}

/* Fix lỗi tràn lề ngang cho toàn bộ trang */
:deep(.container-fluid),
:deep(.row) {
  overflow: hidden;
  max-width: 100vw;
  margin: 0;
}
</style>
