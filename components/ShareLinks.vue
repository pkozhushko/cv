<template>
  <div class="aside-block__wrapper">    
    <div class="line"></div>
    <ul class="links-wrapper">
      <li v-for="(link, i) in shareLinks" :key="i" class="link box" @click="goTo(link.url)">
        <div class="icon" :class="[link.name]"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
      ],     
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

.aside-block__wrapper {
  z-index: 5;
  width: $column-size;
  height: calc(100% - #{2 * $column-size});
  position: absolute;
  top: $column-size;
  left: 0px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  & > .line {
    display: block;
    border-right: 1px solid #ffffff;
    border-color: rgba(100, 100, 100, 0.5);
    margin-bottom: 30px;
    height: 250px;
  }
}

.links-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 30px;

  & > .box {
    width: 30px;
    height: 30px;
    position: relative;
    cursor: pointer;
    margin: 20px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: transparent;
      -webkit-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
    }

    & > .icon {
      display: block;
      width: 100%;
      height: 100%;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
      background: #363636;
    }
    & > .instagram {
      background: url("../static/icons/instagram.svg") center center no-repeat;
    }
    & > .facebook {
      background: url("../static/icons/facebook.svg") center center no-repeat;
    }
    & > .linkedin {
      background: url("../static/icons/linkedin.svg") center center no-repeat;
    }

    &:hover .instagram {
      background-image: url("../static/icons/instagram_hover.svg");
    }
    &:hover .facebook {
      background-image: url("../static/icons/facebook_hover.svg");
    }
    &:hover .linkedin {
      background-image: url("../static/icons/linkedin_hover.svg");
    }
  }
}
</style>

