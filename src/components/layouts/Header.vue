<template>
  <div class="">
    <nav class="navbar is-primary">
      <div class="container marger">
        <div class="navbar-brand">
          <a href="" class="navbar-item">
            <img src="@/assets/logo.png" alt="Logo">
          </a>
          <a class="navbar-item is-hidden-mobile"> {{ $t('home') }} </a>
          <a class="navbar-item">
            <div class="field has-addons">
              <div class="control is-expanded">
                <input type="search" class="input has-text-centered" v-bind:placeholder="$t('search')">
              </div>
              <div class="control">
                <div class="button is-info">
                  <a href="" class="">
                    <i class="fa fa-search"></i>
                  </a>
                </div>
              </div>
            </div>
          </a>
          <a class="navbar-item avpadl">
              <img src="@/assets/avatar.png" alt="logo" class="avatar">
            </a>
            <a class="navbar-item avpadr is-hidden-mobile">
              wilmercampagna
            </a>
          <span class="navbar-burger burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
          </span>
        </div>
        <div class="navbarMenu navbar-menu is-pulled-right">
          <div class="navbar-end">
            <a class="navbar-item">
              <i class="fa fa-bell fa-lg"></i>
            </a>
            <a class="navbar-item">
              <i class="fa fa-question-circle fa-lg"></i>
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <span class="navbar-item">
                <a class="button is-primary">
                  <i class="fa fa-globe fa-lg"></i>
                </a>
              </span>
              <div class="navbar-dropdown">
                <a class="navbar-item" @click="selectLang('en')">🇬🇧</a>
                <a class="navbar-item" @click="selectLang('es')">🇪🇸</a>
              </div>
            </div>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link"></a>
              <div class="navbar-dropdown">
                <a class="navbar-item"> Dashboard </a>
                <a class="navbar-item"> Profile </a>
                <a class="navbar-item"> Settings </a>
                <hr class="navbar-divider">
                <div class="navbar-item"> logout </div>
              </div>
            </div>
            <span class="navbar-item">
              <a href="" class="button is-danger" v-on:click="logOut">
                <i class="fa fa-sign-out is-4"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to you Vuejs App'
    }
  },
  methods: {
    logOut: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      }
      )
    },
    selectLang (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style lang="scss">
  .avatar {
    border-radius: 50%;
  }
  .avpadl {
    padding-right: 0px;
  }
  .avpadr {
    padding-left: 5px;
  }
</style>
