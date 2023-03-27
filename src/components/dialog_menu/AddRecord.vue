<template>
  <div>
     <v-card>
            <v-toolbar
              color="indigo"
              dark
            >Сохранение записи</v-toolbar>
            <v-card-text>
                <v-text-field v-model="name"
                              solo
                              label="Наименование"
                              clearable
          ></v-text-field>
          <div class="datepicker-wrapper">
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
          </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn @click="$emit('close')"
              >Закрыть</v-btn>
              <v-btn @click="saveRecord"
                     color="primary">
                Сохранить
              </v-btn>
            </v-card-actions>
          </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      name: '',
      menu1: false,
      menu2: false,
      dateFrom: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000))
        .toISOString().substr(0, 10),
      dateTo: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000))
        .toISOString().substr(0, 10),
    };
  },
  computed: {
    ...mapState(['directory', 'selectedDirectoryCode']),
    currentRecord() {
      const newObject = {};
      Object.assign(newObject, this.directory.content[0]);
      if (this.selectedDirectoryCode === 'dirUsers') {
        newObject.fullName = this.name;
      } else newObject.name = this.name;
      newObject.dateActivate = this.dateFrom;
      newObject.dateDeactivate = this.dateTo;
      newObject.dateUpdate = new Date();
      newObject.id = null;
      return newObject;
    },
  },
  methods: {
    ...mapActions(['saveNewRecord']),
    saveRecord() {
      this.saveNewRecord({ code: this.selectedDirectoryCode, record: this.currentRecord })
        .then(() => {
          this.$emit('close');
        });
    },
  },
};
</script>

<style>
.datepicker-wrapper {
    display: flex;
}
</style>
