<template>
  <div style="height: 100vh; display: flex; flex-direction: column">
    <NavBar />
    <div style="flex: 1 1 auto">
      <div class="Common-content">
        <ToastMessages></ToastMessages>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Common-content {
  height: auto;
  overflow-y: auto;
}
@media all and (max-width: 1260px) {
  .Common-content {
    height: auto;
    overflow-y: auto;
  }
}
</style>

<script>
import ToastMessages from '@/components/ToastMessages.vue';
import NavBar from "../components/NavBar.vue";
import { aepAxios } from "../api/aepBaseApi";
import {
  checkAdmin
} from '../api';

export default {
  name: "DashboardView",
  mounted() {},
  components: {
    NavBar,
    ToastMessages,
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    aepAxios.defaults.headers.common.Authorization = token;
    checkAdmin()
      .then((res) => {
      })
      .catch((error) => {
        this.$router.push("/");
        localStorage.setItem("session", JSON.stringify({ isLogin: false }));
        this.$router.push("/admin-login");
      });
  },
};
</script>
