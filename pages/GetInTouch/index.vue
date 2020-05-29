<template>
  <section class="container" :class="{ 'container-disabled' : showModal || showPreloader }">
    <!-- <div class="wrapp"> -->
      <div class="title">Message <span>me</span></div>
        <form
          @submit.prevent="sendMessage"
          class="form-wrapper"
          v-if="!showModal && !showPreloader"
        >
          <div class="field">
            <p v-show="userError.name" class="error-text">{{ userError.name }}</p>
            <input
              type="text"
              class="form-control"
              :class="{'not-valid': userError.name}"
              v-model="userData.name"
              autocomplete="off"
              @keyup.esc="clearUserField('name')"
              @blur="validate('name')"
              @focus="unvalidate('name')"
            />
            <div class="icon" :class="{ 'icon__active' : userData.name }">
              <div class="name"></div>
            </div>
            <span class="floating-label" v-show="!userData.name">Name</span>
          </div>

          <div class="field">
            <p v-show="userError.email" class="error-text">{{ userError.email }}</p>
            <input
              type="text"
              class="form-control"
              :class="{'not-valid': userError.email}"
              v-model="userData.email"
              autocomplete="off"
              @keyup.esc="clearUserField('email')"
              @focus="unvalidate('email')"
              @blur="validate('email')"
            />
            <div class="icon" :class="{ 'icon__active' : userData.email }">
              <div class="email"></div>
            </div>
            <div class="floating-label" v-show="!userData.email">Email</div>
          </div>

          <div class="field">
            <p v-show="userError.message" class="error-text">{{ userError.message }}</p>
            <textarea
              class="form-control message__wrapper"
              :class="{'not-valid': userError.message}"
              v-model="userData.message"
              autocomplete="off"
              @keyup.esc="clearUserField('message')"
              @focus="unvalidate('message')"
              @blur="validate('message')"
            ></textarea>
            <div class="icon" :class="{ 'icon__active' : userData.message }">
              <div class="message"></div>
            </div>
            <span class="floating-label" v-show="!userData.message">Message</span>
          </div>
          <button type="submit" class="btn">Send</button>
        </form>

        <preloader v-else-if="showPreloader" />
        <modal v-else-if="showModal && sentSuccessfuly" @closeModal="closeModalAndClearData">
          <h4 class="modal-text">Your message was sent successfully.</h4>
          <h2 class="modal-success">Thanks!</h2>
        </modal>

        <modal v-else-if="showModal && !sentSuccessfuly" @closeModal="closeModal">
          <h4 class="modal-text">Your message was not sent.</h4>
          <h2 class="modal-error">Please try again!</h2>
        </modal>
    <!-- </div> -->
    <div class="dotted"></div>
  </section>
</template>

<script>
import axios from "axios";
import Modal from "~/components/Modal.vue";
import Preloader from "~/components/Preloader.vue";

export default {
  components: {
    Modal,
    Preloader
  },
  data() {
    return {
      errors: {
        name: "",
        email: "",
        message: ""
      },
      name: "",
      email: "",
      message: "",

      userData: {
        name: "",
        email: "",
        message: ""
      },
      userError: {
        name: false,
        email: false,
        message: false
      },
      validator: {
        email: () => {
          let val = this.userData.email.trim();
          let reg = /^(([^<>()\[\]\\.,;:#~`!*№\{\}\=\|\^\&\+\?\s@"]+(\.[^<>()\[\]\\.,;:#~`!*№\^\&\+\?\s@"]+)*)|(".+"))@((\[[0-9]{1,63}\.[0-9]{1,63}\.[0-9]{1,63}\.[0-9]{1,63}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,63}))$/;
          let reg2 = /^(?!\+ \- :$)(.*)$/;
          let cyryllicReg = /([а-яёА-ЯЁ])/;

          if (val.length === 0) {
            return "You forgot to type email";
          } else if (
            !reg.test(val) ||
            !reg2.test(val) ||
            cyryllicReg.test(val)
          ) {
            if (!/@/g.test(val)) {
              return "No @ in your email";
            } else if (!/\./g.test(val.slice(val.indexOf("@")))) {
              return "No dot in your email";
            } else {
              return "Invalid email";
            }
          } else {
            return "";
          }
        },

        name: () => {
          let reg = /^[A-Za-zÀ-ÖØ-öø-ÿ'\u0400-\u04FF\s]+$/g;
          let val = this.userData.name.trim();
          if (val.length === 0) {
            return "Hi, I'm Petro, and you are...";
          } else if (val.length < 2) {
            return "Too short name";
          } else if (val.length > 60) {
            return "Too long name";
          } else if (!reg.test(val)) {
            return "invalid name";
          } else {
            return "";
          }
        },
        message: () => {
          let val = this.userData.message.trim();
          if (val.length === 0) {
            return "Don't be so shy, type me something";
          } else if (val.length < 4) {
            return "You Can Do More! :)";
          } else if (val.length > 350) {
            return "Woooow, it's too much! No longer 350 symbols";
          } else {
            return "";
          }
        }
      },
      sentSuccessfuly: false,
      showModal: false,
      showPreloader: false
    };
  },
  mounted() {
    this.$bus.$emit("shuffle", "//get in touch");
  },
  methods: {
    validate(key) {
      this.userError[key] = this.validator[key]();
    },
    unvalidate(key) {
      this.userError[key] = '';
    },
    clearUserField(key) {
      this.userData[key] = "";
    },
    clearData() {
      this.userData.name = "";
      this.userData.email = "";
      this.userData.message = "";
    },
    closeModal() {
      this.showModal = false;
    },
    closeModalAndClearData() {
      this.showModal = false;
      this.clearData();
    },
    validateData() {
      this.validate('name');
      this.validate('email');
      this.validate('message');
    },
    sendMessage() {
      this.validateData();
      for (let key in this.userError) {
        if (this.userError[key]) return;
      }

      this.showPreloader = true;

      axios
        .post(
          "https://getform.io/f/b7fcd9e9-8dc1-4cab-bcd2-b5e1992e8d7f",
          this.userData,
          {
            headers: {
              Accept: "application/json"
            }
          }
        )
        .then(
          response => {
            this.showPreloader = false;
            this.showModal = true;
            this.sentSuccessfuly = response.data.success ? true : false;
          }
        )
        .catch(
          err => {
            this.showPreloader = false;
            this.sentSuccessfuly = false;
          }
        );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";
@import "~/assets/main.scss";
@import "~/assets/media/getInTouch.scss";

.container {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  &-disabled {
    z-index: 100;
  }
}

.title {
    position: absolute;
    top: 510px;
    left: 60%;
    font-family: Poppins;
    font-size: 92px;
    line-height: 0.6;
    letter-spacing: -4px;
    color: #fff;
    opacity: 0.8;
    animation: slideFromTop 1.5s ease-in-out;
    animation-fill-mode: both;

    &>span {
      position: absolute;
      top: 80%;
      left: 80%;
      color: $orange;
      font-style: italic;
    }
  }

.form-wrapper {
  position: relative;
  left: 25%;
  top: 270px;
  width: 540px;
  display: flex;
  flex-direction: column;
  z-index: 20;
  font-size: 16px;
  font-weight: 300;

  & > .field {
    position: relative;
    margin: 18px 0;
    border-radius: 0px!important;

    & > .error-text {
      position: absolute;
      top: -22px;
      left: 20px;
      padding-left: 25px;
      color: $warning;
      font-size: 14px;

      &::after {
        content: "";
        display: block;
        position: absolute;
        left: 0px;
        top: 0px;
        width: 20px;
        height: 20px;
        background: url("../../static/icons/warning.svg") center center
          no-repeat;
      }
    }
  }
}

.floating-label {
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 10px;
  transition: $transition;
  color: $white;
  padding-left: 45px;
  font: inherit;
  line-height: 1.75;
}

.icon {
  position: absolute;
  top: 10px;
  left: 20px;
  width: 30px;
  height: 30px;
  transition: $transition;
}
.name {
  width: 100%;
  height: 100%;
  background: url("~static/icons/person.svg") center center no-repeat;
}
.email {
  width: 100%;
  height: 100%;
  background: url("~static/icons/email.svg") center center no-repeat;
}
.message {
  width: 100%;
  height: 100%;
  background: url("~static/icons/message.svg") center center no-repeat;
}

.form-control:focus ~ .icon,
.icon__active {
  position: absolute;
  left: -50px;
  z-index: 20;
}
.form-control:focus ~ .floating-label {
  display: none;
}

.form-control:focus {
  background: rgb(209, 209, 209);
  color: $black;
}

.form-control {
  width: 100%;
  border: none;
  outline: none;
  box-sizing: content-box;
  border: 1px solid rgba(232, 235, 237, 0.4);
  background: $gray;
  color: $white;
  padding: 10px 20px;
  box-sizing: border-box;
  transition: $transition;
  position: relative;
  font: inherit;
  line-height: 1.75;
}

.not-valid {
  border: 1px solid $warning-secondary;
}
.message__wrapper {
  resize: none;
  height: 200px;
}

.btn {
  width: 270px;
  margin: 0 auto;
}

.dotted {
  position: absolute;
  bottom: 160px;
  right: 15%;

  z-index: 1;
  background-image: -webkit-repeating-radial-gradient(
    center center,
    rgba(236, 236, 233, 0.2),
    rgba(236, 236, 233, 0.2) 0.6px,
    transparent 1px,
    transparent 100%
  );
  background-image: repeating-radial-gradient(
    center center,
    rgba(236, 236, 233, 0.5),
    rgba(236, 236, 233, 0.5) 0.5px,
    transparent 1px,
    transparent 100%
  );
  background-size: 5px 5px;

  width: 50%;
  height: 600px;
}

.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}


@keyframes slideFromTop {
  0% {
    top: -100px;
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
  }
}

</style>

