<template>
  <div class="playground">
    <h1>Здесь будет основное окно</h1>
    <b-button @click="increment" variant="primary">Increment</b-button>
    {{firstArgument}}!!
    {{secondArgument}}!!
    {{operationTypes}}
    <h1>
      {{duration}}
      {{difficulty}}
    </h1>
    <b-button variant="outline-primary">Отмена</b-button>
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
import { INCREMENT, settingsKeys } from "../contants";

const { DURATION, DIFFICULTY, OPERATION_TYPES } = settingsKeys;
export default {
  name: "Playground",
  mounted() {
    const { min, max } = this.range;
    this.firstArgument = Math.floor(Math.random() * (max - min) + min);

    // this.formula = 2;
  },
  computed: {
    ...mapState([DURATION, DIFFICULTY, OPERATION_TYPES]),

    secondArgument() {
      return this.firstArgument + 1;
    }
  },
  data: function() {
    return {
      range: { min: 1, max: 100 },
      numbers: 9,
      characters: ["<", ">", "?", "="],
      firstArgument: ""
    };
  },
  methods: {
    increment() {
      store.commit(INCREMENT);
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
