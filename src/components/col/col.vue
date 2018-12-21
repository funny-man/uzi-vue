/*
 * @Author: zee
 * @Date: 2018-12-21 09:55:17
 * @Last Modified by: zee
 * @Last Modified time: 2018-12-21 17:37:01
 */
<template>
<div class="z-col"
     :class="className"
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
    },

    className() {
      const classNameArr = [];
      this.span ? classNameArr.push(`z-col-${this.span}`) : '';
      this.offset ? classNameArr.push(`z-col-offset-${this.offset}`) : '';
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
        if (typeof this[size] === 'number' || typeof this[size] === 'string') {
          classNameArr.push(`z-col-${size}-${this[size]}`);
        } else if (typeof this[size] === 'object') {
          const props = this[size];
          Object.keys(props).forEach((prop) => {
            classNameArr.push(
              prop !== 'span'
                ? `z-col-${size}-${prop}-${props[prop]}`
                : `z-col-${size}-${props[prop]}`
            );
          });
        }
      });
      return classNameArr;
    }
  },
  props: {
    span: [Number, String],
    offset: [Number, String],
    xs: [Number, String, Object],
    sm: [Number, String, Object],
    md: [Number, String, Object],
    lg: [Number, String, Object],
    xl: [Number, String, Object]
  }
};
</script>

<style scoped lang="scss">
  @import '../../sass/var.scss';
  @import '../../sass/animation.scss';
  @import "../../sass/utils.scss";
  .z-col {
    display: block;
    width: 100%;
    box-sizing: border-box;
    position: relative;
  }

  // .z-col-0 {
  //   display: none;
  // }
  @for $n from 1 through 24 {
    .z-col-#{$n} {
      width: ($n/24)*100%;
      float: left;
    }
    .z-col-offset-#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }

  @include grid-media(xs) {
    .z-col-xs-0 {
      display: none;
    }
    @for $n from 1 through 24 {
      .z-col-xs-#{$n} {
        width: ($n/24)*100%;
        float: left;
      }
      .z-col-xs-offset-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @include grid-media(sm) {
    .z-col-sm-0 {
      display: none;
    }
    @for $n from 1 through 24 {
      .z-col-sm-#{$n} {
        width: ($n/24)*100%;
        float: left;
      }
      .z-col-sm-offset-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @include grid-media(md) {
    .z-col-md-0 {
      display: none;
    }
    @for $n from 1 through 24 {
      .z-col-md-#{$n} {
        width: ($n/24)*100%;
        float: left;
      }
      .z-col-md-offset-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @include grid-media(lg) {
    .z-col-lg-0 {
      display: none;
    }
    @for $n from 1 through 24 {
      .z-col-lg-#{$n} {
        width: ($n/24)*100%;
        float: left;
      }
      .z-col-lg-offset-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @include grid-media(xl) {
    .z-col-xl-0 {
      display: none;
    }
    @for $n from 1 through 24 {
      .z-col-xl-#{$n} {
        width: ($n/24)*100%;
        float: left;
      }
      .z-col-xl-offset-#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }

</style>
