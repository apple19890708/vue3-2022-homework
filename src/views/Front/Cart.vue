<template>
  <div class="Cart">
    <div style="padding: 15px">
      <h2>購買商品</h2>
      <div class="mt-5 row align-items-center flex-column">
        <div class="col-md-6">
          <StepProgessSlider
            :length="4"
            :current-page="currentPage"
          ></StepProgessSlider>
        </div>
      </div>
      <!-- <table class="table align-middle">
        <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td style="width: 200px">
              <div
                :style="{
                  backgroundImage: `url(${product.imageUrl})`,
                }"
                style="
                  height: 100px;
                  background-size: cover;
                  background-position: center;
                "
              ></div>
            </td>
            <td>{{ product.title }}</td>
            <td>
              <div class="h5" v-if="product.price === product.origin_price">
                {{ product.price }} 元
              </div>
              <div v-else>
                <del class="h6">原價 {{ product.origin_price }} 元</del>
                <div class="h5">現在只要 {{ product.price }} 元</div>
              </div>
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  :disabled="isLoadingItem === product.id"
                  @click="openProductModal(product.id)"
                >
                  查看更多
                </button>
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
            </td>
          </tr>
        </tbody>
      </table> -->
    </div>
  <router-view/>
  </div>
  <div class="container">
    <div class="mt-4"></div>
    <div class="mt-5 row align-items-center flex-column">
      <!-- <div class="col-md-6">
        <StepProgessSlider
          :length="3"
          :current-page="currentPage"
        ></StepProgessSlider>
      </div> -->
      <!-- <div class="col-md-6">
        <Form ref="orderForm" v-slot="{ errors }" @submit="validates">
          <template v-if="currentPage == 1">
            <div class="mb-3 text-start">
              <label for="email" class="form-label">Email</label>
              <Field
                id="email"
                name="信箱"
                type="email"
                placeholder="請輸入信箱"
                class="form-control"
                :class="{ 'is-invalid': errors['信箱'] }"
                :rules="{ required: true, email: true }"
                v-model="form.user.email"
              />
              <ErrorMessage class="invalid-feedback" name="信箱" />
            </div>
            <div class="mb-3 text-start">
              <label for="name" class="form-label">收件人姓名</label>
              <Field
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              ></Field>
              <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
            </div>
          </template>
          <template v-if="currentPage == 2">
            <div class="mb-3 text-start">
              <label for="phone" class="form-label">收件人電話</label>
              <Field
                id="phone"
                name="電話"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                :rules="isPhone"
                v-model="form.user.tel"
              ></Field>
              <ErrorMessage
                name="電話"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>
          </template>
          <template v-if="currentPage == 3">
            <div class="mb-3 text-start">
              <label for="address" class="form-label">收件人地址</label>
              <Field
                id="address"
                name="地址"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['地址'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              ></Field>
              <ErrorMessage
                name="地址"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>
          </template>
          <button
            class="btn btn-primary"
            v-if="currentPage !== 1"
            type="button"
            @click="currentPage--"
          >
            上一頁
          </button>
          <button
            class="btn btn-primary"
            v-if="currentPage == 3"
            type="submit"
            @click="createOrder"
          >
            Submit
          </button>
          <button class="btn btn-primary" v-if="currentPage < 3" type="submit">
            下一頁
          </button>
        </Form>
      </div> -->
    </div>
    <!-- <Teleport to="body">
      <ProductShowDialog
        ref="productModal"
        :temp-product="tempProduct"
        @add-to-cart="
          (id, qty) => {
            addToCart(id, qty);
          }
        "
      >
      </ProductShowDialog>
    </Teleport> -->
  </div>
</template>

<style lang="scss">
table {
  tbody {
    tr {
      &:last-child td {
        border-bottom: none;
        margin-bottom: 0px;
      }
    }
  }
}
</style>

<script>
import { mapGetters } from 'vuex'
import StepProgessSlider from "../../components/StepProgessSlider.vue";
import ProductShowDialog from "../../components/ProductShowDialog.vue";

export default {
  name: "Cart",
  data() {
    return {
      selectedVal: "",
      date: "",
      currentPage: this.$route.query.currentPage || 1,
      products: [],
      isLoadingItem: "",
      cart: [],
      loadingStatus: {
        loadingItem: "",
      },
      tempProduct: {},
    };
  },
  components: {
    StepProgessSlider,
  },
  computed: {
    ...mapGetters("commonModule", [
      "carts"
    ]),
  },
  watch: {
    carts() {
      this.cart = JSON.parse(JSON.stringify(this.carts));
    },
  },
  beforeRouteUpdate(to, from, next) {
    if (to.query.currentPage) {
      this.currentPage = to.query.currentPage;
    } else {
      this.currentPage = 1;
    }

    next();
  },
  methods: {
    openProductModal(id) {
      const url = `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.loadingStatus.loadingItem = id;
      this.axios
        .get(url)
        .then((response) => {
          this.tempProduct = response.data.product;
          this.$refs.productModal.openModal();
        })
        .catch((err) => {
          // alert(err.data.message);
        });
    },
    // async updateCart(data) {
    //   try {
    //     this.loadingStatus.loadingItem = data.id;
    //     const cart = {
    //       product_id: data.product_id,
    //       qty: data.qty,
    //     };
    //     const res = await updateCartItem({ data: cart }, data.id)
    //     if (res) {
    //       alert(res.message);
    //       this.loadingStatus.loadingItem = "";
    //       this.getCart();
    //     }
    //   } catch (err) {
    //     console.log(err)
    //     this.loadingStatus.loadingItem = "";
    //   }
    // },
    createOrder() {
      const url = `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/order`; // 結帳
      const order = this.form;
      if (this.cart.carts.length !== 0) {
        this.$http
          .post(url, { data: order })
          .then((response) => {
            alert(response.data.message);
            this.$refs.orderForm.resetForm();
            this.currentPage = 1;
            this.form = {
              user: {
                name: "",
                email: "",
                tel: "",
                address: "",
              },
            };
            this.getCart();
          })
          .catch((err) => {
            alert(err);
          });
      } else {
        alert("尚未購買商品");
        this.currentPage = 1;
        this.form = {
          user: {
            name: "",
            email: "",
            tel: "",
            address: "",
          },
        };
      }
    },
    // removeCartItem(id) {
    //   deleteCartItem(id)
    //     .then((res) => {
    //       alert(res.message);
    //       this.loadingStatus.loadingItem = "";
    //       this.getCart();
    //     })
    //     .catch((err) => {
    //       alert(err.data.message);
    //     })
    // },
    // deleteAllCarts() {
    //   deleteAllCarts()
    //     .then((res) => {
    //       alert(res.message);
    //       this.getCart();
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // },
    current() {
      this.currentPage -= 1;
    },
    async validates() {
      this.currentPage += 1;
    },
    onSubmit() {
      console.log("submit form");
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需要正確的電話號碼";
    },
    // getProducts() {
    //   this.$http
    //     .get(
    //       `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/products/all`
    //     )
    //     .then((res) => {
    //       this.products = res.data.products;
    //     });
    // },
    // async addToCart(id, qty = 1) {
    //   try {
    //     const data = {
    //       product_id: id,
    //       qty,
    //     };
    //     this.isLoadingItem = id;
    //     const res = await addToCart({ data });
    //     if (res) {
    //       this.isLoadingItem = "";
    //       this.$refs.productModal.closeModal();
    //       this.getCart();
    //     }
    //   } catch (err) {
    //     console.log(err)
    //   }
    // },
    getCart() {
      this.$store.dispatch('commonModule/getCart')
    },
  },
  mounted() {
    // this.getProducts();
    this.getCart();
  },
};
</script>
