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
    <div class="main-chart">
      <MainChart
        :categories="categories1"
        :seriesData="seriesData1"
        :seriesColor="seriesColor1"
      />
      <MainChart
        :categories="categories2"
        :seriesData="seriesData2"
        :seriesColor="seriesColor2"
      />
    </div>
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

  data() {
    return {
      categories1: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      seriesData1: [100, 90, 131, 70, 28, 51, 142, 76],
      seriesColor1: "#ff7f0e",
      categories2: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      seriesData2: [150, 260, 70, 85, 190, 10, 110, 28, 51],
      seriesColor2: "#15ae73",
    };
  },
};
</script>

