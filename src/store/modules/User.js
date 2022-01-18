import axios from 'axios';

export default {
	state: {
		userlist: [],
		user: {}
	},
	getters: {
		allUsers: (state) => {
			return state.userlist;
		},
		currentUser:(state) =>{
			return state.user;
		}
	},
	actions: {
		async fetchUser({ commit }, id) {
			const user = await await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
			commit('saveuser', user);
		}
	},
	mutations: {
		saveuser(state, user) {
			state.user = user;
		}
	}
};