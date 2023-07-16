<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="column in filteredColumns" :key="column">{{ column }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td v-for="column in filteredColumns" :key="column">
          {{ itemValue(item, column) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "l-table",
  props: {
    columns: Array,
    data: Array,
  },
  computed: {
    filteredColumns() {
      return this.columns.filter((column) =>
        this.hasValue(this.data[0], column)
      );
    },
  },
  methods: {
    hasValue(item, column) {
      return item[column.toLowerCase()] !== "undefined";
    },
    itemValue(item, column) {
      return item[column.toLowerCase()];
    },
  },
};
</script>

<style></style>
