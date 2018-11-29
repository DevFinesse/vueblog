import Vue from "vue";
import Router from "vue-router";
import Home from "./views/post/Home.vue";
import View from "./views/post/View.vue";
import Edit from "./views/post/Edit.vue";
import About from "./views/About.vue";
import Create from "./views/post/Create.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/post/:p_id",
      name: "viewPost",
      component: View
    },
    {
      path: "/edit/:p_id",
      name: "editPost",
      component: Edit
    },
    {
      path: "/create",
      name: "createPost",
      component: Create
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
