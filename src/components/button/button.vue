<template>
  <button class="z-button"
          type="button"
          :class="[
            size,
            {
              'is-round':round,
              'is-edge':edge,
              'is-shadow':shadow,
              'is-block':block,
              'is-circle': circle
            }
          ]"
  >
  <z-icon class="z-icon" v-if="icon||loading" :icon="icon" :loading="loading"></z-icon>
  <slot></slot>
  </button>
</template>

<script type="text/ecmascript-6">
import Icon from '../icon/icon.vue';

export default {
  name: 'z-button',
  components: {
    'z-icon': Icon,
  },
  props: {
    // 按钮尺寸
    size: {
      type: String,
      default: 'large',
    },
    // 最大圆角
    round: {
      type: Boolean,
      default: false,
    },
    // 圆形
    circle: {
      type: Boolean,
      default: false,
    },
    // 直角按钮
    edge: {
      type: Boolean,
      default: false,
    },
    // 阴影
    shadow: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    // 块状按钮
    block: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../sass/var.scss';
@import '../../sass/animation.scss';
  .z-icon {
    margin-right: 8px;
    vertical-align: middle;
  }
  .z-button {
    padding: 0;
    border: none;
    background-color: $color-primary;
    border-radius: $radius-size-base;
  }
  .is-block {
    width: 100%;
  }
  .is-shadow {
    box-shadow: $btn-shadow-base;
  }
  .is-round {
    border-radius: $radius-size-round;
  }
  .is-circle {
    border-radius: $radius-size-circle;
    padding: 13px!important;
    line-height: 0;
    >.z-icon {
      margin-right: 0;
    }
  }
  .is-edge {
    border-radius: 0;
  }
  .large {
    color: $fontColor-white;
    font-size: $fontSize-s;
    font-weight: $fontWeigth-bold;
    padding: 14px 22px;
  }
  .medium {
    color: $fontColor-white;
    font-size: $fontSize-s;
    font-weight: $fontWeigth-bold;
    padding: 10px 22px;
  }
  .small {
    color: $fontColor-white;
    font-size: $fontSize-ss;
    font-weight: $fontWeigth-bold;
    padding: 7px 16px;
  }
</style>
