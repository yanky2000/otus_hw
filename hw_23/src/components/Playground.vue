<template>
  <div class="playground">
   <h1>Здесь будет основное окно</h1>
   {{query.duration.value}}
   {{settings}}
   
  </div>
</template>

<script>
export default {
  name: "Playground",
  props: ['query'],
  data: function() {
    return {
      

    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
