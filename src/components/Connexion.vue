<template>
  <div id="connection-block">
    <h1>Identification</h1>
    <span v-if="showError" class="errorMessage">Les champs doivent être tous remplis !</span>
    <b-input-group prepend="Nom" class="mt-3" required>
      <b-form-input v-model="nom"></b-form-input>
    </b-input-group>
    <b-input-group prepend="Prénom" class="mt-3">
      <b-form-input v-model="prenom"></b-form-input>
    </b-input-group>
    <b-input-group prepend="Société" class="mt-3">
      <b-form-input v-model="nomSociete"></b-form-input>
    </b-input-group>

    <b-button block variant="primary" class="connectButton" @click="connected">Commencer le test</b-button>
  </div>
</template>

<script>
  export default {
    name: "Connexion",
    data() {
      return {
        nom: "",
        prenom: "",
        nomSociete: "",
        showError: false
      }
    },
    methods: {
      connected() {
        if (this.nom.trim() != "" && this.prenom.trim() != "" && this.nomSociete.trim() != "") {
          this.$router.push({
            path: 'questionnaire',
            query: {
              nom: this.nom,
              prenom: this.prenom,
              nomSociete: this.nomSociete
            }
          })

        } else {
          this.showError = true
        }
      }
    }
  }
</script>

<style scoped>
  .connectButton {
    margin-top: 4%;
  }

  .errorMessage {
    font-weight: bold;
    color: red;
    font-size: 18px;
  }
  .b-input-group:invalid{
    background-color: #ff0000;
  }
</style>