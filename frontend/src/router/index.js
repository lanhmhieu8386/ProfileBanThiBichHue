import AboutView from "@/component/AboutView.vue";
import HomeView from "@/component/HomeView.vue";
import LifeView from "@/component/LifeView.vue";
import StudyView from "@/component/StudyView.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  { path: "/study", name: "study", component: StudyView },
  { path: "/life", name: "life", component: LifeView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior() {
    return { top: 0 };
  },
});
export default router;
