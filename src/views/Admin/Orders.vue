<template>
  <Loading :active="isLoading" :z-index="1060"></Loading>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(item, key) in orders" :key="key">
        <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
          <td>{{ CreatedAt(item.create_at) }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`paidSwitch${item.id}`"
                v-model="item.is_paid"
                @change="updatePaid(item)"
              />
              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                @click="openModal(item)"
              >
                檢視
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                type="button"
                @click="openDelOrderModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <OrderModal
    :order="tempOrder"
    ref="orderModal"
    @update-paid="updatePaid"
  ></OrderModal>
  <DelModal :item="tempOrder" ref="delModal" @del-item="delOrder"></DelModal>
  <Pagenation :pages="pagination" @get-product="getOrders"></Pagenation>
</template>

<script>
import DelModal from '@/components/DelModal.vue';
import OrderModal from '@/components/OrderModal.vue';
import Pagenation from '@/components/Pagenation.vue';
import {
  getOrders,
  delOrders,
  updateOrders
} from "../../api"

export default {
  data() {
    return {
      orders: {},
      isNew: false,
      pagination: {},
      isLoading: false,
      tempOrder: {},
      currentPage: 1,
    };
  },
  components: {
    Pagenation,
    DelModal,
    OrderModal,
  },
  computed: {
    CreatedAt() {
      return (time) => {
        const localDate = new Date(time * 1000);
        return localDate.toLocaleDateString();
      }
    },
  },
  methods: {
    async getOrders(currentPage = 1) {
      this.currentPage = currentPage;
      this.isLoading = true;
      try {
        const res = await getOrders(currentPage);
        if (res.success) {
          this.orders = res.orders;
          this.pagination = res.pagination;
          this.isLoading = false;
        }
      } catch (error) {
        this.isLoading = false;
        const status = '錯誤訊息';
        const errRes = error.response;
        this.$store.commit('commonModule/SAVE_TOAST_MESSAGE', { res: errRes, status })
      }
    },
    openModal(item) {
      this.tempOrder = { ...item };
      this.isNew = false;
      this.$refs.orderModal.openModal();
    },
    openDelOrderModal(item) {
      this.tempOrder = { ...item };
      this.$refs.delModal.openModal();
    },
    async updatePaid(item) {
      this.isLoading = true;
      const paid = {
        is_paid: item.is_paid,
      }
      try {
        const res = await updateOrders({ data: paid }, item.id);
        if (res.success) {
          const status = '更新付款狀態';
          this.$store.commit('commonModule/SAVE_TOAST_MESSAGE', { res, status })
          this.isLoading = false;
          this.$refs.orderModal.closeModal();
          this.getOrders(this.currentPage);
        }
      } catch (error) {
        this.isLoading = false;
        const status = '更新付款狀態';
        const errRes = error.response;
        this.$store.commit('commonModule/SAVE_TOAST_MESSAGE', { res: errRes, status })
      }
    },
    async delOrder() {
      this.isLoading = true;
      try {
        const res = await delOrders(this.tempOrder.id);
        const status = '刪除訂單';
        if (res.success) {
          this.isLoading = false;
          this.$store.commit('commonModule/SAVE_TOAST_MESSAGE', { res, status })
          this.$refs.delModal.closeModal();
          this.getOrders(this.currentPage);
        }
      } catch (error) {
        this.isLoading = false;
        const status = '錯誤訊息';
        const errRes = error.response;
        this.$store.commit('commonModule/SAVE_TOAST_MESSAGE', { res: errRes, status })
      }
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
