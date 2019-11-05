<template>
  <div id="questionnaire">
    <h3>Bienvenue {{prenom}} {{nom}} de la société {{societe}}</h3>
    <div class="results">
      <div v-for="(res, index) in results" class="resultat" :key="index">
        <span class="question">{{res.question.question}}</span>
        <div></div>&nbsp;
        <span class="reponse">{{res.choice}}</span><div></div>&nbsp;
        <span v-if="res.choice !== res.question.bonneReponse" class="loose">Perdu ! La bonne réponse était : {{res.question.bonneReponse}}</span>
      </div>
      <span>Score {{score}}/{{results.length}}</span>
    </div>
  </div>
</template>

<script>
  import css from "../assets/css/resultats.css"
  export default {
    css,
    name: "Resultats",
    data() {
      return {
        nom: this.$route.query.nom,
        prenom: this.$route.query.prenom,
        societe: this.$route.query.societe,
        results: this.$route.query.results,
        score: this.$route.query.score
      }
    },
    mounted() {

    },
    methods: {}
  }
</script>
