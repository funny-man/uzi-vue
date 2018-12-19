<template>
  <div class="input-wrapper"
       :class="{
        'is-disabled': disabled,
        'is-readonly': readonly,
        'is-prefix': prefix,
        'is-suffix': suffix
       }"
    >
    <input class="input"
           :type="type"
           :placeholder="placeholder"
           :value="value?value:''"
           :disabled="disabled"
           :readonly="readonly"
           @change="$emit('change',$event)"
           @input="$emit('input',$event.target.value)"
           @focus="$emit('focus',$event)"
           @blur="$emit('blur',$event)"
    />
    <z-icon class="z-icon" v-show="prefix||suffix" :icon="prefix||suffix"></z-icon>
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
    value: {
      type: String,
      default: null
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
    // 只读
    readonly: {
      type: Boolean,
      default: false
    },
    prefix: {
      type: String,
      default: null
    },
    suffix: {
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
    display: block;
    position: relative;
    .z-icon {
      color: $fontColor-primary-6;
    }
    .input {
      line-height: 1.5;
      width: 100%;
      box-sizing: border-box;
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
  .is-prefix {
    @include input-icon(left);
  }
  .is-suffix {
    @include input-icon(right);
  }
  .is-readonly {
    >.input {
      &:hover {
        border-color: $color-gray-light-8;
        &+.z-icon {
          color: $fontColor-primary-6;
        }
      }
      &:focus {
        outline: none;
        border-color: $color-gray-light-8;
        animation: none;
        &+.z-icon {
          color: $fontColor-primary-6;
        }
      }
    }
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
