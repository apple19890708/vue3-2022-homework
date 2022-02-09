<template>
  <div style="height: 100vh; display: flex; flex-direction: column">
    <NavBar />
    <div style="flex: 1 1 auto">
      <div class="Common-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Common-content {
  height: calc(100vh - 64px);
  overflow-y: auto;
}
@media all and (max-width: 1260px) {
  .Common-content {
    height: calc(100vh - 40px);
    overflow-y: auto;
  }
}
</style>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "CommonLayout",
  mounted() {},
  components: {
    NavBar,
  },
};
</script>
