<!--  -->
<template>
  <div class="hotWrapper">
    <!-- 热门推荐 -->
    <div class="hotContainer">
      <h2>课程目录</h2>
      <ul>
        <li 
          v-for="(item, index) in conventionData.slice((currentPage - 1) * pagesize,currentPage * pagesize)" 
          :key="index">
          <span class="hotTitleTage" v-show="item.finish == 0">完结</span>
          <span class="hotTitleTageUpdate" v-show="item.finish == 1">更新中...</span
          >
          <span class="hotTitleContent" @click="handelClick(item.url)">{{
            item.courseLabe
          }}</span>
          <span class="hotDate">发布时间：{{$dayjs((item.date)).format('YYYY-MM-DD')}}</span>
        </li>
      </ul>

      <div class="alignContainer">
        <el-pagination
            background
            layout="total, sizes, prev, pager, next, jumper"
            :page-sizes="[10, 15, 20, 30]"
            :page-size="pagesize"
            :current-page="currentPage"
            @current-change="currentFy"
            @size-change="handleSizeChange"
            :total="conventionData.length"
          >
        </el-pagination>
      </div>

      <div class="alignContainerPhone">
        <el-pagination
            background
            layout=" prev, next"
            :page-size="pagesize"
            :current-page="currentPage"
            @current-change="currentFy"
            @size-change="handleSizeChange"
            :total="conventionData.length"
          >
        </el-pagination>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mkdirList: [
        {
          title: "宁皓 2023 独立开发者训练营（全栈）",
          isFinish: 0,
          url: "https://www.baidu.com",
          date: "2022-10-10",
        },
        {
          title: "宁皓 2023 独立开发者训练营（全栈）",
          isFinish: 0,
          url: "https://www.baidu.com",
          date: "2022-10-10",
        },
        {
          title: "宁皓 2023 独立开发者训练营（全栈）",
          isFinish: 0,
          url: "https://www.baidu.com",
          date: "2022-10-10",
        },
        {
          title: "宁皓 2023 独立开发者训练营（全栈）",
          isFinish: 1,
          url: "https://www.baidu.com",
          date: "2022-10-10",
        },
      ],
      pagesize:10, // 每页显示的条数
      currentPage:1 // 显示当前页数
    };
  },

  props:{
    conventionData:{
      type:Array,
      default:()=>new Array()
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    handelClick(url) {
      window.open(url);
    },
    currentFy(currentPage){
      this.currentPage = currentPage;
    },
    handleSizeChange(size) {
      this.pagesize = size;
    },
  },
};
</script>
<style scoped>
.hotWrapper {
  padding: 20px;
}
.hotContainer {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 20px;
}
.hotContainer h2 {
  font-size: 20px;
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
.hotContainer ul {
  margin-top: 20px;
}
.hotContainer li {
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
.alignContainer{
  text-align: center;
}

@media screen and (max-width:700px) {
  .hotTitleContent{
    font-size: 0.8rem;
  }
  .hotDateLabel{
    display: none;
  }
  .hotDate{
    display: none;
  }
  .alignContainer{
    display: none;
  }
  .alignContainerPhone{
    display: block;
  }
}

@media screen and (min-width:700px) {
  .hotTitleContent{
    font-size: 18px;
  }
  .hotDateLabel{
    display: inline;
  }
  .hotDate{
    display: block;
  }
  .alignContainer{
    display: block;
  }
  .alignContainerPhone{
    display: none;
  }
}

</style>