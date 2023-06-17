<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <RegistroLab></RegistroLab>
  <ListaPacientes></ListaPacientes>
</template>

<script>
import RegistroLab from "./components/RegistroCliente.vue";
import ListaPacientes from "./components/ListaPacientes.vue";

export default {
  name: "App",
  components: {
    RegistroLab,
    ListaPacientes,
  },
};
</script>
