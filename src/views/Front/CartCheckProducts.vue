<template>
  <div>
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
            <th>刪除</th>
            <th>圖片</th>
            <th>品名</th>
            <th style="width: 150px">數量/單位</th>
            <th>總價</th>
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
              <td style="width: 200px">
                <div
                  :style="{
                    backgroundImage: `url(${item.product.imageUrl})`,
                  }"
                  style="
                    height: 100px;
                    background-size: cover;
                    background-position: center;
                  "
                ></div>
              </td>
              <td>
                {{ item.product.title }}
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
              <td>
                NT ${{ item.final_total }}
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4" class="text-end">總計</td>
            <td>
              <span class="fz-2 text-danger">NT${{ cart.total }}</span>
            </td>
          </tr>
          <tr class="border-0">
            <td colspan="4" class="text-end"></td>
            <td>
              <button
                type="button"
                class="fz-2 text-end btn btn-outline-danger"
                @click="createOrder"
              >
                送出訂單
              </button>
            </td>
          </tr>
          <!-- <tr v-if="cart.final_total !== cart.total">
            <td colspan="3" class="text-end text-success">折扣價</td>
            <td class="text-end text-success">{{ cart.final_total }}</td>
          </tr> -->
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { deleteAllCarts, updateCartItem, deleteCartItem } from "../../api";

export default {
  name: 'CartCheckProducts',
  data() {
    return {
      cart: [],
      loadingStatus: {
        loadingItem: "",
      },
    };
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
    createOrder() {
      if (this.cart.carts.length !== 0) {
        this.$router.push({ path: "/cart/order", query: { currentPage: 2 } });
      } else {
        alert("購物車內無商品");
      }
    },
    getCart() {
      this.$store.dispatch("commonModule/getCart");
    },
    deleteAllCarts() {
      deleteAllCarts()
        .then((res) => {
          const status = "刪除所有商品";
          this.$store.commit("commonModule/SAVE_TOAST_MESSAGE", {
            res,
            status,
          });
          this.getCart();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removeCartItem(id) {
      deleteCartItem(id)
        .then((res) => {
          const status = "刪除單筆商品";
          this.$store.commit("commonModule/SAVE_TOAST_MESSAGE", {
            res,
            status,
          });
          this.loadingStatus.loadingItem = "";
          this.getCart();
        })
        .catch((err) => {
          const status = "刪除單筆商品";
          const errRes = err.response;
          this.$store.commit("commonModule/SAVE_TOAST_MESSAGE", {
            res: errRes,
            status,
          });
        });
    },
    async updateCart(data) {
      try {
        this.loadingStatus.loadingItem = data.id;
        const cart = {
          product_id: data.product_id,
          qty: data.qty,
        };
        const res = await updateCartItem({ data: cart }, data.id);
        if (res) {
          const status = "更新商品數量";
          this.$store.commit("commonModule/SAVE_TOAST_MESSAGE", {
            res,
            status,
          });
          this.loadingStatus.loadingItem = "";
          this.getCart();
        }
      } catch (err) {
        console.log(err);
        this.loadingStatus.loadingItem = "";
      }
    },
  },
  created() {
    this.getCart();
  },
};
</script>
