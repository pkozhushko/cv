<template>
  <div class="progress-bar">
    <div class="info">
			<label class="label">{{label}}</label>
      <label class="percentage">{{percentage}}%</label>
    </div>
    <div class="background-bar"></div>
    <transition appear @before-appear="beforeEnter" @after-appear="enter">
      <div class="tracker-bar"></div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
		percentage: Number,
		label: String
  },
  methods: {
    beforeEnter(el) {
      el.style.width = 0;
    },
    enter(el) {
      el.style.width = `${this.percentage}%`;
      el.style.transition = `width 1s linear`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";
@import "~/assets/media/about.scss";

.active {
  label {
    color: $orange;
  }
  .tracker-bar {
    background: $orange;
  }
}
.progress-bar {
  width: 100%;
  font-size: 15px;
  // font: 400 15px/21px OpenSans;
  &>.info {
    justify-content: space-between;
    display: flex;
		color: #fff;
		// opacity: 0.8;
  }
  .background-bar {
    background: #ccc;
    width: 100%;
    height: 5px;
  }

  .tracker-bar {
    background: $orange;
    height: 5px;
    width: 0;
    transition: width 0.5s linear;
    margin-top: -5px;
  }
}
</style>

