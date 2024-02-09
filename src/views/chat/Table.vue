<template>
  <CTable>
    <CTableHead>
      <CTableRow>
        <CTableHeaderCell style="color: #9999bc" scope="col"
          >Users
          <CIcon icon="cil-elevator" />
        </CTableHeaderCell>

        <CTableHeaderCell style="color: #9999bc" scope="col" icon="cil-elevator"
          >Messages Sent <CIcon icon="cil-elevator" />
        </CTableHeaderCell>
        <CTableHeaderCell style="color: #9999bc" scope="col"
          >Media Storage Used <CIcon icon="cil-elevator"
        /></CTableHeaderCell>
        <CTableHeaderCell style="color: #9999bc" scope="col"
          >Date Created <CIcon icon="cil-elevator"
        /></CTableHeaderCell>
        <CTableHeaderCell style="color: #9999bc" scope="col"
          >Media Sent <CIcon icon="cil-elevator"
        /></CTableHeaderCell>
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
        <CTableHeaderCell scope="row">
          <CButton @click="showModal = true">
            <CIcon
              icon="cil-options"
              style="transform: rotate(90deg); cursor: pointer"
            />
          </CButton>
        </CTableHeaderCell>
      </CTableRow>
    </CTableBody>
  </CTable>
  <div class="pagination">
    <Pagination :pagination="pagination" @go-to-page="fetchData" />
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { format } from "date-fns";
import Pagination from "../../components/Pagination.vue";

export default {
  name: "Table",
  components: {
    Pagination,
  },

  setup() {
    const data = ref([]);
    const pagination = ref({});
    const smDemo = ref(false);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://sfe-m3if.onrender.com/api/v1/messages?page=1&limit=5"
        );
        data.value = response.data.data;
        pagination.value = response.data;
      } catch (error) {}
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
      return format(new Date(date), "dd mmm, yyyy");
    };

    const goToPage = (page) => {
      fetchData(page);
    };

    return {
      data,
      pagination,
      formatStorage,
      formatDate,
      goToPage,
      smDemo,
    };
  },
};
</script>
