import { createStore } from "vuex";

export default createStore({
  state: {
    sidebarVisible: true,
    sidebarUnfoldable: false,
    theme: "light",
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible;
    },

    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value;
    },
  },
  actions: {},
  modules: {},
});
