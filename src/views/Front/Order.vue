<template>
  <div class="container align-items-center flex-column">
    <div class="mt-5 row justify-content-center">
      <div class="col-md-8">
      <Form ref="orderForm" v-slot="{ errors }" @submit="createOrder">
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
            <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
          </div>
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
            <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
          </div>
        <button
          class="btn btn-primary"
          type="submit"
        >
          送出訂單
        </button>
      </Form>
    </div>
    <div class="col-md-4 border" style="max-height: 660px;background-color: blanchedalmond;">
      <ul class="ps-0">
        <li class="p-2" style="font-weight: bold; font-size: 18px">訂單明細</li>
        <div style="max-height:400px; overflow:auto; background:white">
          <li class="p-3 border" v-for="cart in cart['carts']" :key="cart.id">
          <div class="card border-0 mb-3 text-dark bg-white" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-2">
                <img class="cart-img object-sm-fit" style="width: 48px; height: 100%; object-fit: cover" :src="cart.product.imageUrl" :alt="cart.product.title">
              </div>
              <div class="col-10">
                <h5 class="card-title fz-1 m-0 text-start p-2">
                  {{ cart.product.title }}
                </h5>
                <span class="d-flex justify-content-between px-2">
                  <p>
                    {{ `NT$ ${(cart.product.price)} / ${cart.product.unit} ` }}
                  </p>
                  <p>x{{ cart.qty }}</p>
                </span>
              </div>
            </div>
          </div>
        </li>
        </div>
        <!-- 套用優惠碼 -->
        <li class="mt-3">
          <form class="input-group mb-3" @submit.prevent="useCoupon">
            <input
              class="form-control border-primary text-primary"
              type="text"
              placeholder="請輸入優惠碼"
              aria-label="Recipient's username"
              aria-describedby="button-coupon"
              required
              v-model="couponCode"
            />
            <button
              type="submit"
              class="btn btn-outline-primary btn-right fz-0"
              id="button-coupon"
            >
              套用優惠碼
            </button>
          </form>
        </li>
        <li>
          <span class="d-flex justify-content-between align-items-center">
            <p class="mb-0">小計:</p>
            <p class="mb-0">NT ${{ cart.total }}</p>
          </span>
        </li>
        <li>
          <span class="d-flex justify-content-between align-items-center">
            <p class="mb-0">運費:</p>
            <p class="mb-0">NT ${{ shipping }}</p>
          </span>
        </li>
        <li>
          <span class="d-flex justify-content-between align-items-center">
            <p class="mb-0">優惠折抵:</p>
            <p class="mb-0">
              {{
                `NT $ -${
                  Math.floor(cart.total) -
                    Math.floor(cart.final_total)
                }`
              }}
            </p>
          </span>
        </li>
        <li>
          <hr>
        </li>
        <li>
          <span class="d-flex justify-content-between align-items-center">
            <p class="mb-0">總計:</p>
            <p class="fz-2 mb-0 text-danger fw-bold">
              {{
                `NT $ ${
                  Math.floor(cart.final_total)
                }`
              }}
            </p>
          </span>
        </li>
      </ul>
    </div>
    </div>

  </div>
</template>

<style lang="scss">
  li {
        list-style-type: none;
  }
</style>

<script>
import { mapGetters } from "vuex";
import { postCoupon } from "../../api";

export default {
  name: 'Order',
  data() {
    return {
      couponCode: '',
      shipping: 0,
      cart: [],
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
      },
    }
  },
  computed: {
    ...mapGetters("commonModule", ["carts"]),
  },
  watch: {
    carts() {
      this.cart = JSON.parse(JSON.stringify(this.carts));
    },
  },
  methods: {
    async useCoupon() {
      try {
        const data = {
          code: this.couponCode
        }
        const res = await postCoupon({ data })
        const status = '使用優惠券';
        if (res.success) {
          this.$store.commit('commonModule/SAVE_TOAST_MESSAGE', { res, status })
          this.getCart();
        }
      } catch (error) {
        const status = '使用優惠券';
        const errRes = error.response;
        this.$store.commit('commonModule/SAVE_TOAST_MESSAGE', { res: errRes, status })
      }
    },
    getCart() {
      this.$store.dispatch("commonModule/getCart");
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需要正確的電話號碼";
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
            this.$router.push({ path: `payment/${response.data.orderId}`, query: { currentPage: 3 } });
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
  },
  created() {
    this.getCart();
  },
}
</script>
