<template>
  <CCol :xs="12">
    <CCard class="mb-4">
      <CCardBody>
        <CModal :visible="smDemo" size="lg" @close="toggleModal">
          <CModalHeader dismiss @close="toggleModal">
            Filter Table
          </CModalHeader>
          <div>
            <CButton variant="outline" shape="rounded-pill"> Today</CButton>
            <CButton variant="outline" shape="rounded-pill"
              >Last 7 days
            </CButton>
            <CButton variant="outline" shape="rounded-pill"
              >This month
            </CButton>
            <CButton variant="outline" shape="rounded-pill">
              last 3 months</CButton
            >
          </div>
          <div class="display: flex">
            <div>
              <VueDatePicker v-model="date"></VueDatePicker>
            </div>
            <div>
              <VueDatePicker v-model="date"></VueDatePicker>
            </div>
          </div>
          <CFormSelect>
            <option>Please select</option>
            <option value="0 - 500 ">0 - 500 Messages</option>
            <option value="500 - 2000 ">500 - 2000 Messages</option>
            <option value="2000+ =">2000+ Messages</option>
          </CFormSelect>
          <CFormSelect>
            <option>Please select</option>
            <option value="0 -50">0 -50 MB</option>
            <option value="50-200">50 MB -200MB</option>
            <option value="200-1gb">200MB - 1GB</option>
            <option value="1gb+">1GB+</option>
          </CFormSelect>
          <CButton color="primary"> Filter Table</CButton>
          <CButton> Clear Filter </CButton>
        </CModal>
      </CCardBody>
    </CCard>
  </CCol>
</template>

<script>
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  name: "Filter",
  components: { VueDatePicker },
  props: {
    smDemo: Boolean,
  },

  methods: {
    toggleModal() {
      this.$emit("update:smDemo", !this.smDemo);
    },
  },
};
</script>

