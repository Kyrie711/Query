<!-- 顶级选择模块 -->
<template>
  <div>
    <div class="sm-top" @click="toggleShow">
      {{owlName}}
      <span class="iconfont icon-arrow-right-filling" @click.stop="run" ></span>
    </div>
    <el-collapse-transition>
      <div v-show="isShow" id="showBanner">
        <div class="benti-ipt">
          <div class="block">
            <span class="demonstration">选择影响因素 </span>
            <el-cascader
              v-model="sl1"
              :options="options1"
              :props="{ checkStrictly: true }"
              clearable></el-cascader>
          </div>
      </div>
      <div class="benti-ipt">
          <div class="block">
            <span class="demonstration">选择被影响因素 </span>
            <el-cascader
              v-model="sl2"
              :options="options2"
              :props="{ checkStrictly: true }"
              clearable></el-cascader>
          </div>
      </div>
      <div class="benti-ipt">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="代谢物"></el-checkbox>
          <el-checkbox label="参与kegg"></el-checkbox>
        </el-checkbox-group>
      </div>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
import option from "../../Data/option.json"
import {request} from "../../network/request"
export default {
  name: "TopLvModel",
  props: {
    owlName: {
      type: String,
      default:"本体"
    }
  },
  data () {
    return {
      options1:"",
      options2:"",
      isShow: false,
      checkList: [],
      sl1: [],
      sl2:[]
    };
  },
  methods: {
    /**
     * 获取所有数据
     * */ 
    loadAll(){
      return option
    },
    /**
     * 点击切换 展示/隐藏效果*/ 
    toggleShow() {
      this.isShow = !this.isShow;
    },
    /**
     * 生成datalog语句
     * */ 
    run() {
      // 输入为空不执行
      if (this.sl1.length < 1 || this.sl2.length < 1) {
        return
      }
      let source = this.sl1[this.sl1.length - 1];
      let target = this.sl2[this.sl2.length - 1];
      let datalog = `?(gut_microbiota_name, microbiota_alteration_caused_by_disorder,gene_symbol, gene_expression_alteration_caused_by_microbiota):-
      relationship: has_abundance_change_results_by_disorder(gut_microbiota_name,disorder_microbiota_index, ${source}).
      attribute: disorder_microbiota_host_type(disorder_microbiota_index, ${target}).
      attribute: microbiota_alteration_cuased_by_disorder(disorder_microbiota_index, microbiota_alteration_caused_by_disorder).
      relationship: has_expression_change_results_by_microbiota(gene_symbol, microbiota_gene_index, gut_microbiota_name).
      attribute:gene_expression_alteration_caused_by_microbiota(microbiota_gene_index, gene_expression_alteration_caused_by_microbiota).`
      console.log(datalog);
      request({
        url: '/query',
      }).then(res => {
        console.log(res.data)
        this.post = res.data

        this.ifPost = true
        this.anim = false
        this.names = Object.keys(this.post[0])
      })
    }
  },
  mounted(){
    this.options1 = this.loadAll()[1]["IF"];
    this.options2 = this.loadAll()[2]["AF"];
  },
}

</script>
<style scoped>
.sm-top{
  margin:10px 25px 0px;
  padding-left:10px ;
  border: 1px #ccc solid;
  background-color: #eeeeee;
  box-shadow: 2px 2px 2px rgba(0,0,0,.5);
}
.sm-top span{
  width: 40px;
  height: 100%;
  float: right;
}
.sm-top span:hover{
  cursor: pointer;
}
.benti-ipt{
  background-color: #eeeeee;
  margin-left: 50px;
  margin-top: 5px;
  margin-right: 25px;
  box-shadow: 2px 2px 2px rgba(0,0,0,.5);
}
.benti-ipt:hover{
  background-color: #dddddd;
}
.benti-ipt .block{
  margin-left: 10px;
}
.benti-ipt .el-checkbox-group{
  margin-left: 10px
}
#showBanner{
  height: 100px;
}

</style>