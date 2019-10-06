<template>
  <div class="playground">
    <h1>Здесь будет основное окно</h1>
    {{firstArgument}}!!
    <!-- {{query.duration.value}}
    {{settings}}-->
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
export default {
  name: "Playground",
  props: ["query"],
  computed: {
    getRandomArbitrary() {
      console.log('hello')
      // const { min, max } = this.range;
      // return Math.random() * (max - min) + min;
    }
  },
  mounted() {
    const { min, max } = this.range;
    this.firstArgument = Math.floor(Math.random() * (max - min) + min)
      
    // this.formula = 2;
  },
  data: function() {
    return {
      range: { min: 1, max: 100 },
      numbers: 9,
      characters: ["<", ">", "?", "="],
      firstArgument: ""
    };
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
