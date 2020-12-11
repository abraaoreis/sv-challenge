<template>
    <button :style="getThemeButtonStyle">
      {{label}}
    </button>
</template>

<script>

export default {
  name: 'button',
  props: {
    label: {
      required: true,
      default: 'label',
      type: String,
    },
    themeButton: String,
    validator: (themeButton) => ['primary', 'secondary'].includes(themeButton),
  },
  computed: {
    getThemeButtonStyle() {
      const themeButtonStyle = ({
        backgroundColor,
        hoverBackgroundColor,
        activeBackgroundColor,
        textColor,
        hoverTextColor,
      }) => ({
        '--button-background-color': backgroundColor,
        '--button-hover-background-color': hoverBackgroundColor,
        '--button-active-backround-color': activeBackgroundColor,
        '--button-text-color': textColor,
        '--button-hover-text-color': hoverTextColor,
      });
      const primary = themeButtonStyle({
        backgroundColor: 'var(--primary)',
        hoverBackgroundColor: 'var(--highlight)',
        activeBackgroundColor: 'var(--darker)',
        textColor: 'var(--75-purple-gray)',
      });

      const secondary = themeButtonStyle({
        backgroundColor: 'var(--secondary)',
        hoverBackgroundColor: 'var(--25-purple-gray)',
        activeBackgroundColor: 'var(--secondary)',
        textColor: 'var(--25-purple-gray)',
        hoverTextColor: 'var(--10-purple-gray)',
      });
      const themesButton = {
        primary,
        secondary,
      };
      return themesButton[this.themeButton];
    },
  },
};
</script>

<style scoped>
    @import "../../styles/_variables.css";
    button{
        color:var(--button-text-color,var(--75-purple-gray));
        background-color: var(--button-background-color,var(--primary));
        padding:12px 46px;
        border-radius:2px;
        text-align: left;
        font: normal normal bold 12px/17px Open Sans;
        letter-spacing: 0px;
        text-transform: uppercase;
        border-style:none;
    }
    button:hover{
        background-color:var(--button-hover-background-color) ;
        color:var(--button-hover-text-color) ;
        border-style:none;
    }
    button:active{
        background:var(--button-active-backround-color) ;
        border-style:none;
    }
    button:disabled{
        background-color: var(--75-purple-gray);
        border-color: var(--60-purple-gray);
        color: var(--60-purple-gray) ;
        border: 1px solid var(--60-purple-gray);
    }
</style>
