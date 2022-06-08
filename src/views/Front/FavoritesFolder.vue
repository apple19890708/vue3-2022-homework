<template>
  <div>
    <h2 class="collect">收藏內容</h2>
    <div class="container d-flex justify-content-center">
      <div v-if="favoriteFoder?.productContents === 0">
        <p class="text-center text-primary fz-2">目前沒有商品加入收藏!</p>
      </div>
      <div class="container">
        <div class="row row-cols-1 row-cols-lg-4 g-3">
          <div class="col" v-for="(product, idx) in favoriteFoder?.productContents" :key="idx">
            <div class="card h-100">
              <div
                v-if="product.imageUrl"
                :style="{
                  backgroundImage: `url(${product.imageUrl})`,
                  height: '300px',
                  backgroundSize: 'cover'
                }"
                class="card-img-top primary-image"
                height="196"
              ></div>
              <div class="card-body">
                <h5 class="card-title text-start">{{ product.title }}</h5>
                <p class="card-text text-start">
                  {{ product.description }}
                </p>
              </div>
              <div class="card-footer bg-transparent border-0 d-flex justify-content-between">
                <router-link :to="`/front-product/${product.id}`" class="btn btn-primary"> 看內容 </router-link>
                <button
                  type="button"
                  class="btn btn-danger"
                  @click="addToCart(product.id)"
                  :disabled="isLoadingItem === product.id"
                >
                  <span v-show="isLoadingItem === product.id">
                    <font-awesome-icon icon="spinner" class="fa-spin" />
                  </span>
                  加到購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>

<script>
import { mapGetters } from "vuex";
import { addToCart } from "../../api";

export default {
  name: "FavoritesFolder",
  data() {
    return {
      favoriteFoder: {},
      floderId: this.$route.params.id,
      isLoadingItem: ""
    };
  },
  computed: {
    ...mapGetters("commonModule", ["favoriteFoders"])
  },
  watch: {
    favoriteFoders() {
      const folder = this.favoriteFoders.filter((item) => item.id === this.floderId);
      this.favoriteFoder = JSON.parse(JSON.stringify(folder[0]));
    }
  },
  methods: {
    async addToCart(id, qty = 1) {
      try {
        const data = {
          product_id: id,
          qty
        };
        this.isLoadingItem = id;
        const res = await addToCart({ data });
        if (res.success) {
          this.isLoadingItem = "";
          this.getCart();
          const status = "新增商品";
          this.$store.commit("commonModule/SAVE_TOAST_MESSAGE", { res, status });
        }
      } catch (err) {
        console.log(err);
      }
    },
    getCart() {
      this.$store.dispatch("commonModule/getCart");
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
    this.getLocalStorage()
  }
};
</script>
