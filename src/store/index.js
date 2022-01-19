import Vue from "vue";
import Vuex from "vuex";
import TaskModule from "./modules/Task";
import PostModule from "./modules/Post";
import AuthenticationModule from "./modules/Authenticate";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    task: TaskModule,
    post: PostModule,
    authenticate: AuthenticationModule,
  },
});
