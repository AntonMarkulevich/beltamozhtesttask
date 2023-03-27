<template>
   <div>
     <v-card>
            <v-card-text>
              <div class="delete-record__text pa-12">Удалить запись?</div>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn @click="$emit('close')"
              >Нет</v-btn>
              <v-btn @click="removeRecord"
                     color="primary">
                Да
              </v-btn>
            </v-card-actions>
          </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['selectedDirectoryCode', 'selectedRecord']),
  },
  methods: {
    ...mapActions(['deleteRecord']),
    removeRecord() {
      this.deleteRecord({ code: this.selectedDirectoryCode, id: this.selectedRecord[0].id })
        .then(() => {
          this.$emit('close');
        });
    },
  },
};
</script>

<style>
.delete-record__text {
    display: flex;
    justify-content: center;
    font-size: 20px;
}
</style>
