import Vue from "vue";
import Vuex from "vuex";
import TaskModule from "./modules/Task";
import UserModule from "./modules/User";
import PostModule from "./modules/Post";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    task: TaskModule,
    user: UserModule,
    post: PostModule,
  },
});
