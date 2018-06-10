<template>
  <section class="footer">
    <footer class="footy">
      <div class="container">
        <h1 class="title has-text-centered is-6">Our Social Media</h1>
      </div>
      <div class="container-fluid social">
        <div class="card-footer cardCenter">
          <span class="card-footer-item">
            <a href="https://www.facebook.com/campagnadiaz" target="_blank" class="button is-link">
              <i class="fa fa-facebook"></i>
            </a>
          </span>
          <span class="card-footer-item">
            <a href="https://www.youtube.com/" target="_blank" class="button is-danger">
              <i class="fa fa-youtube"></i>
            </a>
          </span>
          <span class="card-footer-item">
            <a href="https://twitter.com/wilmercampagna?lang=es" target="_blank" class="button is-info">
              <i class="fa fa-twitter"></i>
            </a>
          </span>
          <span class="card-footer-item">
            <a href="https://github.com/wilmercampagna" target="_blank" class="button is-primary">
              <i class="fa fa-github"></i>
            </a>
          </span>
        </div>
      <h4 class="title has-text-centered is-6">With ❤ by wilmercampagna</h4>
      </div>
    </footer>
  </section>
</template>

<style lang="scss" scoped>
.footy {
  align-content: floor($number: 0);
}
.footy {
  padding: 15px;
  background-color: rgba(25, 25, 10, 0.1);
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
}
.card-footer-item {
  max-width: 100px;
  border: none;
}
.cardCenter {
  display: flex;
  justify-content: center;
  border: none;
}
</style>
