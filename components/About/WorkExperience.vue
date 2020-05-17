<template>
  <div class="wrapper">
    <div class="item">
      <span>experience</span>
    </div>
    <transition-group name="slideRight" mode="out-in" class="company-block">
      <div class="company-block" v-if="!selectedWork" key="workList">
        <ul>
          <span class="section">Companies:</span>
          <li class="workPlace" v-for="place in workPlaces" :key="place.id" @click="goTo(place)">
            <div class="workPlace__name">{{ place.name }}</div>
            <div class="workPlace__period">
              {{ place.period.from }} - {{ place.period.to }}
              <span class="slide">more info</span>
            </div>
          </li>
        </ul>
        <button class="btn btn-back" @click="goBack()"></button>
      </div>

      <!-- selected company -->
      <div class="company-block" v-else key="selectedCompany">
        <div class="info">
          <p class="name">{{selectedWork.name}}</p>
          <p class="period">({{ selectedWork.period.from }} - {{ selectedWork.period.to }})</p>
        </div>
        <ul class="projects">
          <span class="section">Projects:</span>
          <li class="project" v-for="project in selectedWork.projects" :key="project.id">
            <div class="project__name">{{ project.name }} </div><span class="project__description">({{ project.description }})</span>
          </li>
          
        </ul>
        <p class="section">Technologies:</p>
        <span v-for="(technology,i) in selectedWork.technologies" :key="i" class="technology">{{technology}}</span>
        <button class="btn btn-back" @click="goTo()"></button>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedWork: "",
      workPlaces: [
        {
          id: 1,
          name: "InternetCash",
          period: {
            from: "August 2019",
            to: "now"
          },
          technologies: ["HTML", "JS", "Vue.js", "Nuxt", "Sass"],
          projects: [
            {
              id: 1,
              name: "MyID",
              description: "Single source of access to all projects",
              tasks: "Project support, bug fixing, code review"
            },
            {
              id: 2,
              name: "E-tickets",
              description: "Ticket service",
              tasks: "Change the logic of the program, bug fixing, code review"
            },
            {
              id: 3,
              name: "Esvoe",
              description: "Social network",
              tasks: "HTML coding, project development"
            },
            {
              id: 4,
              name: "CryptoExchanger",
              description: "Site to analyze the growth and purchase of cryptocurrency",
              tasks: "HTML coding, project development"
            }
          ]
        }
      ]
    };
  },
  methods: {
    goBack() {
      this.$emit("back");
    },
    goTo(key) {
      console.log(key);
      this.selectedWork = key;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";
@import "~/assets/main.scss";
@import "~/assets/about.scss";
.company-block {
  width: 100%;
  height: 100%;
}
.info {
  position: absolute;
  right: 70px;
  z-index: 1;
  text-align: right;

  & > .name {
    font: 900 40px/45px Poppins;
    opacity: 0.2;
  }
}
.technology {
  margin-right: 10px;
}
.item {
  margin-bottom: 20px;
}
.workPlace {
  position: relative;
  margin: 10px 0;
  display: flex;

  &:hover {
    .workPlace__name {
      opacity: 1;
      &:before {
        width: 90%;
      }
    }
    .workPlace__period .slide {
      bottom: 0px;
    }
  }
  &__name {
    opacity: 0.7;
    font: 400 18px/20px OpenSans;
    letter-spacing: 0.5px;
    position: relative;
    width: min-content;
    white-space: nowrap;
    cursor: pointer;
    transition: $transition;

    &:before {
      content: "";
      width: 0%;
      height: 1px;
      background: $orange;
      opacity: 1;
      position: absolute;

      left: -10px;
      top: 70%;
      transition: $transition;
    }
  }
  &__period {
    width: 180px;
    text-align: center;
    color: #fff;
    font: 300 14px/20px OpenSans;
    opacity: 1;
    padding: 0px 20px;
  }
}
.projects {
    position: relative;
    overflow: hidden;
  }
.project {
  margin: 5px 0px;

  &__name {
    padding-left: 12px;
    font: 400 18px/20px OpenSans;
    display: flex;
    position: relative;
    width: min-content;
    white-space: nowrap;

    &:before {
      content: "";
      width: 10px;
      height: 1px;
      background: $orange;
      opacity: 0.7;
      position: absolute;

      left: 0px;
      top: 70%;
      transition: $transition;
    }
  }
  &__description {
    font: 300 14px/20px OpenSans;
    letter-spacing: 0.2px;
    opacity: 0.8;
    padding: 0px 10px;
  }
}
.section {
  font: 400 16px/25px OpenSans;
  opacity: 0.5;
}

.workPlace__period {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 20px;
  color: $gray-second;
  font: 400 14px/25px OpenSans;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.slide {
  position: absolute;
  left: 0px;
  bottom: -100%;
  width: 100%;
  height: 100%;
  background: $gray;
  color: $gray-second;
  opacity: 1;
  font: 400 14px/25px OpenSans;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: $transition;
  cursor: pointer;
}

.slideRight-enter-active,
.slideRight-leave-active {
  transition: transform 0.4s ease;
}

.slideRight-enter,
.slideRight-leave-to {
  transform: translateX(-100%);
}
</style>


