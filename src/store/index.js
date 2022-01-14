import Vue from 'vue'
import Vuex from 'vuex'
import TaskModule from './modules/Task'
import UserModule from './modules/User'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    TaskModule,
    UserModule
  }
})
