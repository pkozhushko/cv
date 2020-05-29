<template>
  <div class="preloader-wrapper">
    <div class="loading">loading...</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    // loading: false,
  }),
  methods: {
    // start () {
    //   console.log('start')
    //   this.loading = true
    // },
    // finish () {
    //   setTimeout(() => {
    //     this.loading = false
    //   }, 1200); 
    // },

    // close() {
    //   this.$emit("closeModal");
    // }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";
@import "~/assets/main.scss";
@import "~/assets/media/getInTouch.scss";

.preloader-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.loading {
  display: block;
  position: absolute;
  top: 30vh;
  left: 15%;
  font-size: 22px;
  font-weight: 300;
  letter-spacing: 12px;
  color: #fff;
  overflow: hidden;
  background: linear-gradient(to right, $orange, $orange 50%, #fff 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 300% 100%;
  background-position: 100%;
  text-decoration: none; 
    -webkit-animation: load 2s linear infinite;
  animation: load 2s linear infinite;
  -webkit-animation-delay: 500ms;
  animation-delay: 500ms;
}

@-webkit-keyframes load {
//   0% {
//     left: 0px;
//   }
//   25% {
//     left: 25%;
//   }
//   50% {
//     left: 50%;
//   }
//   75% {
//     left: 75%;
//   }
  100% {
    background-position: 0 100%;
  }
}

@-webkit-keyframes dot {
  0% {
    content: "Loading";
  }
  25% {
    content: "Loading.";
  }
  50% {
    content: "Loading..";
  }
  75% {
    content: "Loading...";
  }
}
@keyframes dot {
  0% {
    content: "Loading";
  }
  25% {
    content: "Loading.";
  }
  50% {
    content: "Loading..";
  }
  75% {
    content: "Loading...";
  }
}
</style>