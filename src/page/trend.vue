<template>
    <div class="commonmain" style="background:#f1f1f1;">
      <div style="overflow: hidden; background:#efefef; margin-bottom:25px;">
         <div style="width:45%; height:250px; float:left; background:#fff; padding:2%;"  id="lineChart"></div>
         <div style="width:45%; height:250px; float:right; background:#fff; padding:2%;"  id="columnar"></div>
      </div>
     
      <div style="overflow: hidden; background:#efefef; margin-bottom:25px;">
         <div style="width:45%; height:250px; float:left; background:#fff; padding:2%;"  id="circle"></div>
         <div style="width:45%; height:250px; float:right; background:#fff; padding:2%;"  id="radar"></div>
      </div>
    </div>
</template>

<script>
import echarts from 'echarts';
export default {
   mounted(){
      this.lineChart();
      this.columnar();
      this.circle();
      this.radar();
    },
    methods:{
        lineChart(){
          let linechart = echarts.init(document.getElementById('lineChart'));
          var option = null;
          option = {
              title: { text: '七日访问趋势' },
              xAxis: {
                  type: 'category',
                  data: ['10', '11', '12', '13', '14', '15', '16', '17']
              },
              yAxis: {
                  type: 'value'
              },
              series: [{
                  data: [820, 932, 901, 934, 1290, 1330, 1320, 990],
                  type: 'line'
              }]
          };
          if (option && typeof option === "object") {
                linechart.setOption(option, true);
            }
       },
       columnar(){
           let columnar = echarts.init(document.getElementById('columnar'));
           columnar.setOption({
                title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
           });
       },
       circle:function(){
            let circle = echarts.init(document.getElementById('circle'));
            circle.setOption({
               title : {
               text: '某站点用户访问来源',
               x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                 left: 'left',
                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series : [{
                  name: '访问来源',
                  type: 'pie',
                  radius : '55%',
                  center: ['45%', '60%'],
                  data:[
                     {value:335, name:'直接访问'},
                      {value:310, name:'邮件营销'},
                      {value:234, name:'联盟广告'},
                     {value:135, name:'视频广告'},
                     {value:1548, name:'搜索引擎'}
                  ],
                  itemStyle: {
                     emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
               }
              }
             ]
           });
       },
       radar:function(){
           let radar = echarts.init(document.getElementById('radar'));
           radar.setOption({
                title: {
                    text: '自定义雷达图'
               },
    legend: {
        data: [ '张三', '李四']
    },
    radar: [
         {
           
            splitArea: {
                areaStyle: {
                    color: ['rgba(114, 172, 209, 0.2)',
                    'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                    'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        },
        {
            indicator: [
                { text: '语文', max: 150 },
                { text: '数学', max: 150 },
                { text: '英语', max: 150 },
                { text: '物理', max: 120 },
                { text: '化学', max: 108 },
                { text: '生物', max: 72 }
            ],
            center: ['45%', '60%'],
            radius: 70
        }
    ],
    series: [
       
        {
            name: '成绩单',
            type: 'radar',
            radarIndex: 1,
            data: [
                {
                    value: [120, 118, 130, 100, 99, 70],
                    name: '张三',
                    label: {
                        normal: {
                            show: true,
                            formatter:function(params) {
                                return params.value;
                            }
                        }
                    }
                },
                {
                    value: [90, 113, 140, 30, 70, 60],
                    name: '李四',
                    areaStyle: {
                        normal: {
                            opacity: 0.9,
                            color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                                {
                                    color: '#B8D3E4',
                                    offset: 0
                                },
                                {
                                    color: '#72ACD1',
                                    offset: 1
                                }
                            ])
                        }
                    }
                }
            ]
        }
    ]
           });
       }
    }
}
</script>
