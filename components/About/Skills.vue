<template>
  <div class="wrapper">
    <div class="item">
      <span>skills</span>
    </div>
    <transition-group name="list-item" tag="div" class="skills-wrapper">
        <div class="skill" v-for="skill in displayedSkills" :key="skill.id">
          <progress-bar :percentage="skill.percentage" :label="skill.name"></progress-bar>
        </div>
    </transition-group>

    <button class="btn-paginate-back" :disabled="page == 1" @click="page--"></button>
    <button class="btn-paginate-next" :disabled="page == pages.length" @click="page++"></button>

    <button class="btn btn-back" @click="goBack()"></button>
  </div>
</template>

<script>
import ProgressBar from "~/components/ProgressBar.vue";
export default {
  components: {
    ProgressBar
  },
  data() {
    return {
      page: 1,
      perPage: 8,
      pages: [],
      skills: [
        {
          id: 1,
          name: "HTML",
          percentage: 85
        },
        {
          id: 2,
          name: "CSS",
          percentage: 90
        },
        {
          id: 3,
          name: "JavaScript",
          percentage: 70
        },
        {
          id: 4,
          name: "Bootstrap",
          percentage: 70
        },
        {
          id: 5,
          name: "React",
          percentage: 40
        },
        {
          id: 6,
          name: "Redux",
          percentage: 25
        },
        {
          id: 7,
          name: "Vue",
          percentage: 85
        },
        {
          id: 8,
          name: "Vuex",
          percentage: 60
        },
        {
          id: 9,
          name: "Nuxt",
          percentage: 80
        },
        {
          id: 10,
          name: "Sass",
          percentage: 60
        },
        {
          id: 11,
          name: "Git",
          percentage: 70
        }
      ]
    };
  },
  created() {
    this.setPages();
  },
  computed: {
    displayedSkills() {
      return this.paginate(this.skills);
    }
  },
  methods: {
    goBack() {
      this.$emit("back");
    },
    setPages() {
      let numberOfPages = Math.ceil(this.skills.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(skills) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return skills.slice(from, to);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";
@import "~/assets/main.scss";
@import "~/assets/about.scss";
@import "~/assets/media/about.scss";


.skills-wrapper {
  width: 100%;
  height: calc(100% - 180px);
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.skill {
  display: block;
  width: 50%;
  padding-right: 20px;
  box-sizing: border-box;
}

.btn-paginate-back {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 120px;
  bottom: 95px;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;

  &:disabled {
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background: url("../../static/icons/back-disable.svg") center center
        no-repeat;
      transition: $transition;
    }
  }

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: url("../../static/icons/back-pagination.svg") center center
      no-repeat;
    transition: $transition;
  }
}
.btn-paginate-next {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 90px;
  bottom: 95px;
  cursor: pointer;
  background: transparent;
  border: none;
  padding: 0;

  &:disabled {
    &:after {
      background: url("../../static/icons/next-disable.svg") center center
        no-repeat;
    }
  }

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: url("../../static/icons/next-pagination.svg") center center
      no-repeat;
    transition: $transition;
  }
}



.list-item-enter-active, 
.list-item-leave-active {
  transition: opacity 0.3s, transform 0.3s;
  transform-origin: left center;
}
.list-item-enter, .list-item-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

.list-item-leave-active {
  position: absolute;
}

.list-item-move {
  transition: transform .4s linear .3;
}
</style>

