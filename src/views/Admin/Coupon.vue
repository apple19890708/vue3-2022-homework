<template>
  <div>
    <Loading :active="isLoading" :z-index="1060"></Loading>
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="openCouponModal(true)">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, key) in coupons" :key="key">
        <td>{{ item.title }}</td>
        <td>{{ item.percent }}%</td>
        <td>{{ CreatedAt(item.due_date) }}</td>
        <td>
          <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
          <span v-else class="text-muted">未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm"
                    @click="openCouponModal(false, item)"
            >編輯</button>
            <button class="btn btn-outline-danger btn-sm"
                    @click="openDelCouponModal(item)"
            >刪除</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <CouponModal :coupon="tempCoupon" :is-new="isNew" ref="couponModal"
    @update-coupon="updateCoupon"/>
    <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon"/>
  </div>
</template>

<script>
import DelModal from '@/components/DelModal.vue';
import CouponModal from '@/components/CouponModal.vue';
import {
  getCoupons, createCoupons, updateCoupons, deleteCoupons
} from "../../api"

export default {
  components: { CouponModal, DelModal },
  props: {
    config: Object,
  },
  data() {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: '',
      },
      isLoading: false,
      isNew: false,
    };
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
    openCouponModal(isNew, item) {
      this.isNew = isNew;
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
        };
      } else {
        this.tempCoupon = { ...item };
      }
      this.$refs.couponModal.openModal();
    },
    openDelCouponModal(item) {
      this.tempCoupon = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.openModal();
    },
    async getCoupons() {
      this.isLoading = true;
      try {
        const res = await getCoupons()
        this.coupons = res.coupons;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        const status = '錯誤訊息';
        const errRes = error.response;
        this.$store.commit('commonModule/SAVE_TOAST_MESSAGE', { res: errRes, status })
      }
    },
    async updateCoupon(tempCoupon) {
      this.isLoading = true;
      const localTempCoupon = { ...tempCoupon }
      if (tempCoupon.percent > 100) { // 折扣大於 100時，等於100
        localTempCoupon.percent = 100
      }
      let data = localTempCoupon;
      if (!this.isNew) {
        data = this.tempCoupon;
      }
      if (this.isNew) {
        try {
          this.isLoading = false;
          const status = '新增優惠券';
          const res = await createCoupons({ data })
          if (res.success) {
            this.$store.commit('commonModule/SAVE_TOAST_MESSAGE', { res, status })
            this.getCoupons();
            this.$refs.couponModal.closeModal();
          }
        } catch (error) {
          this.isLoading = false;
          const status = '錯誤訊息';
          const errRes = error.response;
          this.$store.commit('commonModule/SAVE_TOAST_MESSAGE', { res: errRes, status })
        }
      } else {
        try {
          this.isLoading = false;
          const status = '修改優惠券';
          const res = await updateCoupons({ data }, this.tempCoupon.id)
          if (res.success) {
            this.$store.commit('commonModule/SAVE_TOAST_MESSAGE', { res, status })
            this.getCoupons();
            this.$refs.couponModal.closeModal();
          }
        } catch (error) {
          this.isLoading = false;
          const status = '錯誤訊息';
          const errRes = error.response;
          this.$store.commit('commonModule/SAVE_TOAST_MESSAGE', { res: errRes, status })
        }
      }
    },
    async delCoupon() {
      this.isLoading = true;
      try {
        const res = await deleteCoupons(this.tempCoupon.id)
        if (res.success) {
          this.isLoading = false;
          const status = '刪除優惠券';
          this.$store.commit('commonModule/SAVE_TOAST_MESSAGE', { res, status })
          const delComponent = this.$refs.delModal;
          delComponent.closeModal();
          this.getCoupons();
        }
      } catch (error) {
        this.isLoading = false;
        const status = '刪除優惠券';
        const errRes = error.response;
        this.$store.commit('commonModule/SAVE_TOAST_MESSAGE', { res: errRes, status })
      }
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
