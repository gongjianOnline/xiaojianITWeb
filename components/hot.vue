<!--  -->
<template>
  <div class="hotWrapper">
    <!-- 热门推荐 -->
    <div class="hotContainer"  v-for="(item, index) in hotData" :key="index">
      <h2>{{ item.majorLabel }}</h2>
      <ul>
        <li
          v-for="(childItem, childIndex) in item.children"
          :key="childIndex"
        >
          <span class="hotTitleTage" v-show="childItem.finish==0">完结</span>
          <span class="hotTitleTageUpdate" v-show="childItem.finish==1">更新中...</span>
          <span class="hotTitleContent"  @click="handelClick(childItem)">{{ childItem.courseLabe }}</span>
          <span class="hotDate">发布时间：{{ $dayjs((childItem.date)).format('YYYY-MM-DD')  }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  props:{
    hotData:{
      type:Array,
      default:()=>new Array()
    }
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    handelClick(item) {
      window.open(item.url);
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
.hotTitleTageUpdate{
  display: inline-block;
  border-radius: 6px;
  background: #009688;
  color: #fff;
  padding: 2px 10px;
  font-size: 12px;
  margin-right: 10px;
}
.hotTitleContent{
  cursor: pointer;
  transition: all 0.25s;
  flex: 1;
}
.hotTitleContent:hover{
  color: green;
}
.hotContainer ul {
  margin-top: 20px;
}
.hotContainer li {
  margin-bottom: 15px;
  display: flex;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
.hotDate{
  display: block;
  font-size: 12px;
  color: #888888;
}
</style>