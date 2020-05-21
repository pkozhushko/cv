<template>
  <div class="avatar__wrapper">
    <section class="hero">
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";

.avatar__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100vh;
  width: 70vw;

  &>.hero {
    width: 100%;
    height: 100%;
    background-image: url("./../../static/icons/main.jpg");
    background-size: cover;
    background-position: 50% 50%;
    filter: brightness(80%);
  }
}

@media screen and ( max-width: 1500px ) {
  .avatar__wrapper {
    width: 60vw;
  }
}

@media screen and (max-width: 1700px) {
 .avatar__wrapper {
    width: 65vw;
  }
}

</style>

