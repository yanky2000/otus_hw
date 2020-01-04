import Vue from 'vue';
import Vuex from 'vuex';

import {
	SET_DIFFICULTY,
	SET_DURATION,
	settingsKeys,
	SET_OPERATION_TYPES,
	STOP_TIMER
} from '../constants';

Vue.use(Vuex);

const { DURATION, DIFFICULTY, OPERATION_TYPES, TIMER } = settingsKeys;

export default new Vuex.Store({
	state: {
		[DURATION]: { name: 'Длительность', value: 5, min: 1, max: 10 },
		[DIFFICULTY]: { name: 'Сложность', value: 2, min: 1, max: 15 },
		[OPERATION_TYPES]: ['+']
	},
	mutations: {
		[SET_DURATION]: (state, duration) => {
			state[DURATION].value = duration;
		},
		[SET_DIFFICULTY]: (state, difficulty) => {
			state[DIFFICULTY].value = difficulty;
		},
		[SET_OPERATION_TYPES]: (state, operations) => {
			state[OPERATION_TYPES] = operations;
		},
		[STOP_TIMER]: (state, time) => {
			console.log('ends time', time);
			state[TIMER] = time;
		}
	},
	actions: {
		timer({ commit }, time) {
			console.log('action started with timer', time);
			setTimeout(() => {
				commit(STOP_TIMER, time);
			}, time);
		}
	}
});
