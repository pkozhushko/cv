<template>
  <section class="container">
    <h2>404</h2>
    <h4>Error</h4>
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";

.container {
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  overflow: hidden !important;
  color: $orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &>h2 {
      font: 900 130px/150px Poppins;
      opacity: 0.6;
  }
}
</style>

