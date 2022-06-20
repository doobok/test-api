import Vue from 'vue';
import Vuex from 'vuex';

import users from './users'
import token from './token'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        users,
        token
    }
})
