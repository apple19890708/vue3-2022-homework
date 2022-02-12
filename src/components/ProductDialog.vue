<template>
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span v-if="isNewProduct">新增產品</span>
            <span v-if="!isNewProduct">編輯產品</span>
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
                <label for="imageUrl">主要圖片</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="localInfo.imageUrl"
                  placeholder="請輸入圖片連結"
                />
                <img class="img-fluid" :src="localInfo.imageUrl" />
              </div>
              <div class="mb-1">多圖新增</div>
              <div v-if="Array.isArray(localInfo.imagesUrl)"> <!-- 判斷是否有內容 -->
                <div
                  class="mb-1"
                  v-for="(image, key) in localInfo.imagesUrl"
                  :key="key"
                >
                  <div class="form-group">
                    <label for="imageUrl">圖片網址</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="請輸入圖片連結"
                      v-model="localInfo.imagesUrl[key]"
                    />
                  </div>
                  <img class="img-fluid" :src="image" />
                </div>
                <div
                  v-if="
                    !localInfo.imagesUrl.length ||
                    localInfo.imagesUrl[localInfo.imagesUrl.length - 1]
                  "
                >
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="localInfo.imagesUrl.push('')"
                  >
                    新增圖片
                  </button>
                </div>
                <div v-else>
                  <button
                    class="btn btn-outline-danger btn-sm d-block w-100"
                    @click="localInfo.imagesUrl.pop()"
                  >
                    刪除圖片
                  </button>
                </div>
              </div>
              <div v-else>
                <button
                  class="btn btn-outline-primary btn-sm d-block w-100"
                  @click="createImages"
                >
                  新增陣列圖片
                </button>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="form-group">
                <label for="title">標題</label>
                <input
                  id="title"
                  v-model="localInfo.title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                />
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="category">分類</label>
                  <input
                    id="category"
                    v-model="localInfo.category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">單位</label>
                  <input
                    id="unit"
                    v-model="localInfo.unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                  />
                </div>
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  <input
                    id="origin_price"
                    v-model.number="localInfo.origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">售價</label>
                  <input
                    id="price"
                    v-model.number="localInfo.price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                  />
                </div>
              </div>
              <hr />

              <div class="form-group">
                <label for="description">產品描述</label>
                <textarea
                  id="description"
                  v-model="localInfo.description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                >
                </textarea>
              </div>
              <div class="form-group">
                <label for="content">說明內容</label>
                <textarea
                  id="description"
                  v-model="localInfo.content"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                >
                </textarea>
              </div>
              <div class="form-group">
                <div>是否啟用</div>
                <label class="switch">
                  <input
                    type="checkbox"
                    v-model="localInfo.is_enabled"
                    :checked="localInfo.is_enabled === 1"
                  />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <!-- {{user.name}}
        {{user.id}} -->
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-product', localInfo)"
          >
            確認
          </button>
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
import { Modal } from "bootstrap";

export default {
  name: "ProductDialog",
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
    };
  },
  inject: ['user'],
  watch: { // 進階使用:當父層資料改變時透過watch更新內部資料，如果放mounted，只有第一次會更新
    tempProduct() {
      this.localInfo = JSON.parse(JSON.stringify(this.tempProduct));
      console.log("this.localInfo", this.localInfo);
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.productModal);
  },
  methods: {
    createImages() {
      this.localInfo.imagesUrl = [];
      this.localInfo.imagesUrl.push("");
    },
    openModal() {
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    },
  },
};
</script>
