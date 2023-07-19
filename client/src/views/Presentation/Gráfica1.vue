<template>
  <div ref="chart">Grafico 1</div>
</template>

<script>
import * as d3 from "d3";

export default {
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      // Código para generar la gráfica con D3.js
      // Utiliza el this.$refs.chart para seleccionar el elemento div del template

      // Ejemplo básico de una gráfica de barras
      const data = [10, 20, 30, 40, 50];

      const svg = d3
        .select(this.$refs.chart)
        .append("svg")
        .attr("width", 400)
        .attr("height", 200);

      svg
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 50)
        .attr("y", (d) => 200 - d)
        .attr("width", 40)
        .attr("height", (d) => d)
        .attr("fill", "steelblue");
    },
  },
};
</script>
