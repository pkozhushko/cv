<template>
  <div class="logo__wrapper">
    <nuxt-link to="/" class="logo"></nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";
@import "~/assets/media/layout.scss";

.logo__wrapper {
  position: absolute;
  width: $column-size;
  height: $column-size;
  top: 0px;
  left: 0px;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;

  & > .logo {
    width: 30px;
    height: 30px;
    background: url("~static/icons/pk.svg") center center no-repeat;
  }
}
</style>

