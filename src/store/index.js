import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { ROUTES, instance } from '@/store/axiosProps';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    directories: [],
    directory: '',
    selectedDirectoryCode: '',
    selectedRecord: [],
    showFilter: false,
  },
  getters: {
  },
  mutations: {
    setDirectories(state, value) {
      state.directories = value;
    },
    setDirectory(state, value) {
      state.directory = value;
    },
    setSelectedDirectoryCode(state, value) {
      state.selectedDirectoryCode = value;
    },
    setSelectedRecord(state, value) {
      state.selectedRecord = value;
    },
    setShowFilter(state) {
      state.showFilter = !state.showFilter;
    },
  },
  actions: {
    getDirectories: async (context) => {
      await instance
        .get(ROUTES.get.directories)
        .then((response) => {
          context.commit('setDirectories', response.data);
        })
        .catch((err) => console.error(err));
    },
    getCurrentDirectory: async (context, value) => {
      await instance
        .get(`${ROUTES.get.directory}${value}`)
        .then((response) => {
          context.commit('setDirectory', response.data);
        })
        .catch((err) => console.error(err));
    },
    saveNewRecord: async (context, value) => {
      await instance
        .post(`${ROUTES.post.directory}${value.code}`, value.record)
        .then(() => {
          context.dispatch('getCurrentDirectory', value.code);
        })
        .catch((err) => console.error(err));
    },
    deleteRecord: async (context, value) => {
      await instance
        .delete(`${ROUTES.delete.record}${value.code}/${value.id}`)
        .then(() => {
          context.dispatch('getCurrentDirectory', value.code);
        })
        .catch((err) => console.error(err));
    },
  },
  modules: {
  },
});
