import Vue from 'vue';
import Vuex from 'vuex';

import {
	SET_DIFFICULTY,
	SET_DURATION,
	settingsKeys,
	SET_OPERATION_TYPES
} from '../constants';

Vue.use(Vuex);

const { DURATION, DIFFICULTY, OPERATION_TYPES } = settingsKeys;

export default new Vuex.Store({
	state: {
		[DURATION]: { name: 'Длительность', value: '5', min: 1, max: 10 },
		[DIFFICULTY]: { name: 'Сложность', value: '7', min: 1, max: 15 },
		[OPERATION_TYPES]: []
	},
	mutations: {
		[SET_DURATION]: (state, duration) => {
			state[DURATION] = duration;
		},
		[SET_DIFFICULTY]: (state, difficulty) => {
			state[DIFFICULTY] = difficulty;
		},
		[SET_OPERATION_TYPES]: (state, operations) => {
			state[OPERATION_TYPES] = operations;
		}
	}
});
