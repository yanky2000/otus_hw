import Vue from "vue";
import Router from "vue-router";
import Settings from "../components/Settings";
import Playground from "../components/Playground";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "settings",
      component: Settings
    },
    {
      path: "/playground",
      name: "playground",
      component: Playground,
      // props: (route) => ({ query: route.query.settings })
    }
    // {
    //   path: '/blog',
    //   name: 'blog',
    //   component: blog
    // },
    // {
    //   path: '/services',
    //   name: 'services',
    //   component: services
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: contact
    // },
    // {
    //   path: '/details/:Pid',
    //   name: 'details',
    //   component: details
    // }
  ]
});
