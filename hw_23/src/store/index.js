import Vue from 'vue'
import Vuex from 'vuex';

import {INCREMENT} from '../contants'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        duration: '',
        count: 0
    }, 
    mutations: {
        [INCREMENT]: function (state) {
            state.count++
        }
    }
})