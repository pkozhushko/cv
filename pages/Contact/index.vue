<template>
  <div class="container contact-container">
    <client-only>
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="30"
        :particleSize="2"
        :hoverEffect="true"
        shapeType="circle"
        hoverMode="grab"
        :clickEffect="true"
        class="particles"
      ></vue-particles>
    </client-only>
    <div class="contact-wrapper">
      <div class="info">
        <div class="phone">
          <span>phone:</span>
          <a class="link" href="tel:+380631734957">+380631734957</a>
        </div>
        <div class="email">
          <span>email:</span>
          <a class="link" href="mailto:pkozhushko.work@gmail.com">pkozhushko.work@gmail.com</a>
        </div>
        <div class="address">
          <span>address:</span>
          <a class="link" href="https://goo.gl/maps/cMb29BKG5XPLjT4T6" target="_blank">Lviv, Ukraine</a>
        </div>
        <div class="soc-networks">
          <ul class="links-wrapper">
            <li v-for="(link, i) in shareLinks" :key="i" class="link box" @click="goTo(link.url)">
              <div class="icon" :class="[link.name]"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShareLinks from "~/components/ShareLinks.vue";
export default {
  components: {
    ShareLinks
  },
  mounted() {
    this.$bus.$emit("shuffle", "//contact");
  },
  data() {
    return {
      shareLinks: [
        {
          name: "instagram",
          url: "https://www.instagram.com/petro.kozhushko/"
        },
        {
          name: "facebook",
          url: "https://www.facebook.com/pkozhushko"
        },
        {
          name: "linkedin",
          url: "https://www.linkedin.com/in/pkozhushko"
        }
      ]
    };
  },
  methods: {
    goTo(url) {
      window.open(url, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";
@import "~/assets/media/contact.scss";

.container {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  
  overflow: hidden;
  z-index: 1;
}
.contact-container {
  width: 100%;
  height: calc(100% - 80px);
  padding: $column-size;
}
.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  background: $black;
  border-top: 1px solid rgba(175, 175, 175, 0.3);
  border-bottom: 1px solid rgba(175, 175, 175, 0.3);
  animation: slideFromBottom 1s ease-in-out;
  z-index: 5;
}

.contact-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -40px;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}

.info {
  width: 800px;
  height: 400px;
  background: $white-second;
  animation: leftSlideFirst 1.5s ease-in-out;
  animation-delay: 0.6s;
  animation-fill-mode: both;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  position: relative;
  padding: 50px 70px;

  &:before {
    content: "petro.kozhushko";
    position: absolute;
    bottom: 0px;
    top: 0px;
    left: -70px;
    display: block;
    font-family: Poppins;
    font-size: 45px;
    line-height: 1.25;
    color: $white-second;
    width: min-content;
    transform: rotate(-90deg);
    user-select: none;
    animation: leftSlideSecond 1.2s ease-in-out;
    animation-delay: 1.5s;
    animation-fill-mode: both;
    z-index: 10;
  }
}

.phone,
.email,
.address {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 60%;
  height: 30px;
  line-height: 30px;
  font-family: OpenSans;
  font-size: 15px;
  font-weight: 300;
  line-height: 20px;
  &:before {
    content: "";
    display: block;
    width: 30px;
    height: 30px;
    margin: 0 10px;
  }
  & > span {
    display: inline-block;
    width: 20%;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  & > .link {
    color: inherit;
    text-decoration: none;
    transition: $transition;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &:hover {
      color: $orange;
    }
  }
}

.phone {
  &:before {
    background: url("../../static/icons/phone.svg") center center no-repeat;
  }
}
.email {
  &:before {
    background: url("../../static/icons/message.svg") center center no-repeat;
  }
}
.address {
  &:before {
    background: url("../../static/icons/location.svg") center center no-repeat;
  }
}

.soc-networks {
  // margin-left: 30%;
  // margin-top: 50px;
  border-top: 1px solid $gray-second;
  position: relative;
  width: 40%;
}
.links-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  
  & > .box {
    width: 30px;
    height: 30px;
    position: relative;
    cursor: pointer;
    margin: 20px;
    z-index: 10;

    & > .instagram {
      background: url("../../static/icons/instagram_light.svg") center center
        no-repeat;
    }
    & > .facebook {
      background: url("../../static/icons/facebook_light.svg") center center
        no-repeat;
    }
    & > .linkedin {
      background: url("../../static/icons/linkedin_light.svg") center center
        no-repeat;
    }

    &:hover .instagram {
      background-image: url("../../static/icons/instagram_hover.svg");
    }
    &:hover .facebook {
      background-image: url("../../static/icons/facebook_hover.svg");
    }
    &:hover .linkedin {
      background-image: url("../../static/icons/linkedin_hover.svg");
    }
  }
}
.icon {
      display: block;
      width: 100%;
      height: 100%;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
      background: #363636;
    }
@keyframes slideFromBottom {
  0% {
    bottom: -100%;
  }
  100% {
    bottom: 0px;
  }
}

@keyframes leftSlideFirst {
  0% {
    margin-left: -100%;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes leftSlideSecond {
  0% {
    left: -400px;
    opacity: 0;
  }
  100% {
    opacity: 1;
    left: -70px;
  }
}
</style>

