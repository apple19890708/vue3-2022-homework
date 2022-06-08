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
        <button class="btn btn-outline-success" @click="getOrderInfo">搜尋</button>
      </div>

      <div v-if="orderList.id !== undefined" class="card p-4 mt-3">
        <h3>搜尋結果</h3>
        <ul class="p-4">
          <li
            class="d-flex flex-column py-2"
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
                <span class="ps-2 h5"> {{ orderList.id }}</span>
              </div>
              <div class="col-md-8 mb-2">
                <ul class="p-0">
                  <li
                    class="d-flex justify-content-around"
                    v-for="(product, pIdx) in orderList.products"
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
                <span class="h3">總計: {{ Math.floor(orderList.total) }}元</span>
                <span
                  v-if="orderList.is_paid"
                  class="
                    d-flex
                    align-items-center
                    text-success text-align-center
                  "
                  >已付款</span
                >
                <span
                  v-if="!orderList.is_paid"
                  class="d-flex align-items-center text-danger"
                  >未付款</span
                >
              </div>
              <div class="d-flex justify-content-end">
                <button
                  v-if="!orderList.is_paid"
                  class="btn btn-primary"
                  @click="
                    $router.push({
                      path: `/cart/payment/${orderList.id}`,
                      query: { currentPage: 3 },
                    })
                  "
                >
                  立即付款
                </button>
                <button
                  class="btn btn-success ms-2"
                  @click="openOrderDetailModal(orderList)"
                >
                  查看明細
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div v-else class="card p-4 mt-3">查無資料，請重新搜尋</div>
    </div>
    <FrontOrderDetailModal
    :order="tempOrder"
    ref="FrontOrderDetailModal"
  ></FrontOrderDetailModal>
  </div>
</template>

<script>
import FrontOrderDetailModal from '@/components/FrontOrderDetailModal.vue';
import { getOrderInfo } from "../../api";

export default {
  name: "SearchSingleOrder",
  data() {
    return {
      order: this.$route.params.id,
      orderList: {},
      tempOrder: {},
    };
  },
  components: {
    FrontOrderDetailModal
  },
  methods: {
    openOrderDetailModal(order) {
      this.tempOrder = { ...order };
      this.$refs.FrontOrderDetailModal.openModal();
    },
    async getOrderInfo() {
      try {
        const res = await getOrderInfo(this.order);
        if (res.success) {
          this.orderList = res.order;
        } else {
          this.orderList = {}
          console.log(this.orderList !== {})
        }
      } catch (error) {
        this.orderList = {}
        console.log(this.orderList === {})
        console.log("error", error);
      }
    },
  },
  mounted() {
    this.getOrderInfo();
  },
};
</script>
