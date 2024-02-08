<template>
  <div>
    <DashboardCards class="mb-4" />
    <!-- <div>
    <CRow>
       <CCol :sm="6" :xl="4" :xxl="3">
        <CCard>
        
        <CCardBody>
          <MainChart />
        </CCardBody>
      </CCard>
    </CCol>
    </CRow>
     <CRow>
       <CCol :sm="6" :xl="4" :xxl="3">
        <CCard>
        
        <CCardBody>
          <MainChart />
        </CCardBody>
      </CCard>
    </CCol>
    </CRow>
      </div> 
  <template>
<div>-->
 
  </div>
</template>

<script>

import MainChart from './MainChart'
import DashboardCards from '../../components/Cards.vue'

export default {
  name: 'Analytics',
  components: {
    MainChart,
    DashboardCards,
    
    
  },
  }
</script>
