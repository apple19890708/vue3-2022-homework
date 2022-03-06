<template>
  <div>
    <h2>產品列表</h2>
    <div class="container">
      <!-- row 決定內層的數量 -->
      <div class="row row-cols-1 row-cols-lg-4 g-3">
        <!-- 內層不定義寬度 -->
        <div class="col" v-for="(product, idx) in products" :key="product.id">
          <div class="card h-100">
            <div
              class="favorite-mark"
              :class="{ saved: products[idx].saved }"
              @click.prevent="saveFavoriteProduct(product)"
            >
              <font-awesome-icon
                :icon="[products[idx].saved ? 'fa' : 'far', 'bookmark']"
                class="bookmark"
              />
            </div>
            <div
              v-if="product.imageUrl"
              :style="{
                backgroundImage: `url(${product.imageUrl})`,
                height: '300px',
                backgroundSize: 'cover',
              }"
              class="card-img-top primary-image"
              height="196"
            ></div>
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">
                {{ product.description }}
              </p>
              <router-link
                :to="`/front-product/${product.id}`"
                class="btn btn-primary"
              >
                看內容
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FavoriteFilesDialog ref="favoriteFilesDialog" :choiceFavoriteProduct="favoriteProduct" />
  </div>
</template>

<style lang="scss">
.favorite-mark {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(83, 83, 83, 0.5);
  background-color: rgb(255, 255, 255);
  position: absolute;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
  &.saved {
    background-color: rgb(117, 223, 241);
  }
  .bookmark {
    margin-top: 1rem;
  }
}
</style>

<script>
import { mapGetters } from 'vuex';
import FavoriteFilesDialog from "../components/FavoriteFilesDialog.vue";

export default {
  name: "FrontProducts",
  components: {
    FavoriteFilesDialog,
  },
  data() {
    return {
      products: [],
      favoriteProduct: {},
    };
  },
  computed: {
    ...mapGetters('commonModule', [
      'favoriteFoders',
    ])
  },
  watch: {
    favoriteFoders() {
      this.checkBookingProduct()
    },
  },
  methods: {
    checkBookingProduct() { // 檢查商品是否已收藏在資料夾內
      this.products.forEach((product, idx) => {
        let isSaved = false;
        this.favoriteFoders.forEach(((item) => {
          item.productContents.forEach((content) => {
            if (product.id === content.id) {
              isSaved = true;
            }
          })
        }))
        this.products[idx].saved = isSaved;
      })
    },
    saveFavoriteProduct(product) {
      this.favoriteProduct = product;
      this.$refs.favoriteFilesDialog.openModal();
    },
    getProducts() {
      this.$http(
        `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/products/all`
      ).then((res) => {
        this.products = res.data.products;
        this.checkBookingProduct()
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
