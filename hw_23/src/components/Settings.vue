<template>
  <div class="settings">
    <h1>{{greeting}}</h1>
    <div>{{getOverviewMessage}}</div>
    <section>
      <h2>Настройки</h2>
      <ul class="sliders-container">
        <div class="complexity-container">
          <div class="slider">
            <div class="slider-signs">
              <span>{{complexity.min}}</span>
              <span>{{complexity.max}}</span>
            </div>
            <b-form-input
              type="range"
              :min="complexity.min"
              :max="complexity.max"
              :id="complexity.name"
              v-model="complexity.value"
            />
          </div>
          <div>{{complexity.name}}: {{complexity.value}} минут</div>
        </div>

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
              v-model="duration.value"
            />
          </div>
          <div>{{duration.name}}: {{duration.value}}</div>
        </div>
      </ul>

      <ul class="types-container">
        <li v-for="type in typeNames" :key="type">
          <b-form-checkbox type="checkbox" v-model="selectedTypes" :id="type" :value="type">{{type}}</b-form-checkbox>
          <!-- <label :for="type">{{type}}</label> -->
        </li>
      </ul>
    </section>
    <b-button variant="outline-primary">Play</b-button>
  </div>
</template>

<script>
const typeNames = [
  "Суммирование",
  "Разность",
  "Умножение",
  "Деление",
  "Возведение в степень"
];
export default {
  name: "Settings",
  props: {},
  data: function() {
    return {
      greeting: "Привет!",
      overviewMessage: "Здесь будет общая информация",
      selectedTypes: [],
      typeNames,
      complexity: {
        name: "Сложность",
        value: "7",
        min: 1,
        max: 15
      },
      duration: {
        name: "Длительность",
        value: "5",
        min: 1,
        max: 10
      },
      trainingDay: "",
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
    getOverviewMessage() {
      return `Добро пожаловать на ${this.trainingDay} тренировочный день!

      Ваш последний результат - решено ${this.result.solved} из ${
        this.result.total
      }.
      Общая точность ${this.result.solved / this.result.solved}%.
      `;
    }
    // console.log("created!2");
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
</style>
