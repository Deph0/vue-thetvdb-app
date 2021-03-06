import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/HomeGlobal")
        }
      ]
    },
    {
      name: "article",
      path: "/articles/:slug",
      component: () => import("@/views/Article"),
      props: true
    }
  ]
});
