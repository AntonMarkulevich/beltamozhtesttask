<template>
  <div class="left-menu--container">
    <v-card v-for="title in titles"
            :key="title.key">
            <h2>{{title.name}}</h2>
        <v-list>
            <v-list-item-group color="indigo">
                <v-list-item v-for="(item, index) in items(title.key)"
                             :key="index">
                             <v-list-item-icon>
            <v-icon >{{item.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title >{{item.name}}</v-list-item-title>
          </v-list-item-content>
          </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    titles() {
      return [{
        name: 'Экспертизы',
        key: 'eksp',
      },
      {
        name: 'Журналы',
        key: 'journ',
      }];
    },

  },
  methods: {
    items(key) {
      return key === 'eksp' ? [{ name: 'В работе', icon: 'mdi-pencil' },
        { name: 'Завершенные', icon: 'mdi-check' },
        { name: 'Таможенные', icon: 'mdi-file-document-multiple-outline' },
        { name: 'Судебные по Ап', icon: 'mdi-file-document-multiple-outline' },
        { name: 'Судебные по УП', icon: 'mdi-file-document-multiple-outline' },
        { name: 'Все', icon: 'mdi-archive-outline' }]
        : [{ name: 'Решения', icon: 'mdi-file-document-outline' },
          { name: 'Постановления', icon: 'mdi-file-document-outline' },
          { name: 'Таможенные экспертизы (ТЭ)', icon: 'mdi-file-document-outline' },
          { name: 'Судебные экспертизы (СЭ)', icon: 'mdi-file-document-outline' },
          { name: 'Учет проб и (или) образцов', icon: 'mdi-poll' },
          { name: 'Заключения по ТЭ', icon: 'mdi-file-document-outline' },
          { name: 'Заключения по СЭ', icon: 'mdi-file-document-outline' },
          { name: 'СНДЗ', icon: 'mdi-file-document-outline' },
          { name: 'Акты', icon: 'mdi-file-document-outline' }];
    },
  },

};
</script>

<style>
.left-menu--container {
    width: 350px;
}
</style>
