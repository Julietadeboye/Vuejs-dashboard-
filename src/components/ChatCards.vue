<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <CRow :xs="{ gutter: 4 }">
        <CCol :sm="6" :xl="4" :xxl="3">
          <CCard class="card-dashboard">
            <CCardBody>
              <CCardTitle class="card-title">no of users</CCardTitle>
              <CCardText class="card-text">{{
                data.data.numberOfUsers
              }}</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol :sm="3">
          <CCard class="card-dashboard">
            <CCardBody>
              <CCardTitle class="card-title">total message sent</CCardTitle>
              <CCardText class="card-text">{{
                data.data.totalMessagesSent
              }}</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol :sm="3">
          <CCard class="card-dashboard">
            <CCardBody>
              <CCardTitle class="card-title"
                >total media storage used</CCardTitle
              >
              <CCardText class="card-text">
                {{ formatStorage(data.data.totalStorageUsed) }}
              </CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol :sm="3">
          <CCard class="card-dashboard">
            <CCardBody>
              <CCardTitle class="card-title">total media sent</CCardTitle>
              <CCardText class="card-text">{{
                data.data.totalMediaSent
              }}</CCardText>
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
        numberOfUsers: 0,
        totalMessagesSent: 0,
        totalStorageUsed: 0,
        totalMediaSent: 0,
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
          "https://sfe-m3if.onrender.com/api/v1/chat_dashboard"
        );
        this.data = response.data;
        this.loading = false;
        console.log(response.data);
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
