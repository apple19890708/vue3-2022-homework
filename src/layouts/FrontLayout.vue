<template>
  <div>
    <FrontNavbar :showNavbar="showNavbar"></FrontNavbar>
    <div style="margin-top:60px">
      <ToastMessages></ToastMessages>
      <router-view></router-view>
    </div>

  </div>

</template>

<script>
import ToastMessages from '@/components/ToastMessages.vue';
import FrontNavbar from "@/components/FrontNavbar.vue";

export default {
  name: "FrontLayout",
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0
    }
  },
  components: {
    FrontNavbar,
    ToastMessages,
  },
  methods: {
    onScroll() {
      const OFFSET = 60; // 基準值
      if (window.pageYOffset < 0) { // 小於0時return，防呆
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) { // 相減 絕對值小於 60 時 return(以60作為存最後位置的間格)
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition // 當前位置 小於 最後捲動改變位置時為 false，隱藏 navbar
      this.lastScrollPosition = window.pageYOffset
    },
    getLocalStorage() {
      const favoriteFolders = JSON.parse(localStorage.getItem('favorite-folders'));
      if (favoriteFolders) {
        this.folders = favoriteFolders;
        this.copyFolders = JSON.parse(JSON.stringify(favoriteFolders));
      }
      this.$store.commit('commonModule/SAVE_FAVORIE_FOLDERS', JSON.parse(JSON.stringify(favoriteFolders)));
    },
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    this.getLocalStorage()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
};
</script>
