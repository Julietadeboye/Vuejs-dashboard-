import { h, resolveComponent } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import DefaultLayout from "@/layouts/DefaultLayout";

const routes = [
  {
    path: "/",
    name: "Home",
    component: DefaultLayout,
    redirect: "/analytics",
    children: [
      {
        path: "/analytics",
        name: "Analytics",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "@/views/analytics/Analytics.vue"
          ),
      },
      {
        path: "/chat",
        name: "Chat",
        component: () => import("@/views/chat/Chat.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
