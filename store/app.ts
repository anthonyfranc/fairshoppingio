import { defineStore } from 'pinia';

interface AppStoreState {
  storeID: Number;
  dataID: [];
}

export const useAppStore = defineStore('app-store', {
  state: (): AppStoreState => {
    return {
      storeID: 0,
      dataID: [],
    };
  },
  actions: {
    updateStoreID(this: AppStoreState, value: Number) {
      this.storeID = value;
    },
    updateDataID(this: AppStoreState, value: []) {
      this.dataID = value;
    },
  },
  getters: {
    getStoreID: (state) => state.storeID,
    getDataID: (state) => state.dataID,
  },
});
