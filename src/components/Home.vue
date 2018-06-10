<template>
  <div>
    <py-header></py-header>
    <div class="container cim">
      <img src="@/assets/stack.png" alt="">
    </div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-content">
                <h2 class="title">"Quote"</h2>
                <h3 class="subtitle">Programer</h3>
              </div>
              <footer class="card-footer">
                <span class="card-footer-item">
                  <a href="#" class="button is-success">
                    <i class="fa fa-thumbs-o-up"></i>
                  </a>
                </span>
                <span class="card-footer-item">
                  <a href="#" class="button is-danger">
                    <i class="fa fa-thumbs-o-down"></i>
                  </a>
                </span>
                <span class="card-footer-item">
                  <a href="#" class="button is-info">
                    <i class="fa fa-retweet"></i>
                  </a>
                </span>
              </footer>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-content">
                <h2 class="title">"Quote"</h2>
                <h3 class="subtitle">Programer</h3>
              </div>
              <footer class="card-footer">
                <span class="card-footer-item">
                  <a href="#" class="button is-success">
                    <i class="fa fa-thumbs-o-up"></i>
                  </a>
                </span>
                <span class="card-footer-item">
                  <a href="#" class="button is-danger">
                    <i class="fa fa-thumbs-o-down"></i>
                  </a>
                </span>
                <span class="card-footer-item">
                  <a href="#" class="button is-info">
                    <i class="fa fa-retweet"></i>
                  </a>
                </span>
              </footer>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="card-content">
                <h2 class="title">"Quote"</h2>
                <h3 class="subtitle">Programer</h3>
              </div>
              <footer class="card-footer">
                <span class="card-footer-item">
                  <a href="#" class="button is-success">
                    <i class="fa fa-thumbs-o-up"></i>
                  </a>
                </span>
                <span class="card-footer-item">
                  <a href="#" class="button is-danger">
                    <i class="fa fa-thumbs-o-down"></i>
                  </a>
                </span>
                <span class="card-footer-item">
                  <a href="#" class="button is-info">
                    <i class="fa fa-retweet"></i>
                  </a>
                </span>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
    <py-footer></py-footer>
  </div>
</template>

<script>

import PyHeader from '@/components/layouts/Header'
import PyFooter from '@/components/layouts/Footer'

export default {
  name: 'Home',
  components: { PyHeader, PyFooter }
}
</script>

<style lang="scss" scoped>
  .cim {
    display: inline-grid;
    justify-content: center;
    margin: 100px;
  }
</style>
