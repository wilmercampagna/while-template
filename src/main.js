// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from '@/routes'

import firebase from 'firebase'

import { } from '@/tasks/initFirebase'

import i18n from '@/tasks/i18n'

let app
Vue.config.productionTip = false

/* eslint-disable no-new */

firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      i18n,
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
