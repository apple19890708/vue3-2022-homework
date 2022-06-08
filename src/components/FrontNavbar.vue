<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" :class="[showNavbar === true ? 'show-navbar' : 'hidden-navbar' ]">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">音樂便利店</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/front-products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/search-order">訂單查詢</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/favorites">收藏</router-link>
          </li>
        </ul>
      </div>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li
          data-bs-toggle="offcanvas"
          data-bs-target="#shoppingCart"
          aria-controls="shoppingCart"
          class="cursor-pointer me-4">
          <font-awesome-icon icon="shopping-cart" class="fa" />
          <span class="badge rounded-pill bg-danger cartsNum">{{ carts?.carts?.length }}</span>
        </li>
      </ul>
    </div>
  </nav>
  <div
    ref="cartOffcanvas"
    class="offcanvas offcanvas-end bg-lightPrimary"
    tabindex="-1"
    id="shoppingCart"
    aria-labelledby="shoppingCartLabel"
  >
    <div class="offcanvas-header">
      <h5 id="shoppingCartLabel" class="text-primary fz-3">
        購物清單
      </h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div class="offcanvas-body bg-white">
      <div v-if="carts">
        <table
          class="table table-striped table-hover"
          v-if="carts?.carts?.length > 0"
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" class="text-start">商品名稱</th>
              <th scope="col">數量</th>
              <th scope="col" class="text-end">單價</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in carts.carts" :key="`car_${i}`">
              <th class="col-1" scope="row">{{ i + 1 }}</th>
              <td class="col-4 text-start">
                {{ item.product.title }}
              </td>
              <td class="col-3">{{ item.qty }}</td>
              <td class="col-4 text-end">
                {{ `NT$ ${item.product.price}` }}
              </td>
            </tr>
          </tbody>
        </table>
        <p
          v-if="carts?.carts?.length > 0"
          class="text-end text-danger fz-2"
        >
          {{ `總計: NT$ ${carts.total}` }}
        </p>
      </div>
      <div class="d-grid gap-2" v-if="carts">
        <button
          type="button"
          v-if="carts?.carts?.length > 0"
          class="
            btn btn-outline-primary
            d-flex
            justify-content-center
            align-items-center
          "
          @click="$router.push('/cart')"
        >
          <p class="mb-0 fz-2" @click.prevent="closeCartOffcanvas">
            查看購物車
          </p>
        </button>

        <p v-if="carts?.carts?.length < 1">
          你目前沒有任何商品在購物車~
        </p>
        <button
          type="button"
          v-if="carts?.carts?.length < 1"
          class="
            btn btn-outline-primary
            d-flex
            justify-content-center
            align-items-center
          "
          @click="$router.push('/front-products')"
        >
          <p class="mb-0 fz-2" @click.prevent="closeCartOffcanvas">
            快去購物
          </p>
          <span class="material-icons fz-1"> arrow_forward_ios </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .cursor-pointer {
    cursor: pointer;
  }
  .cartsNum {
    position: absolute;
    top: 6px;
    right: 25px;
    font-size: 12px;
    padding-left: 6px;
    padding-right: 6px;
  }
  .show-navbar {
    position: fixed;
    width: 100vw;
    top: 0;
    z-index: 999;
    box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
    transform: translate3d(0, 0, 0);
    transition: 0.2s all ease-out;
  }
  .hidden-navbar {
    position: fixed;
    width: 100vw;
    top: 0;
    z-index: 999;
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
    transition: 0.2s all ease-out;
  }
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FrontNavbar',
  props: {
    showNavbar: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      cartData: {
        carts: [],
      },
    };
  },
  computed: {
    ...mapGetters("commonModule", [
      "carts"
    ]),
  },
  methods: {
    async getCart() {
      this.$store.dispatch('commonModule/getCart')
    },
    closeCartOffcanvas() {
      this.$refs.cartOffcanvas.className = 'offcanvas offcanvas-end bg-lightPrimary';
      this.$refs.cartOffcanvas.nextElementSibling.nextElementSibling.className = 'modal-backdrop fade';
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
