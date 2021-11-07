<template>
  <div>
    <canvas height="200" ref="canvas"></canvas>
  </div>
</template>

<script>
import { Doughnut } from "vue-chartjs"
export default {
  name: "Chart",
  data: () => ({
    categoryList: []
  }),
  extends: Doughnut,
  mounted () {
    this.renderChart({
      labels: ["Food", "Transport", "Education", "Sport", "Entertainment"],
      datasets: [
        {
          label: "Costs by categories",
          data: [569, 1938, 3050, 450, 0],
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgb(201, 203, 207)",
            "rgb(153, 102, 255)"
          ],
          hoverOffset: 4
        }
      ]
    })
  }
}
</script>

<style></style>
