<template>
  <div class="container mt-3">
    <div class="card">
      <h3>訂單資訊</h3>
      <ul v-if="order" class="p-4">
        <li class="d-flex justify-content-between align-items-center">
          <p>訂單編號:</p>
          <p>{{ order.id }}</p>
        </li>
        <li class="d-flex justify-content-between align-items-center">
          <p>訂單日期:</p>
          <p>{{ createAt }}</p>
        </li>
        <li class="d-flex justify-content-between align-items-center">
          <p>收件人:</p>
          <p>{{ user.name }}</p>
        </li>
        <li class="d-flex justify-content-between align-items-center">
          <p>電話:</p>
          <p>{{ user.tel }}</p>
        </li>
        <li class="d-flex justify-content-between align-items-center">
          <p>信箱:</p>
          <p>{{ user.email }}</p>
        </li>
        <li class="d-flex justify-content-between align-items-center">
          <p>收件地址:</p>
          <p>{{ user.address }}</p>
        </li>
        <li class="d-flex justify-content-between align-items-center">
          <p>總計:</p>
          <p>NT ${{ Math.floor(order.total) }}</p>
        </li>
        <li class="d-flex justify-content-between align-items-center">
          <p>付款狀態:</p>
          <p v-if="order.is_paid">已付款</p>
          <p v-if="order.is_paid === false">未付款</p>
        </li>
      </ul>
      <button @click="postPayment">立即付款</button>
    </div>
  </div>
</template>

<style lang="scss">

</style>

<script>
import { getOrderInfo, postPayment } from '../../api'

export default {
  name: 'Payment',
  data() {
    return {
      order: {},
      orderID: this.$route.params.id,
      user: {}
    }
  },
  computed: {
    createAt() {
      return this.dayjs(this.order.create_at * 1000).format("YYYY-MM-DD")
    }
  },
  methods: {
    async getOrderInfo() {
      try {
        const res = await getOrderInfo(this.orderID);
        console.log('res', res.order)
        this.order = res.order;
        this.user = res.order.user
      } catch (error) {
        console.log('error', error)
      }
    },
    async postPayment() {
      try {
        const res = await postPayment(this.orderID);
        const status = '付款';
        if (res.success) {
          this.$store.commit('commonModule/SAVE_TOAST_MESSAGE', { res, status })
          this.$router.push({ path: '/cart/cart-paid', query: { currentPage: 4 } })
        }
      } catch (error) {
        const status = '付款';
        const errRes = error.response;
        this.$store.commit('commonModule/SAVE_TOAST_MESSAGE', { res: errRes, status })
      }
    }
  },
  created() {
    this.getOrderInfo()
  },
}
</script>
