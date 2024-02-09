<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <CRow :xs="{ gutter: 4 }">
        <CCol :sm="3">
          <CCard class="card-dashboard">
            <CCardBody>
              <CCardTitle class="card-title">USERS ONLINE</CCardTitle>
              <CCardText class="card-text">{{
                data.data.usersOnline
              }}</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol :sm="3">
          <CCard class="card-dashboard">
            <CCardBody>
              <CCardTitle class="card-title">USERS ACTIVE TODAY</CCardTitle>
              <CCardText class="card-text">{{
                data.data.usersActiveToday
              }}</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol :sm="3">
          <CCard class="card-dashboard">
            <CCardBody>
              <CCardTitle class="card-title"
                >USERS ACTIVE THIS MONTH</CCardTitle
              >
              <CCardText class="card-text">{{
                data.data.usersActiveThisMonth
              }}</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol :sm="3">
          <CCard class="card-dashboard">
            <CCardBody>
              <CCardTitle class="card-title"
                >PEAK CONCURRENCY THIS MONTH</CCardTitle
              >
              <CCardText class="card-text">{{
                data.data.peakConcurrency
              }}</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol :sm="3">
          <CCard class="card-dashboard">
            <CCardBody>
              <CCardTitle class="card-title">DASHBOARD</CCardTitle>
              <CCardText class="card-text">
                {{ formatStorage(data.data.dashboard) }}
                <span style="font-size: 13px">of 512 GB</span>
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DashboardCards",
  data() {
    return {
      cards: [],
      loading: true,
      data: {
        usersOnline: 0,
        usersActiveToday: 0,
        usersActiveThisMonth: 0,
        peakConcurrency: 0,
        dashboard: 0,
      },
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(
          "https://sfe-m3if.onrender.com/api/v1/dashboard"
        );
        this.data = response.data;
        this.loading = false;
        console.log(response.data.data.usersOnline);
      } catch (error) {
        console.error("Error fetching data:", error);
        this.loading = false;
      }
    },
    formatStorage(bytes) {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    },
  },
};
</script>
