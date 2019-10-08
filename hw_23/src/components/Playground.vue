<template>
  <div class="playground">
    <b-button @click="goToSettings" variant="outline-primary">Отмена</b-button>

    <div class="task-container">
      <div class="task-panel">
        <span class="first-argument">{{firstArgument}}</span>
        {{firstOperand}} __ {{secondOperand}} __
      </div>
      <div>= {{result}} ?</div>
    </div>
    rand: {{randNumsRangs()}}
    <keyboard />
  </div>
</template>




<script>
import store from "../store/";
import { mapState } from "vuex";
import Keyboard from "./Keyboard";
import { INCREMENT, settingsKeys, operations } from "../constants";
// import { getRandomNumber } from "../utils";

const { DURATION, DIFFICULTY, OPERATION_TYPES } = settingsKeys;

export default {
  name: "Playground",
  components: { Keyboard },

  computed: {
    ...mapState([DURATION, DIFFICULTY, OPERATION_TYPES])

    // max(state) {
    //   return state.difficulty.value;
    // }
  },
  data: function() {
    return {
      randNumsRangs() {
        return { min: 1, max: 10 ** this.difficulty };
      },
      // range: { min: 1, max: 100 }, // TODO: Привязать к сложности

      numbers: 9,

      firstArgument: "",
      firstOperand: "",
      secondOperand: "",
      result: ""
    };
  },
  methods: {
    getRandomNumber(min = 1, max = (10**this.difficulty)) {
      const r = Math.floor(Math.random() * (max - min) + min);
      // FIXME:  почему нулевые значения после 22 в консоли ?
      console.log(22, r);
      return r;
    },

    getRandomOperator() {
      // TODO: оставить только возвр значение
      const random = this.getRandomNumber(0, this.operationTypes.length);
      const ran = this.operationTypes[
        this.getRandomNumber(0, this.operationTypes.length)
      ];
      // const oper = operations[ran];
      console.log(5, ran);
      return ran;
    },

    makeFormula() {
      this.firstArgument = this.getRandomNumber();
      this.firstOperand = this.getRandomOperator();
      this.secondOperand = this.getRandomOperator();
      this.result = eval(
        this.firstArgument +
          this.firstOperand +
          this.getRandomNumber() +
          this.secondOperand +
          this.getRandomNumber()
      );

      console.info(
        1,
        this.firstArgument,
        this.firstOperand,
        this.secondOperand,
        this.result
      );
      return this.result;
    },

    goToSettings() {
      this.$router.push({ path: "/" });
    }
  },

  mounted() {
    this.makeFormula();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.number-buttons {
}

.task-container {
  font-size: 36px;
}

.first-argument {
  color: black;
}
.task-panel {
  color: grey;
}
</style>
