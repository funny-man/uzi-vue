<template>
  <div class="input-wrapper">
    <input class="input"
           :type="type"
           :placeholder="placeholder"
           :disabled="disabled"
           :class="{'is-disabled':disabled}"
    />
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'z-input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    // 禁用input
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../sass/var.scss';
@import '../../sass/animation.scss';
.input-wrapper {
  font-size: 14px;
  .input {
    padding: 10px 15px;
    border: 1px solid $color-gray-light-8;
    color: $fontColor-primary-1;
    border-radius: 3px;
    &::placeholder {
      color: $fontColor-primary-6;
    }
    &:hover {
      border-color: $color-primary;
    }
    &:focus {
      outline: none;
      border-color: $color-primary;
      animation: .2s rotate ease-out forwards;
      @keyframes rotate {
        0% {box-shadow: 0 0 0 0 rgba($color: $color-primary, $alpha: 0);}
        100% {box-shadow: 0 0 0 3px rgba($color: $color-primary, $alpha: .2);}
      }
    }
    &.is-disabled {
      background-color: $color-gray-light-10;
      border-color: $color-gray-light-9;
      cursor: not-allowed;
      &::placeholder {
        color: $fontColor-primary-8;
      }
    }
  }
}
</style>
