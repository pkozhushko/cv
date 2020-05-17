<template>
  <div class="main-wrapper">
    <logo />
    <lines-effect />
    <share-links />
    <get-in-touch-btn />
    <shuffle-letter />
    <navigation />
    <nuxt />
  </div>
</template>

<script>
import LinesEffect from "~/components/LinesEffect.vue";
import Logo from "~/components/Logo.vue";
import ShareLinks from "~/components/ShareLinks.vue";
import GetInTouchBtn from "~/components/GetInTouchBtn.vue";
import ShuffleLetter from "~/components/ShuffleLetter.vue";
import Navigation from "~/components/Navigation.vue";

export default {
  components: {
    LinesEffect,
    ShareLinks,
    Logo,
    GetInTouchBtn,
    ShuffleLetter,
    Navigation
  }
};
</script>

<style lang="scss">
@import "~/assets/_fonts.scss";
@import "~/assets/_variables.scss";

html {
  font-family: OpenSans;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

*::selection {
  background-color: $orange;
  color: $black;
}

ul,
ol {
  padding: 0;
  list-style: none;
}

.main-wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.shuffle-letter__wrapper {
  position: fixed;
  top: 10px;
  left: $column-size;
  z-index: 10;
  user-select: none;

  & > span {
    color: $white-second;
    // opacity: 0.2;
    font: 900 100px/150px Poppins;
    text-transform: uppercase;

    &:nth-child(-n + 2) {
      color: $orange;
      opacity: 0.2;
    }
  }
}
</style>

