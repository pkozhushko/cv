<template>
  <div class="wrapper">
    <div class="item">
      <span>education</span>
    </div>
    <ul>
      <li class="studyPlace" v-for="place in studyPlaces" :key="place.id">
        <div class="studyPlace__name">{{ place.name }}<a :href="place.link" class="studyPlace__link" target="_blank"></a></div>
        
        <p class="studyPlace__faculty">{{ place.faculty }}</p>
        <p class="studyPlace__period">{{ place.period.from }} - {{ place.period.to }}</p>
      </li>
    </ul>

    <button class="btn btn-back" @click="goBack()"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studyPlaces: [
        {
          id: 1,
          name: "Lviv Polytechnic National University",
          link: "https://lpnu.ua/en",
          faculty: "Engineering mechanics",
          period: {
            from: "2009",
            to: "2014"
          }
        },
        {
          id: 2,
          name: "IT Step Academy",
          link: "https://lviv.itstep.org/",
          faculty: "Programming software C, C++, C#",
          period: {
            from: "2015",
            to: "2016"
          }
        }
      ]
    }
  },
  methods: {
    goBack() {
      this.$emit('back');
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";
@import "~/assets/main.scss";
@import "~/assets/about.scss";
@import "~/assets/media/about.scss";

.studyPlace {
  padding: 10px 0;
  font-size: 18px;
  font-weight: 600;

  &__name {
    // font: 600 18px/30px OpenSans;
    display: flex;
  }
  &__faculty {
    font-weight: 400;
    font-size: 0.9em;
  }
  &__link {
    margin: 5px;
    display: block;
    width: 20px;
    height: 20px;
    background: url("../../static/icons/link.svg") center center no-repeat;
  }
  &__period {
    font-size: 0.7em;
    font-weight: 300;
    opacity: 0.7;
  }
}
</style>

