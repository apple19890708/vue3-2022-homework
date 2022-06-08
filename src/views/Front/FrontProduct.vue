<template>
  <h2>單一產品</h2>
  <div class="container">
    <div class="col-lg-6 mx-auto">
      <template v-if="product.title">
        <div class="row">
          <div class="col-12">
            <div class="card mb-3">
              <div
                v-if="product.imageUrl"
                :style="{
                  backgroundImage: `url(${product.imageUrl})`,
                  height: '300px',
                  backgroundSize: 'cover',
                }"
                class="card-img-top primary-image"
                height="196"
                alt="主圖"
              ></div>
              <div class="card-body">
                <h5 class="card-title">
                  {{ product.title }}
                  <span class="badge bg-primary ms-2">{{
                    product.category
                  }}</span>
                </h5>
                <div class="card-text">
                  <div
                    style="
                      display: inline-flex;
                      flex-direction: column;
                      text-align: left;
                      line-height: 1.5;
                    "
                  >
                    <span> <span style="font-weight: 600;">商品描述：</span> {{ product.description }}</span>
                    <span><span style="font-weight: 600;">商品內容：</span>{{ product.content }}</span>
                    <div class="d-flex">
                      <p class="card-text me-2">{{ product.origin_price }}</p>
                      <p class="card-text text-secondary">
                        <del>{{ product.origin_price }}</del>
                      </p>
                      元 / {{ product.unit }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <template
            v-for="(image, id) in product.imagesUrl"
            :key="`image-${id}`"
          >
            <div class="col-4">
              <img
                v-if="image"
                :src="image"
                :alt="`多圖 ${id + 1}`"
                class="images m-2"
              />
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "FrontProduct",
  data() {
    return {
      product: {},
    };
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params; // 取得router內的參數
      this.$http(
        `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      ).then((res) => {
        this.product = res.data.product;
      });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
