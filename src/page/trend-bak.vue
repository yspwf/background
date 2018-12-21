<template>


              
              <el-main>
                <div class="statistical">
                  <div class="one">
                      <div class="lineChart" id="lineChart"></div>
                  </div>
                  <div class="tow">
                      <div class="histogram" id="histogram"></div>
                  </div>
                </div>
                
                
               
                
                
              </el-main>



</template>


<script>
import echarts from 'echarts';
  export default {
   
    data() {
      return {
        content:'# hello'
      }
    },
    
    mounted(){
      this.drawLine();
      this.lineChart();
    },
    methods: {
      lineChart(){
        let linechart = echarts.init(document.getElementById('lineChart'));
          var option = null;
          option = {
              title: { text: '同比增长/下降' },
              xAxis: {
                  type: 'category',
                  data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
              },
              yAxis: {
                  type: 'value'
              },
              series: [{
                  data: [820, 932, 901, 934, 1290, 1330, 1320, 990, 880, 678, 980, 670],
                  type: 'line'
              }]
          };
          if (option && typeof option === "object") {
                linechart.setOption(option, true);
            }
      },
      drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = echarts.init(document.getElementById('histogram'))
          // 绘制图表
          myChart.setOption({
              title: { text: '柱状图统计'},
              tooltip: {},
              xAxis: {
                  data: ["一月","二月","三月","四月","五月","六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
              },
              yAxis: {},
              series: [{
                  name: '销量',
                  type: 'bar',
                  data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20]
              }]
          });
      },
     
    }
  }
</script>

<style scoped>
.statistical{
  width: 1300px;
  overflow: hidden;
  margin-bottom: 40px;
}
.one{
  width: 600px;
  height:350px;
  float: left;
}
.tow{
  width: 700px;
  height: 350px;
  float: right;
}
.three{
  width: 450px;
  height: 350px;
}
.lineChart{
  width: 500px;
  height:350px;
}
.histogram{
  height: 350px;
  width: 600px;
}
.pieChart{
  width: 300px;
  height:350px;
}
</style>