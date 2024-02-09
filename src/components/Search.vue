<template>
  <div class="search-container">
    <input type="text" placeholder="Search..." />
    <span class="search-icon">
      <CIcon icon="cil-search" />
    </span>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style scoped>
.search-container {
  position: relative;
}

input[type="text"] {
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #c1cec8;
  width: 200px;
}

.search-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>
