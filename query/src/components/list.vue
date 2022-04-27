<template>
  <div>
      <div class="bg" v-show="table"></div>
      <div class="bg" v-show="vis"></div>
      <div class="list_content">
        <div v-for="(item, index) in info.payload" :key="index">
            <div class="list_one">
                <div >
                <img v-if="item.MicrobiotaAlteration == 'increase'" class="list_one_state_icon" src="../assets/increase.png">
                <img v-if="item.MicrobiotaAlteration == 'decrease'" class="list_one_state_icon" src="../assets/decrease.png">
                </div>
                <div class="list_all">
                    <div class="list_one_gname" v-if="names.includes('GeneName')">GeneName: {{item.GeneName}}</div>
                    <div class="list_one_ma" v-if="names.includes('MetaboliteName')">MetaboliteName: {{item.MetaboliteName}}</div>
                    <div class="list_one_microname" v-if="names.includes('MicrobiotaName')">MicrobiotaName: {{item.MicrobiotaName}}</div>
                </div>
                <div class="list_button">
                        <div class="list_button_table" @click="openTable(index)">Tab</div>
                        <div class="list_button_vis" @click="openVis">Fig</div>
                </div>
                
            </div>
        </div>
      </div>
    <!--  弹出层-->
    <div>
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
  </div>
</template>

<script>
export default {
    props: ['list','names'],
    data() {
        return {
            table: false,
            vis: false,
            temporary: '',
            info: {
                info: {
                    hits: 10, // 结果数
                    runtime: 2635, // 查询时间
                },
                payload: this.list
            }
        }
    },
    methods: {
        openTable(index) {
            this.table = !this.table;
            this.temporary = this.info.payload[index]
        },
        openVis() {
            this.vis = !this.vis;
        }
    },
}
</script>

<style>
.list_content
{
    width: 100%;
    position: absolute;
    top:620px;
    background-color: #f6f6f6;
}
.list_one
{
    width: 70vw;
    height: 145px;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 20px;
    position: relative;
    margin-bottom: 20px;
}

.list_all {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 125px;
    padding: 10px 0;
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

    margin-left: 170px;
    font-size: 22px;
    color: #9E9E9E;
    letter-spacing: 1px;

}
.list_one_ma
{

    margin-left: 170px;
    font-size: 22px;
    color: #9E9E9E;
    letter-spacing: 1px;

}
.list_one_microname
{

    margin-left: 170px;
    font-size: 22px;
    color: #9E9E9E;
    letter-spacing: 1px;


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
    position: fixed;
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
    flex-wrap: wrap;
}
.info {
    text-align: center;
    font-size: 24px;
    line-height: 40px;
    flex: 1;
    min-width: 200px;
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
    position: fixed;
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