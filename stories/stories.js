import ButtonPrimary from './Button/primaryButton.story.vue';
import ButtonSecondary from './Button/secondaryButton.story.vue';
import ButtonDisabled from './Button/disabledButton.story.vue'
export default {
    title: 'Button',
};

export const primaryButton = () => ButtonPrimary;
export const secondaryButton = () => ButtonSecondary;
export const disabledButton = () => ButtonDisabled;