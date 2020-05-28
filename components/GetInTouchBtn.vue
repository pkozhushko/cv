<template>
  <nuxt-link to="/getInTouch" class="get-in-touch__btn">
    <div class="message"></div>
  </nuxt-link>
</template>

<style lang="scss">
@import "~/assets/_fonts.scss";
@import "~/assets/_variables.scss";

.get-in-touch__btn {
  z-index: 5;
  position: absolute;
  left: 0;
  bottom: 0;
  width: $column-size;
  height: $column-size;
  background: $orange;
  
  &:hover .message {
    -webkit-animation: 1s tremor ease-out infinite;
    animation: 1s tremor ease-out infinite;
  }

  & > .message {
    width: 30px;
    height: 30px;
    margin: auto;
    margin-top: calc(50% - 15px);
    background-image: url("~static/icons/message_gray.svg");
  }
}

@-webkit-keyframes tremor {
  0%,
  25% {
    left: -1px;
    top: -1px;
    -webkit-transform: translateX(-15%);
    transform: translateX(-15%);
  }
  50%,
  100% {
    left: 1px;
    top: 1px;
    -webkit-transform: translateX(15%);
    transform: translateX(15%);
  }
}
@-moz-keyframes tremor {
  0%,
  25% {
    left: -1px;
    -webkit-transform: translateX(-15%);
    transform: translateX(-15%);
  }
  50%,
  100% {
    left: 1px;
    -webkit-transform: translateX(15%);
    transform: translateX(15%);
  }
}
@-ms-keyframes tremor {
  0%,
  25% {
    left: -1px;
    -webkit-transform: translateX(-15%);
    transform: translateX(-15%);
  }
  50%,
  100% {
    left: 1px;
    -webkit-transform: translateX(15%);
    transform: translateX(15%);
  }
}
@-o-keyframes tremor {
  0%,
  25% {
    left: -1px;
    -webkit-transform: translateX(-15%);
    transform: translateX(-15%);
  }
  50%,
  100% {
    left: 1px;
    -webkit-transform: translateX(15%);
    transform: translateX(15%);
  }
}
@keyframes tremor {
  0% {
    left: -1px;
    -webkit-transform: translateX(-15%);
    transform: translateX(-15%);
  }
  50% {
    left: 1px;
    -webkit-transform: translateX(15%);
    transform: translateX(15%);
  }
  100% {
    left: -1px;
    -webkit-transform: translateX(-15%);
    transform: translateX(-15%);
  }
}



</style>

