<template>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">

  <AppFilter :table_data="table_data" />

  <table class="app-table">
    <thead class="app-table__header">
      <tr>
        <td>Дата</td>

        <td>Имя
          <span @click="operateDirection('name')" @keydown="operateDirection('name')"
            class="material-icons">sort
            </span>
        </td>

        <td>Количество
          <span @click="operateDirection('amount')" @keydown="operateDirection('amount')"
            class="material-icons">sort
            </span>
        </td>

        <td>Расстояние
          <span @click="operateDirection('distance')" @keydown="operateDirection('distance')"
            class="material-icons">sort
            </span>
        </td>
      </tr>
    </thead>

    <tbody class="app-table__body">
      <!-- loop through each item of the collection to get the content of each row -->
      <AppTableRow v-for="row in paginatedItems" :key="row" :row_data="row" />
    </tbody>

  </table>

  <div class="app-table__pagination">
    <div class="pagination__bar"
      v-for="page in pages" :key="page" @click="switchPage(page)" @keydown="enter"
      :class="{'page__active': page === pageNumber}"> {{ page }}
      </div>
  </div>
</template>

<script>
import AppTableRow from './app-table-row.vue';
import AppFilter from './app-filter.vue';

export default {
  name: 'app-table',

  components: {
    AppTableRow,
    AppFilter,
  },

  props: {
    table_data: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      pageNumber: 1,
      itemsOnPage: 5, // => edit this char to increase/decrease visable items on page
      sortBy: 'name',
      sortDirection: 'ASC',
    };
  },

  computed: {
    pages() {
      const dividerChar = 5; // => number of items on page is multiple of 5

      return Math.ceil(this.table_data.length / dividerChar);
    },

    paginatedItems() {
      const from = (this.pageNumber - 1) * this.itemsOnPage;
      const to = from + this.itemsOnPage;

      return this.table_data.slice(from, to);
    },

    sortByName() {
      const data = this.table_data;

      return data.sort((a, b) => {
        if (this.sortDirection === 'ASC') {
          return (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
        }

        return (a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1);
      });
    },

    sortByAmount() {
      const data = this.table_data;

      return data.sort((a, b) => {
        if (this.sortDirection === 'ASC') {
          return parseInt(a.amount, 10) < parseInt(b.amount, 10) ? 1 : -1;
        }

        return parseInt(a.amount, 10) > parseInt(b.amount, 10) ? 1 : -1;
      });
    },

    sortByDistance() {
      const data = this.table_data;

      return data.sort((a, b) => {
        if (this.sortDirection === 'ASC') {
          return parseInt(a.distance, 10) < parseInt(b.distance, 10) ? 1 : -1;
        }

        return parseInt(a.distance, 10) > parseInt(b.distance, 10) ? 1 : -1;
      });
    },
  },

  methods: {
    switchPage(page) {
      this.pageNumber = page;
    },

    operateDirection(current) {
      /*
        Checks to see if what the user selected to sort by
        is the same as it's been. If it is, then we toggle the
        direction.
      */
      if (current === this.sortBy) {
        if (this.sortDirection === 'ASC') {
          this.sortDirection = 'DESC';
        } else {
          this.sortDirection = 'ASC';
        }
      }
      /*
        If the sort is different we set the defualt the direction
        to 'ASC'
      */
      if (current !== this.sortBy) {
        this.sortDirection = 'ASC';
        this.sortBy = current;
      }
      /*
        Switch by what the sort by is set to, and run the method
        to sort by that column.
      */
      switch (this.sortBy) {
        case 'name':
          this.sortByName();
          break;
        case 'amount':
          this.sortByAmount();
          break;
        case 'distance':
          this.sortByDistance();
          break;
        // eslint-disable-next-line no-unused-expressions
        default: `unknown parameter ${this.sortBy}`;
      }
    },
  },
};
</script>

<style>
  .app-table {
    width: 90%;
    margin: auto;
    text-align: center;
    border: 15px solid #F2F8F8;
    border-top: 5px solid #F2F8F8;
    border-collapse: collapse;
  }
  .app-table__header {
    text-align: center;
    position: block;
    font-weight: bold;
    padding: 5px;
    background: #F2F8F8;
    border: none;
    border-bottom: 5px solid #F2F8F8;
  }
  .app-table td {
    padding: 5px;
    border: none;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-bottom: 5px solid #F2F8F8;
  }
  .app-table__pagination {
    display: flex;
    margin-top: 20px;
    margin-left: 46%;
  }
  .pagination__bar {
    margin: 2px;
    padding: 6px 9px;
    border-radius: 10%;
    outline: 1.5px solid #ddd;
  }
  .pagination__bar:hover, .page__active {
    background-color: #777799;
    color: #ffffff;
    cursor: pointer;
  }
  .material-icons {
    position: absolute;
    padding-left: 40px;
    cursor: pointer;
  }
</style>
