import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import zButton from '@/components/button/button.vue';

describe('>>>>>>>>>>>>test-zButton', () => {
  it('button禁用状态测试', () => {
    const msg = 'new message';
    const wrapper = shallowMount(zButton, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
