<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" :class="[showNavbar === true ? 'show-navbar' : 'hidden-navbar' ]">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">音樂便利店</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/front-products">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">購物車</router-link>
          </li>
        </ul>
      </div>
      <button type="button" class="btn btn-primary">
        結帳
        <span class="badge rounded-pill bg-danger">{{ carts?.carts?.length }}</span>
      </button>
    </div>
  </nav>
</template>

<style lang="scss">
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
      await this.$http
        .get(`${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          const cartData = res.data.data;
          this.$store.dispatch("commonModule/getCarts", cartData);
        });
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
