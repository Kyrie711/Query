<!-- 选择模块 -->
<template>
  <div class="sm-main">
    <div id="sm-close" @click="closeSM()" class="iconfont icon-close"></div>
    <top-lv-model class="first top-lv-model" :owlName="name1" ref="tlm"></top-lv-model>

  </div>
</template>

<script>
import TopLvModel from "./LevelModel/TopLvModel.vue"
export default {
  name:"SelectModel",
  data () {
    return {
      name1: "肠道微生物",
      isShow:false
    };
  },
  methods:{
    closeSM(){
      this.$emit("closeClick", false)
      this.$refs.tlm.toggleShow()
    }
  },
  components:{
    TopLvModel
  }
}

</script>
<style scoped>
*{
  margin: 0;
  padding:0;
}
input{
  text-decoration: none;
  outline: none;
  border: none;
}
div{
  height: 42px;
  line-height: 42px;
}
.sm-main{
  position: absolute;
  box-sizing: border-box;
  background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(234,249,249) 0.1%, rgba(239,249,251) 90.1% );
  top: 10%;
  left: 25%;
  z-index: 1;
  border: 1px solid #ccc;
  width: 800px;
  height: 600px;
  border-radius: 5px;
}
.sm-main #sm-close{
  position: absolute;
  top:-5px;
  right: 5px;
  margin-bottom: 20px;
}
.first{
  margin-top: 30px;
}
.top-lv-model{
  height: auto;
}
</style>