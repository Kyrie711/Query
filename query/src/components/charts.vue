<template>
  <div id="charts">
    <div id="main" class="charts_main"></div>
  </div>
</template>
<script>
export default {
  name: "Charts",
  props: ["datas"],
  data() {
    return {
      option: {
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
            ],
            links: [
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
      },
    };
  },
  methods: {
    drawChart() {
      var chartDom = document.getElementById("main");
      var myChart = this.$echarts.init(chartDom);
      var option = this.option;
      option && myChart.setOption(option);
    },
    appendOption() {
      let currentDisorder = 0;
      let currentMicrobio = "";
      let currentGene = "";
      for (let i = 0; i < 5; i++) {
        if (
          this.datas[i].Disorder == "colorectal_cancer" &&
          currentDisorder == 0
        ) {
          currentDisorder = 1;
          this.option.series[0].data.push({
            name: this.datas[i].Disorder,
            x: 300,
            y: 100,
          });
        }
        if (this.datas[i].Microbiota != currentMicrobio) {
          currentMicrobio = this.datas[i].Microbiota;
          this.option.series[0].data.push({
            name: this.datas[i].Microbiota,
            x: 550,
            y: 50 * (i + 1),
          });
        }
        if (this.datas[i].Gene != currentGene) {
          currentGene = this.datas[i].Gene;
          this.option.series[0].data.push({
            name: this.datas[i].Gene,
            x: 800,
            y: 50 * (i + 1),
          });
        }
      }
      let count = 0;
      for (let i of this.datas) {
        count++;
        if (count == 7) {
          break;
        }
        if (i.Alteration_Microbiota == "decrease") {
          this.option.series[0].links.push({
            source: i.Disorder,
            target: i.Microbiota,
            label: {
              show: false,
            },
            lineStyle: {
              curveness: 0,
              color: "green",
            },
          });
        } else {
          this.option.series[0].links.push({
            source: i.Disorder,
            target: i.Microbiota,
            label: {
              show: false,
            },
            lineStyle: {
              curveness: 0,
              color: "red",
            },
          });
        }
        if (i.Alteration_Gene == "decrease") {
          this.option.series[0].links.push({
            source: i.Microbiota,
            target: i.Gene,
            label: {
              show: false,
            },
            lineStyle: {
              curveness: 0,
              color: "green",
            },
          });
        } else {
          this.option.series[0].links.push({
            source: i.Microbiota,
            target: i.Gene,
            label: {
              show: false,
            },
            lineStyle: {
              curveness: 0,
              color: "red",
            },
          });
        }
      }
    },
  },
  async mounted() {
    await this.appendOption();
    this.drawChart();
  },
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
