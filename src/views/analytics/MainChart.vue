<template>
  <div :style="{ width: chartWidth }">
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
  props: {
    categories: {
      type: Array,
      default: () => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    seriesData: {
      type: Array,
      required: true,
    },
    seriesColor: {
      type: String,
      default: "#008FFB",
    },
  },
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
          categories: this.categories,
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
          data: this.seriesData,
          color: this.seriesColor,
        },
      ],
      chartWidth: "100%",
    };
  },
  components: {
    apexchart: VueApexCharts,
  },
};
</script>
