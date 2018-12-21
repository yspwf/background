<template>
 <div class="commonmain">
     <div class="return">
      <router-link to="/info" class="returnel">返回文章列表</router-link>
      </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="文章标题" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="文章分类" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择分类">
      <el-option label="体育" value="shanghai"></el-option>
      <el-option label="娱乐" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <!-- <el-form-item label="活动时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item> -->
  <!-- <el-form-item label="即时配送" prop="delivery">
    <el-switch v-model="ruleForm.delivery"></el-switch>
  </el-form-item> -->
  <el-form-item label="文章标签" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
       <!-- <el-checkbox v-for="(item, index) in types" :key="index" :label="item.type" :name="type"></el-checkbox> -->
       <el-checkbox v-for="tag in types" :label="tag" :key="tag.id">{{tag.type}}</el-checkbox>
   
    </el-checkbox-group>
  </el-form-item>
  <!-- <el-form-item label="特殊资源" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item> -->
  <el-form-item label="文章详情" prop="desc">
    <!-- <el-input type="textarea" v-model="ruleForm.desc"></el-input> -->
    <mavon-editor v-model="ruleForm.desc" :subfield="false" :preview="true"></mavon-editor>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>

import {mavonEditor} from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        types:[
          {id:1,type:"体育"},
          {id:2,type:"娱乐"},
          {id:3,type:"娱乐1"},
          {id:4,type:"娱乐2"},
          {id:5,type:"娱乐3"},
        ],
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 2, max: 30, message: '长度在 2 到 30 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择文章分类', trigger: 'change' }
          ],
        //   date1: [
        //     { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        //   ],
        //   date2: [
        //     { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        //   ],
        //   type: [
        //     { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        //   ],
        //   resource: [
        //     { required: true, message: '请选择活动资源', trigger: 'change' }
        //   ],
          desc: [
            { required: true, message: '请填写文章内容', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              console.log(this.ruleForm.type);
              alert(this.ruleForm.desc);
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    components:{
        mavonEditor
    }
  }
</script>

<style>
.el-input{
    width: 300px;
}
.el-form-item__content{
    text-align: left;
}
.return{
    text-align: left;
    padding: 20px 10px;
}
.returnel{
    display: block;
    font-size: 14px;
    border: 1px solid #dadada;
    height: 30px;
    line-height: 30px;
    width: 100px;
    text-align: center;
    border-radius: 8px;
}

</style>

