<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <RegistroLab></RegistroLab>
</template>

<script>
import RegistroLab from "./components/RegistroCliente.vue";

export default {
  name: "App",
  components: {
    RegistroLab,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
