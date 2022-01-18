import axios from 'axios';
export default {
  state: {
    posts: [],
    comments: [],
  },
  getters: {
    allPosts: (state) => {
      return state.posts;
    },
    allComments: (state) => {
      return state.comments;
    },
  },
  actions: {
    async fetchAllPosts({ commit }) {
      const results = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      commit('saveAllPosts', { data: results.data });
    },
    async fetchComments({ commit }, id) {
      const results = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`
      );
      commit('saveAllComments', { data: results.data });
    },
  },
  mutations: {
    saveAllPosts(state, payload) {
      state.posts = payload.data;
    },
    saveAllComments(state, payload) {
      state.comments = payload.data;
    },
  },
};
