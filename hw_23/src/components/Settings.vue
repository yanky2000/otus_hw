<template>
  <div class="settings">
    <h1>{{greeting}}</h1>
    <div>
      {{
      `Добро пожаловать на ${trainingDay} тренировочный день!
      Ваш последний результат - решено ${result.solved} из ${
      result.total
      }.
      Общая точность ${accuracy}%.
      `
      }}
    </div>
    <section>
      <h2>Настройки</h2>
      <ul class="sliders-container">
        <div class="difficulty-container">
          <div class="slider">
            <div class="slider-signs">
              <span>{{difficulty.min}}</span>
              <span>{{difficulty.max}}</span>
            </div>
            <b-form-input
              type="range"
              :min="difficulty.min"
              :max="difficulty.max"
              :id="difficulty.name"
              v-model="difficultyControl"
            />
          </div>
          <div>{{difficulty.name}}: {{difficulty.value}}</div>
        </div>
        <br />
        <div class="duration-container">
          <div class="slider">
            <div class="slider-signs">
              <span>{{duration.min}}</span>
              <span>{{duration.max}}</span>
            </div>
            <b-form-input
              type="range"
              :min="duration.min"
              :max="duration.max"
              :id="duration.name"
              v-model="durationControl"
            />
          </div>
          <div>{{duration.name}}: {{duration.value}} минут</div>
        </div>
      </ul>
      <br />
      <ul class="types-container">
        <li v-for="{name, symbol} in operationTypes" :key="name">
          <b-form-checkbox
            type="checkbox"
            :id="name"
            :value="symbol"
            v-model="selectedOperations"
          >{{name}}</b-form-checkbox>
        </li>
      </ul>
    </section>
    <b-button variant="outline-primary" @click="startGame()">PLAY</b-button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  SET_DURATION,
  SET_DIFFICULTY,
  SET_OPERATION_TYPES
} from "../store/mutationTypes";

export default {
  name: "Settings",
  props: {},
  methods: {
    startGame() {
      this.$store.commit(SET_DURATION, this.duration.value);
      this.$store.commit(SET_DIFFICULTY, this.difficulty.value);
      this.$store.commit(SET_OPERATION_TYPES, this.selectedOperations);
      this.$router.push({
        path: "playground"
      });
    }
  },
  data: function() {
    return {
      greeting: "Привет!",
      overviewMessage: "Здесь будет общая информация",
      trainingDay: "",
      selectedOperations: [],
      result: {
        last: {
          total: 0,
          solved: 0
        },
        current: {
          total: "",
          solved: ""
        }
      }
    };
  },
  computed: {
    ...mapState(["duration", "difficulty", "operationTypes"]),
    accuracy() {
      return this.result.solved ? this.result.solved / this.result.solved : 0;
    },
    difficultyControl: {
      get() {
        return this.difficulty.value;
      },
      set(difficulty) {
        this.$store.commit(SET_DIFFICULTY, difficulty);
      }
    },
    durationControl: {
      get() {
        return this.duration.value;
      },
      set(duration) {
        this.$store.commit(SET_DURATION, duration);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  margin-top: 30px;
}

ul {
  list-style: none;
}

.slider-signs {
  display: flex;
  justify-content: space-between;
}

.duration-contaPciner {
  margin-bottom: 30px;
}

input[range],
.slider {
  width: 200px;
}

.btn-link {
  border: 1px solid black;
}
</style>
