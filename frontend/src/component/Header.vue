<template>
  <nav :class="['luxury-header', { 'is-scrolled': scrolled }]">
    <div class="container-fluid px-lg-5">
      <div class="nav-wrapper">
        <router-link class="brand luxury-brand" to="/">
          <div class="brand-wrapper">
            <span class="brand-text">Bích Huệ</span>
            <div class="brand-line"></div>
            <span class="brand-sub">Est. 2026</span>
          </div>
        </router-link>

        <button class="menu-toggle" @click="isOpen = !isOpen">
          <div class="hamburger" :class="{ 'is-active': isOpen }">
            <span></span>
            <span></span>
          </div>
        </button>

        <div class="nav-links" :class="{ 'is-open': isOpen }">
          <div class="links-inner">
            <router-link to="/" class="link-item" @click="close"
              >Trang chủ</router-link
            >
            <router-link to="/about" class="link-item" @click="close"
              >Về tôi</router-link
            >
            <router-link to="/study" class="link-item" @click="close"
              >Học tập</router-link
            >
            <router-link to="/life" class="link-item" @click="close"
              >Đời sống</router-link
            >

            <div class="divider"></div>
            <a
              href="#contact-footer"
              class="luxury-btn glass-btn"
              @click="scrollToFooter"
            >
              <span class="btn-text">Liên hệ ngay</span>
              <div class="btn-icon">
                <i class="bi bi-arrow-down-right"></i>
              </div>
              <div class="btn-shimmer"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);
const scrolled = ref(false);

const close = () => (isOpen.value = false);
// Hàm xử lý cuộn xuống Footer
const scrollToFooter = (e) => {
  e.preventDefault(); // Chặn chuyển trang của router-link
  close(); // Đóng menu mobile nếu đang mở

  const footer = document.getElementById("contact-footer");
  if (footer) {
    footer.scrollIntoView({
      behavior: "smooth", // Cuộn mượt mà
      block: "start",
    });
  }
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 20;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
/* layout tổng thể */
.luxury-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 30px 0;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

/* hiệu ứng khi cuộn chuột: hẹp lại và hiện nền gương */
.luxury-header.is-scrolled {
  padding: 15px 0;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(30px) saturate(180%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* brand nghệ thuật 2026 */
.brand {
  text-decoration: none;
  display: block;
}

.brand-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}

.brand-text {
  font-family: "DM Serif Display", serif;
  font-size: 36px; /* Tăng nhẹ kích thước */
  color: #1a1a1a;
  line-height: 0.9;
  letter-spacing: -1.5px; /* Ép sát chữ lại nhìn rất sang */
  transition: all 0.5s ease;
}

/* Thanh line vàng gold mảnh mai thay cho cái chấm phèn */
.brand-line {
  width: 25px;
  height: 1.5px;
  background: #c5a059;
  transition: width 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.brand-sub {
  font-family: "Inter", sans-serif;
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #999;
  margin-top: 4px;
}

/* Hiệu ứng khi di chuột vào logo */
.brand:hover .brand-text {
  color: #c5a059; /* Chuyển màu nhẹ nhàng */
  letter-spacing: 0px; /* Chữ dãn ra một chút khi hover cực nghệ */
}

.brand:hover .brand-line {
  width: 100%; /* Line chạy dài ra hết tên */
}
/* menu links */
.nav-links {
  display: flex;
  align-items: center;
}

.links-inner {
  display: flex;
  align-items: center;
  gap: 45px;
}

.link-item {
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #666;
  text-decoration: none;
  position: relative;
  transition: color 0.4s;
}

.link-item:hover {
  color: #000;
}

/* underline hiệu ứng trượt từ trái sang */
.link-item::before {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0;
  height: 1.5px;
  background: #000;
  transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.link-item:hover::before {
  width: 100%;
}

.divider {
  width: 1px;
  height: 20px;
  background: rgba(0, 0, 0, 0.1);
}

/* button liên hệ chuẩn đại gia */
.luxury-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  /* Màu xanh navy lạnh hoặc dùng trắng trong suốt */
  background: #5d8aa8;
  color: #fff;
  padding: 14px 32px;
  border-radius: 0; /* Vuông tuyệt đối nhìn cực kỳ kiến trúc */
  text-decoration: none;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid #5d8aa8;
  box-shadow: 0 10px 30px rgba(93, 138, 168, 0.15);
}

/* Hiệu ứng bóng đổ lấp lánh (Shimmer) chạy qua khi hover */
.btn-shimmer {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transition: 0.5s;
}

.luxury-btn:hover .btn-shimmer {
  left: 100%;
}

.luxury-btn:hover {
  background: transparent;
  color: #5d8aa8;
  box-shadow: 0 15px 40px rgba(93, 138, 168, 0.25);
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 14px;
  transition: transform 0.4s ease;
}

.luxury-btn:hover .btn-icon {
  transform: rotate(45deg) translate(2px, -2px); /* Mũi tên nhích nhẹ lên trên */
}

/* Bản Mobile tinh chỉnh */
@media (max-width: 991px) {
  .luxury-btn {
    padding: 12px 24px;
    width: 100%;
    justify-content: center;
  }
}
/* mobile toggle tinh giản */
.menu-toggle {
  display: none;
  background: none;
  border: none;
}

@media (max-width: 991px) {
  .menu-toggle {
    display: block;
  }
  .links-inner {
    display: none; /* cần thêm logic menu mobile nếu muốn hiện trên điện thoại */
  }
}
/* Xử lý Hamburger Icon */
.hamburger {
  width: 25px;
  height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 1.5px;
  background: #1a1a1a;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Hiệu ứng xoay icon khi mở menu */
.hamburger.is-active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.is-active span:nth-child(2) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 991px) {
  .menu-toggle {
    display: block;
    z-index: 1001; /* Luôn nằm trên menu */
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%; /* Giấu menu sang phải */
    width: 100%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 1000;
  }

  .nav-links.is-open {
    right: 0; /* Đẩy menu ra */
  }

  .links-inner {
    display: flex !important; /* Hiện lại link trên mobile */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 35px;
  }

  .link-item {
    font-size: 24px; /* Chữ to cho dễ bấm trên điện thoại */
    color: #1a1a1a;
  }

  .divider {
    width: 50px;
    height: 1px;
    background: #c5a059;
  }

  /* Khóa cuộn trang khi đang mở menu */
  body.menu-open {
    overflow: hidden;
  }
}
@media (max-width: 991px) {
  /* Nút toggle nằm trên cùng */
  .menu-toggle {
    display: block;
    z-index: 1002; /* Đặt cao hơn menu để luôn bấm được */
    position: relative;
  }

  /* Lớp nền mờ khi mở menu - Chạy tràn màn hình */
  .menu-backdrop {
    display: block; /* Hiện lên */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.05); /* Mờ cực nhẹ để nổi bật cái card */
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease;
    z-index: 1000;
  }

  .nav-links.is-open .menu-backdrop {
    opacity: 1;
    visibility: visible;
  }

  /* Cái CARD menu - Nằm gọn một góc */
  .nav-links {
    position: fixed;
    top: 80px; /* Cách header một khoảng xinh xắn */
    right: 30px; /* Cách lề phải */
    width: 250px; /* Độ rộng vừa phải cho một góc */
    max-width: 80%; /* Không quá to trên màn hình nhỏ */
    height: auto; /* Chiều cao tự động */
    background: #fff;
    padding: 40px 30px;

    /* Bo góc nhẹ & Đổ bóng đẳng cấp */
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);

    /* Hiệu ứng trượt lên nhẹ nhàng khi mở */
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px) scale(0.95);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);

    z-index: 1001;
    overflow: hidden; /* Giấu nội dung khi chưa mở */
  }

  .nav-links.is-open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
  }

  /* Căn chỉnh nội dung bên trong card */
  .links-inner {
    display: flex !important;
    flex-direction: column;
    align-items: flex-start; /* Căn trái cho tinh tế */
    gap: 20px;
  }

  .link-item {
    font-size: 16px; /* Chữ vừa phải, không quá to */
    color: #1a1a1a;
    padding: 5px 0;
    width: 100%;
    text-align: left;
  }

  .divider {
    width: 20px; /* Divider nhỏ xinh */
    height: 1.5px;
    background: #c5a059;
    margin: 10px 0;
  }

  /* Nút liên hệ thu gọn trên mobile card */
  .luxury-btn {
    padding: 10px 20px;
    width: 100%;
    justify-content: center;
    font-size: 10px;
    letter-spacing: 2px;
  }

  /* Reset lại hamburger cho đúng màu & vị trí */
  .hamburger span {
    background: #1a1a1a;
  }
}
</style>
