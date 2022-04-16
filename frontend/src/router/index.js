import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { 
		name: "Color classification",
		path: "/",
		component: () => import("../views/colorClassification/index.vue") 
	},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
