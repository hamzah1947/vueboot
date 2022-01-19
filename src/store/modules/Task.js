import axios from "axios";
export default {
  namespaced: true,
  state: {
    tasks: [],
    filteredtasks: [],
    pagelimit: 100,
  },
  getters: {
    myTasks: (state) => {
      return state.filteredtasks;
    },
  },
  actions: {
    async getAllTask({ commit }) {
      const results = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      commit("saveAllTasks", { data: results.data });
    },

    async changeLimit({ commit, dispatch }, limit) {
      commit("changeLimit", { limit });
      await dispatch("filterTasks");
    },
    // Async change(){

    // },
    async addNewTask({ commit }, payload) {
      await axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          id: Math.random,
          userId: 2,
          ...payload,
        })
        .then((res) => {
          commit("addNewTask", { data: res.data });
        });
    },

    async filterTasks({ commit, state }) {
      const results = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=${state.pagelimit}`
      );
      commit("saveAllTasks", { data: results.data });
    },

    async reassignData({ commit, state }) {
      const results = state.tasks; // Just to refresh
      commit("saveAllTasks", { data: results });
    },

    async searchTasks({ commit }, text) {
      commit("searchList", { text });
    },
  },
  mutations: {
    saveAllTasks(state, payload) {
      state.tasks = payload.data;
      state.filteredtasks = state.tasks;
    },
    changeLimit(state, payload) {
      state.pagelimit = payload.limit;
    },
    addNewTask(state, payload) {
      state.tasks.unshift(payload.data);
      state.filteredtasks = state.tasks;
    },
    searchList(state, payload) {
      state.filteredtasks = state.tasks.filter((task) =>
        task.title.includes(payload.text)
      );
    },
  },

  modules: {
    user: {
      namespaced: true,
      state: {
        userlist: [],
        user: {},
      },
      getters: {
        allUsers: (state) => {
          return state.userlist;
        },
        currentUser: (state) => {
          return state.user;
        },
      },
      actions: {
        async fetchUser({ commit }, id) {
          const user = await await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
          );
          commit("saveuser", user.data);
        },
      },
      mutations: {
        saveuser(state, user) {
          user.imageurl =
            "https://source.unsplash.com/random/400x400/?face,user,smile";
          state.user = user;
        },
      },
    },
  },
};
