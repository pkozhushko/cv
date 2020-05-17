<template>
  <div class="navigation__wrapper">
    <div class="links">
      <nuxt-link
        v-for="(option, i) in options"
        :key="i"
        :to="option.link"
        class="link"
        :class="{ 'current' : option.link == currentRoute }"
      >
        <div
          @mouseover="setHoveredWord(option.name)"
          @mouseleave="clearHoveredWord()"
        >{{ option.name }}</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
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

.navigation__wrapper {
  z-index: 5;
  width: calc(100% - 80px);
  position: absolute;
  bottom: 0;
  right: 0px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.links {
  width: 50%;
  display: flex;
  align-items: center;

  & > .link {
    color: $gray-second;
    font: 400 19px/29px OpenSans;
    padding-left: 14px;
    position: relative;
    display: block;
    margin-left: 80px;
    text-decoration: none;
    transition: $transition;

    &:before {
      content: "";
      width: 11px;
      height: 1px;
      background: $gray-second;
      position: absolute;
      left: 0px;
      bottom: 32%;
      transition: $transition;
    }

    &:hover {
      color: $white;
      &:before {
        background: $orange;
        width: 90%;
      }
    }
  }
  & > .current {
    color: $white;
    &:before {
      background: $orange;
    }
  }
}

.text-block {
  width: 500px;
  height: 100%;
  color: $orange;
  opacity: 0.5;
  font: 700 48px/80px OpenSans;
  position: relative;
  overflow: hidden;
}
.text {
  position: absolute;
  right: 100px;
}
.fade-enter-active,
.fade-leave-active {
  transition: $transition;
}

.fade-enter,
.fade-leave-to {
  right: -100%;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

</style>

