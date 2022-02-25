<template>
  <FrontNavbar></FrontNavbar>
  <router-view></router-view>
</template>

<script>
import FrontNavbar from "@/components/FrontNavbar.vue";

export default {
  name: "FrontLayout",
  components: {
    FrontNavbar,
  },
};
</script>
