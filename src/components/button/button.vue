<template>
  <button
    class="z-button"
    type="button"
    :disabled="disabled"
    :class="[
            size,
            {
              'spread': spread,
              'is-disabled': disabled,
              'is-round':round,
              'is-edge':edge,
              'is-shadow':shadow,
              'is-block':block,
              'is-circle': circle,
              'is-ghost': ghost,
              'is-dashed': dashed,
              [`icon-${iconPosition}`]: true,
              'icon-center': noChild,
              [`type-${type}`]: true,
            }
          ]"
    @click="clickBtn"
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
  data() {
    return {
      spread: false,
    };
  },
  props: {
    // 禁用按钮
    disabled: {
      type: Boolean,
      default: false,
    },
    // 按钮尺寸large/medium/small
    size: {
      type: String,
      default: 'large',
    },
    // 按钮样式default/primary/success/warning/error
    type: {
      type: String,
      default: 'default',
    },
    // 幽灵按钮
    ghost: {
      type: Boolean,
      default: false,
    },
    // 虚线按钮
    dashed: {
      type: Boolean,
      default: false,
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
    // icon位置 left/right
    iconPosition: {
      type: String,
      default: 'left',
      // 属性检查器（检查传入iconPosition的值）
      validator(val) {
        return !(val !== 'left' && val !== 'right');
      },
    },
  },
  computed: {
    // 判断插槽是否有输入内容；来设置icon是否有左右margin
    noChild() {
      return !(this.$slots.default && this.$slots.default.length !== 0);
    },
  },
  created() {
    // body监听touchstart并且回调为空函数，用来解决ios端:active不起作用
    document.body.addEventListener('touchstart', () => {
    });
  },
  methods: {
    clickBtn() {
      // 通过定时器设置按钮点击传播效果
      // 这里在定时器里设置spread为false；
      // 由于定时器的特性(一般情况下总是比设定时间大)只要设置时间和动画时间一样长就不会出错
      let timer;
      if (timer) clearTimeout(timer);
      this.spread = true;
      timer = setTimeout(() => {
        this.spread = false;
      }, 1000);
      this.$emit('click');
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../sass/var.scss";
@import "../../sass/animation.scss";
@import "../../sass/utils.scss";

/*默认按钮类型(后面的type类型覆盖这里)
*****************************************/
.z-button {
  // 按钮内部布局不会根据按钮类型改变
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  margin: 0;
  line-height: 1;
  // 按钮圆角根据选择（尖锐，大圆角，圆形）的样式将被覆盖
  border-radius: $radius-size-base;
  // 聚焦状态下的border设置为none
  box-sizing: border-box;
  outline: none;
  .content {
    // 字体加粗
    font-weight: $fontWeigth-bold;
  }
  border: 1px solid;
  @keyframes spread {
     0% {box-shadow: 0 0 0 0 rgba($color: $color-primary-pink, $alpha: .3);}
    10% {box-shadow: 0 0 0 6px rgba($color: $color-primary-pink, $alpha: .2);}
  100% {box-shadow: 0 0 0 6px rgba($color: $color-primary-pink, $alpha: 0);}
  }
}
// 不传type的按钮样式
.type-default {
  @include button-type($fontColor-white,$color-primary,$color-primary,type-default);
}
.type-primary {
  @include button-type($fontColor-white,$color-primary-pink,$color-primary-pink,type-primary);
}
.type-success {
  @include button-type($fontColor-white,$color-success,$color-success,type-success);
}
.type-warning {
  @include button-type($fontColor-white,$color-warning,$color-warning,type-warning);
}
.type-error {
  @include button-type($fontColor-white,$color-error,$color-error,type-error);
}
.is-block {
  width: 100%;
}
.is-round {
  border-radius: $radius-size-round;
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
    margin-left: 0.5em;
    order: 2;
  }
  > .content {
    order: 1;
  }
}
.icon-center {
  > .z-icon {
    margin: 0;
  }
}

/*按钮大小控制(里面控制字体大小和内边距)
*****************************************/
.large {
  font-size: $fontSize-m;
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
.is-circle {
  border-radius: $radius-size-circle;
  padding: 1em;
  > .z-icon {
    margin: 0;
  }
}
</style>
