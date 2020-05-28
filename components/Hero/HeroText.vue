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
@import "~/assets/media/hero.scss";

.hero-text__wrapper {
  color: $white;
  font-family: Poppins;
  font-size: 47px;
  line-height: 1.5;
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

</style>

