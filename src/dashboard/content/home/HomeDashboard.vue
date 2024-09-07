<template>
  <div class="home-dashboard">Home dashboard</div>

  <div>
    <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const chartOptions = ref({
  chart: {
    id: 'dashboard',
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800,
      animateGradually: {
        enabled: true,
        delay: 150
      },
      dynamicAnimation: {
        enabled: true,
        speed: 350
      }
    },
    toolbar: {
      show: false // Hides the entire toolbar
    }
  },

  xaxis: {
    labels: {
      show: false // Hides x-axis labels
    },
    axisBorder: {
      show: false // Hides x-axis border line
    },
    axisTicks: {
      show: false // Hides x-axis ticks
    },
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
  },
  yaxis: {
    labels: {
      show: false // Hides y-axis labels
    },
    axisBorder: {
      show: false // Hides y-axis border line
    },
    axisTicks: {
      show: false // Hides y-axis ticks
    }
  },
  grid: {
    show: false // Hides grid lines
  }
})

const series = ref([
  {
    name: 'series-1',
    data: [30, 40, 35, 50, 49, 60, 70, 91]
  }
])
</script>
