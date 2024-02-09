<template>
  <CTable>
    <CTableHead>
      <CTableRow>
        <CTableHeaderCell style="color: #9999bc" scope="col"
          >Users
        </CTableHeaderCell>
        <span>{{ item.full_name }}</span>
        <span v-if="item.sortable" class="sort-icon">
          <i class="cil-elevator"></i>
        </span>
        <CTableHeaderCell style="color: #9999bc" scope="col"
          >Messages Sent <span>{{ item.full_name }}</span>
          <span v-if="item.sortable" class="sort-icon">
            <i class="cil-elevator"></i> </span
        ></CTableHeaderCell>
        <CTableHeaderCell style="color: #9999bc" scope="col"
          >Media Storage Used</CTableHeaderCell
        >
        <CTableHeaderCell style="color: #9999bc" scope="col"
          >Date Created</CTableHeaderCell
        >
        <CTableHeaderCell style="color: #9999bc" scope="col"
          >Media Sent</CTableHeaderCell
        >
        <CTableHeaderCell style="color: #9999bc" scope="col"></CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody>
      <CTableRow v-for="(item, index) in data" :key="index">
        <CTableDataCell>{{ item.full_name }}</CTableDataCell>
        <CTableDataCell>{{ item.message_sent }}</CTableDataCell>
        <CTableDataCell>{{
          formatStorage(item.media_storage_used)
        }}</CTableDataCell>
        <CTableDataCell>{{ formatDate(item.date_created) }}</CTableDataCell>
        <CTableDataCell>{{ item.media_sent }}</CTableDataCell>
        <CTableHeaderCell scope="row">{{ index + 1 }}</CTableHeaderCell>
      </CTableRow>
    </CTableBody>
  </CTable>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { format } from "date-fns";

export default {
  name: "Table",
  setup() {
    const data = ref([]);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sfe-m3if.onrender.com/api/v1/messages?page=1&limit=5"
        );
        data.value = response.data.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const formatStorage = (bytes) => {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };

    const formatDate = (date) => {
      return format(new Date(date), "dd MMM, yyyy");
    };

    return {
      data,
      formatStorage,
      formatDate,
    };
  },
};
</script>
