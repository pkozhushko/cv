<template>
  <div class="container">
    <figure class="photo-wrapper">
      <div class="image"></div>
    </figure>

    <div class="header-question">
      <h2>Are you looking for</h2>
      <h2>
        a
        <span>front-end</span> developer?
      </h2>
    </div>

    <div class="main-block">
      <transition name="slideRight" mode="out-in">
        
        <div class="main-block__info" v-if="selected == 'menu'">
          <div class="text">
            <p>If you have an application you are interested in developing, a problem that needs solving or a project that needs rescuing, I'd love to help you with it.</p>
            <p>I am professional, communicative & punctual software engineer with extensive web development skills.</p>
          </div>
          

          <div class="buttons">
            <a href="docs/kozhushko_cv.pdf" class="btn download-btn" download></a>
            <nuxt-link to="/getInTouch" class="btn message-btn"></nuxt-link>
          </div>

          <ul class="items">
            <li class="item" @click="goTo('education')">
              <span>Education</span>
            </li>
            <li class="item" @click="goTo('workExperience')">
              <span>Work experience</span>
            </li>
            <li class="item" @click="goTo('skills')">
              <span>Skills</span>
            </li>
          </ul>
        </div>
      </transition>
      <transition-group name="slide" mode="out-in">
        <education
          key="education"
          @back="goTo('menu')"
          v-if="selected == 'education'"
          class="main-block__info"
        />
        <work-experience
          key="work-experience"
          @back="goTo('menu')"
          v-if="selected == 'workExperience'"
          class="main-block__info"
        />
        <hobbies
          key="hobbies"
          @back="goTo('menu')"
          v-if="selected == 'hobbies'"
          class="main-block__info"
        />
        <skills
          key="skills"
          @back="goTo('menu')"
          v-if="selected == 'skills'"
          class="main-block__info"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Education from "~/components/About/Education.vue";
import Skills from "~/components/About/Skills.vue";
import WorkExperience from "~/components/About/WorkExperience.vue";
export default {
  components: {
    Skills,
    Education,
    WorkExperience
  },
  data() {
    return {
      selected: "menu"
    };
  },
  mounted() {
    this.$bus.$emit("shuffle", "//about");
  },
  methods: {
    goTo(key) {
      this.selected = key;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";
@import "~/assets/main.scss";
@import "~/assets/media/about.scss";

.btn-menu {
  position: absolute;
  bottom: 70px;
  left: 470px;
}
.container {
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  overflow: hidden !important;
}
.header-question {
  max-width: 900px;
  position: absolute;
  top: 125px;
  right: 80px;
  overflow: hidden;
  text-align: right;
  padding: 20px;
  opacity: 0.3;
  z-index: 10;
  animation: slideFromTop 1.5s ease-in-out;
  font-family: Poppins;
  font-size: 60px;
  line-height: 0.7;

  & > h2 {
    letter-spacing: -4px;
    color: $white;
    & > span {
      padding: 0 10px;
      font-style: italic;
      color: $orange;
    }
  }
}
.main-block {
  position: absolute;
  top: 30%;
  left: 25%;
  width: 70%;
  height: 60%;
  background: $gray;
  color: #fff;
  z-index: 1;
  overflow: hidden;
  display: flex;

  &__info {
    position: absolute;
    top: 0px;
    right: 0;
    width: 70%;
    height: 100%;
    // padding-top: 70px;
    // padding-right: 70px;
    padding: 70px 70px 0 70px;
    display: flex;
    flex-direction: column;
    font-size: 19px;
    & > p {
      color: $white;
      opacity: 0.6;
    }
  }
}
.text {
  width: 100%;
}
.buttons {
  margin-top: 20px;
  height: 51px;
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  line-height: 2;

  & > .btn {
    text-align: center;
    width: 50%;
    height: 100%;
    margin: 0 10px;
    font: inherit!important;
  }

  & > .download-btn,
  .message-btn {
    overflow: hidden;
    position: relative;

    &:before {
      content: "download cv";
      display: block;
      position: absolute;
      top: 0%;
      left: 0px;
      width: 100%;
      height: 100%;
      padding: 10px 40px;
      transition: $transition;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: -100%;
      left: 0px;
      width: 100%;
      height: 100%;
      background: url("../../static/icons/download.svg") center center no-repeat;
      transition: $transition;
    }
  }
  .message-btn {
    &:before {
      content: "get in touch";
    }
    &:after {
      background: url("../../static/icons/message_gray.svg") center center
        no-repeat;
    }
  }
  & > .download-btn:hover,
  .message-btn:hover {
    &:before {
      opacity: 0;
      top: 100%;
    }
    &:after {
      top: 0px;
    }
  }
}
.items {
  // position: absolute;
  // bottom: 80px;
  margin-top: 80px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
}
.item {
    white-space: nowrap;
    width: min-content;
    position: relative;
    cursor: pointer;
    font-family: Poppins;
    font-size: 40px;
    line-height: 50px;

    & > span {
      text-transform: uppercase;
      transition: $transition;
      color: #aaaaaa;
      opacity: 0.4;
      
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 15px;
      left: -10px;
      width: 25px;
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

.photo-wrapper {
  position: absolute;
  top: 26%;
  left: 19%;
  width: 27%;
  height: 60%;
  overflow: hidden;
  z-index: 10;
  animation: slideFromLeft 0.8s ease-in-out;

  &:before {
    content: "petro.kozhushko";
    font: 400 15px/20px OpenSans;
    text-align: right;
    letter-spacing: 12px;
    color: $white;
    opacity: 0.5;
    position: absolute;
    top: 45px;
    left: 14px;
    width: 380px;
    height: 20px;
    background: $gray;
    z-index: 1;
  }
  &:after {
    content: "//";
    position: absolute;
    top: 35px;
    left: 25px;
    font: 600 65px/40px OpenSans;
    color: $orange;
    z-index: 2;
  }
}
.image {
  width: 100%;
  height: 100%;
  background-image: url("./../../static/icons/avatarMain.jpg");
  background-size: cover;
  background-position: 50% 50%;
}

@keyframes slideFromTop {
  0% {
    top: -100px;
    opacity: 0;
  }
}
@keyframes slideFromLeft {
  0% {
    left: 0px;
    opacity: 0;
  }
}

.slideRight-enter-active,
.slideRight-leave-active {
  transition: transform 0.4s ease-in-out;
}

.slideRight-enter,
.slideRight-leave-to {
  transform: translateX(-100%);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}


</style>

