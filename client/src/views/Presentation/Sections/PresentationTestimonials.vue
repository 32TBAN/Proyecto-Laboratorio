<script setup>
import DefaultReviewCard from "@/examples/cards/reviewCards/DefaultReviewCard.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center">
          <h2 class="mb-0">Atención de alta calidad</h2>
          <h2 class="text-gradient text-success mb-3">
            1.6000 Usuarios que han generado diversos reportes de atención
            médica
          </h2>
        </div>
      </div>
      <div class="row mt-6">
        <DefaultReviewCard
          name="Steven Carrera"
          date="1 día antes"
          review='"Autor del diseño web con la funcionalidad de que un usuario tenga acceso a los reportes y un médico, obtenga la facilidad de realizar un exámen a un paciente en expecífico."'
          :rating="5.0"
        />
        <DefaultReviewCard
          class="ms-md-auto"
          color="bg-gradient-success"
          name="Kevin Guanoluisa"
          date="1 día antes"
          review='"Programador del sitio web con las funcionalidades necesarias para que el usuario sienta comodidad en navegar por el sitio web y a su vez, identificar cual es el usuario que se ha logeado para lograr vsualizar y presenciar las diveras funcionalidades este aplicativo."'
          :rating="5.0"
        />
      </div>
      <hr class="horizontal dark my-5" />
      <div class="row">
        <div class="col-lg-2 col-md-4 col-6 ms-auto">
          <img
            class="w-100 opacity-6"
            src="@/assets/img/logos/gray-logos/logo-apple.svg"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <img
            class="w-100 opacity-6"
            src="@/assets/img/logos/gray-logos/logo-facebook.svg"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6">
          <img
            class="w-100 opacity-6"
            src="@/assets/img/logos/gray-logos/logo-nasa.svg"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6 ms-lg-0 ms-md-auto">
          <img
            class="w-100 opacity-6"
            src="@/assets/img/logos/gray-logos/logo-vodafone.svg"
            alt="Logo"
          />
        </div>
        <div class="col-lg-2 col-md-4 col-6 me-md-auto mx-md-0 mx-auto">
          <img
            class="w-100 opacity-6"
            src="@/assets/img/logos/gray-logos/logo-digitalocean.svg"
            alt="Logo"
          />
        </div>
      </div>
    </div>
  </section>
</template>
