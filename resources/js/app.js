import './bootstrap';

import Vue from "vue";
import VueRouter from "vue-router";

import router from "./Router/index";
import store from "./Store/index";
import App from "./App.vue";
Vue.use(VueRouter)

import XHighlight from 'x-highlight'
import 'x-highlight/dist/css/XHighlight.css'
// highlight theme
import 'highlight.js/styles/atom-one-dark-reasonable.css'

Vue.use(XHighlight)

const app = new Vue({
    el: '#app',
    router,
    store,
    components: { App }
});
