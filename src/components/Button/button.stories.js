import Button from './button.vue';

export default {
  title: 'Button',
  components: { Button },
};

export const primaryButton = () => ({
  components: { Button },
  template: "<Button label='primary' themeButton='primary'/>",
});

export const secondaryButton = () => ({
  components: { Button },
  template: "<Button label='secondary' themeButton='secondary'/>",
});

export const disabledButton = () => ({
  components: { Button },
  template: "<Button label='disabled' disabled/>",
});
