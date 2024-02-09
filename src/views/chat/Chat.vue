<template>
  <div id="app">
    <!-- <img width="25%" src="./assets/logo.png"> -->
    <!-- <keep-alive> -->
    <Tabs :tabs="tabs" :selected="selected" class="left" @handleClicked="updataSelected">
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
import  Table  from "./Table.vue";

export default {
  name: "App",
  components: {
    Tabs,
  Table,
  },
  data() {
    return {
      tabs: [
        {
          title: "Direct Messages",
         
          content: "Table"
        },
        {
          title: "Groups",
      
          content: ""
        },
      
      ],
      selected: 0,
      curContent: "Table" 
    };
  },
  methods: {
    updataSelected: function(idx) {
      this.selected = idx;
      this.curContent = this.tabs[idx].content;
    }
  }
};
</script>

