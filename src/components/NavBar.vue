<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/admin">後台</router-link>
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
            <router-link class="nav-link" to="/admin/products"
              >產品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/coupon"
              >優惠券</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/orders"
              >訂單</router-link
            >
          </li>
        </ul>
      </div>
      <button type="button" class="btn btn-sm btn-primary" @click="Logout">
        登出
      </button>
    </div>
  </nav>
</template>

<style lang="scss">
</style>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
  methods: {
    async Logout() {
      const res = await this.axios.post(`${process.env.VUE_APP_API}/v2/logout`);
      if (res.data.success) {
        localStorage.setItem("session", JSON.stringify({ isLogin: false }));
        this.$router.push("/admin-login");
      }
    },
  },
};
</script>
