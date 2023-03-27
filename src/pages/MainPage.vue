<template>
  <div>
    <header-menu @set-show-left-menu="setShowLeftMenu"></header-menu>
    <div class="main-content--wrapper">
        <transition name="slide">
        <left-menu v-if="showLeftMenu"></left-menu>
    </transition>
    <main-content></main-content>
    </div>

  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu.vue';
import LeftMenu from '@/components/LeftMenu.vue';
import MainContent from '@/components/main_content/MainContent.vue';

export default {
  components: {
    HeaderMenu,
    LeftMenu,
    MainContent,
  },
  data() {
    return {
      showLeftMenu: false,
    };
  },
  methods: {
    setShowLeftMenu() {
      this.showLeftMenu = !this.showLeftMenu;
    },
  },
};
</script>

<style>
.slide-enter-active, .slide-leave-active {
  transition: all .3s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(-200px);
  opacity: 0;
}
.main-content--wrapper {
    display: flex;
}
</style>
