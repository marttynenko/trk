<template>
  <div class="search" v-if="isOpen">
    <div class="search-form">
      <div class="search-form-close" @click.prevent="close"></div>
      <form @submit.prevent="toSearchPage">
        <input type="text" class="search-form-input" :placeholder="$t('hint')" v-model="query" ref="input">
        <button type="submit" class="search-form-btn">{{ $t('hint') }}</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false,
      query: ''
    }
  },

  methods: {
    close() {
      this.isOpen = false
    },

    async open() {
      this.isOpen = true
      await this.$nextTick()
      this.$refs.input.focus();
    },

    toSearchPage() {
      if (this.query.length <= 2) return
      this.$router.push(this.localePath('/search/'+this.query))
      this.close()
    }
  }
}
</script>

<style lang="scss">
.search {
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translate(0,-50%);
  right: 70px;
  background: #FFF;
  z-index: 999;

  &-form {
    position: relative;

    &-input {
      display: block;
      width: 100%;
      height: 62px;
      padding: 0px 100px 0px 25px;
      border-radius: 0;
      border: 1px solid #fefefe;
      outline: none;

      &:hover {
        border-color: #EEE;
      }
      &:focus {
        border-color: $primary;
      }
    }

    &-btn {
      position: absolute;
      border: 0;
      padding: 0;
      margin: 0;
      background-color: transparent;
      font-size: 0;
      text-indent: -9999px;
      width: 40px;
      height: 40px;
      right: 55px;
      top: 50%;
      transform: translate(0, -50%);
      background-image: url(@/assets/images/glass.svg?inline);
      background-position: center;
      background-repeat: no-repeat;
      background-size: 20px;
      cursor: pointer;
    }

    &-close {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translate(0, -50%);
      cursor: pointer;
      width: 30px;
      height: 30px;

      &:before,
      &:after {
        content: "";
        position: absolute;
        left: 5px;
        right: 5px;
        top: 50%;
        height: 1px;
        background: #000;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }
  }

  @media (max-width: 576px) {
    right: 0px;

    &-form {
      &-input {
        padding-left: 15px;
        padding-right: 80px;
      }
      &-close {
        right: 10px;
      }

      &-btn {
        right: 35px;
        background-size: 20px;
      }
    }
  }
}
</style>

<i18n>
{
  "ru": {
    "hint": "Искать"
  },
  "by": {
    "hint": "Шукаць"
  }
}
</i18n>