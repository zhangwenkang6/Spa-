$(function(){
  var myChart = echarts.init(document.getElementById('main'));

  var xData = [2000,2005,2010,2015,2020],
      yData = [6,9,8,8,7]
  
  // 指定图表的配置项和数据
  var option = {
      title: {
          text: 'javaScript语言排名变化'
      },
      tooltip: { trigger: 'axis'},
      //legend: {
      //    data:['排名']
      //},
      xAxis: {
          data: xData
      },
      yAxis: {},
      series: [{
          name: '排名',
          type: 'line',
          data: yData
      }]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})
