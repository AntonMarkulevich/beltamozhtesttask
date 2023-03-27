<template>
<div class="main-content__container">
  <div class="main-content__dropdown">
    <v-combobox :items="directorieName"
                v-model="selectedItem"
                outlined
                dense></v-combobox>
    <action-buttons></action-buttons>
  </div>
  <div class="main-content__wrapper">
  <div class="main-content__table">
    <v-data-table v-if="selectedCode==='dirUsers'"
                  :headers="headersUser"
                :items="filteredContent"
                :single-select="true"
                show-select
                v-model="selected"
                class="elevation-1 mx-3"
                :loading="showLoading"
                hide-default-footer>
    </v-data-table>
    <v-data-table v-else
                :headers="headers"
                :items="filteredContent"
                :single-select="true"
                show-select
                v-model="selected"
                class="elevation-1 mx-3"
                :loading="showLoading"
                hide-default-footer></v-data-table>
  </div >
  <div class="main-content__filter">
        <filter-menu v-if="showFilter"
                     @filter-data="filterData"></filter-menu>
  </div>
  </div>
</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import FilterMenu from '../FilterMenu.vue';
import ActionButtons from './ActionButtons.vue';

export default {
  components: {
    ActionButtons,
    FilterMenu,
  },
  data() {
    return {
      selected: [],
      selectedItem: '',
      nameFilter: '',
      dateFromFilter: '',
      dateToFilter: '',
      headers: [{ text: 'Наименование', value: 'name' },
        { text: 'Код', value: 'code' },
        { text: 'Дата начала действия', value: 'dateActivate' },
        { text: 'Дата окончания действия', value: 'dateDeactivate' }],
      headersUser: [{ text: 'ФИО', value: 'name' },
        { text: 'Код', value: 'code' },
        { text: 'Объект экспертной организации', value: 'organization' },
        { text: 'Наименование подразделения', value: 'department' },
        { text: 'Наименование должности', value: 'position' },
        { text: 'Образование', value: 'education' },
        { text: 'Специализация', value: 'speciality' },
        { text: 'Дата начала действия', value: 'dateActivate' },
        { text: 'Дата окончания действия', value: 'dateDeactivate' }],
    };
  },
  computed: {
    ...mapState(['directories', 'directory', 'selectedRecord', 'showFilter']),
    directorieName() {
      return this.directories.map((directory) => directory.name);
    },
    selectedCode() {
      this.setSelectedDirectoryCode(this.directories.find(
        (item) => item.name === this.selectedItem,
      )?.code);
      return this.selectedItem ? this.directories.find((item) => item.name === this.selectedItem)?.code : '';
    },
    showLoading() {
      return !!(!this.directory && this.selectedCode);
    },
    directoryContent() {
      if (this.selectedCode === 'dirUsers' && this.directory) {
        return this.directory.content.map((item) => ({
          ...item,
          id: item.id,
          name: item.fullName,
          code: item.code,
          dateActivate: item.dateActivate,
          dateDeactivate: item.dateDeactivate,
          organization: item.organization.name,
        }));
      }
      return this.directory?.content;
    },
    filteredContent() {
      if (this.directoryContent && this.directoryContent.length
      && (this.nameFilter || this.dateToFilter || this.dateFromFilter)) {
        return this.directoryContent.filter((item) => item.name.includes(this.nameFilter)
      && item.dateActivate.includes(this.dateFromFilter)
      && item.dateDeactivate.includes(this.dateToFilter));
      }
      return this.directoryContent;
    },
  },
  methods: {
    ...mapMutations(['setSelectedDirectoryCode', 'setSelectedRecord']),
    ...mapActions(['getDirectories', 'getCurrentDirectory']),
    filterData(name, dateFrom, dateTo) {
      this.nameFilter = name;
      this.dateFromFilter = dateFrom;
      this.dateToFilter = dateTo;
    },
  },
  watch: {
    selectedCode() {
      this.selected = [];
      this.getCurrentDirectory(this.selectedCode);
    },
    directories() {
      this.selectedItem = this.directories[0].name;
    },
    selected() {
      this.setSelectedRecord(this.selected);
    },
  },
  mounted() {
    this.getDirectories();
  },
};
</script>

<style>
.main-content__dropdown {
  width: 70%;
  margin: 20px;
  display: flex;
}
.main-content__table {
  width: 100%;
}
.main-content__container {
  width: 100%;
}
.main-content__wrapper {
  display: flex;
}
</style>
