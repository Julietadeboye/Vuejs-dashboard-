<template>
  <CHeader position="sticky" :class="headerClassNames">
    <CContainer class="border-bottom px-4" fluid>
      <div class="header-row">
      <CHeaderToggler v-show="!sidebarVisible" @click="$store.commit('toggleSidebar')" style="margin-inline-start: -14px">
        <CIcon icon="cil-menu" size="lg" />
      </CHeaderToggler>
     <p class="user-name">Hello Ayomide! 👋🏼</p>
      </div>
     
        
      <CHeaderNav>
        
<CButton color="primary" shape="rounded-pill">
               Download Report
              </CButton>
        <li class="nav-item py-1">
          <div class="vr h-100 mx-2 text-body text-opacity-75"></div>
        </li>
        <div class="profile">        <div class="user-profile">AO</div>
        <CDropdown variant="nav-item" placement="bottom-end">
          <CDropdownToggle :caret="false">
            <CIcon  icon="cil-chevron-bottom" size="sm" />
            
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem
              :active="colorMode === 'light'"
              class="d-flex align-items-center"
              component="button"
              type="button"
              @click="setColorMode('light')"
            >
              <CIcon class="me-2" icon="cil-face" size="lg" /> Profile
            </CDropdownItem>
           
           
          </CDropdownMenu>
        </CDropdown></div>
        <li class="nav-item py-1">
          <div class="vr h-100 mx-2 text-body text-opacity-75"></div>
        </li>
       
      </CHeaderNav>
    </CContainer>
    <CContainer class="px-4" fluid>
      <AppBreadcrumb />
    </CContainer>
  </CHeader>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useColorModes } from '@coreui/vue'
import AppBreadcrumb from './AppBreadcrumb'
export default {
  name: 'AppHeader',
  components: {
    AppBreadcrumb,
    
  },
  setup() {
    const headerClassNames = ref('mb-4 p-0')
    const { colorMode, setColorMode } = useColorModes('coreui-free-vue-admin-template-theme')

    onMounted(() => {
      document.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 0) {
          headerClassNames.value = 'mb-4 p-0 shadow-sm'
        } else {
          headerClassNames.value = 'mb-4 p-0'
        }
      })
    })

    return {
      headerClassNames,
      colorMode,
      setColorMode,
    }
  },
}
</script>
