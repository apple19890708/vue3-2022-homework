<template>
  <div>
    <div class="container" style="margin-top: 5rem !important">
      <div class="d-flex justify-content-center mt-5">
        <input
          class="form-control me-2 orderSearch"
          type="search"
          v-model="order"
          placeholder="訂單搜尋"
          aria-label="訂單搜尋"
        />
        <button class="btn btn-outline-success" @click="$router.push(`/search-single-order/${order}`)">搜尋</button>
      </div>
      <div class="card p-4 mt-3">
        <h3>所有訂單</h3>
        <ul class="p-4">
          <li
            class="d-flex flex-column py-2"
            v-for="(order, idx) in orderList"
            :key="idx"
          >
            <div class="row border p-4">
              <div
                class="
                  col-md-4
                  text-start
                  d-flex
                  align-items-center
                  border-end
                  mb-2
                "
              >
                <span class="h5">訂單編號: </span>
                <span class="ps-2 h5"> {{ order.id }}</span>
              </div>
              <div class="col-md-8 mb-2">
                <ul class="p-0">
                  <li
                    class="d-flex justify-content-around"
                    v-for="(product, pIdx) in order.products"
                    :key="pIdx"
                  >
                    <div
                      style="max-width: 200px; text-align: start; width: 200px"
                    >
                      {{ product.product.title }}
                    </div>
                    <div
                      style="max-width: 50px; text-align: start; width: 50px"
                    >
                      x{{ product.qty }}
                    </div>
                    <div
                      style="max-width: 100px; text-align: start; width: 100px"
                    >
                      $ NT{{ Math.floor(product.final_total) }}
                    </div>
                  </li>
                </ul>
              </div>
              <!-- <hr /> -->
              <div class="d-flex justify-content-between border-top pt-3">
                <span class="h3">總計: {{ Math.floor(order.total) }}元</span>
                <span
                  v-if="order.is_paid"
                  class="
                    d-flex
                    align-items-center
                    text-success text-align-center
                  "
                  >已付款</span
                >
                <span
                  v-if="!order.is_paid"
                  class="d-flex align-items-center text-danger"
                  >未付款</span
                >
              </div>
              <div class="d-flex justify-content-end">
                <button
                  v-if="!order.is_paid"
                  class="btn btn-primary"
                  @click="
                    $router.push({
                      path: `/cart/payment/${order.id}`,
                      query: { currentPage: 3 },
                    })
                  "
                >
                  立即付款
                </button>
                <button
                  class="btn btn-success ms-2"
                  @click="openOrderDetailModal(order)"
                >
                  查看明細
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Pagenation
        class="d-flex justify-content-end mt-2"
        :pages="pagination"
        @get-product="getProductsData"
      ></Pagenation>
    </div>
    <FrontOrderDetailModal
    :order="tempOrder"
    ref="FrontOrderDetailModal"
  ></FrontOrderDetailModal>
  </div>
</template>

<script>
import FrontOrderDetailModal from '@/components/FrontOrderDetailModal.vue';
import { getOrderList } from "../../api";
import Pagenation from "../../components/Pagenation.vue";

export default {
  name: "SearchOrder",
  components: {
    Pagenation,
    FrontOrderDetailModal
  },
  data() {
    return {
      order: "",
      orderList: {},
      pagination: {},
      tempOrder: {},
    };
  },
  methods: {
    openOrderDetailModal(order) {
      this.tempOrder = { ...order };
      this.$refs.FrontOrderDetailModal.openModal();
    },
    async getOrderList() {
      try {
        const res = await getOrderList();
        if (res.success) {
          this.orderList = res.orders;
          this.pagination = res.pagination;
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    async getProductsData(page = 1) {
      const res = await getOrderList(page);
      if (res.success) {
        this.orderList = res.orders;
        this.pagination = res.pagination;
      }
    },
  },
  created() {
    this.getOrderList();
  },
};
</script>
