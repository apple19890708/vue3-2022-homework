<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
      <div class="col-8">
        <form id="form" class="form-signin">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="username"
              placeholder="name@example.com"
              required
              autofocus
              v-model="user.username"
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              required
              v-model="user.password"
            />
            <label for="password">Password</label>
          </div>
          <button
            class="btn btn-lg btn-primary w-100 mt-3"
            type="submit"
            @click="login"
          >
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">&copy; 2021~∞ - 六角學院</p>
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}
</style>

<script>
export default {
  name: "AdminLogin",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      token: "",
    };
  },
  methods: {
    async login() {
      try {
        const res = await this.axios.post(
          `${process.env.VUE_APP_API}/v2/admin/signin`,
          this.user
        );
        const { token, expired } = res.data;
        document.cookie = `hexToken=${token};expires=${new Date(expired)};`; // 取得token存在cookie 並限定有效期限
        localStorage.setItem('session', JSON.stringify({ isLogin: true }));
        this.$router.push("/products");
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {},
};
</script>
