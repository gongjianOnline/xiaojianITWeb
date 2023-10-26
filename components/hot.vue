<!--  -->
<template>
  <div class="hotWrapper">
    <!-- 热门推荐 -->
    <div class="hotContainer"  v-for="(item, index) in hotList" :key="index">
      <h2>{{ item.title }}</h2>
      <ul>
        <li
          v-for="(childItem, childIndex) in item.children"
          :key="childIndex"
        >
          <span class="hotTitleTage" v-show="childItem.isFinish==0">完结</span>
          <span class="hotTitleTageUpdate" v-show="childItem.isFinish==1">更新中...</span>
          <span class="hotTitleContent"  @click="handelClick(childItem)">{{ childItem.title }}</span>
          <span class="hotDate">发布时间：{{ childItem.date }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hotList: [
        {
          title: "web",
          children: [
            {
              title: "宁皓 2023 独立开发者训练营（全栈）",
              isFinish: 0,
              url: "https://www.baidu.com",
              date:'2022-10-10'
            },
            {
              title: "宁皓 2023 独立开发者训练营（全栈）",
              isFinish: 0,
              url: "https://www.baidu.com",
              date:'2022-10-10'
            },
            {
              title: "宁皓 2023 独立开发者训练营（全栈）",
              isFinish: 0,
              url: "https://www.baidu.com",
              date:'2022-10-10'
            },
            {
              title: "宁皓 2023 独立开发者训练营（全栈）",
              isFinish: 1,
              url: "https://www.baidu.com",
              date:'2022-10-10'
            },
          ],
        },
        {
          title: "java开发",
          children: [
            {
              title: "宁皓 2023 独立开发者训练营（全栈）",
              isFinish: 0,
              url: "https://www.baidu.com",
            },
            {
              title: "宁皓 2023 独立开发者训练营（全栈）",
              isFinish: 0,
              url: "https://www.baidu.com",
            },
            {
              title: "宁皓 2023 独立开发者训练营（全栈）",
              isFinish: 0,
              url: "https://www.baidu.com",
            },
            {
              title: "宁皓 2023 独立开发者训练营（全栈）",
              isFinish: 1,
              url: "https://www.baidu.com",
            },
          ],
        },
      ],
    };
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