<template>
  <div class="wrapper"> 
    <div class="popupButton">
      <el-button
        @click="popupButtonClick"
        type="primary" 
        plain
        size="mini"
        icon="el-icon-s-unfold"></el-button>
    </div>

    <!-- 移动端抽屉 -->
    <el-drawer
      size="50%"
      :with-header="false"
      :visible.sync="drawer"
      direction="ltr">
      <div class="mkdir phoneMkdir">
        <div class="switchContainer">
          <el-switch
            style="display: block"
            v-model="switchValue"
            active-color="#67C23A"
            inactive-color="#13ce66"
            active-text="大专业"
            @change="handelChange"
            inactive-text="小分类">
          </el-switch>
        </div>
        <ul class="List" v-if="!switchValue">
          <li :class="0==listIndex?'actived':''" 
            @click="handelClick(0)">热门推荐</li>
          <li :class="item.tagId==listIndex?'actived':''" 
            @click="handelClick(item.tagId)"
            v-for="(item) in listData" 
            :key="item.tagId">{{item.tagLabel}}</li>
        </ul>
        <!-- 大专业菜单 -->
        <ul class="List" v-if="switchValue">
          <li :class="item.majorId==majorIndex?'actived':''" 
            @click="getMajorCourseList(item.majorId)"
            v-for="(item) in majorList" 
            :key="item.majorId">{{item.majorLabel}}</li>
        </ul>
      </div>
    </el-drawer>

    <div class="mkdir">
      <div class="switchContainer">
        <el-switch
          style="display: block"
          v-model="switchValue"
          active-color="#67C23A"
          inactive-color="#13ce66"
          active-text="大专业"
          @change="handelChange"
          inactive-text="小分类">
        </el-switch>
      </div>
      <ul class="List" v-show="!switchValue">
        <li :class="0==listIndex?'actived':''" 
          @click="handelClick(0)">热门推荐</li>
        <li :class="item.tagId==listIndex?'actived':''" 
          @click="handelClick(item.tagId)"
          v-for="(item) in listData" 
          :key="item.tagId">{{item.tagLabel}}</li>
      </ul>
      <!-- 大专业菜单 -->
      <ul class="List" v-show="switchValue">
        <li :class="item.majorId==majorIndex?'actived':''" 
          @click="getMajorCourseList(item.majorId)"
          v-for="(item) in majorList" 
          :key="item.majorId">{{item.majorLabel}}</li>
      </ul>
    </div>
    <div class="content">
      <Hot v-show="listIndex==0 && switchValue==false" :hotData="hotData"></Hot>
      <Convention v-show="listIndex!=0 || switchValue" :conventionData="conventionData"></Convention>
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
      switchValue:false,
      majorList:[],
      drawer:false,
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
      })
    },
    /**获取专业列表 */
    getMajorList(){
      this.$axios.get("/getMajorList").then((response)=>{
        this.majorList = response.data.data;
        this.majorIndex = response.data.data[0].majorId;
        this.getMajorCourseList(response.data.data[0].majorId);
      })
    },
    /**获取专业课程列表 */
    getMajorCourseList(majorId){
      this.majorIndex = majorId;
      this.$axios({
        methods:"get",
        url:"/getMajorCourseList",
        params:{majorId:majorId}
      }).then((response)=>{
        this.conventionData = response.data.data;
      })
    },
    /**开关 */
    handelChange(){
      if(!this.majorList){
        this.getHotCourse()
      }else{
        this.getMajorList()
      }
    },


    /**移动端适配 */
    popupButtonClick(){
      this.drawer = true;
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
.switchContainer{
  display: flex;
  justify-content: center;
  margin-top:10px ;
}
.mkdir{
  width: 18%;
  height: 100%;
  border-right: 1px solid #ccc;
  overflow: auto;
}
.content{
  width: 100%;
  /* flex: 1; */
}

.List{
  padding: 10px;
}
.List li{
  padding: 5px 0px;
  cursor: pointer;
  transition: all 0.25ms;
}
.List li:hover{
  color:green;
}
.actived{
  color:green;
  font-weight: bolder;
}

/**当屏幕小于600px时 */
@media screen and (max-width:700px) {
  .mkdir{
    display: none;
  }
  .popupButton{
    margin-left: 10px;
    margin-top:10px;
    position: absolute;
    right: 10px;
    top: 6px;
  }
  .phoneMkdir{
    display: block;
    width: 200px;
    border: none;
  }
}

/**当屏幕大于600px时 */
@media screen and (min-width:700px) {
  .mkdir{
    display: block;
  }
  .popupButton{
    display: none;
  }
}

</style>
