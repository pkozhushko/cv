<template>
  <div class="lines__wrapper">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";

.lines__wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // width: 100vw;
  // height: 100vh;

  .line {
    position: absolute;
    width: 1px;
    height: 100%;
    top: 0;
    left: 50%;
    background: rgba(255, 255, 255, 0.1);

    &::after {
      content: "";
      display: block;
      position: absolute;
      height: 20px;
      width: 4px;
      top: -50%;
      right: 0;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        $orange 0%,
        $orange 100%
      );
      animation: run 7s 0s infinite;
    }
    &:nth-child(1) {
      margin-left: -35%;
      &::after {
        height: 20px;
        width: 3px;
        animation-delay: 2s;
        animation: runToTop 8s 0s infinite;
      }
    }
    &:nth-child(3) {
      margin-left: -10%;
      &::after {
        height: 40px;
        width: 1px;
        animation-delay: 3.5s;
      }
    }
    &:nth-child(4) {
      margin-left: 20%;
      &::after {
        animation: runToTop 13s 0s infinite;
        height: 30px;
        width: 3px;
        animation-delay: 1s;
      }
    }
    &:nth-child(5) {
      margin-left: 40%;
      &::after {
        height: 20px;
        width: 5px;
        animation-delay: 1.5s;
      }
    }
  }
}

@keyframes run {
  0% {
    top: -10%;
  }
  100% {
    top: 110%;
  }
}

@keyframes runToTop {
  0% {
    top: 110%;
  }
  100% {
    top: -10%;
  }
}
</style>

