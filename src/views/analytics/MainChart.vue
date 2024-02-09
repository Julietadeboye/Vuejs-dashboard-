<template>
  <div>
    <apexchart
      width="500"
      height="350"
      type="area"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "MainChart",
  data() {
    return {
      chartOptions: {
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
        tooltip: {
          fixed: {
            enabled: false,
            position: "topRight",
          },
        },
      },
      series: [
        {
          name: "Active Users",
          data: [100, 90, 131, 70, 28, 51, 142],
        },
      ],
    };
  },
  components: {
    apexchart: VueApexCharts,
  },
};
</script>
