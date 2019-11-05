<template>
  <div id="question">
    <div id="span-question">
      <span><b>{{question.question}}</b></span>
    </div>
    <div id="input-response">
      <div v-for="(choix,index) in question.choix" :key="index">
        <b-form-radio v-model="choice" name="radio" :value="choix">{{choix}}</b-form-radio>
      </div>
    </div>
  </div>
</template>

<script>
  import css from "../assets/css/question.css"
  export default {
    css,
    name: "Question",
    props: {
      question: Object
    },
    data() {
      return {
        choice: ''
      }
    },
    watch: {
      choice() {
        this.$emit('choice', this.choice)
      }
    }
  }
</script>