<template>
  <div class="tabs">
    <ul class="tab-nav">
      <li
        v-for="(tab, idx) in tabs"
        :key="idx"
        :class="['tab', selected === idx && ' active']"
        @click="handleSelected(idx)"
      >
        <i :class="tab.icon" v-if="tab.icon != ''"></i>
        {{ tab.title }}
      </li>
      <slot name="button"></slot>
    </ul>
    <!--tab content -->
    <slot name="content"></slot>
  </div>
</template>
<script>
export default {
  name: "Tabs",
  components: {},
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    selected: {
      type: Number,
    },
  },
  methods: {
    handleSelected(idx) {
      this.$emit("handleClicked", idx);
    },
  },
};
</script>

<style scoped lang="scss">
$Tabs-bottom: 1px solid #dddddd;
$Tabs-color-hover: #ea8d51;
$Tab-bottom-hover: 1px solid #ea8d51;

.tabs {
  box-sizing: border-box;
  margin: auto;
  padding: 0;
  width: 100%;
  list-style: none;
  .tab-nav {
    box-sizing: border-box;
    margin: auto;
    padding: 0;
    width: 100%;
    list-style: none;
    border-bottom: $Tabs-bottom;
    .tab {
      cursor: pointer;
      box-sizing: border-box;
      display: inline-block;
      margin: auto;
      padding: 5px;
      &:hover,
      &.active {
        color: $Tabs-color-hover;
        border-bottom: $Tab-bottom-hover;
      }
    }
  }
  .tab-content {
    box-sizing: border-box;
  }
}
</style>

