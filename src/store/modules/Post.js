import axios from "axios";
export default {
  namespaced: true,
  state: {
    posts: [],
  },
  getters: {
    allPosts: (state) => {
      return state.posts;
    },
  },
  actions: {
    async fetchAllPosts({ commit }) {
      const results = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      commit("saveAllPosts", { data: results.data });
    },
  },
  mutations: {
    saveAllPosts(state, payload) {
      state.posts = payload.data;
    },
  },

  modules: {
    comment: {
      namespaced:true,
      state: {
        comments: [],
      },
      getters: {
        allComments: (state) => {
          return state.comments;
        },
      },
      actions: {
        async fetchComments({ commit }, id) {
          const results = await axios.get(
            `https://jsonplaceholder.typicode.com/comments?postId=${id}`
          );
          commit("saveAllComments", { data: results.data });
        },
      },
      mutations: {
        saveAllComments(state, payload) {
          state.comments = payload.data;
        },
      },
    },
  },
};
