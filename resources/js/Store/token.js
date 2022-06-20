import Axios from 'axios';

export default {
    state: {
        token: '',
    },
    getters: {
        token: state => {
            return state.token;
        },
    },
    mutations: {
        SET_TOKEN: (state, payload) => {
            state.token = payload;
        },
    },
    actions: {
        GET_TOKEN: async (context) => {
            return Axios.get('/token')
                .then((response) => {
                    console.log(response.data)
                    context.commit('SET_TOKEN', response.data.token)
                    return response.data
                })
                .catch(error => {
                    console.log(error);
                    return error
                });
        },
    }
}
