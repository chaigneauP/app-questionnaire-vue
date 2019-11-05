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
  export default {
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

<style scoped>
  #question {
    height: 80%;
    display: grid;
    grid-template-columns: 0.8fr 1fr 1fr 1fr 1fr 0.8fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  #span-question {
    grid-column: 2/6;
    grid-row: 2/3;
    font-size: 20px;
  }

  #input-response {
    grid-column: 2/6;
    grid-row: 3/5;
  }
</style>