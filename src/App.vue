<template>
  <div id="app">
    <Button label="primary" themeButton="primary"/>
    <Button label="secondary" themeButton="secondary"/>
    <Button label="Disabled" disabled />
  </div>
</template>

<script>
import Button from './components/Button/button.vue';

export default {
  name: 'App',
  components: {
    Button,
  },
};

</script>
<style>
  @import "./styles/_reset.css";
  @import "./styles/_variables.css";
</style>
