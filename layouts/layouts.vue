<!--  -->
<template>
  <div>
    <header>
    <div class="leftContainer">
      <h1>
        小箭IT资源站
        <div class="WeChatContainer">学习资源获取: xiaojianIT</div>
      </h1>
      <div class="navContainer">
        <div class="navComponent">
          <NuxtLink to="/" class="navComponentHome">首页</NuxtLink>
          <NuxtLink to="/statement">免责声明</NuxtLink>
        </div>
      </div>
    </div>
    <div class="searchContainer">
      <el-input
        placeholder="搜索课程名称"
        suffix-icon="el-icon-search"
        @keyup.enter.native="handleEnter"
        v-model="searchResult">
      </el-input>
    </div>
    <div class="infoContainer">添加微信获取资料：xiaojianIT</div>
  </header>

  <Nuxt/>

  </div>
</template>

<script>
export default {
  data () {
    return {
      searchResult:""
    };
  },

  components:{},

  computed:{},

  mounted(){},

  methods:{
    handleEnter(){
      window.open(`${process.env.NODE_ENV === "prod"?'/it':''}/search/${this.searchResult}`,"_self")
    }
  }
}

</script>
<style>
header{
  width: 100%;
  height: 60px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
h1{
  font-size: 18px;
}
.navComponent{
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
}
.navComponentHome{
  margin-right: 10px;
}
a{
  font-size: 16px;
  color: #000;
  text-decoration: none;
  transition: all 0.25ms;
}
a:hover{
  text-decoration: none;
  color: green;
}

.leftContainer{
  display: flex;
}
.infoContainer{
  font-size: 18px;
  font-weight: bold;
  margin-right: 40px;
}

/**当屏幕小于600px时 */
@media screen and (max-width:700px) {
  .navContainer{
    display:none
  }
  .searchContainer{
    display:none
  }
  .infoContainer{
    display:none
  }
}

/**当屏幕大于600px时 */
@media screen and (min-width:700px) {
  .WeChatContainer{
    display: none;
  }
}


</style>