<template>
  <div class="wrapper"> 
    <div class="mkdir">
      <ul class="List">
        <li :class="index==listIndex?'actived':''" 
          @click="handelClick(index)"
          v-for="(item,index) in listData" 
          :key="index">{{item.label}}</li>
      </ul>
    </div>
    <div class="content">
      <Hot v-if="listIndex==0"></Hot>
      <Convention v-else></Convention>
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
      listData:[
        {
          value:0,
          label:"热门推荐"
        },
        {
          value:1,
          label:"更新记录2023"
        },
        {
          value:2,
          label:"更新记录2022"
        },
        {
          value:3,
          label:"Java开发"
        },

      ]
    }
  },
  components:{

  },  
  methods:{
    handelClick(index){
      this.listIndex = index;
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
  border: 1px solid red;
}
.mkdir{
  width: 15%;
  height: 100%;
  border: 1px solid blue;
}
.content{
  flex: 1;
  border: 1px solid green;
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
