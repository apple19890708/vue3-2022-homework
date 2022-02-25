<template>
  <div class="root">
    <div class="container">
      <ul class="progressbar">
        <li
          :class="{ active: currentPage >= i }"
          v-for="i in length"
          :key="i"
        ></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  // position: absolute;
  // z-index: 1;
  // margin-top: 20px;
}
ul {
  list-style-type: none;
}
.progressbar {
  display: flex;
  justify-content: center;
  counter-reset: step;
  li {
    float: left;
    width: 14.28%;
    position: relative;
    text-align: center;
    &:first-child:after {
      content: none;
    }
    &::before {
      content: counter(step);
      counter-increment: step;
      width: 30px;
      height: 30px;
      border: 2px solid #bebebe;
      display: block;
      margin: 0 auto 10px auto;
      border-radius: 50%;
      line-height: 27px;
      background: white;
      color: #bebebe;
      text-align: center;
      font-weight: bold;
    }
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      background: #979797;
      top: 15px;
      left: -50%;
      z-index: -1;
    }
  }
}
.progressbar li.active:before {
  border-color: #3aac5d;
  background: #3aac5d;
  color: white;
}
.progressbar li.active:after {
  background: #3aac5d;
}
.progressbar li.active + li:after {
  background: #3aac5d;
}
// .progressbar li.active + li:before {
//   border-color: #3aac5d;
//   background: #3aac5d;
//   color: white;
// }
</style>

<script>
export default {
  name: "StepProgessSlider",
  props: {
    length: {
      type: Number,
      default: 3,
    },
    currentPage: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
};
</script>
