<template>
  <ChatCards />
  <div class="tab-search">
    <Search
      @click="
        () => {
          smDemo = true;
        }
      "
    />
  </div>
  <div id="app">
    <Tabs
      :tabs="tabs"
      :selected="selected"
      class="left"
      @handleClicked="updataSelected"
    >
    </Tabs>

    <Table />
  </div>
  <Filter :smDemo="smDemo" @update:smDemo="smDemo = $event" />
</template>

<script>
import Tabs from "./Tabs.vue";
import Table from "./Table.vue";
import ChatCards from "../../components/ChatCards.vue";
import Search from "../../components/Search.vue";
import Filter from "../../components/Filter.vue";

export default {
  name: "App",
  components: {
    Tabs,
    Table,
    ChatCards,
    Search,
    Filter,
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

