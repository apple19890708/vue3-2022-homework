<template>
  <header class="banner mt-navbar d-flex justify-content-center align-items-center">
    <div class="bg-img-transparent rounded p-2">
      <h2 class="text-center fz-2 fz-md-4">我的收藏</h2>
    </div>
  </header>
  <div class="container d-flex justify-content-center">
    <div v-if="favoriteFodersList.length === 0">
      <p class="text-center text-primary fz-2">目前沒有商品加入收藏!</p>
    </div>
    <template class="col-xl-4 col-md-6 col-12 d-flex" v-for="(folder, idx) in favoriteFodersList" :key="idx">
      <router-link
        class="col-xl-4 col-md-6 col-12 folder"
        v-if="favoriteFodersList.length > 0"
        :to="`/folder/${folder.id}`"
      >
        <div class="d-flex flex-column align-items-center">
          <font-awesome-icon icon="folder" class="fa-folder folder-name" />
          <span style="color: black">資料夾名稱: {{ folder.title }}</span>
        </div>
      </router-link>
    </template>
  </div>
</template>

<style lang="scss">
.folder {
  display: flex;
  justify-content: center;
  text-decoration: none;
  color: #ffc107;
  &-name {
    width: 100px;
    height: 100px;
  }
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Favorites",
  data() {
    return {
      favoriteFodersList: []
    };
  },
  computed: {
    ...mapGetters("commonModule", ["favoriteFoders"])
  },
  watch: {
    favoriteFoders: {
      handler() {
        this.favoriteFodersList = [...this.favoriteFoders];
      },
      immediate: true
    }
  }
};
</script>
