<template>

<CRow :xs="{ gutter: 4 }">
    <CCol :sm="6" :xl="4" :xxl="3">
               <CCard class="card-dashboard">
                <CCardBody>
                    <CCardTitle class="card-title">USERS ONLINE</CCardTitle>
                    <CCardText class="card-text">
                    816
                    </CCardText>
                    
                  </CCardBody>
                  
                  
                </CCard>
              </CCol>
              <CCol :sm="3">
                  <CCard class="card-dashboard">
                <CCardBody>
                    <CCardTitle class="card-title">users active today</CCardTitle>
                    <CCardText class="card-text">
                    816
                    </CCardText>
                    
                  </CCardBody>
                </CCard>
              </CCol><CCol :sm="3">
                  <CCard class="card-dashboard">
                <CCardBody>
                    <CCardTitle class="card-title">Users Active This Month</CCardTitle>
                    <CCardText class="card-text">
                     883
                    </CCardText>
                   
                  </CCardBody>
                </CCard>
              </CCol><CCol :sm="3">
                  <CCard class="card-dashboard">
                <CCardBody>
                    <CCardTitle class="card-title">Peak Concurrency This Month</CCardTitle>
                    <CCardText class="card-text">
                     556
                    </CCardText>
                  
                  </CCardBody>  
                </CCard>
              </CCol><CCol :sm="3">
                  <CCard class="card-dashboard">
                <CCardBody>
                    <CCardTitle class="card-title">dashboard</CCardTitle>
                    <CCardText class="card-text">
                  
                     56 GB <span style="font-size: 13px;">of 512 GB</span>
                    </CCardText>
                  
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>    
</template>

<script>
import { onMounted, ref } from 'vue'
import { CChart } from '@coreui/vue-chartjs'
import { getStyle } from '@coreui/utils'

export default {
  name: 'WidgetsStatsA',
  components: {
    CChart,
  },
  setup() {
    const widgetChartRef1 = ref()
    const widgetChartRef2 = ref()

    onMounted(() => {
      document.documentElement.addEventListener('ColorSchemeChange', () => {
        if (widgetChartRef1.value) {
          widgetChartRef1.value.chart.data.datasets[0].pointBackgroundColor =
            getStyle('--cui-primary')
          widgetChartRef1.value.chart.update()
        }

        if (widgetChartRef2.value) {
          widgetChartRef2.value.chart.data.datasets[0].pointBackgroundColor =
            getStyle('--cui-info')
          widgetChartRef2.value.chart.update()
        }
      })
    })

    return { getStyle, widgetChartRef1, widgetChartRef2 }
  },
}
</script>
