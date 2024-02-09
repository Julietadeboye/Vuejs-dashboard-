<template>
  <div>
    <div class="refresh">
      <p>Last updated 1 minute ago</p>
      <CButton :color="light" style="color: #15ae73">
        <img :src="RefreshIcon" alt="refresh" style="height: 14px" />

        Refresh
      </CButton>
    </div>

    <DashboardCards class="mb-4" />
    <div class="main-chart"><MainChart /> <MainChart /></div>
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
import MainChart from "./MainChart";
import DashboardCards from "../../components/AnalyticsCards.vue";
import RefreshIcon from "@/assets/icons/refresh.png";

export default {
  name: "Analytics",
  components: {
    MainChart,
    DashboardCards,
    RefreshIcon,
  },
  setup() {
    return {
      RefreshIcon,
    };
  },
};
</script>

