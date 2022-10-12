<template>
  <tr class="v-table-row">
    <td class="row__date">{{row_data.date}}</td>
    <td class="row__name">{{row_data.name}}</td>
    <td class="row__amount">{{row_data.amount}}</td>
    <td class="row__distance">{{row_data.distance}}</td>
  </tr>
</template>

<script>
export default {
  name: 'app-table-row',

  props: {
    row_data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
  .v-table-row {
    text-align: center;
  }
  .v-table-row td {
    padding: 5px;
    border: none;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-bottom: 5px solid #F2F8F8;
  }
</style>
