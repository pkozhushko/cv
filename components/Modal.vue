<template>
  <div class="modal-wrapper">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <div class="btn-close" @click="close"></div>
        </slot>
      </header>
      <section class="modal-body">
        <slot></slot>
      </section>
      <footer class="modal-footer">
        <button type="button" class="btn" @click="close">Ok</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",

  methods: {
    close() {
      this.$emit("closeModal");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/_variables.scss";
@import "~/assets/main.scss";

.modal-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.modal {
  background: $gray;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 500px;
}

.modal-header {
  padding-top: 40px;
  display: flex;
}

.modal-header {
  justify-content: space-between;
  position: relative;
}

.modal-footer {
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
}

.modal-body {
  position: relative;
  text-align: center;
  padding: 40px 30px;
  color: $white;
  opacity: 0.8;
  & > .modal-text {
    font: 400 15px/19px OpenSans;
    padding-bottom: 15px;
  }

  & > .modal-success {
    font: 700 33px/50px NunitoSans;
    // color: $orange;
    // opacity: 0.5;
  }
  & > .modal-error {
    font: 700 33px/50px NunitoSans;
    // color: $warning;
    // opacity: 1;
  }
}

.btn-close {
  border: none;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  transition: $transition;
  background: url("../static/icons/close.svg") center center no-repeat;
}

</style>