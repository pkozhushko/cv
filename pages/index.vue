<template>
  <section class="container">
    <div class="coordinates">
      <div class="coordinates__text">
        <p>{{ coordinates.x }}</p>
        <p>{{ coordinates.y}}</p>
      </div>
      <div class="city">based in {{ city }}</div>
    </div>
    <avatar class="animation-second" />
    <hero-text  />
    <div class="dotted animation-first"></div>
  </section>
</template>

<script>
import Avatar from "~/components/Hero/Avatar.vue";
import HeroText from "~/components/Hero/HeroText.vue";

export default {
  components: {
    Avatar,
    HeroText
  },
  data() {
    return {
      city: "Lviv",
      coordinates: {
        x: "49.8382600",
        y: "24.0232400"
      }
    };
  },
  mounted() {
    this.$bus.$emit("shuffle", "//hero");
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";
@import "~/assets/media/hero.scss";

.coordinates {
  padding-left: 50px;
  position: absolute;
  top: calc(#{$column-size/2});
  right: $column-size;
  color: #fff;
  opacity: 0.8;
  font-size: 13px;
  letter-spacing: 9px;
  z-index: 5;
  height: 40px;
  overflow-y: hidden;

  &:before {
    content: "";
    width: 20px;
    height: 1px;
    background: $orange;
    position: absolute;
    left: 0px;
    top: calc(50% - 1px);
    transition: $transition;
  }

  &:hover:before {
    width: 30px;
  }

  &__text {
    transition: $transition;
  }

  &:hover .coordinates__text {
    margin-top: -40px;
  }
  & > .city {
    line-height: 40px;
  }
}
.dotted {
  position: absolute;
  bottom: 130px;
  left: 500px;

  z-index: 5;
  background-image: -webkit-repeating-radial-gradient(
    center center,
    rgba(236, 236, 233, 0.3),
    rgba(236, 236, 233, 0.3) 0.5px,
    transparent 1px,
    transparent 100%
  );
  background-image: repeating-radial-gradient(
    center center,
    rgba(236, 236, 233, 0.2),
    rgba(236, 236, 233, 0.2) 0.5px,
    transparent 1px,
    transparent 100%
  );
  background-size: 10px 10px;

  width: 900px;
  height: 550px;
}

@keyframes fadeIn {
  from {
    left: 100%;
  }
  to {
    left: 500px;
  }
}

.fade-in {
  left: 100%;
  animation: fadeIn ease-in 1;
  animation-fill-mode: forwards;
  animation-duration: 1s;
}

.fade-in.one {
  animation-delay: 0.7s;
}

.fade-in.two {
  animation-delay: 1.2s;
}

.fade-in.three {
  animation-delay: 1.6s;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animation-first {
  animation: 0.6s ease-out 0s 1 slideInFromRight;
}
.animation-second {
  opacity: 0;
  animation: 0.6s ease-out 0.3s 1 slideInFromRight;
  animation-fill-mode: forwards;
}

</style>

