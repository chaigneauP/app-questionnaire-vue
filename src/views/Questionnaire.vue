<template>
  <div id="questionnaire">
    <h3>Mr {{prenom}} {{nom}}, société {{nomSociete}}</h3>
    <div id="question-component">
      <question :question="questions[counter]" @choice="choice = $event"></question>
      <b-button v-if="canNextQuestion" block variant="primary" class="connectButton" @click="nextQuestion"><b>Question
        suivante</b>
      </b-button>
      <b-button v-else block variant="primary" class="connectButton" @click="testFinish"><b>Terminer le test</b>
      </b-button>
    </div>
  </div>
</template>

<script>
  import questionsJSON from '../assets/questions.json'
  import Question from "../components/Question";

  export default {
    name: "Questionnaire",
    components: {
      Question
    },
    data() {
      return {
        nom: this.$route.query.nom,
        prenom: this.$route.query.prenom,
        nomSociete: this.$route.query.nomSociete,
        questions: questionsJSON.questions,
        counter: 0,
        canNextQuestion: true,
        choice: "",
        first: true
      }
    },
    created() {
      this.nextQuestion()
    },
    methods: {
      nextQuestion() {
        if (this.first) {
          this.first = false
        } else {
          this.counter++
        }
        if (!this.questions[this.counter + 1]) {
          this.canNextQuestion = false
        }
      },
      testFinish() {

      }
    }
  }
</script>

<style scoped>
  #questionnaire {
    height: 100%;
    display: grid;
    grid-template-columns: 15% 35% 35% 15%;
    grid-template-rows: 15% 35% 35% 15%;
    background-color: rgb(255, 255, 255);
  }

  h3 {
  
    grid-row: 1/2;
    grid-column: 1/4;
    font-family: sans-serif;
    font-size: 20px;
    text-align: right
  }

  #question-component {
    background-color: white;
    border-radius: 20px;
    grid-row: 2/4;
    grid-column: 2/4;
  }

  .connectButton {
    height: 10%;
    border-radius:30px;
    background-color: coral
  }
</style>