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
      commit("assignUserImage");
    },
  },
  mutations: {
    assignUserImage(state) {
      state.posts = state.posts.map((post) => {
        post.userImageSrc =
          `https://source.unsplash.com/random/400x400/?sig=${Math.floor(Math.random() * 1000)}?face,office,smile,profile`;
        return post;
      });
    },
    saveAllPosts(state, payload) {
      state.posts = payload.data;
    },
  },

  modules: {
    comment: {
      namespaced: true,
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
