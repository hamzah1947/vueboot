import axios from "axios";

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
      const token = window.localStorage.getItem("token");
      if (token) {
        commit("login", token);
      } else {
        const res = await axios.post("https://reqres.in/api/login", {
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        });
        commit("login", res.data.token);
      }
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
    login(state, token) {
      state.loggedIn = true;
      window.localStorage.setItem("token", token);
    },
    logout(state) {
      state.loggedIn = false;
      window.localStorage.removeItem("token");
    },
  },
};
