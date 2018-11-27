<template>
  <button
    class="z-button"
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
    @click="$emit('click')"
  >
    <z-icon class="z-icon" v-if="icon||loading" :icon="icon" :loading="loading"></z-icon>
    <div class="content">
      <slot></slot>
    </div>
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
/*默认按钮类型(后面的type类型覆盖这里)
*****************************************/
.z-button {
  // 按钮内部布局不会根据按钮类型改变
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  // 按钮圆角根据选择（尖锐，大圆角，圆形）的样式将被覆盖
  border-radius: $radius-size-base;
  // 聚焦状态下的border设置为none
  box-sizing: border-box;
  outline: none;
  .content {
    font-weight: $fontWeigth-bold;
  }
  // 基本样式，根据按钮的type改变
  border: 1px solid $color-primary;
  background-color: $color-primary;
  color: $fontColor-white;
  // &:hover,
  // &:focus {
  //   background: ;
  //   border-color: ;
  //   color: ;
  // }
  // &:active {
  //   background: $--color-white;
  //   border-color: ;
  //   color: ;
  //   outline: none;
  // }
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
/*控制icon的左右
*****************************************/
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

/*按钮大小控制(里面控制字体大小和内边距)
*****************************************/
.large {
  font-size: $fontSize-s;
  padding: 14px 20px;
}
.medium {
  font-size: $fontSize-s;
  padding: 10px 20px;
}
.small {
  font-size: $fontSize-ss;
  padding: 7px 15px;
}
/*控制按钮类型{
    背景色，
    边框状态，
    并且按钮的点击悬浮聚焦等状态要根据按钮类型的颜色设置，
    点击按钮的动效果
  }
*****************************************/
</style>
