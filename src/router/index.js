import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Task from '../views/Task.vue'
import TaskView from '../views/TaskView.vue'
import NewTaskView from '../views/NewTaskView.vue'
import TaskDetailView from '../views/TaskDetailView.vue'
import PostsView from '../views/Posts.vue'
import PostsList from '../components/PostList.vue'
import PostDetails from '../components/PostDetails.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/task',
    component: Task,
    children: [
      {
        path: '/',
        component: TaskView
      },
      {
        path: '/taskdetail/:id',
        component: TaskDetailView,
        props: true
      }
    ]
  },
  {
    path: '/newtask',
    component: NewTaskView
  },
  {
    path: '/posts/index',
    component: PostsView,
    children:[
      {
        path: '/',
        redirect:'/posts/list'
      },
      {
        path: '/posts/list',
        component: PostsList
      },
      {
        path: '/posts/details/:post_id',
        component: PostDetails,
        props:true
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
