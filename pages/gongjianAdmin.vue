<!--  -->
<template>
  <div class="adminWrapper">
    <h1 class="titleContainer">课程控制平台</h1>
    <div class="formContainer">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="课程名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="课程链接">
          <el-input v-model="form.url"></el-input>
        </el-form-item>
        <el-form-item label="细项分类">
          <el-select v-model="form.tagId" filterable placeholder="请选择">
            <el-option
              v-for="item in tagList"
              :key="item.tagId"
              :label="item.tagLabel"
              :value="item.tagId">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="专业分类">
          <el-select v-model="form.majorId" filterable placeholder="请选择">
            <el-option
              v-for="item in majorList"
              :key="item.majorId"
              :label="item.majorLabel"
              :value="item.majorId">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否完结">
          <el-radio-group v-model="form.finish">
            <el-radio :label="0">完结</el-radio>
            <el-radio :label="1">更新中</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">添加课程</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form:{
        name:'',
        url:'',
        tagId:null,
        majorId:null,
        finish:0
      },
      tagList:[],
      majorList:[]

    };
  },

  components:{},

  computed:{},

  mounted(){
    this.getTagList();
    this.getMajorList();
  },

  methods:{
    getTagList(){
      this.$axios.get("/getTagList").then(response=>{
        this.tagList = response.data.data;
        this.form.tagId = response.data.data[0]['tagId'];
      })
    },
    getMajorList(){
      this.$axios.get("/getMajorList").then(response=>{
        this.majorList = response.data.data;
        this.form.majorId = response.data.data[0]['majorId'];
      })
    },
    onSubmit(){
      this.$axios({
        url:"/createCourse",
        method:"POST",
        data:{
          "courseLabe":this.form.name,
          "finish":this.form.finish,
          "major":this.form.majorId,
          "tagId":this.form.tagId,
          "url":this.form.url,
          "date":Date.now()
        }
      }).then((response)=>{
        // console.log(response)
        if(response.data.data.code === 101){
          this.$message({
            message: '添加成功',
            type: 'success'
          });
          this.$refs.form.resetField();
        }else{
          this.$message({
            message: '添加失败,课程已存在',
            type: 'error'
          });
        }
      })
    }
  }
}

</script>
<style scoped>
.adminWrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.titleContainer{
  padding: 10px;
  text-align: center;
}
.formContainer{
  width: 50%;
}
</style>