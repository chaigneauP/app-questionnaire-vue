import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Questionnaire from "./views/Questionnaire";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/questionnaire',
      name: 'Questionnaire',
      component: Questionnaire
    }
  ]
})
