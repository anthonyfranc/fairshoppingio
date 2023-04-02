import { defineStore } from 'pinia';

interface AppStoreState {
  storeID: Number;
}

export const useAppStore = defineStore('app-store', {
  state: (): AppStoreState => {
    return {
      storeID: 0,
    };
  },
  actions: {
    updateStoreID(this: AppStoreState, value: Number) {
      this.storeID = value;
    },
  },
  getters: {
    getStoreID: (state) => state.storeID,
  },
});
