import { defineStore } from 'pinia';

interface AppStoreState {
  storeID: Number;
  dataID: [];
  imageID: [];
  finishLoading: Number;
}

export const useAppStore = defineStore('app-store', {
  state: (): AppStoreState => {
    return {
      storeID: 0,
      dataID: [],
      imageID: [],
      finishLoading: 0,
    };
  },
  actions: {
    updateStoreID(this: AppStoreState, value: Number) {
      this.storeID = value;
    },
    updateDataID(this: AppStoreState, value: []) {
      this.dataID = value;
    },
    updateImageID(this: AppStoreState, value: []) {
      this.imageID = value;
    },
    updatefinishLoading(this: AppStoreState, value: Number) {
      this.finishLoading = value;
    },
    reset() {
      this.storeID = 0;
    },
  },
  getters: {
    getStoreID: (state) => state.storeID,
    getDataID: (state) => state.dataID,
    getImageID: (state) => state.imageID,
    getfinishLoading: (state) => state.finishLoading,
  },
});
