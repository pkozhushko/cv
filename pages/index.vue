<template>
  <section class="container">
    <div class="coordinates">
      <div class="coordinates__text">{{ coordinates.x }} {{ coordinates.y}}</div>
      <div>based in {{ city }}</div>
    </div>
    <avatar class="animation-second" />
    <hero-text class="animation-first" />
    <div class="dotted animation-first"></div>
  </section>
</template>

<script>
import Avatar from '~/components/Hero/Avatar.vue'
import HeroText from '~/components/Hero/HeroText.vue'

export default {
  components: {
    Avatar,
    HeroText
  },
  data() {
    return {
      city: 'Lviv',
      coordinates: {
        x: "49.8382600",
        y: "24.0232400"
      }
    }
  },
  mounted() {
    this.$bus.$emit('shuffle', '//hero')
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/_variables.scss';

.container {
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  overflow: hidden!important;
}
.coordinates {
  padding-left: 50px;
  position: absolute;
  top: calc(#{$column-size/2});
  right: $column-size;
  color: $orange;
  opacity: 0.8;
  font: 400 13px/19px OpenSans;
  letter-spacing: 9px;
  z-index: 5;  
  height: 19px;
  overflow-y: hidden;  

  &:before {
    content: '';
    width: 20px;
    height: 2px;
    background: $orange;
    position: absolute;
    left: 0px;
    top: calc(50% - 1px);
    transition: $transition;
  }

  &:hover:before{
    width: 30px;
  }

  &__text {
    transition: $transition;
  }

  &:hover .coordinates__text {
    margin-top: -19px;
  }

  
}
.dotted {
    position: absolute;
    bottom: 130px; 
    left: 500px;

    z-index: 5;
    background-image: -webkit-repeating-radial-gradient(center center, rgba(236, 236, 233, 0.3), rgba(236, 236, 233, 0.3) 0.5px, transparent 1px, transparent 100%);
    background-image: repeating-radial-gradient(center center, rgba(236, 236, 233, 0.2), rgba(236, 236, 233, 0.2) 0.5px, transparent 1px, transparent 100%);
    -webkit-background-size: 3px 3px;
    background-size: 10px 10px;
    
    width: 900px;
    height: 550px;
  }



@-webkit-keyframes fadeIn { from { left: 100%; } to { left:500px; } }
@-moz-keyframes fadeIn { from { left: 100%; } to { left:500px; } }
@keyframes fadeIn { from { left: 100%; } to { left:500px; } }

.fade-in {
  left: 100%;  /* make things invisible upon start */
  -webkit-animation:fadeIn ease-in 1;  /* call our keyframe named fadeIn, use animattion ease-in and repeat it only 1 time */
  -moz-animation:fadeIn ease-in 1;
  animation:fadeIn ease-in 1;

  -webkit-animation-fill-mode:forwards;  /* this makes sure that after animation is done we remain at the last keyframe value (opacity: 1)*/
  -moz-animation-fill-mode:forwards;
  animation-fill-mode:forwards;

  -webkit-animation-duration:1s;
  -moz-animation-duration:1s;
  animation-duration:1s;
}

.fade-in.one {
  -webkit-animation-delay: 0.7s;
  -moz-animation-delay: 0.7s;
  animation-delay: 0.7s;
}

.fade-in.two {
  -webkit-animation-delay: 1.2s;
  -moz-animation-delay:1.2s;
  animation-delay: 1.2s;
}

.fade-in.three {
  -webkit-animation-delay: 1.6s;
  -moz-animation-delay: 1.6s;
  animation-delay: 1.6s;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
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
  /* This section calls the slideInFromLeft animation we defined above */
  animation: 0.6s ease-out 0s 1 slideInFromRight;
}
.animation-second {  
  /* This section calls the slideInFromLeft animation we defined above */
  opacity: 0;
  animation: 0.5s ease-out 0.3s 1 slideInFromRight;
  animation-fill-mode:forwards;
}


@media screen and ( max-width: 1450px ) {
  .dotted {
    width: 650px;
    height: 450px;
    left: 400px;
  }
}
</style>

