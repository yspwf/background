<template>
    <div class="work">
       <div class="usertopinfo">
           <div class="userinfo">
               <div class="userimg">
                    <img src="../static/images/ww.jpg">
               </div>
               <div class="notice">
                   <div class="sayhello">下午好，哈哈，祝开心每一天！</div>
                   <div class="belong">高级工程师 | 技术部 - IEG </div>
               </div>
           </div>
           <div class="userproject">
               <div class="projectNum">
                   <div class="nums">
                       任务数
                   </div>
                   <div class="nums left">
                       6
                   </div>
               </div>
               <div class="projectNum">
                   <div class="nums">
                       团队绩效
                   </div>
                   <div class="nums left">
                       6
                   </div>
               </div>
               <div class="projectNum">
                   <div class="nums">
                       项目总数
                   </div>
                   <div class="nums left">
                       6
                   </div>
               </div>
           </div>
       </div>

       <div class="project">
           <div class="currentproject">
            <div class="title">开发中的项目</div>   
            <el-table :data="tableDataone" style="width: 100%">
                <el-table-column
                    prop="name"
                    label="名称"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="截止日期"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="process"
                    label="进度">
                </el-table-column>
                <el-table-column
                    prop="person"
                    label="业务">
                </el-table-column>
                </el-table>
           </div>

           <div class="lateproject">
            <div class="title">未完成模块</div>   
            <el-table :data="tableDatatow" style="width: 100%">
                <el-table-column
                    prop="content"
                    label="内容"
                    width="180">
                </el-table-column>
               <el-table-column
                    prop="status"
                    label="状态"
                    width="100"
                    :filters="[{ text: '开始', value: '开始' }, { text: '未开始', value: '未开始' }]"
                    :filter-method="filterTag"
                    filter-placement="bottom-end">
                    <template slot-scope="scope">
                        <el-tag
                        :type="scope.row.tag === '开始' ? 'primary' : 'success'"
                        disable-transitions>{{scope.row.status}}</el-tag>
                    </template>
                    </el-table-column>
                <el-table-column
                    prop="project"
                    label="项目">
                </el-table-column>
                </el-table>
           </div>
       </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                tableDataone: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    process: '50%',
                    person: '哈哈'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    process: '50%',
                    person: '哈哈'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    process: '50%',
                    person: '哈哈'
                }],
                 tableDatatow: [{
                    project: '项目一',
                    status: '已开始',
                    content: '用户登录模块'
                }, {
                    project: '项目一',
                    status: '已开始',
                    content: '用户登录模块'
                }, {
                     project: '项目一',
                    status: '未开始',
                    content: '用户登录模块'
                }, {
                    project: '项目一',
                    status: '未开始',
                    content: '用户登录模块'
                }]
            }
        },
        methods: {
            filterTag(value, row) {
                return row.tag === value;
            },
        },
    }
</script>

<style>
    .usertopinfo,.userinfo,.userproject,.project{
        display:flex;
        display:-webkit-flex;
    }
    .usertopinfo{
        justify-content: space-between;
        background: #fff;
        padding: 10px 0;
    }
    .userimg{
        width:120px;
        text-align:center;
    }
    .userinfo img{
        width:80px;
        border-radius:50px;
    }
    .userinfo  .notice{
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
    }
    .belong,.sayhello,.nums{
        height:40px;
        line-height:40px;
    }
    .userproject .projectNum{
       width:120px;
    }
    .nums{
        text-align:left;
    }
    .left{
        font-size: 24px;
    }
    .project{
       padding: 20px;
    }
    .currentproject{
        margin-right:30px;
        width:50%;
        background:#fff;
        box-shadow: 5px 5px 7px #afafaf;
    }
    .lateproject{
         width:50%;
         background:#fff;
        box-shadow: 5px 5px 7px #afafaf;
    }
    .title{
        height: 25px;
        line-height: 25px;
        text-align: left;
        padding: 10px 25px;
    }
    .el-table th>.cell, .el-table .cell{
        text-align:center;
    }
</style>