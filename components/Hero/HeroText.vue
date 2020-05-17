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
  bottom: 240px;
  left: 380px;
  height: 360px;

  & > h2 {
    padding-bottom: 30px;
  }

  & > .btn {
    position: absolute;
    bottom: 0px;
  }
}
</style>

