<template>
  <div>
      <div class="bg" v-show="table"></div>
      <div class="bg" v-show="vis"></div>
      <div class="list_content">
        <div class="list_one">
            <div >
            <img class="list_one_state_icon" src="../assets/increase.png">
            </div>
            <div class="list_one_gname">GeneName:11LL</div>
            <div class="list_one_microname">demo:demo</div>
            <div class="list_button">
                    <div class="list_button_table" @click="openTable">Table</div>
                    <div class="list_button_vis" @click="openVis">Vis</div>
            </div>
        </div>
        </div>
        <div class="table" v-show="table">
            <img src="../assets/hzau_logo.jpg" class="select-hzau-img">
            <img
                @click="openTable"
                src="../assets/cancel.png"
                class="cancel-icon"
            />
            <div class="info_bar">
                <div v-for="(value, name) in temporary" :key="name" class="info">
                    <div class="info_header">{{name}}</div>
                    <div class="info_body">{{value}}</div>
                </div>
            </div>
        </div>
        <div class="vis" v-show="vis">
            <img
                @click="openVis"
                src="../assets/cancel.png"
                class="cancel-icon"
            />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            table: false,
            vis: false,
            temporary: {GeneName: "Arg1", MicrobiotaAlteration: "increase", MicrobiotaName: "Lactobacillus"},
            info: {
                info: {
                    hits: 10, // 结果数
                    runtime: 2635, // 查询时间
                },
                payload: [
                    {GeneName: "Arg1", MicrobiotaAlteration: "increase", MicrobiotaName: "Lactobacillus"},
                    {GeneName: "IL22", MicrobiotaAlteration: "increase", MicrobiotaName: "Lactobacillus"},
                    {GeneName: "MAPK14", MicrobiotaAlteration: "increase", MicrobiotaName: "Lactobacillus"},
                    {GeneName: "Tjp1", MicrobiotaAlteration: "increase", MicrobiotaName: "Lactobacillus"},
                    {GeneName: "Angptl4", MicrobiotaAlteration: "increase", MicrobiotaName: "Akkermansia muciniphila"},
                    {GeneName: "Arnt2", MicrobiotaAlteration: "increase", MicrobiotaName: "Akkermansia muciniphila"},
                    {GeneName: "Arntl", MicrobiotaAlteration: "increase", MicrobiotaName: "Akkermansia muciniphila"},
                    {GeneName: "Atf4", MicrobiotaAlteration: "increase", MicrobiotaName: "Akkermansia muciniphila"},
                    {GeneName: "Bach1", MicrobiotaAlteration: "increase", MicrobiotaName: "Akkermansia muciniphila"},
                    {GeneName: "Brca1", MicrobiotaAlteration: "increase", MicrobiotaName: "Akkermansia muciniphila"}
                ]
            }
        }
    },
    methods: {
        openTable() {
            this.table = !this.table;
        },
        openVis() {
            this.vis = !this.vis;
        }
    }
}
</script>

<style>
.list_content
{
    width: 100%;
    position: absolute;
    top:620px;
}
.list_one
{
    width: 70vw;
    height: 145px;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 20px;
    position: relative;
}
.list_one_state_icon
{
     width: 123px;
     height: 123px;
     position: absolute;
     top: 10px;
     left: 30px;
}
.list_one_gname
{
    position: absolute;
    top: 30px;
    left: 170px;
    font-size: 30px;
    color: #9E9E9E;
    letter-spacing: 1px;
    display: block;
}
.list_one_microname
{
    position: absolute;
    top: 75px;
    left: 170px;
    font-size: 30px;
    color: #9E9E9E;
    letter-spacing: 1px;
    display: block;

}
.list_button
{
    position: absolute;
    right: 50px;
    display: flex;
    flex-wrap: nowrap;
    top: 50px;
}
.list_button_table
{
     padding: 10px;
     background: #91b0b8;
     margin-right: 10px;
     border-radius: 10px;
     color: #ffffff;
     letter-spacing: 2px;
}
.list_button_vis
{
     padding: 10px;
     background: #91b0b8;
     border-radius: 10px;
     color: #ffffff;
     letter-spacing: 2px;
}
.list_button_table:hover,.list_button_vis:hover
{
    background: #94bdbf;
}

.table {
    width: 70%;
    height: 53%;
    z-index: 999;
    background: #ffffff;
    margin: 0 auto;
    position: absolute;
    left: 15%;
    top: 20%;
    border-radius: 10px;
    min-height: 500px;
}
.bg {
    width: 100%;
    height: 10000px;
    background: black;
    opacity: 0.5;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
}

.select-hzau-img {
    width: 100px;
    height: 100px;
    margin: 5% 0 0 46%;
}
.cancel-icon {
  width: 30px;
  height: 30px;
  float: right;
  margin: 30px 30px 0 0;
}
.info_bar {
    display: flex;
    width: 50vw;
    margin: 0 auto;
}
.info {
    text-align: center;
    font-size: 24px;
    flex: 1;
    line-height: 40px;
}

.info_header {
    color: #85acc7;
    border-bottom: 1px solid #85acc7;
}

.info_body {
    color: #7b7c7e;
}
.vis {
    width: 70%;
    height: 53%;
    z-index: 999;
    background: #ffffff;
    margin: 0 auto;
    position: absolute;
    left: 15%;
    top: 20%;
    border-radius: 10px;
    min-height: 500px;
    background-image: url('../assets/vis.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
</style>