<template>
    <div class="commonmain">
        <div class="return">
            <router-link to="/add" class="returnel">添加标签</router-link>
        </div>
         <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                label="标签名称"
                width="180">
                <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
           
            <el-table-column
                label="标签描述"
                width="180">
                <template slot-scope="scope">
                    <p>{{ scope.row.name }}</p>
                </template>
            </el-table-column>
            
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                   
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button> 
                </template>
            </el-table-column>
        </el-table>

            <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
            </el-pagination>
    </div>
</template>


<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '文章1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '文章1',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '文章1',
          address: '上海市普陀区金沙江路 1519 弄'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        //console.log(index, row);
        this.$router.push('/add');
      },
      handleDelete(index, row) {
        console.log(index, row);
        alert("删除");
      }
    }
  }
</script>

<style>
.el-main{
    line-height: 0px;
}
.el-pagination{
    margin-top: 70px;
}

</style>
