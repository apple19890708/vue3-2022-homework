<template>
  <div class="mt-4">
    <button class="btn btn-primary" @click="openModal('newProduct')">
      建立新的產品
    </button>
  </div>
  <div>
    <!-- {{ msg }}
    <Input v-model:fName="msg"></Input> -->
  </div>
  <div class="products-containers" ref="products">
    <div class="containers table-responsive">
      <table
        class="table table-bordered mt-4 table-light align-middle"
        style="text-align: initial"
      >
        <thead>
          <tr>
            <th width="120">產品名稱</th>
            <th width="120">原價</th>
            <th width="120">售價</th>
            <th width="150">是否啟用</th>
            <th width="120">評價</th>
            <th width="120">操作</th>
          </tr>
        </thead>
        <tbody id="productList">
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.title }}</td>
            <td width="120">
              ${{ `${numberWithCommas(product.origin_price)}` }}
            </td>
            <td width="120">${{ `${numberWithCommas(product.price)}` }}</td>
            <td>
              <label class="switch">
                <input type="checkbox" :checked="product.is_enabled" disabled />
                <span class="slider round"></span>
              </label>
            </td>
            <td>
              <span>
                <template v-for="(n, idx) in maxStars" :key="idx">
                  <font-awesome-icon
                    v-if="n > product.star"
                    :icon="['far', 'star']"
                  />
                  <font-awesome-icon
                    v-if="n <= product.star"
                    :icon="['fas', 'star']"
                  />
                </template>
              </span>
              {{ product.star }}
            </td>
            <td width="120">
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-primary"
                  @click="productDetail(product)"
                >
                  查看
                </button>
                <button
                  type="button"
                  class="btn btn-outline-primary btn-sm"
                  @click="openModal('edit', product)"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="openModal('delete', product)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        目前有 <span id="productCount">{{ products.length }}</span> 項產品
      </p>
      <Pagenation
        :pages="pagination"
        @get-product="getProductsData"
      ></Pagenation>
    </div>
    <div class="col-lg-3">
      <h2>單一產品細節</h2>
      <template v-if="tempProduct.title">
        <div class="row">
          <div class="col-12">
            <div class="card mb-3">
              <div
                v-if="tempProduct.imageUrl"
                :style="{
                  backgroundImage: `url(${tempProduct.imageUrl})`,
                  height: '300px',
                  backgroundSize: 'cover',
                }"
                class="card-img-top primary-image"
                height="196"
                alt="主圖"
              ></div>
              <img
                v-else
                :src="'http://www.estetikhaber.org/wp-content/uploads/2014/10/default-img-400x240.gif'"
                class="card-img-top primary-image"
                height="196"
                alt="主圖"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ tempProduct.title }}
                  <span class="badge bg-primary ms-2">{{
                    tempProduct.category
                  }}</span>
                </h5>
                <p class="card-text">商品描述：{{ tempProduct.description }}</p>
                <p class="card-text">商品內容：{{ tempProduct.content }}</p>
                <div class="d-flex">
                  <p class="card-text me-2">{{ tempProduct.origin_price }}</p>
                  <p class="card-text text-secondary">
                    <del>{{ tempProduct.origin_price }}</del>
                  </p>
                  元 / {{ tempProduct.unit }}
                </div>
              </div>
            </div>
          </div>
          <!-- <template
            v-for="(image, id) in tempProduct.imagesUrl"
            :key="`image-${id}`"
          >
            <div class="col-4">
              <img
                v-if="image"
                :src="image"
                :alt="`多圖 ${id + 1}`"
                class="images m-2"
              />
            </div>
          </template> -->
        </div>
      </template>
      <p v-else class="text-secondary">請選擇一個商品查看</p>
    </div>
    <Teleport to="body">
      <ProductDialog
        ref="productModalOutside"
        :temp-product="tempProduct"
        @update-product="(val) => updateProduct(val)"
        :is-new-product="isNewProduct"
      >
      </ProductDialog>
    </Teleport>
    <Teleport to="body">
      <DelProductModal
        ref="delProductModalOutside"
        :temp-product="tempProduct"
        @delete-product="deleteProduct"
      ></DelProductModal>
    </Teleport>
  </div>
</template>

<style lang="scss">
.table-bordered > :not(caption) > * {
  border-width: 0;
}
.table > :not(:first-child) {
  border-top: 1px solid currentColor;
}
table {
  border: 1px solid black;
  thead {
    border: 1px solid;
    tr {
      border: 1px solid black;
      th {
        background-color: lightgray !important;
        border: 0;
      }
    }
  }
  tbody {
    border: 1px solid;
    tr {
      td {
        border: 0;
        background-color: white !important;
      }
    }
  }
}
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: #2196f3;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
.products-containers {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: auto;
  background-color: #f8f8f8;
}
.containers {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 70%;
  flex: 2;
}
</style>

<script>
import { mapGetters } from "vuex";
import ProductDialog from "../components/ProductDialog.vue";
import DelProductModal from "../components/DelProductModal.vue";
import { aepAxios } from "../api/aepBaseApi";
import Pagenation from "../components/Pagenation.vue";

export default {
  name: "Products",
  data() {
    return {
      products: [],
      tempProduct: {
        imagesUrl: [],
      },
      isNewProduct: false,
      msg: "66666666",
      pagination: {},
      maxStars: 6,
    };
  },
  provide() {
    return {
      user: {
        name: "Asa",
        id: "67",
      },
    };
  },
  components: {
    ProductDialog,
    DelProductModal,
    Pagenation,
    // Input,
  },
  computed: {
    ...mapGetters("commonModule", [
      "productsInfo",
    ]),
  },
  watch: {
    productsInfo() {
      this.products = this.productsInfo.products;
      const originPlan = this.productsInfo.products; // 如果不先const 直接給this.products 再forEach會出現修改的值沒用
      this.pagination = this.productsInfo.pagination;
      this.products = originPlan.map((item) => ({
        category: item.category,
        content: item.content,
        description: item.description,
        id: item.id,
        imageUrl: item.imageUrl,
        imagesUrl: item.imagesUrl,
        is_enabled: item.is_enabled,
        num: item.num,
        title: item.title,
        unit: item.unit,
        origin_price: item.origin_price,
        price: item.price,
        star: item.star || 0,
      }));
      console.log("this.products", this.products);
    },
  },
  methods: {
    changeStars(n, pIdx) {
      this.products[pIdx].star = n;
    },
    async checkAdmin() {
      const api = `${process.env.VUE_APP_API}v2/api/user/check`; // 檢查使用者登入狀態
      try {
        const res = await this.axios.post(api);
        if (res.data.success) {
          this.getProductsData();
        }
      } catch (err) {
        console.log(err);
        localStorage.setItem("session", JSON.stringify({ isLogin: false }));
        this.$router.push("/admin-login");
      }
    },
    async getProductsData(page = 1) {
      // 利用query 帶入預設頁數
      // const url = `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      try {
        await this.$store.dispatch("commonModule/getProduct", page);
      } catch (err) {
        console.log(err);
      }
    },
    productDetail(item) {
      this.tempProduct = { ...item };
    },
    openModal(newProduct, item) {
      switch (newProduct) {
        case "newProduct":
          this.tempProduct = {
            category: "",
            content: "",
            description: "",
            id: "",
            imagesUrl: [],
            is_enabled: "",
            num: null,
            title: "",
            unit: "",
            origin_price: null,
            price: null,
            star: 0,
          };
          this.isNewProduct = true;
          this.$refs.productModalOutside.openModal(); // 透過在父層掛ref使用子層的methods
          break;
        case "edit":
          this.tempProduct = { ...item };
          this.isNewProduct = false;
          this.$refs.productModalOutside.openModal();
          break;
        case "delete":
          this.tempProduct = { ...item };
          this.$refs.delProductModalOutside.openModal();
          break;
        default:
          break;
      }
    },
    async updateProduct(item) {
      let url = `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/admin/product`;
      let http = "post";
      if (!this.isNewProduct) {
        // 判斷是否為新建立
        url = `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
        http = "put";
      }
      try {
        const loader = this.$loading.show({
          container: this.$refs.products,
          canCancel: true,
        });
        const res = await this.axios[http](url, { data: item });
        if (res.data.success) {
          loader.hide();
          this.getProductsData();
          this.$refs.productModalOutside.closeModal();
          this.tempProduct = { ...item };
        } else {
          console.log("res.data", res.data);
        }
      } catch (error) {
        console.log(error.response);
      }
    },
    async deleteProduct() {
      const url = `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      try {
        const res = await this.axios.delete(url);
        if (res.data.success) {
          this.getProductsData();
          this.$refs.delProductModalOutside.closeModal();
        }
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  created() {
    const token = document.cookie.replace(
      // eslint-disable-next-line
      /(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.axios.defaults.headers.common.Authorization = token; // 將token帶入header裡面
    aepAxios.defaults.headers.common.Authorization = token; // 這是目前新版寫法
    this.checkAdmin();
  },
};
</script>
