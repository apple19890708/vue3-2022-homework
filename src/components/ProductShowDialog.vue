<template>
  <div
    id="productModal"
    ref="modal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="form-group">
                <div class="form-group">
                  <label for="title">標題</label>
                  {{localInfo.title}}
                </div>
                <img class="img-fluid" :src="localInfo.imageUrl" />
              </div>
              <div v-if="Array.isArray(localInfo.imagesUrl)">
                <!-- 判斷是否有內容 -->
                <div
                  class="mb-1"
                  v-for="(image, key) in localInfo.imagesUrl"
                  :key="key"
                >
                  <img class="img-fluid" :src="image" />
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="category">分類</label>
                  {{localInfo.category}}
                </div>
                <div class="form-group col-md-6">
                  <label for="price">單位</label>
                  {{localInfo.unit}}
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  {{localInfo.origin_price}}
                </div>
                <div class="form-group col-md-6">
                  <label for="price">售價</label>
                  {{localInfo.price}}
                </div>
              </div>
              <hr />

              <div class="form-group">
                <label for="description">產品描述</label>
                {{localInfo.description}}
              </div>
              <div class="form-group">
                <label for="content">說明內容</label>
                {{localInfo.content}}
              </div>
              <input type="number" min="0" v-model="productNum">
              <button
                  type="button"
                  class="btn btn-danger"
                  @click="$emit('add-to-cart', localInfo.id, productNum)"
                  :disabled="isLoadingItem === localInfo.id"
                >
                  <span v-show="isLoadingItem === localInfo.id">
                    <font-awesome-icon icon="spinner" class="fa-spin" />
                  </span>
                  加到購物車
                </button>
            </div>
          </div>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  &.round {
    border-radius: 34px;
    &::before {
      border-radius: 50%;
    }
  }
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>

<script>
import modal from '@/utils/modal';

export default {
  name: "ProductShowDialog",
  mixins: [modal],
  props: {
    tempProduct: {
      type: Object,
      default() {
        return {};
      },
    },
    isNewProduct: {
      type: Boolean,
    },
  },
  data() {
    return {
      localInfo: {},
      modal: "",
      isLoadingItem: "",
      productNum: 0
    };
  },
  watch: {
    // 進階使用:當父層資料改變時透過watch更新內部資料，如果放mounted，只有第一次會更新
    tempProduct() {
      this.localInfo = JSON.parse(JSON.stringify(this.tempProduct));
    },
  },
  mounted() {

  },
  methods: {

  },
};
</script>
