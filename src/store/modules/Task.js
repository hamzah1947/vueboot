import axios from "axios";

export default {
    state: {
        tasks: [

        ],
        pagelimit:100
    },
    getters: {
        myTasks: (state) => {
            return state.tasks
        }
    },
    actions: {
        async getAllTask({ commit }) {
            const results = await axios.get('https://jsonplaceholder.typicode.com/todos');
            commit('saveAllTasks', { results })
        },

        async changeLimit({commit,dispatch},limit){
            commit('changeLimit',{limit});
            await dispatch('filterTasks');
        },
        async addNewTask({ commit }, title) {
            const results = await axios.post('https://jsonplaceholder.typicode.com/todos', { id: 9988, 'User Id': 2, title, completed: false, });
            commit('addNewTask', { results })
        },

        async filterTasks({ commit ,state}) {
            const results = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${state.pagelimit}`);
            commit('saveAllTasks', { results })
        }
    },
    mutations: {
        saveAllTasks(state, payload) {
            state.tasks = payload.results.data;
        },
        changeLimit(state,payload){
            state.pagelimit = payload.limit;
        },
        addNewTask(state, payload) {
            state.tasks.unshift(payload.results.data);
        }
    }
}