<template>
  <div id="app">
    <z-button shadow block>Large Button</z-button>
    <div class="gap"/>
    <z-button edge>Edge Button</z-button>
    <div class="gap"/>
    <z-button round>Round Button</z-button>
    <div class="gap"/>
    <z-button size="medium">Medium Button</z-button>
    <div class="gap"/>
    <z-button size="small">Small Button</z-button>
  </div>
</template>

<script>
import Button from './components/button/button.vue';

export default {
  name: 'app',
  components: {
    'z-button': Button,
  },
};
</script>

<style lang="scss">
@import "./sass/reset.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 30px 30px;
}
.gap {
  height: 30px;
}
</style>
