<template>
  <div class="wrapper"> 
    <div class="mkdir">
      <ul class="List">
        <li :class="0==listIndex?'actived':''" 
          @click="handelClick(0)">热门推荐</li>
        <li :class="item.tagId==listIndex?'actived':''" 
          @click="handelClick(item.tagId)"
          v-for="(item) in listData" 
          :key="item.tagId">{{item.tagLabel}}</li>
      </ul>
    </div>
    <div class="content">
      <Hot v-show="listIndex==0" :hotData="hotData"></Hot>
      <Convention v-show="listIndex!=0" :conventionData="conventionData"></Convention>
    </div>
  </div>
</template>

<script>
import Hot from "../components/hot.vue";
import Convention from "../components/convention.vue";
export default {
  layout: "layouts",
  name: 'IndexPage',
  data(){
    return {
      listIndex:0,
      listData:[],
      hotData:[],
      conventionData:[],
    }
  },
  components:{

  },
  mounted(){
    this.getTagList();
  },
  methods:{
    handelClick(index){
      this.listIndex = index;
      if(index === 0){
        this.getHotCourse()
      }else{
        this.getCourseList()
      }
    },
    /**获取菜单列表 */
    getTagList(){
      this.$axios.get("/getTagList").then(response=>{
        this.listData = response.data.data;
        this.handelClick(0);
      })
    },
    /**获取首页课程列表 */
    getHotCourse(){
      this.$axios({
        url:"/getHotCourseList",
        params:{
          tagId:this.listIndex
        }
      }).then(response=>{
        let res = response.data.data;
        const result = {};
        res.forEach(item => {
          const majorLabel = item.majorLabel;
          if (!result[majorLabel]) {
            result[majorLabel] = {
              majorLabel: majorLabel,
              children: []
            };
          }  
          result[majorLabel].children.push(item);
        });
        this.hotData = Object.values(result);
      })
    },
    /**获取常规课程列表 */
    getCourseList(){
      this.$axios({
        url:'/getCourseList',
        params:{
          tagId:this.listIndex
        }
      }).then((response)=>{
        this.conventionData = response.data.data;
        console.log("111",this.conventionData)
      })
    }


  }
}
</script>
<style>
.wrapper{
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
}
.mkdir{
  width: 15%;
  height: 100%;
  border-right: 1px solid #ccc;
  overflow: auto;
}
.content{
  flex: 1;
}

.List{
  padding: 10px;
}
.List li{
  padding: 5px 0px;
  cursor: pointer;
  transition: all 0.25s;
}
.List li:hover{
  color:green;
}
.actived{
  color:green;
  font-weight: bolder;
}

</style>
