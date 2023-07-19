<template>
  <div ref="chart"></div>
</template>

<script>
import * as d3 from "d3";

export default {
  mounted() {
    // Datos para la gráfica redonda
    const data = [
      { label: "A", value: 10 },
      { label: "B", value: 20 },
      { label: "C", value: 15 },
      // Agrega más datos aquí
    ];

    // Dimensiones de la gráfica
    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    // Escala de colores
    const colorScale = d3.scaleOrdinal().range(d3.schemeCategory10);

    // Generador de arcos
    const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);

    // SVG de la gráfica
    const svg = d3
      .select(this.$refs.chart)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Calcular el total de los valores
    const totalValue = d3.sum(data, (d) => d.value);

    // Generar los arcos
    const arcs = d3
      .pie()
      .sort(null)
      .value((d) => d.value)(data);

    // Dibujar los arcos
    svg
      .selectAll("path")
      .data(arcs)
      .enter()
      .append("path")
      .attr("d", arcGenerator)
      .attr("fill", (d, i) => colorScale(i));

    // Agregar etiquetas
    svg
      .selectAll("text")
      .data(arcs)
      .enter()
      .append("text")
      .attr("transform", (d) => `translate(${arcGenerator.centroid(d)})`)
      .attr("text-anchor", "middle")
      .text(
        (d) =>
          `${d.data.label} (${((d.data.value / totalValue) * 100).toFixed(1)}%)`
      );
  },
};
</script>
