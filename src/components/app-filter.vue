<template>
  <div class="app__filter">

    <div class="filter__bars">
      <div class="filter__search">
        <label for="search">Поиск
          <input type="text" id="search" placeholder="Введите значение">
        </label>
      </div>

      <div class="filter__selector">
        <span>Фильтруем по:</span>
        <v-select
          v-model="selected"
          :options="columnsSelector"
          :reduce="(option) => option.displayName"
         />
      </div>

      <div class="filter__selector">
        <span>Условие:
          <label for="selected">
            <select v-model="selected">
              <option v-for="option in optionsSelector" :key="option">
                {{ option.displayName }}
                </option>
            </select>
          </label>
        </span>
      </div>
    </div>

    <div class="filter__matches">
      <p>Совпадения:</p>
      <ul>
        <li v-for="item in testMethod" :key="item"> {{ item }} </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-filter',

  props: {
    table_data: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      columnsSelector: [
        {
          col: 'date',
          displayName: 'Дата',
        },
        {
          col: 'name',
          displayName: 'Имя',
        },
        {
          col: 'amount',
          displayName: 'Количество',
        },
        {
          col: 'distance',
          displayName: 'Расстояние',
        },
      ],
      optionsSelector: [
        {
          option: 'equals',
          displayName: 'Равно',
        },
        {
          option: 'includes',
          displayName: 'Содержит',
        },
        {
          option: 'biggerThan',
          displayName: 'Больше',
        },
        {
          option: 'lesserThann',
          displayName: 'Меньше',
        },
      ],
      search: '', // <-------------------- inputed text
      selectedColumn: '', // <-------------- selected column
      selectedOption: '', // <-------------- options: { ===, includes, >, < };
    };
  },

  computed: {
    testMethod() {
      return this.table_data;
    },
  },
};
</script>

<style>
  .app__filter {
    display: flex;
    flex-direction: row;
  }
  .filter__bars {
    width: auto;
    margin-top: 15px;
    margin-left: 120px;
    padding-top: 50px;
    padding-bottom: 20px;
    padding-right: 50px;
  }
  .filter__selector {
    width: auto;
    margin-top: 8px;
  }
  .filter__matches {
    float: right;
    width: auto;
    font-size: 14px;
    padding-bottom: 30px;
  }
  .filter__matches p {
    text-align: center;
    font-size: 16px;
  }
</style>
