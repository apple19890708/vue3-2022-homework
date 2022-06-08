<template>
  <div id="test" ref="test">
    <div class="section">hello 我是首頁</div>
    <div id="section2" ref="section2" class="section" :class="{ sticky: fixClass }">
      <div class="section" :class="{ static: fixClass }">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          :pagination="{ clickable: true }"
          navigation
        >
          <swiper-slide
            v-for="item in products"
            :key="item.id"
          >
            <div style="height: 100vh; background-position: center center; background-size: cover" :style="{
              backgroundImage: `url(${item.imageUrl})`
            }"></div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="section bgG" :class="{ static: fixClass }">2</div>
      <div class="section bgB" :class="{ static: fixClass }">3</div>
    </div>
    <div class="section bgR" :class="{ static: fixClass }">22</div>
    <div class="section bgG" :class="{ static: fixClass }">33</div>
    <div class="section bgB" :class="{ static: fixClass }">99</div>
    <div class="section bgR" :class="{ static: fixClass }">22</div>
    <div class="section text">我是文字頭</div>
    <div id="photoSection2" class="section" :style="{'--scale': photoProgress}" :class="{sticky:changeClass}">
      <div class="phone">
        <img src="https://picsum.photos/id/227/1920/1200" alt="">
        <div class="rect"></div>
      </div>
    </div>
    <div class="section" :class="{static:changeClass}"> <!-- id="photoSection3" 有加有不同效果 -->
      <div class="phone">
        <img src="https://picsum.photos/id/227/1920/1200" alt="">
        <div class="rect"></div>
      </div>
    </div>
    <div class="section text">我是文字尾</div>
  </div>
</template>

<style lang="scss">
.swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 100px;
}
.swiper-pagination-bullet {
  background: rgb(255, 255, 255);
  &-active {
    background: rgb(140, 245, 130);
  }
}
body {
  overflow: hidden;
}
#test {
  height:100vh;
  overflow: auto;
  // &::-webkit-scrollbar {
  //   display: none;
  // }
}
#section2 {
  background-color: black;
}
.sticky {
  position: sticky !important;
  top: 0;
  left: 0;
}
.static {
  position: static !important;
  top: 0;
  left: 0;
}
#section2 {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden;
  .section {
    width: 100vw;
    min-width: 100vw;
  }
}
.section {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  overflow: hidden;
  &.text {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
  }
  .phone {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: scale(var(--scale));
    * {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    img {
      width: 60%;
      height: auto;
      clip-path: inset(15% 9% round 1%);
    }
    .rect {
      width: 50%;
      height: 0;
      padding-top: 25%;
      border: 13px solid white;
      border-radius: 1%;
    }
  }
}
.bgR {
  background-color: red;
}
.bgB {
  background-color: blue;
}
.bgG {
  background-color: green;
}
.bgY {
  background-color: yellow;
  height: 100vh;
}
#photoSection2, #photoSection3 {
  background-color: black;
}
#photoSection2 {
  --scale: 3
}
#photoSection3 {
  --scale: 1
}
</style>
<script>
import { Navigation, Pagination } from 'swiper'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'

export default {
  name: "Home",
  components: {

  },
  data() {
    return {
      process: 0,
      photoProgress: 0,
      products: {},
      modules: [Navigation, Pagination]
    };
  },
  watch: {
    $route(to, from) {
      const { body } = document
      body.style.overflow = 'auto';
    }
  },
  methods: {
    onScroll() {
      if (this.$refs.test.scrollTop < window.innerHeight) {
        this.process = 0;
      } else if (this.$refs.test.scrollTop > window.innerHeight * 3) {
        this.process = 1;
      } else {
        this.process = ((this.$refs.test.scrollTop - window.innerHeight) / (window.innerHeight * 2));
      }
      const position = (this.$refs.section2.scrollWidth - window.innerWidth) * this.process;
      this.$refs.section2.scrollTo({
        left: position
      })

      if (this.$refs.test.scrollTop < window.innerHeight * 7) {
        this.photoProgress = 3
      } else if (this.$refs.test.scrollTop > window.innerHeight * 8) {
        this.photoProgress = 1
      } else {
        // console.log('this.$refs.test.scrollTop', this.$refs.test.scrollTop)
        // console.log('window.innerHeight', window.innerHeight * 7)
        // console.log('((this.$refs.test.scrollTop - window.innerHeight) / window.innerHeight)', ((this.$refs.test.scrollTop - window.innerHeight) / window.innerHeight))
        this.photoProgress = 3 - 2 * ((this.$refs.test.scrollTop - (window.innerHeight * 7)) / window.innerHeight)
      }
    },
    getProducts() {
      this.$http(
        `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/products/all`
      ).then((res) => {
        this.products = res.data.products;
      });
    },
  },
  computed: {
    fixClass() {
      return this.process < 1;
    },
    changeClass() {
      return this.photoProgress > 1
    }
  },
  mounted() {
    this.$refs.test.addEventListener("scroll", this.onScroll);
    const { body } = document
    body.style.overflow = 'hidden';
    this.getProducts();
  },
};
</script>
