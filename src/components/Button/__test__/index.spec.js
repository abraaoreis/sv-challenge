import { shallowMount } from '@vue/test-utils';
import Button from '../Button/button.vue';

function getMountedComponent(Component, propsData) {
  return shallowMount(Component, {
    propsData,
  });
}
describe('Test Component Button', () => {
  it('render text primary button correctly', () => {
    expect(getMountedComponent(Button, {
      themeButton: 'primary',
      label: 'Primary',
    }).text()).toBe('Primary');
  });
  it('render theme button correctly', () => {
    expect(getMountedComponent(Button, {
      themeButton: 'secondary',
      label: 'secondary',
    }).props().themeButton).toBe('secondary');
  });
});
