<template>
  <div class="action-btns">
    <v-dialog transition="dialog-top-transition"
              max-width="600">
        <template v-slot:activator="{ on, attrs }">
            <v-btn dark
                   color="indigo"
                   class="mx-2"
                   v-bind="attrs"
                   v-on="on">
                <v-icon dark>mdi-plus</v-icon>
            </v-btn>
        </template>
        <template v-slot:default="dialog">
           <add-record v-if="dialog.value" @close="dialog.value=false"></add-record>
        </template>
    </v-dialog>
    <v-dialog transition="dialog-top-transition"
              max-width="600">
        <template v-slot:activator="{ on, attrs }">
    <v-btn dark
           color="indigo"
           class="mx-2"
           v-bind="attrs"
           v-on="on"
           :disabled="!selectedRecord.length">
        <v-icon dark>mdi-pencil</v-icon>
    </v-btn>
     </template>
        <template v-slot:default="dialog">
           <edit-record v-if="dialog.value" @close="dialog.value=false"></edit-record>
        </template>
    </v-dialog>
    <v-dialog transition="dialog-top-transition"
              max-width="300">
        <template v-slot:activator="{ on, attrs }">
    <v-btn dark
           color="indigo"
           class="mx-2"
           v-bind="attrs"
           v-on="on"
           :disabled="!selectedRecord.length">
        <v-icon dark>mdi-delete</v-icon>
    </v-btn>
     </template>
        <template v-slot:default="dialog">
           <delete-record v-if="dialog.value" @close="dialog.value=false"></delete-record>
        </template>
    </v-dialog>
    <v-btn dark
           color="indigo"
           class="mx-2">
        <v-icon dark>mdi-download</v-icon>
    </v-btn>
    <v-btn dark
           color="indigo"
           class="mx-2"
           @click="setShowFilter">
        <v-icon dark>mdi-filter</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import AddRecord from '../dialog_menu/AddRecord.vue';
import DeleteRecord from '../dialog_menu/DeleteRecord.vue';
import EditRecord from '../dialog_menu/EditRecord.vue';

export default {
  components: {
    AddRecord,
    DeleteRecord,
    EditRecord,
  },
  computed: {
    ...mapState(['selectedRecord']),
  },
  methods: {
    ...mapMutations(['setShowFilter']),
  },
};
</script>

<style>
.action-btns {
    display: flex;
}
</style>
