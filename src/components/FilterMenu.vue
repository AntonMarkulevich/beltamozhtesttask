<template>
  <div class="filter-wrapper">
    <v-card>
    <v-card-text>
            <p>Наименование</p>
                <v-text-field v-model="name"
                              solo
                              label="Наименование"
                              clearable
          ></v-text-field>
          <div class="filter__datepicker-wrapper">
            <v-menu
        v-model="menu1"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="dateFrom"
            label="Дата начала действия"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="dateFrom"
          @input="menu1 = false"
        ></v-date-picker>
      </v-menu>
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="dateTo"
            label="Дата окончания действия"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="dateTo"
          @input="menu2 = false"
        ></v-date-picker>
      </v-menu>
      <v-card-actions class="justify-end">
        <v-btn @click="clearFilter"
               class="mx-2">
        Очистить
      </v-btn>
      <v-btn color="primary"
             @click="filterData">
        Применить
      </v-btn>
      </v-card-actions>
          </div>
    </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      name: '',
      menu1: false,
      menu2: false,
      dateFrom: '',
      dateTo: '',
    };
  },
  computed: {
    ...mapState(['directory', 'selectedDirectoryCode', 'selectedRecord']),
  },
  methods: {
    clearFilter() {
      this.name = '';
      this.dateFrom = '';
      this.dateTo = '';
      this.$emit('filter-data', this.name, this.dateFrom, this.dateTo);
    },
    filterData() {
      this.$emit('filter-data', this.name, this.dateFrom, this.dateTo);
    },
  },
  mounted() {
  },
};
</script>

<style>
.filter-wrapper {
    min-width: 360px;
}
</style>
