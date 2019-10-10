<template>
  <div class="playground">
    <b-button @click="goToSettings" variant="outline-primary">Отмена</b-button>

    <div class="task-container">
      <div class="task-panel">
        <span class="first-argument">{{firstArgument}}</span>
        {{firstOperand}}
        <span v-if="isResultsVisible">
          {{secondArgument}}
          {{secondOperand}}
          {{thirdArgument}}
        </span>
        <span v-else>
          __
          {{secondOperand}} __
        </span>
      </div>
      <div>= {{result}} ?</div>
    </div>
    <keyboard @help='showResults'/>
    <button @click="goTimer()">timer</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Keyboard from "./Keyboard";

export default {
  name: "Playground",
  components: { Keyboard },

  computed: {
    ...mapState([
      'duration',
      'difficulty', 
      'selectedOperations'])
  },
  data: function() {
    return {
      randNumsRangs() {
        return { min: 1, max: 10 ** this.difficulty.value };
      },

      firstArgument: "",
      firstOperand: "",
      secondOperand: "",
      result: "",
      isResultsVisible: false
    };
  },
  methods: {
    getRandomNumber(min = 1, max = 10 ** this.difficulty.value) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    getRandomOperator() {
      return this.selectedOperations[
        this.getRandomNumber(0, this.selectedOperations.length)
      ];
    },

    goTimer() {
      // console.log("timer starts with hardcoded 1000ms");
      this.$store.dispatch("timer", 1000);
    },

    makeFormula() {
      this.firstArgument = this.getRandomNumber();
      this.secondArgument = this.getRandomNumber();
      this.thirdArgument = this.getRandomNumber();
      this.firstOperand = this.getRandomOperator();
      this.secondOperand = this.getRandomOperator();
      this.result = eval(
        this.firstArgument +
          this.firstOperand +
          this.secondArgument +
          this.secondOperand +
          this.thirdArgument
      );
    },

    showResults() {
      this.isResultsVisible = !this.isResultsVisible;
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
