import Axios from 'axios';

export default {
    state: {
        users: [],
        positions: []
    },
    getters: {
        users: state => {
            return state.users;
        },
        positions: state => {
            return state.positions;
        },
    },
    mutations: {
        SET_USERS: (state, payload) => {
            state.users = payload;
        },
        SET_POSITIONS: (state, payload) => {
            state.positions = payload;
        },
    },
    actions: {
        GET_USERS: async (context, payload) => {
            let url = payload
            if (url) {
                url = url.split('?')[1]
            }
            return Axios.get('/users?' + url + '&count=5')
                .then((response) => {
                    context.commit('SET_USERS', response.data.users)
                    return response.data
                })
                .catch(error => {
                    console.log(error);
                    return error
                });
        },
        GET_POSITIONS: async (context, payload) => {
            return Axios.get('/positions')
                .then((response) => {
                    context.commit('SET_POSITIONS', response.data.positions)
                    return response.data
                })
                .catch(error => {
                    console.log(error);
                    return error
                });
        },
    }
}
