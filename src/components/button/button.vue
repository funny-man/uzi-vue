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
              'is-circle': circle,
              [`icon-${iconPosition}`]: true
            }
          ]"
  >
  <z-icon class="z-icon" v-if="icon||loading" :icon="icon" :loading="loading"></z-icon>
  <div class="content"><slot></slot></div>
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
    iconPosition: {
      type: String,
      default: 'left',
      // 属性检查器（检查传入iconPosition的值）
      validator(val) {
        return !(val !== 'left' && val !== 'right');
      },
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../sass/var.scss";
@import "../../sass/animation.scss";
.z-icon {
  margin-right: 0.5em;
}
.z-button {
  padding: 0;
  border: none;
  background-color: $color-primary;
  border-radius: $radius-size-base;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  .content {
    font-weight: $fontWeigth-bold;
  }
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
  padding: 1em !important;
  line-height: 0;
  > .z-icon {
    margin: 0 !important;
  }
}
.is-edge {
  border-radius: 0;
}
// 控制icon的左右
.icon-left {
  > .z-icon {
    order: 1;
    margin-right: 0.5em;
  }
  > .content {
    order: 2;
  }
}
.icon-right {
  > .z-icon {
    margin-right: 0;
    margin-left: 0.5em;
    order: 2;
  }
  > .content {
    order: 1;
  }
}

// 按钮大小控制
.large {
  color: $fontColor-white;
  font-size: $fontSize-s;
  padding: 14px 20px;
}
.medium {
  color: $fontColor-white;
  font-size: $fontSize-s;
  padding: 10px 20px;
}
.small {
  color: $fontColor-white;
  font-size: $fontSize-ss;
  padding: 7px 15px;
}
</style>
