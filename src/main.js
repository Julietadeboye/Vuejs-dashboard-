import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import CoreuiVue from "@coreui/vue";
import CIcon from "@coreui/icons-vue";
import { iconsSet as icons } from "@/assets/icons";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).mount("#app");
const app = createApp(App);
app.use(store);
app.use(router);
app.use(CoreuiVue);
app.provide("icons", icons);
app.component("CIcon", CIcon);

app.mount("#app");
