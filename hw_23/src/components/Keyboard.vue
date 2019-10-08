<template>
  <div class="buttons-container">
    <div class="num-btn-container">
      <div class="num-btn-raw" v-for="(raw, i) in raws" :key="i">
        <b-button class='btn' variant="warning" v-for="number in raw" :key="number">{{number}}</b-button>
      </div>
    </div>

    <div class="chars-btn-container">
      <b-button
        class="btn"
        variant="warning"
        v-for="char in characters"
        :key="char"
      >{{char}}</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Keyboard",
  data: function() {
    return {
      raws: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]],
      characters: ["<", ">", "?", "="]
    };
  }
};
</script>
<style>
.buttons-container {
  display: flex;
}
.num-btn-container {
  display: block;
}

.num-btn-raw {
  display: flex;
  justify-content: center;
}

.chars-btn-container {
  display: flex;
  flex-direction: column;
}

.btn {
    margin: 10px;
}

</style>