<template>
  <button type="button" class="btn btn-sm btn-primary" @click="Logout">
    登出
  </button>
  <div style="display: flex; justify-content: space-around">
    <div class="containers">
      <table class="table mt-4">
        <thead>
          <tr>
            <th>產品名稱</th>
            <th width="120">原價</th>
            <th width="120">售價</th>
            <th width="150">是否啟用</th>
            <th width="120">操作</th>
          </tr>
        </thead>
        <tbody id="productList">
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.title }}</td>
            <td width="120">{{ product.origin_price }}</td>
            <td width="120">{{ product.price }}</td>
            <td
              class="py-2 whitespace-nowrap text-green-700"
              v-if="product.is_enabled === 1"
            >
              啟用
            </td>
            <td class="py-2 whitespace-nowrap text-gray-400" v-else>未啟用</td>
            <td width="120">
              <button
                type="button"
                class="btn btn-sm btn-outline-primary"
                @click="productDetail(product)"
              >
                查看
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        目前有 <span id="productCount">{{ products.length }}</span> 項產品
      </p>
    </div>
    <div class="col-lg-3">
      <h2>單一產品細節</h2>
      <template v-if="tempProduct.title">
        <div class="row">
          <div class="col-12">
            <div class="card mb-3">
              <img
                :src="tempProduct.imageUrl"
                class="card-img-top primary-image"
                alt="主圖"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ tempProduct.title }}
                  <span class="badge bg-primary ms-2">{{
                    tempProduct.category
                  }}</span>
                </h5>
                <p class="card-text">商品描述：{{ tempProduct.description }}</p>
                <p class="card-text">商品內容：{{ tempProduct.content }}</p>
                <div class="d-flex">
                  <p class="card-text me-2">{{ tempProduct.price }}</p>
                  <p class="card-text text-secondary">
                    <del>{{ tempProduct.origin_price }}</del>
                  </p>
                  元 / {{ tempProduct.unit }}
                </div>
              </div>
            </div>
          </div>
          <template
            v-for="(image, id) in tempProduct.imagesUrl"
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
      <p v-else class="text-secondary">請選擇一個商品查看</p>
    </div>
  </div>
</template>

<style lang="scss">
.containers {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>

<script>
export default {
  name: "Products",
  data() {
    return {
      products: [],
      tempProduct: {},
    };
  },
  methods: {
    async Logout() {
      const res = await this.axios.post(`${process.env.VUE_APP_API}/v2/logout`);
      console.log("logout", res);
      if (res.data.success) {
        this.$router.push("/back-end-login");
      }
    },
    async checkAdmin() {
      const api = `${process.env.VUE_APP_API}v2/api/user/check`; // 檢查使用者登入狀態
      try {
        const res = await this.axios.post(api);
        if (res.data.success) {
          this.getData();
        }
      } catch (err) {
        console.log(err);
        this.$router.push("/back-end-login");
      }
    },
    async getData() {
      const url = `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/admin/products`;
      try {
        const res = await this.axios.get(url);
        this.products = res.data.products;
        console.log(this.products.length);
      } catch (err) {
        console.log(err);
      }
    },
    productDetail(item) {
      this.tempProduct = { ...item };
    },
  },
  created() {
    const token = document.cookie.replace(
      // eslint-disable-next-line
      /(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.axios.defaults.headers.common.Authorization = token;
    console.log("token", token);
    this.checkAdmin();
  },
};
</script>
