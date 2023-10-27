<!--  -->
<template>
  <div class="searchContainer">
    <div class="searchContent">
      <h2>搜索结果</h2>
      <ul>
        <li v-for="(item,index) in resultList"
          :key="item.index">
          <span class="hotTitleTage" v-show="item.finish === 0">完结</span>
          <span class="hotTitleTageUpdate" v-show="item.finish === 1">更新中...</span>
          <span class="hotTitleContent">{{ item.courseLabe }}</span>
          <span class="hotDate">发布时间：{{ $dayjs((item.date)).format('YYYY-MM-DD') }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: "layouts",
  data () {
    return {
      resultList:[]
    };
  },

  components:{},

  computed:{},

  mounted(){
    // console.log(this.$route.params.name)
    this.getResultList(this.$route.params.name)
  },

  methods:{
    getResultList(text){
      this.$axios({
        methods:"get",
        url:"/queryLike",
        params:{
          keywords:text
        }
      }).then((response)=>{
        // console.log("模糊查询")
        // console.log(response);
        this.resultList = response.data.data;

      })
    }
  }
}

</script>
<style scoped>
.searchContainer{
  width: 100%;
  height: 100%;
  padding:20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.searchContent{
  width: 50%;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
}
.hotTitleTage {
  display: inline-block;
  border-radius: 6px;
  background: #ff5722;
  color: #fff;
  padding: 2px 10px;
  font-size: 12px;
  margin-right: 10px;
}
.hotTitleTageUpdate {
  display: inline-block;
  border-radius: 6px;
  background: #009688;
  color: #fff;
  padding: 2px 10px;
  font-size: 12px;
  margin-right: 10px;
}
.hotTitleContent {
  cursor: pointer;
  transition: all 0.25ms;
  flex: 1;
}
.hotTitleContent:hover {
  color: green;
}
.searchContent ul {
  margin-top: 20px;
}
.searchContent li {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
.hotDate{
  display: block;
  font-size: 12px;
  color: #888888;
}
</style>