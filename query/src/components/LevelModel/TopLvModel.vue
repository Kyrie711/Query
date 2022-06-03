<!--  -->
<template>
  <div>
    <div class="sm-top" @click="isShow=!isShow">肠道微生物</div>
    <el-collapse-transition>
      <div v-show="isShow" id="showBanner">
        <div class="benti-ipt">
        <span>选择影响本体的因素 </span>
        <el-autocomplete
        class="inline-input"
        v-model="state1"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        @select="handleSelect"
      ></el-autocomplete>
      </div>
      <div class="benti-ipt">
        <span>选择影响基因的因素 </span>
        <el-autocomplete
        class="inline-input"
        v-model="state2"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        @select="handleSelect"
      ></el-autocomplete>
      </div>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
export default {
  name:"TopLvModel",
  data () {
    return {
      restaurants:[],
      state1:"",
      state2:"",
      isShow:false
    };
  },
  methods: {
    querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
    createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
    loadAll(){
      return[
        {"value":"Food"},
        {"value":"Drug"},
        {"value":"Disorder"},
        {"value":"Gut_Microbiota"},
        {"value":"Metabolte"},
        {"value":"Disorder"},
        {"value":"A"},
        {"value":"B"},
        {"value":"C"},
        {"value":"D"},
        {"value":"E"},
        {"value":"F"},
      ]
    },
    handleSelect(item) {
        console.log(item);
    }
  },
  mounted(){
    this.restaurants = this.loadAll();
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
#showBanner{
  height: 100px;
}

</style>