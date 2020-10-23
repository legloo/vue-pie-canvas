<template>
  <canvas :id="id" :width="r * 2" :height="r * 2"></canvas>
</template>

<script lang="js">
import PieChart from './utils';
export default {
  data(){
    return{
    }
  },
  props:['id','basedata','r'],
  mounted() {
    if (this.basedata) {
        let canvas = document.getElementById(this.id);
        let ctx = canvas.getContext('2d');

        let pieChart = new PieChart(ctx, this.r);
        pieChart.init(this.basedata);
    }
  }
}
</script>

<style lang="less">
canvas {
  border: 1px solid #eee;
  border-radius: 50%;
}
</style>