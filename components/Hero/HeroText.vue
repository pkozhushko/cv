<template>
  <div class="hero-text__wrapper">
    <h2>Hello!</h2>
    <p>My name is Petro Kozhushko</p>
    <p>and I am web developer</p>

    <nuxt-link to="/about" class="btn">get acquainted</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";
@import "~/assets/main.scss";

.hero-text__wrapper {
  color: $white;
  font: 900 47px/72px Poppins;
  position: absolute;
  bottom: 35%;
  left: 20%;

  & > h2 {
    padding-bottom: 30px;
  }
  
  & > .btn {
    position: absolute;
    bottom: -100px;
  }
}

@media screen and ( max-width: 1450px ) {
  .hero-text__wrapper {
    font: 900 37px/50px Poppins;
  }
}
</style>

