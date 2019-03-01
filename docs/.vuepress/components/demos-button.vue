<template>
  <div class="container">
    <div class="demo-warpper">
      <z-button type="primary" size="medium" shadow>Primary</z-button>
      <z-button size="medium" shadow>Default</z-button>
      <z-button type="primary" ghost size="medium" shadow>幽灵按钮</z-button>
      <z-button type="primary" dashed size="medium" shadow>虚线按钮</z-button>
      <div class="text">
        <h5>按钮类型</h5>
        <p>按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。</p>
      </div>
      <pre>
        <code v-text="buttonType"></code>
      </pre>
    </div>

    <div class="demo-warpper">
      <z-button type="primary" ghost>Large</z-button>
      <z-button type="primary" ghost size="medium">Medium</z-button>
      <z-button type="primary" ghost size="small">Small</z-button>
      <div class="text">
        <h5>按钮尺寸</h5>
        <p>按钮有大、中、小三种尺寸。通过设置 size 为 Medium small 分别把按钮设为中、小尺寸。若不设置 size，则尺寸为大</p>
      </div>
      <pre>
        <code v-text="buttonSize"></code>
      </pre>
    </div>

    <div class="demo-warpper">
      <z-button type="primary" ghost>默认</z-button>
      <z-button type="primary" ghost round>Round</z-button>
      <z-button type="primary" ghost edge>Edge</z-button>
      <!-- <z-button type="primary" loading ghost circle></z-button> -->
      <div class="text">
        <h5>按钮倒角</h5>
        <p>按钮有正常、直角、圆角、圆形。通过设置 round edge circle 把按钮设置为圆角 直角 圆形 默认为小倒角</p>
      </div>
      <pre>
        <code v-text="buttonSize"></code>
      </pre>
    </div>

    <z-button edge>Edge Button</z-button>
    <div class="gap" />
    <z-button round @click="goShares" :loading="isLoading">Round Button</z-button>
    <div class="gap" />
    <z-button size="medium">Medium Button</z-button>
    <div class="gap" />
    <z-button class="my-icon" size="small">Small Button</z-button>
    <div class="gap" />
    <z-button class="my-icon" round type="success" size="small">success</z-button>
    <z-button class="my-icon" shadow round type="warning" size="small">warning</z-button>
    <z-button class="my-icon" round type="error" size="small">error</z-button>
    <div class="gap" />
    <z-button class="my-icon" ghost size="small">+ 关注</z-button>
    <z-button class="my-icon" round ghost type="success" size="small">success</z-button>
    <z-button class="my-icon" shadow edge ghost type="warning" size="small">warning</z-button>
    <z-button class="my-icon" ghost type="error" size="small">error</z-button>
    <div class="gap" />
    <z-button class="my-icon" dashed size="small">Small Button</z-button>
    <z-button class="my-icon" dashed round type="success" size="small">success</z-button>
    <z-button class="my-icon" shadow dashed edge type="warning" size="small">warning</z-button>
    <z-button class="my-icon" dashed type="error" size="small">error</z-button>
    <div class="gap" />
    <z-button class="my-icon" disabled ghost size="small" @click="goShares">Small Button</z-button>
    <z-button class="my-icon" disabled dashed round type="success" size="small" @click="goShares">
      success
    </z-button>
    <z-button class="my-icon" shadow disabled edge type="warning" size="small" @click="goShares">
      warning
    </z-button>
    <z-button class="my-icon" disabled type="error" size="small" @click="goShares">error</z-button>
    <div class="gap" />
    <z-button class="my-icon" loading>分 享</z-button>
    <z-button class="my-icon" size="medium" icon="settings"></z-button>
    <z-button class="my-icon" size="small" icon="download">下 载</z-button>
    <div class="gap" />
    <z-button class="my-icon one" circle @click="goShares" :loading="isLoading" icon="shares">
    </z-button>
    <z-button class="my-icon two" circle icon="shares"></z-button>
    <z-button class="my-icon three" circle icon="shares"></z-button>
    <div class="gap" />
    <z-button class="my-icon" @click="goShares" :loading="isLoading" icon="shares">
    </z-button>
    <z-button class="my-icon" size="medium" icon="shares"></z-button>
    <z-button class="my-icon" size="small" icon="shares"></z-button>
    <div class="gap" />
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
    <div class="gap" />
    <z-button-group>
      <z-button type="primary" size="small" icon="left">上一页</z-button>
      <z-button type="primary" size="small" icon="shares"></z-button>
      <z-button type="primary" size="small" icon="right" iconPosition="right">下一页</z-button>
    </z-button-group>
    <div class="gap" />
    <z-icon class="my-icon icon-font" icon="shares"></z-icon>
    <z-icon class="my-icon icon-font" icon="left"></z-icon>
    <z-icon class="my-icon icon-font" icon="right"></z-icon>
    <!-- <z-icon class="my-icon icon-font" loading></z-icon> -->
  </div>
</template>
<script src="//at.alicdn.com/t/font_930724_t8wqkiim6g.js"></script>
<script>
  import Button from '../../../src/components/button/button.vue';
  import Icon from '../../../src/components/icon/icon.vue';
  import ButtonGroup from '../../../src/components/button_group/button_group.vue';
  export default {
    components: {
      'z-button': Button,
      'z-icon': Icon,
      'z-button-group': ButtonGroup
    },
    data() {
      return {
        isLoading: false,
        buttonType:`    
    <z-button type="primary" size="medium" shadow>Primary</z-button>
    <z-button size="medium" shadow>Default</z-button>
    <z-button type="primary" ghost size="medium" shadow>幽灵按钮</z-button>
    <z-button type="primary" dashed size="medium" shadow>虚线按钮</z-button>`,
        buttonSize:`
    <z-button type="primary" ghost>Large Button</z-button>
    <z-button type="primary" ghost size="medium">Medium Button</z-button>
    <z-button type="primary" ghost size="small">Small Button</z-button>`,
      };
    },
    methods: {
      goShares() {
        // eslint-disable-next-line
        console.log('分享成功');
        this.isLoading = !this.isLoading;
      }
    },
  }
</script>

<style lang="scss">
  .container {
    margin-top: 20px;
  }
  .demo-warpper {
    border: 1px solid #eaecef;
    padding: 24px;
    .text {
      h5 {
        font-size: 16px;
        margin: 20px 0 10px 0;
      }
      p {
        font-size: 14px;
        margin: 0;
      }
    }
  }
</style>

