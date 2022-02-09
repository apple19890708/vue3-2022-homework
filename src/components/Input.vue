<template>
  <div>
    <input type="text" :value="fName" @input="$emit('update:fName', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    fName: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>
