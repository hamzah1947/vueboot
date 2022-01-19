import Vue from "vue";
import store from "../store";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Task from "../views/Task.vue";
import Login from "../views/Login.vue";
import TaskList from "../components/TaskList.vue";
import TaskDetails from "../components/TaskDetails.vue";
import PostsView from "../views/Posts.vue";
import PostsList from "../components/PostList.vue";
import AddTask from "../components/AddTask.vue";
import PostDetails from "../components/PostDetails.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: Home,
  },
  {
    path: "/about",
    name: "AboutView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
  },
  {
    path: "/login",
    name: "LoginView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/task",
    component: Task,
    children: [
      {
        path: "/",
        redirect: "/task/list",
        meta: { requiresAuth: true },
      },
      {
        path: "/task/list",
        component: TaskList,
        meta: { requiresAuth: true },
      }, //meta
      {
        path: "/taskdetail/:id",
        component: TaskDetails,
        props: true,
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: "/task/new",
    component: AddTask,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/posts/index",
    component: PostsView,
    children: [
      {
        path: "/",
        redirect: "/posts/list",
        meta: { requiresAuth: true },
      },
      {
        path: "/posts/list",
        component: PostsList,
        meta: { requiresAuth: true },
      },
      {
        path: "/posts/:post_id/comments/list", //can be posts/details/:post_id
        component: PostDetails,
        meta: { requiresAuth: true },
        props: true,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters["authenticate/isLoggedIn"]) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});
export default router;
