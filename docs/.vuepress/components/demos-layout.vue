<template>
  <div>
    <div class="demo-warpper">
      <z-layout>
        <z-header>Header</z-header>
        <z-main>Main</z-main>
      </z-layout>
      <hr>
      <z-layout>
        <z-header>Header</z-header>
        <z-main>Main</z-main>
        <z-footer>Footer</z-footer>
      </z-layout>
      <hr>
      <z-layout>
        <z-aside>Aside</z-aside>
        <z-main>Main</z-main>
      </z-layout>
      <hr>
      <z-layout>
        <z-header>Header</z-header>
        <z-layout>
          <z-aside width="200px">Aside</z-aside>
          <z-main>Main</z-main>
        </z-layout>
      </z-layout>
      <hr>
      <z-layout>
        <z-header>Header</z-header>
        <z-layout>
          <z-aside width="200px">Aside</z-aside>
          <z-layout>
            <z-main>Main</z-main>
            <z-footer>Footer</z-footer>
          </z-layout>
        </z-layout>
      </z-layout>
      <hr>
      <z-layout>
        <z-aside>Aside</z-aside>
        <z-layout>
          <z-header>Header</z-header>
          <z-main>Main</z-main>
        </z-layout>
      </z-layout>
      <hr>
      <z-layout>
        <z-aside>Aside</z-aside>
        <z-layout>
          <z-header>Header</z-header>
          <z-main>Main</z-main>
          <z-footer>Footer</z-footer>
        </z-layout>
      </z-layout>
      <div class="text">
        <h5>基本布局</h5>
        <p>一些常见的布局...</p>
      </div>
      <pre><code v-text="a"></code></pre>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Layout from '../../../src/components/layout/layout.vue';
  import Header from '../../../src/components/header/header.vue';
  import Aside from '../../../src/components/aside/aside.vue';
  import Main from '../../../src/components/main/main.vue';
  import Footer from '../../../src/components/footer/footer.vue';
  export default {
    components: {
      'z-layout': Layout,
      'z-header': Header,
      'z-aside': Aside,
      'z-main': Main,
      'z-footer': Footer
    },
    data() {
      return {
        a: `    
    <z-layout>
    <z-header>Header</z-header>
    <z-main>Main</z-main>
  </z-layout>
  <hr>
  <z-layout>
    <z-header>Header</z-header>
    <z-main>Main</z-main>
    <z-footer>Footer</z-footer>
  </z-layout>
  <hr>
  <z-layout>
    <z-aside>Aside</z-aside>
    <z-main>Main</z-main>
  </z-layout>
  <hr>
  <z-layout>
    <z-header>Header</z-header>
    <z-layout>
      <z-aside width="200px">Aside</z-aside>
      <z-main>Main</z-main>
    </z-layout>
  </z-layout>
  <hr>
  <z-layout>
    <z-header>Header</z-header>
    <z-layout>
      <z-aside width="200px">Aside</z-aside>
      <z-layout>
        <z-main>Main</z-main>
        <z-footer>Footer</z-footer>
      </z-layout>
    </z-layout>
  </z-layout>
  <hr>
  <z-layout>
    <z-aside>Aside</z-aside>
    <z-layout>
      <z-header>Header</z-header>
      <z-main>Main</z-main>
    </z-layout>
  </z-layout>
  <hr>
  <z-layout>
    <z-aside>Aside</z-aside>
    <z-layout>
      <z-header>Header</z-header>
      <z-main>Main</z-main>
      <z-footer>Footer</z-footer>
    </z-layout>
  </z-layout>`.trim()
      }
    },
  }
</script>

<style scoped lang="scss">
  .container {
    margin-top: 20px;
  }
  .demo-warpper {
    border: 1px solid #eaecef;
    padding: 24px;
    .z-layout {
      background-color: #eee;
      text-align: center;
      // margin-top: 20px;
    }
    .z-header {
      background-color: rgb(255, 124, 157);
      // line-height: 60px;
    }
    .z-footer {
      background-color: rgb(255, 124, 157);
      // line-height: 60px;
    }
    .z-main {
      background-color: rgb(255, 157, 178);
      line-height: 160px;
    }
    .z-aside {
      background-color: rgb(255, 152, 174);
      line-height: 200px;
      // width: 100px;
    }
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