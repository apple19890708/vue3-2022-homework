<template>
  <div class="Cart">
    <div class="card" style="padding: 15px">
      <h2>購物車</h2>
      <table class="table align-middle">
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
      </table>
    </div>
    <div class="text-end" style="padding: 15px">
      <button
        class="btn btn-outline-danger"
        type="button"
        @click="deleteAllCarts"
      >
        清空購物車
      </button>
    </div>
    <div style="padding: 15px">
      <table class="table align-middle">
        <thead>
          <tr>
            <th></th>
            <th>品名</th>
            <th style="width: 150px">數量/單位</th>
            <th>單價</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="cart.carts">
            <tr v-for="item in cart.carts" :key="item.id">
              <td>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm"
                  @click="removeCartItem(item.id)"
                  :disabled="loadingStatus.loadingItem === item.id"
                >
                  <i
                    class="fas fa-spinner fa-pulse"
                    v-if="loadingStatus.loadingItem === item.id"
                  ></i>
                  x
                </button>
              </td>
              <td>
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">已套用優惠券</div>
              </td>
              <td>
                <div class="input-group input-group-sm">
                  <div class="input-group mb-3">
                    <input
                      v-model.number="item.qty"
                      @blur="updateCart(item)"
                      :disabled="loadingStatus.loadingItem === item.id"
                      min="1"
                      type="number"
                      class="form-control"
                    />
                    <span class="input-group-text" id="basic-addon2">{{
                      item.product.unit
                    }}</span>
                  </div>
                </div>
              </td>
              <td class="text-end">
                <small
                  v-if="cart.final_total !== cart.total"
                  class="text-success"
                  >折扣價：</small
                >
                {{ item.final_total }}
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" class="text-end">總計</td>
            <td class="text-end">{{ cart.total }}</td>
          </tr>
          <tr v-if="cart.final_total !== cart.total">
            <td colspan="3" class="text-end text-success">折扣價</td>
            <td class="text-end text-success">{{ cart.final_total }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
  <div class="container">
    <div class="mt-4"></div>
    <div class="mt-5 row align-items-center flex-column">
      <div class="col-md-6">
        <StepProgessSlider
          :length="3"
          :current-page="currentPage"
        ></StepProgessSlider>
      </div>
      <div class="col-md-6">
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
                name="name"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['name'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"
              ></Field>
              <ErrorMessage name="name" class="invalid-feedback"></ErrorMessage>
            </div>
          </template>
          <template v-if="currentPage == 2">
            <div class="mb-3 text-start">
              <label for="phone" class="form-label">收件人電話</label>
              <Field
                id="phone"
                name="phone"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['phone'] }"
                placeholder="請輸入電話"
                :rules="isPhone"
                v-model="form.user.tel"
              ></Field>
              <ErrorMessage
                name="phone"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>
          </template>
          <template v-if="currentPage == 3">
            <div class="mb-3 text-start">
              <label for="address" class="form-label">收件人地址</label>
              <Field
                id="address"
                name="address"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['address'] }"
                placeholder="請輸入地址"
                rules="required"
                v-model="form.user.address"
              ></Field>
              <ErrorMessage
                name="address"
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
      </div>
    </div>
    <Teleport to="body">
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
    </Teleport>
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
import StepProgessSlider from "../components/StepProgessSlider.vue";
import ProductShowDialog from "../components/ProductShowDialog.vue";

export default {
  name: "Cart",
  data() {
    return {
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
      },
      selectedVal: "",
      date: "",
      currentPage: 1,
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
    ProductShowDialog,
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
    updateCart(data) {
      this.loadingStatus.loadingItem = data.id;
      const url = `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/cart/${data.id}`;
      const cart = {
        product_id: data.product_id,
        qty: data.qty,
      };
      this.$http
        .put(url, { data: cart })
        .then((response) => {
          alert(response.data.message);
          this.loadingStatus.loadingItem = "";
          this.getCart();
        })
        .catch((err) => {
          alert(err.data.message);
          this.loadingStatus.loadingItem = "";
        });
    },
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
    removeCartItem(id) {
      const url = `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.loadingStatus.loadingItem = id;
      this.$http
        .delete(url)
        .then((response) => {
          alert(response.data.message);
          this.loadingStatus.loadingItem = "";
          this.getCart();
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
    deleteAllCarts() {
      const url = `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/carts`;
      this.$http
        .delete(url)
        .then((response) => {
          alert(response.data.message);
          this.getCart();
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
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
    getProducts() {
      this.$http
        .get(
          `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/products/all`
        )
        .then((res) => {
          this.products = res.data.products;
        });
    },
    addToCart(id, qty = 1) {
      console.log("id", id);
      const data = {
        product_id: id,
        qty,
      };
      this.isLoadingItem = id;
      this.$http
        .post(
          `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/cart`,
          { data }
        )
        .then((res) => {
          this.isLoadingItem = "";
          this.$refs.productModal.closeModal();
          this.getCart();
        });
    },
    getCart() {
      this.$http
        .get(
          `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/cart`
        )
        .then((response) => {
          const cartData = response.data.data;
          this.cart = JSON.parse(JSON.stringify(response.data.data));
          this.$store.dispatch("commonModule/getCarts", cartData);
        });
    },
  },
  mounted() {
    this.getProducts();
    this.getCart();
  },
};
</script>
