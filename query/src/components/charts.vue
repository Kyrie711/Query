
<template>
  <div id="charts">
      <div id="main" class="charts_main"></div>
  </div>
</template>
<script>
export default {
  name: "Charts",
  methods: {
    drawChart() {
    var chartDom = document.getElementById("main");
    var myChart = this.$echarts.init(chartDom);
    var option;

    option = {
      title: {
        text: "Fig",
      },
      tooltip: {},
      animationDurationUpdate: 1500,
      animationEasingUpdate: "quinticInOut",
      series: [
        {
          type: "graph",
          layout: "none",
          symbolSize: 50,
          roam: true,
          label: {
            show: true,
          },
          edgeSymbol: ["circle", "arrow"],
          edgeSymbolSize: [4, 10],
          edgeLabel: {
            fontSize: 20,
          },
          data: [
            {
              name: "Node 1",
              x: 300,
              y: 300,
            },
            {
              name: "Node 2",
              x: 800,
              y: 300,
            },
            {
              name: "Node 3",
              x: 550,
              y: 100,
            },
            {
              name: "Node 4",
              x: 550,
              y: 500,
            },
          ],
          // links: [],
          links: [
            {
              source: 0,
              target: 1,
              symbolSize: [5, 20],
              label: {
                show: true,
              },
              lineStyle: {
                width: 5,
                curveness: 0.2,
              },
            },
            {
              source: "Node 2",
              target: "Node 1",
              label: {
                show: true,
              },
              lineStyle: {
                curveness: 0.2,
              },
            },
            {
              source: "Node 1",
              target: "Node 3",
            },
            {
              source: "Node 2",
              target: "Node 3",
            },
            {
              source: "Node 2",
              target: "Node 4",
            },
            {
              source: "Node 1",
              target: "Node 4",
            },
          ],
          lineStyle: {
            opacity: 0.9,
            width: 2,
            curveness: 0,
          },
        },
      ],
    };

    option && myChart.setOption(option);
    }
  },
  mounted() {
    this.drawChart();
  }
};
</script>
<style scoped>
.charts_main {
  width: 50vw;
  height: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
}
</style>