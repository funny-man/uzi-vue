<template>
  <div id="app">
    <z-input placeholder="请选择打断点"></z-input>
    <div class="gap"/>
    <z-input disabled></z-input>
    <div class="gap"/>
    <z-button type="primary" shadow block loading>Large Button</z-button>
    <div class="gap" ref="test" style="width:100px"/>
    <z-button edge >Edge Button</z-button>
    <div class="gap"/>
    <z-button round @click="goShares" :loading="isLoading">Round Button</z-button>
    <div class="gap"/>
    <z-button size="medium">Medium Button</z-button>
    <div class="gap"/>
    <z-button class="my-icon" size="small">Small Button</z-button>
    <div class="gap"/>
    <z-button class="my-icon" round type="success" size="small">success</z-button>
    <z-button class="my-icon" shadow  round type="warning" size="small">warning</z-button>
    <z-button class="my-icon" round type="error" size="small">error</z-button>
    <div class="gap"/>
    <z-button class="my-icon" ghost size="small">Small Button</z-button>
    <z-button class="my-icon" round ghost type="success" size="small">success</z-button>
    <z-button class="my-icon" shadow edge ghost type="warning" size="small">warning</z-button>
    <z-button class="my-icon" ghost type="error" size="small">error</z-button>
    <div class="gap"/>
    <z-button class="my-icon" dashed size="small">Small Button</z-button>
    <z-button class="my-icon" dashed round type="success" size="small">success</z-button>
    <z-button class="my-icon" shadow dashed edge type="warning" size="small">warning</z-button>
    <z-button class="my-icon" dashed type="error" size="small">error</z-button>
    <div class="gap"/>
    <z-button class="my-icon" disabled ghost size="small" @click="goShares">Small Button</z-button>
    <z-button class="my-icon" disabled dashed round type="success" size="small" @click="goShares">
      success
    </z-button>
    <z-button class="my-icon" shadow disabled edge type="warning" size="small" @click="goShares">
      warning
    </z-button>
    <z-button class="my-icon" disabled type="error" size="small" @click="goShares">error</z-button>
    <div class="gap"/>
    <z-button class="my-icon" loading>分 享</z-button>
    <z-button class="my-icon" size="medium" icon="settings"></z-button>
    <z-button class="my-icon" size="small" icon="download">下 载</z-button>
    <div class="gap"/>
    <z-button class="my-icon one" circle @click="goShares" :loading="isLoading" icon="shares">
    </z-button>
    <z-button class="my-icon two" circle icon="shares"></z-button>
    <z-button class="my-icon three" circle icon="shares"></z-button>
    <div class="gap"/>
    <z-button class="my-icon" @click="goShares" :loading="isLoading" icon="shares">
    </z-button>
    <z-button class="my-icon" size="medium" icon="shares"></z-button>
    <z-button class="my-icon" size="small" icon="shares"></z-button>
    <div class="gap"/>
    <z-button-group style="margin-right:20px;margin-bottom:20px">
      <z-button round size="medium" icon="left">上一页</z-button>
      <z-button round size="medium" icon="shares"></z-button>
      <z-button round size="medium" icon="right" iconPosition="right">下一页</z-button>
    </z-button-group>
    <z-button-group>
      <z-button size="medium" ghost icon="left">上一页</z-button>
      <z-button size="medium" ghost icon="shares"></z-button>
      <z-button size="medium" ghost icon="right" iconPosition="right">下一页</z-button>
    </z-button-group>
    <div class="gap"/>
    <z-button-group>
      <z-button type="primary" size="medium" icon="left">上一页</z-button>
      <z-button type="primary" size="medium" icon="shares"></z-button>
      <z-button type="primary" size="medium" icon="right" iconPosition="right">下一页</z-button>
    </z-button-group>
    <div class="gap"/>
    <z-icon class="my-icon icon-font" icon="shares"></z-icon>
    <z-icon class="my-icon icon-font" icon="left"></z-icon>
    <z-icon class="my-icon icon-font" icon="right"></z-icon>
    <z-icon class="my-icon icon-font" loading></z-icon>
  </div>
</template>

<script>
import Button from './components/button/button.vue';
import Icon from './components/icon/icon.vue';
import ButtonGroup from './components/button_group/button_group.vue';
import Input from './components/input/input.vue';

export default {
  name: 'app',
  components: {
    'z-button': Button,
    'z-icon': Icon,
    'z-button-group': ButtonGroup,
    'z-input': Input
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    goShares() {
      // eslint-disable-next-line
      console.log('分享成功');
      this.isLoading = !this.isLoading;
    },
  },
};
</script>

<style lang="scss">
@import "./sass/reset.scss";
@import "./sass/var.scss";
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
  transition: all .7s;
}
.my-icon {
  color: $color-primary;
  margin-right: 10px !important;
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
