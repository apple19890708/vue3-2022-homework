<template>
  <div>
    <div
      id="favoriteFilesDialog"
      ref="modal"
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
            <div @click="addNewFolder" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">
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
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-primary"
              data-bs-target="#favoriteFilesDialog"
              data-bs-toggle="modal"
            >
              Back to first
            </button>
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
import modal from '@/utils/modal';
import { mapGetters } from 'vuex';

export default {
  name: "FavoriteFilesDialog",
  mixins: [modal],
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
      favoriteFilesModal: "",
      folders: [
        {
          id: '123456789',
          title: '收藏一',
          productContents: [
            {
              category: "cake",
              id: "-MtqJSsleIiRq1nN8hGF",
              imageUrl: "https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
              time: 1627833422,
              title: "起司蛋糕"
            }
          ]
        }
      ],
      copyFolders: [
        {
          id: '123456789',
          title: '收藏一',
          productContents: [
            {
              category: "cake",
              id: "-MtqJSsleIiRq1nN8hGF",
              imageUrl: "https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
              time: 1627833422,
              title: "起司蛋糕"
            }
          ]
        }
      ],
    };
  },
  computed: {
    ...mapGetters('commonModule', [
      'favoriteFoders',
    ])
  },
  methods: {
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
  },
  created() {
    this.getLocalStorage();
  },
};
</script>
