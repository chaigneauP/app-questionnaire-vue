<template>
  <div id="questionnaire">
    <h3>Bienvenue {{prenom}} {{nom}} de la société {{nomSociete}}</h3>
    <div id="question-component">
      
      <question :question="questions[counter]" @choice="choice = $event"></question>
      <span v-if="error" class="error">Veuillez sélectionner une réponse !</span>
      <b-button v-if="canNextQuestion" block variant="primary" class="connectButton" @click="nextQuestion"><b>Question
        suivante</b>
      </b-button>
      <b-button v-else block variant="primary" class="connectButton" @click="testFinish"><b>Terminer le test</b>
      </b-button>
    </div>
  </div>
</template>

<script>
  import css from "../assets/css/questionnaire.css"
  import questionsJSON from '../assets/questions.json'
  import Question from "../components/Question";
  export default {
    css,
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
        results: [],
        first: true,
        score: 0,
        error: false
      }
    },
    created() {
      this.nextQuestion()
    },
    methods: {
      nextQuestion() {
        if (this.choice !== "" || this.first) {
          this.error = false
          if (this.first) {
            this.first = false
          } else {
            let res = {
              'question': this.questions[this.counter],
              'choice': this.choice
            }
            this.results.push(res)
            this.isGoodAnswer()
            this.counter++
          }
          if (!this.questions[this.counter + 1]) {
            this.canNextQuestion = false
          }
          this.choice = ""
        } else {
          this.error = true
        }
      },
      testFinish() {
        if (this.choice !== "") {
          this.error = false
          let res = {
            'question': this.questions[this.counter],
            'choice': this.choice
          }
          this.results.push(res)
          this.isGoodAnswer()
          this.$router.push({
            path: 'resultats',
            query: {
              results: this.results,
              nom: this.nom,
              prenom: this.prenom,
              societe: this.nomSociete,
              score: this.score
            }
          })
        } else {
          this.error = true
        }
      },
      isGoodAnswer() {
        if (this.questions[this.counter].bonneReponse === this.choice) {
          this.score++
        }
      }
    }
  }
</script>

