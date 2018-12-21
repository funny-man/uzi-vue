/*
 * @Author: zee
 * @Date: 2018-12-21 09:55:31
 * @Last Modified by: zee
 * @Last Modified time: 2018-12-21 11:26:38
 */
<template>
<div class="z-row"
     :class="{
       [`is-${type}`]:true,
       [`is-justify-${justify}`]:true,
       [`is-align-${align}`]:true
     }"
     :style="`marginLeft:-${gutter?gutter/2:0}px;marginRight:-${gutter?gutter/2:0}px`"
  >
  <slot></slot>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'z-row',
  components: {
  },
  props: {
    // 间隔
    gutter: [Number, String],
    // 类型默认普通的浮动布局；可传flex使用flex布局
    type: {
      type: String,
      default: 'float'
    },
    // 用于渲染的标签默认div
    tag: {
      type: String,
      default: 'dev'
    },
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    },
  }
};
</script>

<style scoped lang="scss">
  @import '../../sass/var.scss';
  @import '../../sass/animation.scss';
  @import "../../sass/utils.scss";
  .z-row {
    display: block;
    box-sizing: border-box;
    position: relative;
  }
  .is-float {
    @include utils-clearfix;
  }
  .is-flex {
    display: flex;
  }
  // flex布局下的参数
  .is-justify-center {
    justify-content: center;
  }
  .is-justify-end {
    justify-content: flex-end;
  }
  .is-justify-space-between {
    justify-content: space-between;
  }
  .is-justify-space-around {
    justify-content: space-around;
  }
  .is-align-middle {
    align-items: center;
  }
  .is-align-bottom {
    align-items: flex-end;
  }
</style>
