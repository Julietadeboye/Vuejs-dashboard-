<template>
  <ChatCards />
  <div id="app">
    <Tabs
      :tabs="tabs"
      :selected="selected"
      class="left"
      @handleClicked="updataSelected"
    >
      <template #button>
        <div class="btn--readmore">...more</div>
      </template>
      <template #content>
        <components :is="curContent"></components>
      </template>
    </Tabs>
  </div>
</template>

<script>
import Tabs from "./Tabs.vue";
import Table from "./Table.vue";
import ChatCards from "../../components/ChatCards.vue";

export default {
  name: "App",
  components: {
    Tabs,
    Table,
    ChatCards,
  },
  data() {
    return {
      tabs: [
        {
          title: "Direct Messages",

          content: "Table",
        },
        {
          title: "Groups",

          content: "",
        },
      ],
      selected: 0,
      curContent: "Table",
    };
  },
  methods: {
    updataSelected: function (idx) {
      this.selected = idx;
      this.curContent = this.tabs[idx].content;
    },
  },
};
</script>

