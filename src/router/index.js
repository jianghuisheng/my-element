import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/home/index";
import SencondType from "@/components/sencondtype/index";
import Content from "@/components/aircontent/index";

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/sencondtype",
      component: SencondType
    },
    {
      path: "/sencondtype/content/:id",
      component: Content
    }
  ]
});
