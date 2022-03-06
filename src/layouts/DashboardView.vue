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
    this.$http.defaults.headers.common.Authorization = `${token}`;
    const api = `${process.env.VUE_APP_API}v2/api/user/check`;
    this.$http
      .post(api)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        this.$router.push("/");
      });
  },
};
</script>
