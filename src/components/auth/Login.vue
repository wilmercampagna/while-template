<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="box">
        <div class="tile is-parent">
          <article class="tile is-child">
            <div class="container-fluid">
              <figure class="image marb">
                <img class="image" src="@/assets/colorB.png">
              </figure>
            </div>
            <h1 class="title is-4 has-text-centered"> {{ $t('login') }} </h1>
            <div class="block">
              <p class="control has-icons-left has-icons-right">
                <input type="email" v-model="email" v-bind:placeholder="$t('email')" class="input">
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fa fa-check"></i>
                </span>
              </p>
              <p class="control has-icon">
                <input type="password" v-model="password" @keyup.enter="login" v-bind:placeholder="$t('password')" class="input">
                <span class="icon is-small">
                  <i class="fa fa-lock"></i>
                </span>
              </p>
              <a class="button is-info is-outlined is-half" v-on:click="login">
                <span class="icon">
                  <i class="fa fa-sign-in fa-lg"></i>
                </span>
                <span>Go</span>
              </a>
            </div>
            <h4 href="#" class="subtitle is-6 has-text-centered" to="logout"> {{ $t('acc1') }}
              <router-link to="sign-in"> {{ $t('acc2') }} </router-link>
            </h4>
            <h4 href="#" class="subtitle is-6 has-text-centered"> {{ $t('orlog') }} </h4>
            <footer class="card-footer">
              <span class="card-footer-item">
                <a href="#" class="button is-danger" @click="loginGoogle">
                  <i class="fa fa-google"></i>
                </a>
              </span>
              <span class="card-footer-item">
                <a href="#" class="button is-link" @click="loginfacebook">
                  <i class="fa fa-facebook"></i>
                </a>
              </span>
              <span class="card-footer-item">
                <a href="#" class="button is-info" @click="logintwitter">
                  <i class="fa fa-twitter"></i>
                </a>
              </span>
              <span class="card-footer-item">
                <a href="#" class="button is-primary">
                  <i class="fa fa-phone"></i>
                </a>
              </span>
            </footer>
          </article>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <h4 class="title has-text-right is-6">
          Do it by wilmercampagna
        </h4>
      </div>
    </footer>
  </section>
</template>

<script>

// import firebase from 'firebase'
import emailAuth from '@/tasks/firebaseLogin/emailAuth'
import googleAuth from '@/tasks/firebaseLogin/googleAuth'
import facebookAuth from '@/tasks/firebaseLogin/facebookAuth'
import twitterAuth from '@/tasks/firebaseLogin/twitterAuth'

export default {
  name: 'Login',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: emailAuth,
    loginGoogle: googleAuth,
    loginfacebook: facebookAuth,
    logintwitter: twitterAuth
  }
}

</script>

<style lang="scss" scoped>
  .hero {
    background: black url(../../assets/vuebc1.png) center / cover;
  }
  @media (max-width: 1280px) {.hero {background: black url(../../assets/vuebc2.png) center / cover;}}
  @media (max-width: 640px) {.hero {background: black url(../../assets/vuebc3.png) center / cover;}}
  .hero-body {
    justify-content:flex-end;
  }
  .container-fluid {
    display:flex;
    justify-content: center;
  }
  .box {
    background-color: rgba(67,83,100,0.4);
    border: groove;
    border-color: #4CB986;
  }
  .block p {
    margin-bottom: 10px;
  }
  .block {
    margin-bottom: 0.7rem !important;
  }
  h4 {
    margin-bottom: 0.9rem !important;
  }
  .footer {
    padding: 0;
    background-color: rgba(25,25,10,0.1);
  }
  .marb {
    margin-bottom: 15px;
    max-width: 150px
  }
  .card-footer {
    border-top: none;
  }
  .card-footer-item {
    border: none;
  }
</style>
