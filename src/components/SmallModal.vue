<template>
  <CModal
    size="sm"
    :visible="showModal"
    @close="
      () => {
        showModal = false;
      }
    "
  >
    <CModalHeader>
      <CModalTitle>Small modal</CModalTitle>
    </CModalHeader>
    <CModalBody> This is the modal... </CModalBody>
  </CModal>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
};
</script>
