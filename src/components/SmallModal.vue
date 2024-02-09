<template>
  <CCol :xs="12">
    <CCard class="mb-4">
      <CCardBody>
        <CModal
          size="sm"
          class="custom-modal"
          :visible="smDemo"
          @close="toggleModal"
        >
          <CModalHeader dismiss @close="toggleModal"> </CModalHeader>
          <CModalBody> thbibfrb </CModalBody>
        </CModal>
      </CCardBody>
    </CCard>
  </CCol>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SmallModal",
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

