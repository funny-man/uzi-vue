<template>
  <div class="input-wrapper"
       :class="{
        'is-disabled': disabled,
        'is-left': leftIcon,
        'is-right': rightIcon
       }">
    <input class="input" :type="type" :placeholder="placeholder" :disabled="disabled" />
    <z-icon class="z-icon" v-show="leftIcon||rightIcon" :icon="leftIcon||rightIcon"></z-icon>
  </div>
</template>

<script type="text/ecmascript-6">
import Icon from '../icon/icon.vue';

export default {
  name: 'z-input',
  components: {
    'z-icon': Icon
  },
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
    },
    leftIcon: {
      type: String,
      default: null
    },
    rightIcon: {
      type: String,
      default: null
    }
  }
};
</script>

<style scoped lang="scss">
  @import '../../sass/var.scss';
  @import '../../sass/animation.scss';
  @import "../../sass/utils.scss";

  .input-wrapper {
    font-size: 16px;
    display: inline-block;
    position: relative;
    .z-icon {
      color: $fontColor-primary-6;
    }
    .input {
      line-height: 1.5;
      padding: 7px 15px;
      border: 1px solid $color-gray-light-8;
      color: $fontColor-primary-1;
      border-radius: 3px;
      -webkit-appearance: none;
      &::placeholder {
        color: $fontColor-primary-6;
      }
      &:hover {
        border-color: $color-primary;
        &+.z-icon {
          color: $color-primary;
        }
      }
      &:focus {
        outline: none;
        border-color: $color-primary;
        @include input-focus;
        &+.z-icon {
          color: $color-primary;
        }
      }
    }
  }
  .is-left {
    @include input-icon(left);
  }
  .is-right {
    @include input-icon(right);
  }
  .is-disabled {
    >.input {
      background-color: $color-gray-light-10;
      border-color: $color-gray-light-9;
      cursor: not-allowed;
      &::placeholder {
        color: $fontColor-primary-8;
      }
      &:hover {
        background-color: $color-gray-light-10;
        border-color: $color-gray-light-9;
        &+.z-icon {
          color: $fontColor-primary-8;
        }
      }
      &[disabled='disabled'] {
        // 禁用状态下浏览器样式差异
        opacity: 1;
      }
    }
    >.z-icon {
      color: $fontColor-primary-8;
    }
  }
</style>
