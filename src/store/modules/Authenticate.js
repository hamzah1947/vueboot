export default {
  namespaced: true,
  state: {
    loggedIn: false,
  },
  getters: {
    isLoggedIn: (state) => state.loggedIn,
  },
  actions: {
    async attemptLogin({ commit }) {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      }).then(() => {
        commit("login");
      });
    },
    async attemptLogout({ commit }) {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      }).then(() => {
        commit("logout");
      });
    },
  },
  mutations: {
    login(state) {
      state.loggedIn = true;
      console.log("login with ", state.loggedIn);
    },
    logout(state) {
      state.loggedIn = false;
      console.log("logout with ", state.loggedIn);
    },
  },
};
