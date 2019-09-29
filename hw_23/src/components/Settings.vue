<template>
  <div class="settings">
    <h1>{{greeting}}</h1>
    <div>{{overviewMessage}}</div>
    <section>Здесь будут настройки</section>
    <ul>
      Здесь будут чебоксы
    </ul>
   
  </div>
</template>

<script>
export default {
  name: "Settings",
  props: {},
  data: function() {
    return {
      greeting: "Привет!",
      overviewMessage: "Здесь будет общая информация",

    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
