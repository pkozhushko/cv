<template>
  <div class="main-wrapper">
    <logo />
    <lines-effect />
    <burger />

    
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
import Burger from "~/components/Burger.vue";

export default {
  components: {
    LinesEffect,
    ShareLinks,
    Logo,
    GetInTouchBtn,
    ShuffleLetter,
    Navigation,
    Burger
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
  background: $black;
  position: relative;
}



</style>

