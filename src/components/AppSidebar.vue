<template>
  <CSidebar
    class="border-end"
    colorScheme="white"
    position="fixed"
    
    :visible="sidebarVisible"
    @visible-change="
      (event) =>
        $store.commit({
          type: 'updateSidebarVisible',
          value: event,
        }) 
    "
  >
    <CSidebarHeader class="border-bottom">
      <RouterLink custom to="/" v-slot="{ href, navigate }">
      <div>
        <CSidebarBrand v-bind="$attrs" as="a" :href="href" @click="navigate">
          <img class="d-block w-100" :src="Logo" alt="logo" />
        </CSidebarBrand> <p class="color: #8D9091; font-size: 12px padding-top: 8px;">App Name</p></div>
        <img :src="Compress" />
      </RouterLink>
      <CCloseButton class="d-lg-none" dark @click="$store.commit('toggleSidebar')" />
    </CSidebarHeader>
    <AppSidebarNav />
   
  </CSidebar>
</template>

<script>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useStore } from 'vuex'
import { AppSidebarNav } from './AppSidebarNav'
import Logo from '@/assets/brand/frame.png'
import Compress from '@/assets/icons/compress.png'

export default {
  name: 'AppSidebar',
  components: {
    AppSidebarNav,
    RouterLink,
  },
  setup() {
    const store = useStore()
    return {
    
      Logo,
      Compress,
      sidebarVisible: computed(() => store.state.sidebarVisible),
    }
  },
}
</script>
