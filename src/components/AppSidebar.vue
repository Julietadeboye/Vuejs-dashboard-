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
        <CSidebarBrand v-bind="$attrs" as="a" :href="href" @click="navigate">
          <img class="d-block w-100" :src="Logo" alt="logo" />
        </CSidebarBrand>
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
      sidebarUnfoldable: computed(() => store.state.sidebarUnfoldable),
      sidebarVisible: computed(() => store.state.sidebarVisible),
    }
  },
}
</script>
