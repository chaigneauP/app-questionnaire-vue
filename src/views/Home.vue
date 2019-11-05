<template>
  <div id="home">
    <div id="connection">
      <connexion></connexion>
    </div>
  </div>
</template>

<script>
  import Connexion from "../components/Connexion";

  export default {
    name: 'Home',
    components: {
      Connexion
    }
  }
</script>

<style scoped>
  html {
    height: 100%;
  }

  body {
    height: 100%;
    background-color: lightblue;
  }

  #home {
    height: 100%;
    background-color: white;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 25% 25% 25% 25%;
  }

  #connection {
    grid-column: 2/4;
    grid-row: 2/4;
  }
</style>
