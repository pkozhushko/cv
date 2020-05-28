<template>
  <div class="shuffle-letter__wrapper">
    <span class="letter" v-for="(letter, i) in htmlWord" :key="i">
      {{letter}}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      word: "//",
      lowerLetters: "abcdefghijklmnopqrstuvwxyz0123456789",
      upperLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      symbols: ",.?/\\(^)![]{}*&^%$#'\"",
      htmlWord: "",
      framesPerCycle: 5,
      openedLetter: 0,
      speed: 30,
    };
  },
  methods: {
    startShuffling() {
      let fullTime = this.speed * this.framesPerCycle * this.word.length;
      let cycle = 0;

      let timerId = setInterval(() => {
        cycle++;

        if (cycle == this.framesPerCycle) {
          this.openedLetter++;
          cycle = 0;
        }
        this.htmlWord = this.getWordInMomemt();
      }, this.speed);

      setTimeout(() => {
        clearInterval(timerId);
        this.htmlWord = this.word;
      }, fullTime);
    },
    getRandomLetter() {
      let num = Math.floor(this.lowerLetters.length * Math.random());
      return this.lowerLetters.charAt(num);
    },
    getWordInMomemt() {
      let iterator = this.word.length - this.openedLetter;
      let wordInMomemt = this.word.slice(0, this.openedLetter);

      for (let i = 0; i < iterator; i++) {
        wordInMomemt = wordInMomemt + this.getRandomLetter();
      }
      return wordInMomemt;
    },
    dataZeroing() {
      this.word = "";
      this.htmlWord = "";
      this.openedLetter = 0;
    }
  },
  mounted() {
    this.$bus.$on("shuffle", data => {
      this.dataZeroing();
      this.word = this.word + data;
      this.startShuffling();
    });
  },
};
</script>

<style lang="scss">
@import "~/assets/_variables.scss";
@import "~/assets/media/layout.scss";

.shuffle-letter__wrapper {
  position: absolute;
  top: 10px;
  left: $column-size;
  z-index: 10;
  user-select: none;
  color: $white-second;
}


.letter {
    color: inherit;
    font-family: Poppins;
    font-size: 100px;
    line-height: 1.75;
    text-transform: uppercase;

    &:nth-child(-n + 2) {
      color: $orange;
      opacity: 0.2;
    }
  }

</style>



