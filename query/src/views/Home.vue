<template>
  <div>
    <div v-show="select_main" class="bg-select"></div>
    <!-- 上方导航栏 -->
    <top-bar></top-bar>
    <select-model
      v-show="smShow"
      @closeClick="toggleShow()"
      class="select-model"
    ></select-model>
    <!-- 查询的容器 -->
    <div class="banner">
      <div class="site_title">
        GMFDP
      </div>
      <div class="small_title">
        Gut Microbiota Federated Data Platform
      </div>
      <!-- 查询框 -->
      <div class="serch-bar">
        <div @click="openselect($event)" class="option-bar">
          <div class="option">option</div>
          <div class="arrow-bar">
            <img src="../assets/路径.png" />
          </div>
        </div>
        <input
          type="text"
          class="ipt"
          placeholder="Input Datalog"
          v-model="query"
        />
        <div class="serch">
          <img
            class="onSearch"
            src="../assets/路径 (1).png"
            @click="onSearch()"
          />
        </div>
      </div>
    </div>
    <!-- 选项弹出层 -->
    <div v-show="select_main" class="select-content">
      <img src="../assets/hzau_logo.jpg" class="select-hzau-img" />
      <img
        @click="openselect($event)"
        src="../assets/cancel.png"
        class="cancel-icon"
      />
      <div class="select-item-main">
        <div class="select-title">Source:</div>
        <div
          @click="changestate(1, $event)"
          class="select-common"
          v-bind:class="{
            select_button: !select_state[0].CMS,
            selected_button: select_state[0].CMS,
          }"
        >
          CMS
        </div>
        <div
          @click="changestate(2, $event)"
          class="select-common"
          v-bind:class="{
            select_button: !select_state[1].VMS,
            selected_button: select_state[1].VMS,
          }"
        >
          VMS
        </div>
        <div
          @click="changestate(3, $event)"
          class="select-common"
          v-bind:class="{
            select_button: !select_state[2].Promis,
            selected_button: select_state[2].Promis,
          }"
        >
          Promis
        </div>
        <div
          @click="changestate(4, $event)"
          class="select-common"
          v-bind:class="{
            select_button: !select_state[3].LEI,
            selected_button: select_state[3].LEI,
          }"
        >
          LEI
        </div>
        <div
          @click="changestate(5, $event)"
          class="select-common"
          v-bind:class="{
            select_button: !select_state[4].obdasqlite,
            selected_button: select_state[4].obdasqlite,
          }"
        >
          obdasqlite
        </div>
        <div class="select-type">
          <select required="required" v-model="selected">
            <option value="" disabled="disabled" selected="selected">
              operation
            </option>
            <option value="knowledgeQuery">knowledgeQuery</option>
            <!-- <option value="Two">Two</option>
            <option value="Three">Three</option>
            <option value="Four">Four</option>
            <option value="Five">Five</option>
            <option value="Six">Six</option>
            <option value="Seven">Seven</option> -->
          </select>
          <!-- <span>Selected: {{selected}}</span> -->
        </div>
        <div class="show-selectModel" @click="toggleShow(true)">
          <span>Select Template</span>
        </div>
        <div class="select-input">
          <span>limit:</span>
          <input type="number" placeholder="100" v-model="limit" />
        </div>
      </div>
    </div>
    <!-- List of data -->
    <div class="data-bar-wrapper">
      <div class="data-bar">
        <div class="data-bar-top">
          <div class="data-left">
            <img src="../assets/路径2.png" />
            <p>List of data</p>
            <div></div>
          </div>
          <!-- <div class="data-right" v-if="ifPost">Found {{length}} matches in {{runtime}}ms</div> -->
        </div>
        <div></div>
      </div>
    </div>
    <!-- 下面的列表展示 -->
    <List :list="post" :names="names" v-if="ifPost"></List>
    <div v-if="anim" class="rotate-animate"></div>
    <div class="btm" v-if="btm">请查询相关数据</div>
  </div>
</template>

<script>
import TopBar from "../components/TopBar.vue";
import List from "../components/list.vue";
import SelectModel from "../components/SelectModel.vue";
import { emitDatalog } from "../api/request";
export default {
  data() {
    return {
      btm: true,
      anim: false,
      post: "",
      ifPost: false,
      select_main: false,
      select_state: [
        { CMS: false },
        { VMS: false },
        { Promis: false },
        { LEI: false },
        { obdasqlite: false },
        { Person: false },
        { Location: false },
        { Case: false },
        { All: false },
        { poler: false },
        { es: false },
        { HDFS: false },
      ],
      service: "",
      update: false,
      criteria: {},
      data: null,
      selected: "",
      limit: "8",
      runtime: "10",
      length: "8",
      names: "",
      query: "",
      smShow: false,
    };
  },
  methods: {
    toggleShow(flag) {
      this.smShow = flag;
    },
    openselect() {
      this.select_main = !this.select_main;
    },
    changestate(data, e) {
      let target = e.target.innerHTML;
      for (let i = 1; i <= 9; i++) {
        if (data == i) {
          this.select_state[i - 1][target] = !this.select_state[i - 1][target];
          console.log(e.target);
        }
      }
    },
    onSearch() {
      this.btm = false;
      this.anim = true;
      this.post = "";
      let sources = [];
      for (let item of this.select_state) {
        let ins = Object.keys(item)[0];
        if (item[ins]) {
          sources.push(ins);
        }
      }
      let query = { datalog: this.query };
      // let query = {
      //   query: {
      //     scope: [],
      //     output: { project: {} },
      //     window: { limit: this.limit },
      //     filter: { query: this.query },
      //   }, // 需要⻚⾯传值 //?(MicrobiotaName, GeneName, MicrobiotaAlteration):- relationship:has_disorder_effect_results(MicrobiotaName, Index, <ColorectalCancer>), attribute:microbiota_disorder_interaction_host_type(Index, <human>), attribute:disorder_expression_alteration_caused_by_microbiota(Index, MicrobiotaAlteration), relationship:has_directly_change_results(GeneIndex,GeneName,MicrobiotaName).
      //   control: {
      //     operation: this.selected, // 需要⻚⾯传值
      //     sources: sources, // 需要⻚⾯传值
      //   }, //?(MicrobiotaName, MetaboliteName):- relationship:has_disorder_effect_results(MicrobiotaName, Index, <ColorectalCancer>),attribute:disorder_expression_alteration_caused_by_microbiota(Index, <increase>),attribute:microbiota_disorder_interaction_host_type(Index, <human>),relationship:generates(MicrobiotaName, MetaboliteName).
      //   credentials: {
      //     credentiallist: [
      //       { gutmdisorder: { username: "root", password: "password" } },
      //       { gutmgene: { username: "root", password: "password" } },
      //       { obdasqlite: { username: "root", password: "password" } },
      //     ],
      //   },
      // };
      // query = JSON.stringify(query);
      // request({
      //   method: 'post',
      //   url: '/query',
      //   data: query
      // }).then(res => {
      //   console.log(res)
      //   this.post = res.data.payload
      //   this.runtime = res.data.info.runtime
      //   this.names = Object.keys(this.post[0])

      //   this.length = this.post.length
      //   this.ifPost = true
      //   this.anim = false

      // }).catch(err => {
      //   console.log(err)
      // })
      emitDatalog(query).then((res) => {
        this.post = res.data;
        this.ifPost = true;
        this.ifPost = true;
        this.anim = false;
      });

      // 写死
      // request({
      //   url: '/query',
      // }).then(res => {
      //   console.log(res.data)
      //   this.post = res.data

      //   this.ifPost = true
      //   this.anim = false
      //   this.names = Object.keys(this.post[0])
      // })
    },
  },
  components: {
    TopBar,
    List,
    SelectModel,
  },
  mounted() {
    this.$bus.$on("expandDatalog", (data) => {
      this.query = data.datalog;
    });
  },
  beforeDestroy() {
    this.$bus.$off("getresult");
  },
};
</script>

<style scoped>
html,
body {
  width: 100%;
}
* {
  margin: 0;
  padding: 0;
}

.banner {
  position: absolute;
  top: 85px;
  width: 100%;
  height: 370px;
  border-radius: 0px 0px 38px 38px;
  mix-blend-mode: overlay;
  /* opacity: .2; */
  background: url("../assets/bg.png");
}



.banner .serch-bar {
  /* 矩形 4 */
  position: absolute;
  left: 361px;
  left: 50%;
  transform: translateX(-50%);
  top: 206px;
  width: 70vw;
  min-width: 720px;
  height: 85px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.09);
}

.banner .serch-bar .option-bar {
  /* 矩形 5 */
  position: absolute;
  left: 0;
  top: 0;
  width: 184px;
  height: 85px;
  border-radius: 10px 0px 0px 10px;
  background: rgba(216, 216, 216, 0.33);
}

.banner .serch-bar .option-bar .option {
  /* 选项 */
  position: absolute;
  left: 47px;
  top: 24px;
  width: 89px;
  height: 40px;
  font-family: SourceHanSansCN-Regular;
  font-size: 24px;
  font-weight: normal;
  letter-spacing: 0em;
  color: #9e9e9e;
}

.banner .serch-bar .option-bar .arrow-bar {
  /* arrow-down-s-fill */
  position: absolute;
  left: 133px;
  top: 30px;
  width: 33px;
  height: 24px;
}

.banner .serch-bar .ipt {
  position: absolute;
  left: 225px;
  top: 25px;
  width: 43vw;
  height: 33px;
  font-family: SourceHanSansCN-ExtraLight;
  font-size: 24px;
  font-weight: 250;
  letter-spacing: 0em;
  color: #9e9e9e;
  border: none;
  outline: none;
}

.banner .serch-bar .serch {
  float: right;
  margin: 25px;
  width: 37px;
  height: 37px;
}

.banner .serch-bar .serch img {
  padding: 3px;
}

.data-bar-wrapper {
  position: absolute;
  top: 456px;
  width: 100%;
  background: #f6f6f6;
}

.data-bar-wrapper .data-bar {
  width: 70vw;
  margin: 0 auto;
  height: 1000px;
}

.data-bar-wrapper .data-bar .data-bar-top {
  position: relative;
}

.data-bar-wrapper .data-bar .data-bar-top .data-left img {
  /* pie-chart-fill */
  position: absolute;
  left: 27px;
  top: 77px;
  width: 34px;
  height: 34px;
}

.data-bar-wrapper .data-bar .data-bar-top .data-left p {
  /* Listofdata */
  position: absolute;
  left: 87px;
  top: 68px;
  width: 218px;
  height: 54px;
  font-family: HarmonyOS_Sans_SC;
  font-size: 36px;
  font-weight: normal;
  letter-spacing: 0em;
  color: rgba(0, 0, 0, 0.63);
}
.data-bar-wrapper .data-bar .data-bar-top .data-left div {
  position: absolute;
  left: 32px;
  top: 124px;
  width: 240px;
  height: 0px;
  border: 1px solid #1e7189;
}

.data-bar-wrapper .data-bar .data-bar-top .data-right {
  /* Found100matchesin63ms */
  position: absolute;
  right: 30px;
  top: 80px;
  width: 400px;
  height: 34px;
  font-family: SourceHanSansCN-Regular;
  font-size: 26px;
  font-weight: normal;
  line-height: 34px;
  letter-spacing: 0em;
  color: #9e9e9e;
}
.bg-select {
  width: 100%;
  height: 10000px;
  background: black;
  opacity: 0.5;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
}
.select-content {
  width: 70%;
  height: 53%;
  z-index: 2;
  background: #ffffff;
  margin: 0 auto;
  position: absolute;
  left: 15%;
  top: 20%;
  border-radius: 10px;
  min-height: 500px;
}
.select_button {
  width: 12%;
  height: 63px;
  border-radius: 50px;
  background: #fff;
  box-sizing: border-box;
  border: 2px solid #96b5bd;
  font-size: 26px;
  font-weight: normal;
  line-height: 55px;
  letter-spacing: 0em;
  color: #6d8e96;
  text-align: center;
  margin: 20px;
  max-width: 160px;
}
.selected_button {
  width: 12%;
  height: 63px;
  border-radius: 50px;
  background: #d9f4ee;
  box-sizing: border-box;
  border: 2px solid #96b5bd;
  font-size: 26px;
  font-weight: normal;
  line-height: 34px;
  letter-spacing: 0em;
  color: #6d8e96;
  line-height: 55px;
  text-align: center;
  margin: 20px;
  max-width: 160px;
}
.select-item-main {
  position: relative;
  width: 100%;
  height: 40%;
  margin: 5% 0 5% 3%;
  display: flex;
  flex-wrap: wrap;
}
.select-title {
  width: 12%;
  height: 63px;
  line-height: 63px;
  font-size: 30px;
  color: #9e9e9e;
  text-align: center;
  margin-top: 20px;
  max-width: 160px;
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

.select-type {
  position: absolute;
  top: 140px;
  left: 30px;
}

.select-type select {
  -webkit-appearance: none;
  padding: 7px 40px 7px 12px;
  width: 200px;
  height: 50px;
  border: 1px solid #e8eaed;
  border-radius: 5px;
  box-shadow: 0 1px 3px -2px #9098a9;
  cursor: pointer;
  font-size: 16px;
  transition: all 150ms ease;
}

.select-type select:required:invalid {
  color: #5a667f;
}

.select-type select option {
  font-size: 20px;
}
.select-type select option[value=""][disabled] {
  display: none;
}
.select-type select:focus {
  outline: none;
  border-color: #96b5bd;
  box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.2);
}

.select-input {
  position: absolute;
  top: 130px;
  right: 200px;
  color: #96b5bd;
}
.select-input span {
  font-size: 30px;
  margin-top: 10px;
  height: 60px;
  line-height: 60px;
  margin-right: 10px;
}
.select-input input {
  vertical-align: super;
  width: 120px;
  outline: none;
  border-radius: 12px;
  border: #96b5bd 2px solid;
  padding-left: 10px;
  height: 40px;
  font-size: 14px;
}

.onSearch {
  cursor: pointer;
}

.select-common {
  cursor: pointer;
}

.rotate-animate {
  position: absolute;
  top: 720px;
  left: 47%;
  transform: translateX(-50%);
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid #48a5d3;
  width: 100px;
  height: 100px;
  animation: rotate 1s ease-in-out infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.btm {
  position: absolute;
  top: 720px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 30px;
  color: #5b5b5b;
}
/* Ljx */
.select-model {
  z-index: 4;
}
.show-selectModel {
  position: absolute;
  bottom: -50px;
  left: 30px;
}
.show-selectModel:hover {
  color: blue;
}
.site_title{
  position: absolute;
  font-size: 58px;
  right: 43%;
  top: 60px;
  color: #5a667f;
}
.small_title
{
  position: absolute;
  font-size: 18px;
  right: 39%;
  bottom:195px;
  color: #5a667f;
}
</style>
