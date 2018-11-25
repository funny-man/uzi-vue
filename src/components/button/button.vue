<template>
  <button class="z-button"
          type="button"
          :class="[size,{'is-round':round,'is-edge':edge,'is-shadow':shadow,'is-block':block}]"
  >
  <svg class="icon">
    <use class="icon-font" xlink:href="#i-loading"></use>
  </svg>
  <slot></slot>
  </button>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'z-button',
  props: {
    size: {
      type: String,
      default: 'large',
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    edge: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
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
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    margin-right: 8px;
    @include rotate-line;
    opacity: .6;
  }
  .z-button {
    margin: 0;
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
