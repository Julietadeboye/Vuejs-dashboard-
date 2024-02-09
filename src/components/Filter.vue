<template>
  <div>
    <CButton shape="rounded-pill"> Today</CButton>
    <CButton shape="rounded-pill">Last 7 days </CButton>
    <CButton shape="rounded-pill">This month </CButton>
    <CButton shape="rounded-pill"> last 3 months</CButton>
  </div>
  <div>
    <div>
      <VueDatePicker v-model="date"></VueDatePicker>
    </div>
    <div>
      <VueDatePicker v-model="date"></VueDatePicker>
    </div>
  </div>
  <CFormSelect>
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </CFormSelect>
  <CFormSelect>
    <option>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </CFormSelect>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
export default {
  name: "Filter",
  components: { VueDatePicker },
  data() {
    return {
      date: null,
    };
  },
};
</script>

