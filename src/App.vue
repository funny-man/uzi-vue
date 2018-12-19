<template>
  <div id="app">
    <z-row gutter="12020">
      <z-col class="z-col"></z-col>
      <z-col class="z-col"></z-col>
    </z-row>
    <z-row gutter="12020">
      <z-col class="z-col"></z-col>
      <z-col class="z-col"></z-col>
      <z-col class="z-col"></z-col>
    </z-row>
    <z-row gutter="12020">
      <z-col class="z-col"></z-col>
      <z-col class="z-col"></z-col>
      <z-col class="z-col"></z-col>
      <z-col class="z-col"></z-col>
    </z-row>
    <z-row gutter="12020">
      <z-col class="z-col"></z-col>
      <z-col class="z-col"></z-col>
      <z-col class="z-col"></z-col>
      <z-col class="z-col"></z-col>
      <z-col class="z-col"></z-col>
    </z-row>
    <z-row gutter="12020">
      <z-col class="z-col"></z-col>
      <z-col class="z-col"></z-col>
      <z-col class="z-col"></z-col>
      <z-col class="z-col"></z-col>
      <z-col class="z-col"></z-col>
      <z-col class="z-col"></z-col>
    </z-row>
    <z-row gutter="12020">
      <z-col class="z-col z-col-2"></z-col>
      <z-col class="z-col z-col-22"></z-col>
    </z-row>
    <hr>
    <div class="gap"/>
    <z-input prefix="settings"
             style="width:200px;display:inline-block"
             placeholder="The Left Icon..."
             @change="change"
             v-model="msg"
    ></z-input>
    <span>{{ msg }}</span>
    <button @click="add">-</button>
    <button @click="msg+=1">+</button>
    <z-input suffix="loading"
             style="width:200px;display:inline-block"
             placeholder="The Right Icon..."
             @blur="blur"
    ></z-input>
    <div class="gap"/>
    <z-input readonly value="我是只读的内容"  placeholder="Enter something..."></z-input>
    <div class="gap"/>
    <z-input disabled></z-input> <z-input disabled prefix="settings"></z-input>
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
    <z-button class="my-icon" ghost size="small">+ 关注</z-button>
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
      <z-button round icon="left">上一页</z-button>
      <z-button round icon="shares"></z-button>
      <z-button round icon="right" iconPosition="right">下一页</z-button>
    </z-button-group>
    <z-button-group>
      <z-button size="medium" ghost icon="left">上一页</z-button>
      <z-button size="medium" ghost icon="shares"></z-button>
      <z-button size="medium" ghost icon="right" iconPosition="right">下一页</z-button>
    </z-button-group>
    <div class="gap"/>
    <z-button-group>
      <z-button type="primary" size="small" icon="left">上一页</z-button>
      <z-button type="primary" size="small" icon="shares"></z-button>
      <z-button type="primary" size="small" icon="right" iconPosition="right">下一页</z-button>
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
import Row from './components/row/row.vue';
import Col from './components/col/col.vue';

export default {
  name: 'app',
  components: {
    'z-button': Button,
    'z-icon': Icon,
    'z-button-group': ButtonGroup,
    'z-input': Input,
    'z-row': Row,
    'z-col': Col
  },
  data() {
    return {
      isLoading: false,
      msg: 'zee'
    };
  },
  methods: {
    goShares() {
      // eslint-disable-next-line
      console.log('分享成功');
      this.isLoading = !this.isLoading;
    },
    change(e) {
      console.log(e.target.value);
    },
    blur(e) {
      console.log(e.target.value);
    },
    add() {
      const arr = this.msg.split('');
      const { length } = arr;
      arr.length = length - 1;
      this.msg = arr.join('');
    }
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
  padding: 30px 30px;
  background-color: #fff;
}
.z-col {
  background-color: pink;
  border: 1px solid red;
  height: 40px;
}
.gap {
  height: 40px;
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
