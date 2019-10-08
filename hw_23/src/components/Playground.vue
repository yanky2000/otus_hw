<template>
  <div class="playground">
    <h1>Здесь будет основное окно</h1>
    <b-button @click="increment" variant="primary">Increment</b-button>
    {{firstArgument}}!!
    <h1>
      <!-- JUST: {{operationTypes}} -->
      <!-- JUST22: {{getRandomOperator()}} -->
      <h2>RESULT AGAIN{{result}}</h2>
    </h1>
    <b-button @click="goToSettings" variant="outline-primary">Отмена</b-button>
    <div class="buttons-container">
      <b-button
        class="number-buttons"
        variant="warning"
        v-for="item in numbers"
        :key="item"
      >{{item}}</b-button>
      <b-button
        class="number-buttons"
        variant="warning"
        v-for="char in characters"
        :key="char"
      >{{char}}</b-button>
    </div>
  </div>
</template>




<script>
import store from "../store/";
import { mapState } from "vuex";
import { INCREMENT, settingsKeys, operations } from "../constants";
import { getRandomNumber } from "../utils";

const { DURATION, DIFFICULTY, OPERATION_TYPES } = settingsKeys;

export default {
  name: "Playground",
  // props: ['operationTypes'],
  mounted() {
    const { min, max } = this.range;
    this.firstArgument = getRandomNumber(min, max);
    this.firstOperand = this.getRandomOperator();
    this.secondOperand = this.getRandomOperator();
    this.result = eval(
      this.firstArgument +
        this.firstOperand +
        this.getRandomNumber(min, max) +
        this.secondOperand +
        this.getRandomNumber(min, max)
    );
    debugger;
  },
  computed: {
    ...mapState([DURATION, DIFFICULTY, OPERATION_TYPES]),

    getRandomNumber() {
      const { min, max } = this.range;
      return Math.floor(Math.random() * (max - min) + min);
    }
  },
  data: function() {
    return {
      range: { min: 1, max: 100 }, // TODO: Привязать к сложности
      numbers: 9,
      characters: ["<", ">", "?", "="],
      firstArgument: "",
      result: ""
    };
  },
  methods: {
    increment() {
      store.commit(INCREMENT);
    },

    getRandomOperator() {
      const ran = this.operationTypes[
        getRandomNumber(0, this.operationTypes.length)
      ];
      const oper = operations[ran];
      console.log(111, oper);
      return oper;
    },

    goToSettings() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buttons-container {
  display: flex;
}
.number-buttons {
}
</style>
