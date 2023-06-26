<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/">Mi Aplicación</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/registro-pacientes" class="nav-link"
                >Registro Pacientes</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/laboratorio" class="nav-link"
                >Laboratorio</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/buscar" class="nav-link">Buscar</router-link>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>

    <div class="container mt-4">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style></style>
