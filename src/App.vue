<template>
  <div id="app">
    <AppTable :table_data="ITEMS" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AppTable from '@/components/app-table.vue';

export default {
  name: 'app',

  components: {
    AppTable,
  },

  computed: {
    ...mapGetters([
      'ITEMS',
    ]),
  },

  methods: {
    ...mapActions([
      'GET_ITEMS_FROM_DB',
    ]),
  },

  mounted() {
    this.GET_ITEMS_FROM_DB();
  },
};
</script>
