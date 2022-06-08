<template>
  <div class="root">
    <div class="container">
      <ul class="progressbar">
        <li
          :class="{ active: currentPage >= i }"
          v-for="(i, idx) in length"
          :key="i"
        >
        <span v-if="idx === 0" :class="{ activeText: currentPage >= i }">商品確認</span>
        <span v-if="idx === 1" :class="{ activeText: currentPage >= i }">填寫資料</span>
        <span v-if="idx === 2" :class="{ activeText: currentPage >= i }">訂單確認</span>
        <span v-if="idx === 3" :class="{ activeText: currentPage >= i }">訂單完成</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.activeText {
  font-weight: bold;
  color: #3aac5d;
}
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
      default: 4,
    },
    currentPage: {
      type: [Number, String],
      default: 0,
    },
  },
  data() {
    return {};
  },
};
</script>
