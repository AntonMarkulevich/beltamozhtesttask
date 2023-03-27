<template>
<div>
    <v-app-bar color="indigo"
               dense
               dark>
    <v-app-bar-nav-icon @click="$emit('set-show-left-menu')"></v-app-bar-nav-icon>
    <v-toolbar-title>Info tables</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-bell-badge</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-plus-circle</v-icon>
    </v-btn>
    <v-btn color="white"
           text
           shaped>
      НСИ
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-chart-box</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-help</v-icon>
    </v-btn>
    <v-btn color="white"
           text
           shaped>
      Выход
    </v-btn>
  </v-app-bar>
</div>
</template>

<script>
export default {

};
</script>

<style>

</style>
