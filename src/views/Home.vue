<template>
  <div id="home">
    
    <div id="connection">
      <connexion></connexion>
    </div>
  </div>
</template>

<script>
  import Connexion from "../components/Connexion";
  import css from "../assets/css/connexion.css"

  export default {
    name: 'Home',
    components: {
      Connexion,
      css
    }
  }
</script>