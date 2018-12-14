import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Button from '@/components/button/button.vue';

describe('Button.vue', () => {
  // 现在挂载组件，你便得到了这个包裹器
  // 包裹器的作用是Vue为其添加了方便的方法
  // 也可以通过wrapper.vm获取实例进行原生操作
  // 具体文档：https://vue-test-utils.vuejs.org/zh/api/wrapper/#%E5%B1%9E%E6%80%A7
  const wrapper = mount(Button);

  it('可以禁用button', () => {
    const disabled = true;
    wrapper.setProps({ disabled });
    // 写法一
    // 从包裹器wrapper结构得到实例vm
    const { vm } = wrapper;
    // 通过实例的方法getAttribute()获取对应的属性
    // 通过实例的方法我们可以进行原生js的dom操作获取想要的属性
    expect(vm.$el.getAttribute('disabled')).to.eq('disabled');
    expect(vm.$el.getAttribute('class')).to.include('is-disabled');

    // 写法二
    // Vue直接在包裹器wrapper上定义了一些方便的方法如：attributes()
    // expect(wrapper.attributes('disabled')).to.eq('disabled');
    // expect(wrapper.attributes('class')).to.include('is-disabled');
  });
  it('改变button尺寸', () => {
    expect(wrapper.attributes('class')).to.include('large');
    let size = 'medium';
    wrapper.setProps({ size });
    expect(wrapper.attributes('class')).to.include('medium');
    size = 'small';
    wrapper.setProps({ size });
    expect(wrapper.attributes('class')).to.include('small');
  });
  it('正确添加icon', () => {
    const icon = 'settings';
    wrapper.setProps({ icon });
    // 选中子组件
    const useElement = wrapper.find('use');
    expect(useElement.attributes('href')).to.eq(`#i-${icon}`);
  });
});
