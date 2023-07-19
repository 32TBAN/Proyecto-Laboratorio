<template>
  <div ref="chart"></div>
</template>

<script>
import * as d3 from "d3";

export default {
  mounted() {
    // Datos para el gráfico de líneas
    const data = [
      { date: "2023-01-01", value: 10 },
      { date: "2023-02-01", value: 20 },
      { date: "2023-03-01", value: 15 },
      // Agrega más datos aquí
    ];

    // Dimensiones del gráfico
    const width = 600;
    const height = 400;

    // Escala x (fecha)
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(data, (d) => new Date(d.date)))
      .range([0, width]);

    // Escala y (valor)
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([height, 0]);

    // Generador de líneas
    const line = d3
      .line()
      .x((d) => xScale(new Date(d.date)))
      .y((d) => yScale(d.value));

    // SVG del gráfico
    const svg = d3
      .select(this.$refs.chart)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Línea del gráfico
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("d", line);
  },
};
</script>
