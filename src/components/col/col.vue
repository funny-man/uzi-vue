/*
 * @Author: zee
 * @Date: 2018-12-21 09:55:17
 * @Last Modified by: zee
 * @Last Modified time: 2018-12-21 11:27:52
 */
<template>
<div class="z-col"
     :class="{
       [`z-col-${span}`]:true,
       [`z-col-offset-${offset}`]:true
     }"
     :style="`paddingLeft:${gutter?gutter/2:0}px;paddingRight:${gutter?gutter/2:0}px`"
>
  <slot></slot>
</div>
</template>

<script type="text/ecmascript-6">

export default {
  name: 'z-col',
  components: {
  },
  computed: {
    // 通过$parent获取父组件的gutter值
    gutter() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'z-row') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter * 1 : 0;
    }
  },
  props: {
    span: {
      type: [Number, String],
      default: 0
    },
    offset: {
      type: [Number, String],
      default: 0
    }
  }
};
</script>

<style scoped lang="scss">
  @import '../../sass/var.scss';
  @import '../../sass/animation.scss';
  @import "../../sass/utils.scss";
  .z-col {
    display: block;
    box-sizing: border-box;
    position: relative;
  }

  .z-col-0 {
    display: none;
  }
  @for $n from 1 through 24 {
    .z-col-#{$n} {
      width: ($n/24)*100%;
      float: left;
    }
    .z-col-offset-#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
</style>
