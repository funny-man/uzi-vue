<template>
  <div id="app">
    <z-button shadow block>Large Button</z-button>
    <div class="gap"/>
    <z-button edge >Edge Button</z-button>
    <div class="gap"/>
    <z-button round>Round Button</z-button>
    <div class="gap"/>
    <z-button size="medium">Medium Button</z-button>
    <div class="gap"/>
    <z-button size="small">Small Button</z-button>
    <div class="gap"/>
    <z-icon class="my-icon" icon="shares"></z-icon>
    <z-icon class="my-icon" icon="left"></z-icon>
    <z-icon class="my-icon" icon="right"></z-icon>
    <z-icon class="my-icon" icon="loading"></z-icon>
    <z-button class="my-icon" size="medium" icon="settings">分 享</z-button>
    <z-button class="my-icon" size="medium" loading>分 享</z-button>
    <z-button class="my-icon" circle icon="shares"></z-button>
    <z-button class="my-icon" circle icon="left"></z-button>
    <z-button class="my-icon" circle icon="right"></z-button>


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
  font-size: 30px;
  color: $color-primary-pink;
  margin-right: 10px;
}
</style>
