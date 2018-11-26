<template>
  <div id="app">
    <z-button shadow block loading>Large Button</z-button>
    <div class="gap"/>
    <z-button edge >Edge Button</z-button>
    <div class="gap"/>
    <z-button round>Round Button</z-button>
    <div class="gap"/>
    <z-button size="medium">Medium Button</z-button>
    <div class="gap"/>
    <z-button size="small">Small Button</z-button>
    <div class="gap"/>
    <z-button class="my-icon" loading>分 享</z-button>
    <z-button class="my-icon" size="medium" icon="left">上一页</z-button>
    <z-button class="my-icon" size="medium" icon="right" iconPosition="right">下一页</z-button>
    <z-button class="my-icon" size="small" icon="download">分 享</z-button>
    <div class="gap"/>
    <z-button class="my-icon one" circle icon="shares"></z-button>
    <z-button class="my-icon two" circle icon="shares"></z-button>
    <z-button class="my-icon three" circle icon="shares"></z-button>
    <z-button class="my-icon" circle loading></z-button>
    <div class="gap"/>
    <z-icon class="my-icon icon-font" icon="shares"></z-icon>
    <z-icon class="my-icon icon-font" icon="left"></z-icon>
    <z-icon class="my-icon icon-font" icon="right"></z-icon>
    <z-icon class="my-icon icon-font" icon="loading"></z-icon>
  </div>
</template>

<script>
import Button from './components/button/button.vue';
import Icon from './components/icon/icon.vue';

export default {
  name: 'app',
  components: {
    'z-button': Button,
    'z-icon': Icon,
  },
};
</script>

<style lang="scss">
@import "./sass/reset.scss";
@import './sass/var.scss';

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin: 30px 30px;
}
.gap {
  height: 30px;
}
.my-icon {
  color: $color-primary-pink;
  margin-right: 10px;
}
.one {
  font-size: 20px !important;
}
.two {
  font-size: 16px !important;
}
.three {
  font-size: 12px !important;
}
.icon-font {
  font-size: 30px;
}
</style>
