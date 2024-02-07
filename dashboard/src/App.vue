<template>
  <div id="app">
    <HeaderComponent />
    <div class="container">
      <SidebarComponent />
      <main>{{ msg }}</main>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import SidebarComponent from './components/SidebarComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    SidebarComponent,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js + Vuetify App'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.container {
  display: flex;
}

main {
  flex-grow: 1;
  padding: 1em;
  /* Adjust the padding/margin based on your design */
}
</style>
