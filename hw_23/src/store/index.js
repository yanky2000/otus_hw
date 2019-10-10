import Vue from "vue";
import Vuex from "vuex";
import {
  SET_DIFFICULTY,
  SET_DURATION,
  SET_OPERATION_TYPES,
  STOP_TIMER
} from "./mutationTypes";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    duration: { name: "Длительность", value: 5, min: 1, max: 10 },
    difficulty: { name: "Сложность", value: 2, min: 1, max: 15 },
    operationTypes: [
      {
        name: "Суммирование",
        symbol: "+",
        selected: false
      },
      { name: "Разность", symbol: "-", selected: false },
      { name: "Умножение", symbol: "*", selected: false },
      { name: "Деление", symbol: "/", selected: false },
      { name: "Возведение в степень", symbol: "**", selected: false }
    ],
    selectedOperations: []
  },
  mutations: {
    [SET_DURATION](state, duration) {
      state.duration.value = duration;
    },
    [SET_DIFFICULTY](state, difficulty) {
      state.difficulty.value = difficulty;
    },
    [SET_OPERATION_TYPES](state, operations) {
      state.selectedOperations = operations;
    },
    [STOP_TIMER]: (state, time) => {
      // console.log("ends time", time);
      state.timer = time;
    }
  },
  actions: {
    timer({ commit }, time) {
      // console.log("action started with timer", time);
      setTimeout(() => {
        commit(STOP_TIMER, time);
      }, time);
    }
  },
  strict: true
});
