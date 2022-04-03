<template>
  <div>
    <div v-show="select_main" class="bg-select"></div>
    <top-bar></top-bar>
    <div class="banner">
      <div class="img"></div>
      <div class="serch-bar">
        <div @click="openselect()" class="option-bar">
          <div class="option">选项</div>
          <div class="arrow-bar">
            <img src="../assets/路径.png" />
          </div>
        </div>
        <input type="text" class="ipt" placeholder="输入查询语句" />
        <div class="serch">
          <img src="../assets/路径 (1).png" />
        </div>
      </div>
    </div>
    <!-- 选项弹出层 -->
    <div v-show="select_main" class="select-content">
      <img src="../assets/hzau_logo.jpg" class="select-hzau-img">
      <img
        @click="openselect()"
        src="../assets/cancel.png"
        class="cancel-icon"
      />
      <div class="select-item-main">
        <div class="select-title">Source:</div>
        <div class="select-button">CMS</div>
        <div class="select-button">VMS</div>
        <div class="select-button">Promis</div>
        <div class="select-button">LEI</div>
        <div class="select-button">HDFS</div>
        <div class="select-title">Type:</div>
        <div class="select-button">Person</div>
        <div class="select-button">Location</div>
        <div class="select-button">Case</div>
        <div class="select-button">All</div>
      </div>
    </div>
    <div class="data-bar-wrapper">
      <div class="data-bar">
        <div class="data-bar-top">
          <div class="data-left">
            <img src="../assets/路径2.png" />
            <p>List of data</p>
            <div></div>
          </div>
          <div class="data-right">Found 100 matches in 63ms</div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "../components/TopBar.vue";
export default {
  data() {
    return {
      select_main: false,
      select_state: {
        vms: false,
        cms: false,
        poler: false,
        promis: false,
        es: false,
        lei: false,
        hdfs: false,
        obdasqlite: false,
        person: false,
        location: false,
        case: false,
        typeAll: false,
      },
      service: "",
      update: false,
      criteria: {},
      data: null,
    };
  },
  methods: {
    openselect() {
      this.select_main = !this.select_main;
    },
  },
  components: {
    TopBar,
  },
};
</script>

<style scoped>
html,
body {
  width: 100%;
}

.banner {
  position: absolute;
  left: -11px;
  top: 85px;
  width: 1931px;
  height: 370px;
  border-radius: 0px 0px 38px 38px;
  mix-blend-mode: overlay;
  /* opacity: .2; */
  background: url("../assets/bg.png");
}

.banner .img {
  /* 矩形 14 */
  position: absolute;
  left: 831px;
  top: 45px;
  width: 258px;
  height: 126px;
  border-radius: 10px;
  background: url("../assets/矩形 14.png");
}

.banner .serch-bar {
  /* 矩形 4 */
  position: absolute;
  left: 361px;
  top: 206px;
  width: 1240px;
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
  width: 306px;
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
  /* search-eye-fill */
  position: absolute;
  left: 1163px;
  top: 22px;
  width: 37px;
  height: 37px;
}

.banner .serch-bar .serch img {
  padding: 3px;
}

.data-bar-wrapper {
  width: 100%;
}

.data-bar-wrapper .data-bar {
  position: absolute;
  width: 1240px;
  left: 364px;
  top: 456px;
  height: 1000px;
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
  top: 34px;
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
  left: 820px;
  top: 80px;
  width: 380px;
  height: 34px;
  font-family: SourceHanSansCN-Regular;
  font-size: 28px;
  font-weight: normal;
  line-height: 34px;
  letter-spacing: 0em;
  color: #9e9e9e;
}
.bg-select {
  width: 100%;
  height: 1000px;
  background: black;
  opacity: 0.5;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
}
.select-content {
  width: 70%;
  height: 50%;
  z-index: 999;
  background: #ffffff;
  margin: 0 auto;
  position: absolute;
  left: 15%;
  top: 20%;
  border-radius: 10px;
}
.select-button {
  width: 169px;
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
}
.selected-button {
  width: 169px;
  height: 63px;
  border-radius: 50px;
  background: #d9f4ee;
  box-sizing: border-box;
  border: 2px solid #96b5bd;
  font-size: 26px;
  font-weight: bold;
  line-height: 34px;
  letter-spacing: 0em;
  color: #6d8e96;
  line-height: 55px;
  text-align: center;
  margin: 20px;
}
.select-item-main {
  width: 100%;
  height: 40%;
  margin: 5% 0 5% 3%;
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
}
.select-title
{
   width: 169px;
   height: 63px;
   line-height: 63px;
   font-size: 30px;
   color: #9e9e9e;
   text-align: center;
   margin-top:20px;
}
.select-hzau-img
{
  width: 100px;
  height: 100px;
  margin: 10px 0 0 10px;
}
.cancel-icon {
  width: 30px;
  height: 30px;
  float: right;
  margin: 30px 30px 0 0;
}
</style>
