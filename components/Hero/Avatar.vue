<template>
  <div class="avatar__wrapper">
    <img src="~/static/icons/main.jpg" class="avatar" alt="avatar" />
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";

.avatar__wrapper {
  position: absolute;
  top: 0px;
  right: 0;
  max-height: 100vh;

  & > .avatar {
    max-width: 100%;
    max-height: 900px;
    width: auto;
    filter: brightness(80%);
  }
}
</style>

