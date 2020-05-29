<template>
  <div class="burger__wrapper">
    <Slide right :closeOnNavigation="true" >
      <nuxt-link
        v-for="(option, i) in options"
        :key="i"
        :to="option.link"
        class="link"
        :class="{ 'current' : option.link == currentRoute }"
      >
        <span>{{ option.name }}</span>
      </nuxt-link>
    </Slide>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";
export default {
  components: {
    Slide
  },
  data() {
    return {
      currentRoute: "",
      hoveredLink: "",
      options: [
        {
          name: "Hero",
          link: "/"
        },
        {
          name: "About",
          link: "/about"
        },
        {
          name: "Contact",
          link: "/contact"
        },
        {
          name: "Get In Touch",
          link: "/getInTouch"
        }
      ]
    };
  },
  methods: {
    setHoveredWord(word) {
      this.hoveredLink = word;
    },
    clearHoveredWord() {
      this.hoveredLink = "";
    }
  },
  created() {
    this.currentRoute = this.$router.currentRoute.path;
  },
  watch: {
    $route(to, from) {
      if (this.currentRoute !== this.$router.currentRoute) {
        this.currentRoute = this.$router.currentRoute.path;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";
@import "~/assets/media/layout.scss";

.burger__wrapper {
  width: 70px;
  height: 70px;
  z-index: 11;
  position: fixed;
  right: 0px;
  display: none;
  font-family: Poppins;
}
.link  {
    white-space: nowrap;
    // width: min-content;
    // position: relative;
    // cursor: pointer;
    // font-family: Poppins;
    // font-size: 40px;
    // line-height: 50px;

    // & > span {
    //   text-transform: uppercase;
    //   transition: $transition;
    //   color: #aaaaaa;
    //   opacity: 0.4;
      
    // }
    // &:after {
    //   content: "";
    //   display: block;
    //   position: absolute;
    //   bottom: 15px;
    //   left: -10px;
    //   width: 25px;
    //   height: 1px;
    //   background: $orange;
    //   transition: $transition;
    // }

    // &:hover {
    //   & > span {
    //     opacity: 1;
    //   }
    //   &:after {
    //     width: 100%;
    //   }
    // }
  }
/deep/ {
  .bm-burger-button {
    position: absolute;
    top: 24px;
    right: 22px!important;
    width: 25px;
    height: 20px;
    cursor: pointer;
  }
  .bm-burger-bars {
    background: $orange;
  }
  .line-style {
    position: absolute;
    height: 1px;
    width: 90%;
    left: 0;
    right: 0;
    background: $orange !important;
  }
  .cross-style {
    display: none;
  }
  .bm-cross {
    // position: absolute;
    // left: 10px;
    // top: 10px;
    // height: 34px;
    // width: 34px;
    // background: url("~static/icons/message.svg") center center no-repeat;
    display: none;
  }
  .bm-cross-button {
    display: block;
    position: absolute;
    left: 10px;
    top: 20px;
    height: 25px;
    width: 25px;
    background: url("~static/icons/close.svg") center center no-repeat;
    outline: none;
    border-radius: 25%;
  }
  .bm-menu {
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1000; /* Stay on top */
    top: 0;
    left: 0;
    background-color: $gray; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 80px; /* Place content 60px from the top */
    transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
  }

  .bm-overlay {
    background: rgba(180, 5, 5, 0.3);
  }
  .bm-item-list {
    color: $orange;
    // background: #000;
    margin-left: 0!important;
  }
  .bm-item-list > * {
    display: flex;
    text-decoration: none;
    padding: 0.7em;
    
    position: relative;

    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 40%;
      // left: -10px;
      width: 15px;
      height: 1px;
      background: $orange;
      transition: $transition;
    }

    &:hover {
      & > span {
        opacity: 1;
      }
      &:after {
        width: 100%;
      }
    }
  }
  .bm-item-list > * > span {
    user-select: none;
    text-transform: uppercase;
    transition: $transition;
    color: #aaaaaa;
    opacity: 0.4;
    font-size: 24px;
    
  }
}
</style>

