import axios from "axios";

export default {
    state: {
        tasks: [

        ],
        filteredtasks: [],
        pagelimit: 100
    },
    getters: {
        myTasks: (state) => {
            return state.filteredtasks
        }
    },
    actions: {
        async getAllTask({ commit }) {
            const results = await axios.get('https://jsonplaceholder.typicode.com/todos');
            commit('saveAllTasks', { results })
        },

        async changeLimit({ commit, dispatch }, limit) {
            await commit('changeLimit', { limit });
            await dispatch('filterTasks');
        },
        async addNewTask({ commit }, title) {
            const results = await axios.post('https://jsonplaceholder.typicode.com/todos', { id: 9988, 'User Id': 2, title, completed: false, });
            commit('addNewTask', { results })
        },

        async filterTasks({ commit, state }) {
            const results = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${state.pagelimit}`);
            commit('saveAllTasks', { results })
        },

        async searchTasks({commit},text){
            commit('searchList',{text});
        }

    },
    mutations: {
        saveAllTasks(state, payload) {
            state.tasks = payload.results.data;
            state.filteredtasks = state.tasks;
        },
        changeLimit(state, payload) {
            state.pagelimit = payload.limit;
        },
        addNewTask(state, payload) {
            state.tasks.unshift(payload.results.data);
            state.filteredtasks = state.tasks;
        },
        searchList(state,payload){
            state.filteredtasks = state.tasks.filter(task => task.title.includes(payload.text));
        }
    }
}