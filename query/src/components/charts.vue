
<template>
  <div id="charts">
      <div id="main" class="charts_main"></div>
  </div>
</template>
<script>
export default {
  name: "Charts",
    data(){
    return{
      
    option : {
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
          edgeSymbolSize: [5, 10],
          edgeLabel: {
            fontSize: 13,
          },
          data: [
            {
              name: "colorectal cancer",
              x: 300,
              y: 100,
            },
            {
              name: "m1",
              x: 550,
              y: 50,
            },
            {
              name:'m2',
              x:550,
              y:100,
            },
            {
              name:"m3",
              x:550,
              y:150,
            },
            {
              name: "g1",
              x: 800,
              y: 0,
            },
            {
              name:"g2",
              x:800,
              y:50,
            },

            {
              name:"g3",
              x:800,
              y:100,
            },
            {
              name:"g4",
              x:800,
              y:150,
            },

            {
              name:"g5",
              x:800,
              y:200,
            }
          ],
          // links: [],
          links: [
            {
              source: 'colorectal cancer',
              target: 'm1',
              label: {
                show: false,
              },
              lineStyle: {
                curveness: 0,
                color: "red", 
              }
            },
            {
              source: 'm1',
              target: 'g1',
              label: {
                show: false,
              },
              lineStyle: {
                curveness: 0,
                color: "red",
              },
            },
            {
              source: 'm1',
              target: 'g2',
              label: {
                show: false,
              },
              lineStyle: {
                curveness: 0,
                color: "green",
              },
            },
            {
              source: 'colorectal cancer',
              target: 'm2',
              label: {
                show: false,
              },
              lineStyle: {
                curveness: 0,
                color: "green",
              },
            },
            {
              source: 'm2',
              target: 'g1',
              label: {
                show: false,
              },
              lineStyle: {
                curveness: 0,
                color: "green",
              },
            },
            {
              source: 'm2',
              target: 'g3',
              label: {
                show: false,
              },
              lineStyle: {
                curveness: 0,
                color: "green",
              },
            },
            {
              source: 'm2',
              target: 'g4',
              label: {
                show: false,
              },
              lineStyle: {
                curveness: 0,
                color: "red",
              },
            },
            {
              source:'colorectal cancer',
              target:'m3',
              label: {
                show: false,
              },
              lineStyle: {
                curveness: 0,
                color: "red",
              },
            },
            {
              source: 'm3',
              target: 'g1',
              label: {
                show: false,
              },
              lineStyle: {
                curveness: 0,
                color: "red",
              },
            },
            {
              source: 'm3',
              target: 'g5',
              label: {
                show: false,
              },
              lineStyle: {
                curveness: 0,
                color: "green",
              },
            },
          ],
          lineStyle: {
            width: 4,
            curveness: 0.2,
          },
          textStyle: {
            fontSize: 20,
          },
        },
      ],
    }
 
    }
  },
  methods: {
    drawChart() {
    var chartDom = document.getElementById("main");
    var myChart = this.$echarts.init(chartDom);
    var option = this.option;
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
  width: 60vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
}
</style>