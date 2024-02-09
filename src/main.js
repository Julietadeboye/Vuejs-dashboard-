import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import CoreuiVue from "@coreui/vue";
import CIcon from "@coreui/icons-vue";
import { iconsSet as icons } from "@/assets/icons";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(CoreuiVue);
app.provide("icons", icons);
app.component("CIcon", CIcon);
app.component("VueDatePicker", VueDatePicker);
app.use(VueApexCharts);

app.component("apexchart", VueApexCharts);

app.mount("#app");
