<template>
  <div>
    <div
      id="favoriteFilesDialogs"
      ref="favoriteFilesDialog"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="favoriteFilesDialogLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-md modal-dialog-centered">
        <div class="modal-content border-0">
          <div class="modal-header">
            <h5 id="productModalLabel" class="modal-title">
              <span>收藏夾</span>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div @click="addNewFolder">
              <font-awesome-icon :icon="['fa', 'plus']" class="plus" />
              新增資料夾
            </div>
            <template v-for="(folder, idx) in folders" :key="folder.id">
              <div class="folder" @click="addToFolder(folder.id, idx)">
                  {{ folder.title }}
              </div>
            </template>
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      ref="createFoldersModal"
      id="exampleModalToggle2"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel2"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalToggleLabel2">新增資料夾</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            Hide this modal and show the first with the button below.
            <Form ref="creatFolderForm" v-slot="{ errors }" @submit="createFolder">
            <div class="form__inputBox">
              <div class="form__labelBox">
                <label for="collectForderName" class="form__label--custom form-label"
                  >收藏夾名稱</label
                >
                <p class="formTag--must">必填*</p>
              </div>
              <Field
                id="collectForderName"
                ref="collectForderName"
                name="收藏夾名稱"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['收藏夾名稱'] }"
                placeholder="請輸入收藏夾名稱"
                v-model="creatFolderForm.title"
              ></Field>
              <ErrorMessage name="收藏夾名稱" class="invalid-feedback"></ErrorMessage>
            </div>
            <button type="submit" class="btn btn-primary w-100 mb-3">
              建立
            </button>
            <button
              class="btn btn-gray-light w-100"
              @click="backFirst"
              type="button"
            >
              返回
            </button>
          </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .folder {
    cursor: pointer;
    padding: 10px;
    border-radius: 5px;
    background-color: rgb(33, 245, 174);
    color: white;
    &:hover {
      background-color: rgb(68, 151, 123);
    }
  }
</style>

<script>
import Modal from 'bootstrap/js/dist/modal';
import { mapGetters } from 'vuex';

export default {
  name: "FavoriteFilesDialog",
  props: {
    choiceFavoriteProduct: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    choiceFavoriteProduct() {
      this.checkFavoriteFolder(this.choiceFavoriteProduct.id)
    },
  },
  data() {
    return {
      modal: "",
      createFolderModal: "",
      folders: [],
      copyFolders: [],
      creatFolderForm: {
        title: '',
      },
      createFolderInProduct: true,
    };
  },
  computed: {
    ...mapGetters('commonModule', [
      'favoriteFoders',
    ])
  },
  methods: {
    createFolder() {
      const newFolder = {
        title: this.creatFolderForm.title || '未命名收藏夾',
        productContents: [],
        id: `${Math.floor(Date.now() / 1000)}`,
      };
      if (this.createFolderInProduct) {
        const Obj = {
          title: this.choiceFavoriteProduct.title,
          category: this.choiceFavoriteProduct.category,
          id: this.choiceFavoriteProduct.id,
          imageUrl: this.choiceFavoriteProduct.imageUrl,
        };
        newFolder.productContents.push(Obj);
      }
      this.copyFolders.push(newFolder);
      const folders = JSON.stringify(this.copyFolders);
      localStorage.setItem('favorite-folders', folders);
      this.getLocalStorage();
      this.closeModal();
    },
    backFirst() {
      this.modal.show();
      this.createFolderModal.hide();
    },
    addNewFolder() {
      this.modal.hide();
      this.creatFolderForm = {
        title: '',
      };
      this.createFolderModal.show();
    },
    openModal() {
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
      this.createFolderModal.hide();
    },
    addToFolder(id, idx) {
      if (this.folders[idx].productCheck === false) {
        console.log('內無該筆資料，可新增')
        const product = {
          title: this.choiceFavoriteProduct.title,
          category: this.choiceFavoriteProduct.category,
          id: this.choiceFavoriteProduct.id,
          imageUrl: this.choiceFavoriteProduct.imageUrl,
        };
        this.copyFolders.forEach((item, index) => {
          if (item.id === id) {
            this.copyFolders[index].productContents.push(product);
          }
        });
      } else {
        console.log('有該筆資料，可刪除')
      }
      const folders = JSON.stringify(this.copyFolders);
      localStorage.setItem('favorite-folders', folders);
      this.modal.hide();
      this.getLocalStorage();
    },
    checkFavoriteFolder(id) { // 判斷folders內該項目是否已被保存
      this.folders.forEach((item, index) => {
        const checkResult = item.productContents.some((job) => job.id === id);
        this.folders[index].productCheck = checkResult;
        console.log('checkFavoriteFolder', this.folders)
      });
    },
    getLocalStorage() {
      const favoriteFolders = JSON.parse(localStorage.getItem('favorite-folders'));
      if (favoriteFolders) {
        this.folders = favoriteFolders;
        this.copyFolders = JSON.parse(JSON.stringify(favoriteFolders));
      }
      this.$store.commit('commonModule/SAVE_FAVORIE_FOLDERS', JSON.parse(JSON.stringify(favoriteFolders)));
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.favoriteFilesDialog);
    this.createFolderModal = new Modal(this.$refs.createFoldersModal);
  },
  unmounted() {
    this.modal.dispose();
    this.createFolderModal.dispose();
  },
  created() {
    this.getLocalStorage();
  },
};
</script>
