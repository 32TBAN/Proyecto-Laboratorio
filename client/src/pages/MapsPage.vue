<template>
  <gmap-map
    id="map"
    :center="center"
    :zoom="13"
    :options="options"
    map-type-id="terrain"
  >
    <gmap-marker :position="center"></gmap-marker>
  </gmap-map>
</template>

<script>
// import { API_KEY } from './Maps/API_KEY'; // Remove this line if not used
import * as VueGoogleMaps from "vue2-google-maps";

export default {
  data() {
    return {
      center: {
        lat: 40.748817,
        lng: -73.985428,
      },
      options: {
        styles: [
          // Your map styles here
        ],
      },
    };
  },
  created() {
    VueGoogleMaps.loaded.then(() => {
      // You can do additional setup here if needed
    });
  },
};
</script>

<style>
#map {
  min-height: calc(100vh - 123px);
}
</style>
