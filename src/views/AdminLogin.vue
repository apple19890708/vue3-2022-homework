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
              @change="() => {isUsernameError = false; isInvalidEmail = false}"
              :class="{'isErrorBorder': isUsernameError || isInvalidEmail}"
            />
            <label for="username">Email address</label>
            <div v-if="isUsernameError" :class="{'isError': isUsernameError}">信箱未註冊</div>
            <div v-if="isInvalidEmail" :class="{'isError': isInvalidEmail}">信箱格式不正確</div>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              required
              v-model="user.password"
              @change="() => {isPassword = false}"
              :class="{'isErrorBorder': isPassword}"
            />
            <label for="password">Password</label>
            <div v-if="isPassword" :class="{'isError': isPassword}">密碼錯誤</div>
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
  </div>
</template>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}
.isError {
  color: red;
}
.isErrorBorder {
  border-color: #f70808;
  &:focus {
    border-color: #f70808;
    // box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
    box-shadow: 0 0 0 0.25rem red;
  }
}
</style>

<script>
import { Login } from '../api'

export default {
  name: "AdminLogin",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      token: "",
      isUsernameError: false,
      isInvalidEmail: false,
      isPassword: false,
    };
  },
  methods: {
    async login() {
      const { user } = this;
      Login(user)
        .then((res) => {
          const { token, expired, success } = res;
          if (success) {
            document.cookie = `hexToken=${token};expires=${new Date(expired)};`; // 取得token存在cookie 並限定有效期限
            localStorage.setItem("session", JSON.stringify({ isLogin: true }));
            this.$router.push("/admin/products");
          } else if (res.error.code === "auth/user-not-found") {
            this.isUsernameError = true;
            this.user.username = '';
            this.user.password = '';
          } else if (res.error.code === "auth/invalid-email") {
            this.isInvalidEmail = true;
            this.user.username = '';
            this.user.password = '';
          } else {
            this.isPassword = true;
            this.user.password = '';
          }
        })
        .catch((err) => {

        })
    },
  },
  mounted() {},
};
</script>
