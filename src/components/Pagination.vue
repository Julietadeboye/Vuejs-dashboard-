<template>
  <CPagination>
    <CPaginationItem
      aria-label="Previous"
      :disabled="!pagination.hasPrevPage"
      @click="goToPage(pagination.prevPage)"
    >
      <span aria-hidden="true">&laquo;</span>
    </CPaginationItem>

    <CPaginationItem
      v-for="page in pagination.totalPages"
      :key="page"
      :active="page === pagination.page"
      @click="goToPage(page)"
      :class="{ 'active-page': page === pagination.page }"
    >
      {{ page }}
    </CPaginationItem>

    <CPaginationItem
      aria-label="Next"
      :disabled="!pagination.hasNextPage"
      @click="goToPage(pagination.nextPage)"
    >
      <span aria-hidden="true">&raquo;</span>
    </CPaginationItem>
  </CPagination>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pagination: Object, // Object containing pagination information
  },
  methods: {
    goToPage(page) {
      // Emit an event to the parent component to navigate to the specified page
      this.$emit("go-to-page", page);
    },
  },
};
</script>

