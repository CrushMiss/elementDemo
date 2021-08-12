<template>
<!-- 栅格布局 -->
  <div class="bg">
    <!-- 运维概览标题 -->
    <el-row :gutter="20" class="text-line">
      <el-col :span="24"><div class="font">运维概览</div></el-col>
    </el-row>
    <!-- 栅格+表格 完成数据显示 -->
    <el-row :gutter="20">
      <!-- 机器人总台数以及更新时间 -->
      <el-col :span="6">
        <div class="grid-content-small">
          <div><img src="@/assets/layoutImages/allComputer.png" alt="总台数" ></div>
          <div>
            <!-- 数据绑定，分别给 表头 和 单元格 设置不同样式 -->
            <el-table
              :data="tableData1"
              :cell-style="cellClass"
              :header-cell-style="headClass"
              style="width: 70%, height: 80%" size='mini'> 
              <el-table-column
                prop="nums"
                label="机器人总台数(台)"
                width="130">
              </el-table-column>
              <el-table-column
                label="更新时间"
                width="130">
                <!-- 插槽实现 动态 数据与 静态 数据共存，且拥有独立样式 -->
                <span slot-scope="scope" >
                  {{scope.row.time}} <span class="time-only-css">分钟前</span>
                </span>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
      <!-- 正在运营台数以及在线率 -->
      <el-col :span="6">
        <div class="grid-content-small">
          <div><img src="@/assets/layoutImages/onlineComputer.png" alt="运营中" ></div>
          <div>
            <!-- 数据绑定，分别给 表头 和 单元格 设置不同样式 -->
            <el-table
              :data="tableData2"
              :cell-style="cellClass"
              :header-cell-style="headClass"
              style="width: 70%, height: 80%" size='mini'> 
              <el-table-column
                prop="nums"
                label="正在运营(台)"
                width="130">
              </el-table-column>
              <el-table-column
                prop="online"
                label="在线率"
                width="130">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
      <!-- 关机离线台数以及离线率 -->
      <el-col :span="6">
        <div class="grid-content-small">
          <div><img src="@/assets/layoutImages/offlineComputer.png" alt="离线中" ></div>
          <div>
            <!-- 数据绑定，分别给 表头 和 单元格 设置不同样式 -->
            <el-table
              :data="tableData3"
              :cell-style="cellClass"
              :header-cell-style="headClass"
              style="width: 70%, height: 80%" size='mini'> 
              <el-table-column
                prop="nums"
                label="关机离线(台)"
                width="130">
              </el-table-column>
              <el-table-column
                prop="offline"
                label="离线率"
                width="130">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
      <!-- 故障中台数以及在线率 -->
      <el-col :span="6">
        <div class="grid-content-small">
          <div><img src="@/assets/layoutImages/badComputer.png" alt="故障中" ></div>
          <div>
            <!-- 数据绑定，分别给 表头 和 单元格 设置不同样式 -->
            <el-table
              :data="tableData4"
              :cell-style="cellClass"
              :header-cell-style="headClass"
              style="width: 70%, height: 80%" size='mini'> 
              <el-table-column
                prop="nums"
                label="故障中(台)"
                width="130">
              </el-table-column>
              <el-table-column
                prop="online"
                label="在线率"
                width="130">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 饼状图 -->
    <el-row :gutter="20">
      <!-- 通过id绑定不同echarts图，赋予不同样式以及数据 -->
      <el-col :span="8"><div class="grid-content-big myChart-pie" id="myChart1"></div></el-col>
      <el-col :span="8"><div class="grid-content-big myChart-pie" id="myChart2"></div></el-col>
      <el-col :span="8"><div class="grid-content-big myChart-pie" id="myChart3"></div></el-col>
    </el-row>
    <!-- 服务概览标题 -->
    <el-row :gutter="20" class="text-line">
      <el-col :span="24"><div class="font">服务概览</div></el-col>
    </el-row>
    <!-- 栅格+表格 完成数据显示 -->
    <el-row :gutter="20">
      <!-- 累计互动次数以及今日新增次数 -->
      <el-col :span="8">
        <div class="grid-content-small">
          <div><img src="@/assets/layoutImages/interactionTimes.png" alt="互动次数" ></div>
          <div>
            <!-- 数据绑定，分别给 表头 和 单元格 设置不同样式 -->
            <el-table
              :data="tableData5"
              :cell-style="cellClass"
              :header-cell-style="headClass"
              style="width: 70%, height: 80%" size='mini'> 
              <el-table-column
                prop="times"
                label="累计互动次数(次)"
                width="200">
              </el-table-column>
              <el-table-column
                prop="todayTimes"
                label="今日新增"
                width="200">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
      <!-- 累计服务时长以及今日新增时长 -->
      <el-col :span="8">
        <div class="grid-content-small">
          <div><img src="@/assets/layoutImages/serviceHours.png" alt="服务时长" ></div>
          <div>
            <!-- 数据绑定，分别给 表头 和 单元格 设置不同样式 -->
            <el-table
              :data="tableData6"
              :cell-style="cellClass"
              :header-cell-style="headClass"
              style="width: 70%, height: 80%" size='mini'> 
              <el-table-column
                prop="hours"
                label="累计服务时长(时)"
                width="200">
              </el-table-column>
              <el-table-column
                prop="todayHours"
                label="今日新增"
                width="200">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
      <!-- 累计招揽次数以及今日新增次数 -->
      <el-col :span="8">
        <div class="grid-content-small">
          <div><img src="@/assets/layoutImages/solicitationTimes.png" alt="招揽次数" ></div>
          <div>
            <!-- 数据绑定，分别给 表头 和 单元格 设置不同样式 -->
            <el-table
              :data="tableData7"
              :cell-style="cellClass"
              :header-cell-style="headClass"
              style="width: 70%, height: 80%" size='mini'> 
              <el-table-column
                prop="times"
                label="累计招揽次数(次)"
                width="200">
              </el-table-column>
              <el-table-column
                prop="todayTimes"
                label="今日新增"
                width="200">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 接待趋势标题 -->
    <el-row :gutter="20" class="text-line">
      <el-col :span="15"><div class="font">接待趋势</div></el-col>
      <el-col :span="5" >
        <!-- 日期范围选择器(目前没给操作，仅做摆设) -->
        <div class="block">
          <!-- 给定默认显示日期以及选择器样式 -->
          <el-date-picker size="mini"
            v-model="date"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </el-col>
      <el-col :span="4" >
        <!-- 单选按钮集群 给定默认值 以及切换视图功能 -->
        <div class="radio-button">
          <el-radio-group v-model="radio" fill="#4f90ff" size="mini" >
            <el-radio-button label="昨日"></el-radio-button>
            <el-radio-button label="近7天"></el-radio-button>
            <el-radio-button label="本月"></el-radio-button>
            <el-radio-button label="上月"></el-radio-button>
          </el-radio-group>
        </div>
      </el-col>
    </el-row>
    <!-- 线形图 -->
    <el-row :gutter="20">
      <!-- 由radio值选定显示视图 目前只做一个视图，仅做示例 -->
      <el-col :span="24">
        <div class="myChart-line" id="myChart4" v-show="radio == '昨日'"></div>
        <div class="myChart-line"  v-show="radio == '近7天'">近7天数据</div>
        <div class="myChart-line"  v-show="radio == '本月'">本月数据</div>
        <div class="myChart-line"  v-show="radio == '上月'">上月数据</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import * as echarts from 'echarts';

export default {
  name: 'Layout',
  data() {
    return {
      date: ['2021-08-10','2021-08-11'],
      
      radio: '昨日',

      tableData1:[{
        nums:197,
        time:47
      }],

      tableData2:[{
        nums:102,
        online:'82.74%'
      }],

      tableData3:[{
        nums:197,
        offline:'48.22%'
      }],

      tableData4:[{
        nums:95,
        online:'82.74%'
      }],

      tableData5:[{
        times:'85,231',
        todayTimes:'1,473'
      }],

      tableData6:[{
        hours:'3,247',
        todayHours:'1.63'
      }],

      tableData7:[{
        times:'42,531',
        todayTimes:'631'
      }]
    }
  },

  // 初始化echarts图
  mounted() {
    this.initCharts()
  },

  methods: {

    // 表头样式
    headClass() {
      return "font-size: 14px; font-family: Microsoft YaHei; font-weight: 400; color: #ADB1BA; text-align: center; border: none"
    },

    // 表身样式
    cellClass() {
      return "font-size: 26px; font-weight: bold; color: #626670; text-align: center;"
    },

    // echarts图构成
    initCharts() {
      let myChart1 = echarts.init(document.getElementById('myChart1'));
      let myChart2 = echarts.init(document.getElementById('myChart2'));
      let myChart3 = echarts.init(document.getElementById('myChart3'));
      let myChart4 = echarts.init(document.getElementById('myChart4'));

      // 三个空心饼状echarts图
      myChart1.setOption({
        color: ['#2998ff', '#7359b3', '#d762a7', '#1ec7ff'],
        backgroundColor: '#FFFFFF',
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c}%'
        },
        title: {
          text: "机构分布",
          left:'10',
          top:'10',
          textStyle: {
            fontSize:14,
            color:'#626670',
            fontWeight:'normal',
            fontFamily:'Microsoft YaHei'
          }
        },
        legend: {
          icon: 'circle',
          type: 'plain',
          bottom:'0',
          left:'center',
          orient:'horizontal',
          itemGap:30,
          textStyle: { //图例文字的样式
            color: '#626670',
            fontSize: 14
          },
          data: ['特斯联', '世博会', '科技大楼', '展示厅']
        },
        series: [
          {
            name: '',
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['50%', '70%'],
            label: {
              show: true,
              position: 'outside',
              formatter: '{c}%',
              color: '#626670',
              fontSize: 14,
            },
            labelLine: {
              length:10,
              length2:30,
              showAbove:true,
              lineStyle: {
                color:'#adb1ba',
              },
            },
            emphasis: {
              itemStyle: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            data: [
              { value: 28.74, name: '特斯联' },
              { value: 24.74, name: '展示厅' },
              { value: 21.26, name: '科技大楼' },
              { value: 24.26, name: '世博会' }
            ]
          }
        ]
      });

      myChart2.setOption({
        color: ['#2998ff', '#7359b3', '#d762a7', '#1ec7ff'],
        backgroundColor: '#FFFFFF',
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {d}%'
        },
        title: {
          text: "类型分布",
          left:'10',
          top:'10',
          textStyle: {
            fontSize:14,
            color:'#626670',
            fontWeight:'normal',
            fontFamily:'Microsoft YaHei'
          }
        },
        legend: {
          icon: 'circle',
          type: 'plain',
          bottom:'0',
          left:'center',
          orient:'horizontal',
          itemGap:30,
          textStyle: { //图例文字的样式
            color: '#626670',
            fontSize: 14
          },
          data: ['Attndant', 'Delivery', 'Opti Moscat', 'Patrol']
        },
        series: [
          {
            name: '',
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['50%', '70%'],
            label: {
              show: true,
              position: 'outside',
              formatter: '{d}%',
              color: '#626670',
              fontSize: 14,
            },
            labelLine: {
              length:10,
              length2:30,
              showAbove:true,
              lineStyle: {
                color:'#adb1ba',
              },
            },
            emphasis: {
              itemStyle: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            data: [
              { value: 21.74, name: 'Attndant' },
              { value: 24.74, name: 'Patrol' },
              { value: 38.26, name: 'Opti Moscat' },
              { value: 15.26, name: 'Delivery' }
            ]
          }
        ]
      });

      myChart3.setOption({
        color: ['#2998ff', '#7359b3', '#d762a7', '#ffde21', '#1ec7ff'],
        backgroundColor: '#FFFFFF',
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {d}%'
        },
        title: {
          text: "故障分布",
          left:'10',
          top:'10',
          textStyle: {
            fontSize:14,
            color:'#626670',
            fontWeight:'normal',
            fontFamily:'Microsoft YaHei'
          }
        },
        legend: {
          icon: 'circle',
          type: 'plain',
          bottom:'0',
          left:'center',
          orient:'horizontal',
          itemGap:20,
          textStyle: { //图例文字的样式
            color: '#626670',
            fontSize: 14
          },
          data: ['运动故障', '电量过低', '摄像头故障', '打印机异常', '设备丢失']
        },
        series: [
          {
            name: '',
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['50%', '70%'],
            label: {
              show: true,
              position: 'outside',
              formatter: '{d}%',
              color: '#626670',
              fontSize: 14,
            },
            labelLine: {
              length:10,
              length2:30,
              showAbove:true,
              lineStyle: {
                color:'#adb1ba',
              },
            },
            emphasis: {
              itemStyle: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            data: [
              { value: 26.74, name: '运动故障' },
              { value: 23.26, name: '打印机异常' },
              { value: 29.00, name: '摄像头故障' },
              { value: 10.24, name: '设备丢失' },
              { value: 10.76, name: '电量过低' }
            ]
          }
        ]
      });

      // 线形echarts图
      const data1 = [{
          data:10
        },
        {
          data:60
        },
        {
          data:40
        },
        {
          data:35
        },
        {
          data:66
        },
        {
          data:73
        },
        {
          data:56
        },
        {
          data:15
        },
      ];
      const data2 = [{
          data:36
        },
        {
          data:18
        },
        {
          data:35
        },
        {
          data:24
        },
        {
          data:23
        },
        {
          data:48
        },
        {
          data:65
        },
        {
          data:70
        },
      ];
      const data3 = [{
          data:71
        },
        {
          data:50
        },
        {
          data:42
        },
        {
          data:54
        },
        {
          data:62
        },
        {
          data:60
        },
        {
          data:46
        },
        {
          data:22
        },
      ];
      const dataInterval = [0,20,30,40,50,60,70,80];

      // 通过算法对数据进行处理，最终实现Y轴不规则分布
      const investAmount1 = data1.map(item => {
        const data = item.data;
        const min_v = Math.max(...dataInterval.filter(v => v <= data));
        const max_v = Math.min(...dataInterval.filter(v => v > data));
        const index = dataInterval.findIndex(v => v === min_v);
        const y_value = (((data - min_v) / (max_v - min_v)) * 10) + index * 10;
        return {
          value: y_value,
          realValue: data
        }
      }).filter(x => x);

      const investAmount2 = data2.map(item => {
        const data = item.data;
        const min_v = Math.max(...dataInterval.filter(v => v <= data));
        const max_v = Math.min(...dataInterval.filter(v => v > data));
        const index = dataInterval.findIndex(v => v === min_v);
        const y_value = (((data - min_v) / (max_v - min_v)) * 10) + index * 10;
        return {
          value: y_value,
          realValue: data
        }
      }).filter(x => x);

      const investAmount3 = data3.map(item => {
        const data = item.data;
        const min_v = Math.max(...dataInterval.filter(v => v <= data));
        const max_v = Math.min(...dataInterval.filter(v => v > data));
        const index = dataInterval.findIndex(v => v === min_v);
        const y_value = (((data - min_v) / (max_v - min_v)) * 10) + index * 10;
        return {
          value: y_value,
          realValue: data
        }
      }).filter(x => x);
      myChart4.setOption({
        color: ['#55b8ff','#a088f0','#f46f98'],
        tooltip: {
          trigger: 'axis',
          formatter(params) {
            let str = params[0].axisValue + "<br/>";
            params.forEach((item) => {
              str += 
              item.marker + item.seriesName + " : " + item.data.realValue + "<br/>";
            });
            return str;
          }
        },
        legend: {
          icon:'circle',
          type:'plain',
          bottom:0,
          data:['客流量','招揽量','接待量']
        },
        grid: {
          left: "30",
          right: "0",
          top: "10"
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          data: ['09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00'],
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: (v, i) => {
              if (i === 0) {
                v = '0'
              } else if (i === 1) {
                v = '20'
              } else {
                v = i *10 +10
              }
              
              return v;
            }
          }
        },
        series: [{
            name: '客流量',
            type: 'line',
            smooth: true,
            data: investAmount1,
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#55b8ffBF' // 0% 处的颜色
                }, {
                    offset: 1, color: '#55b8ff00' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            }
          },
          {
            name: '招揽量',
            type: 'line',
            smooth: true,
            data: investAmount2,
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#a088f0BF' // 0% 处的颜色
                }, {
                    offset: 1, color: '#a088f000' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            }
          },
          {
            name: '接待量',
            type: 'line',
            smooth: true,
            data: investAmount3,
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#f46f98BF' // 0% 处的颜色
                }, {
                    offset: 1, color: '#f46f9800' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            }
          },
        ],
      });
    }
  }
};

</script>

<style  scoped>
  .bg {
    margin: 0 20px;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .grid-content-small {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #D7DAE1;
    height: 100px;
  }

  .grid-content-big {
    border-radius: 4px;
    border: 1px solid #D7DAE1;
    height: 200px;
  }

  .myChart-pie {
    width: 100%;
  }

  .myChart-line {
    width: 100%;
    height: 350px;
  }

  .time-only-css {
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #ADB1BA;
  }

  .text-line {
    height: 24px;
  }


  .font {
    text-align: left;
    margin-top: 5px;
    margin-left: 10px;
    font-size: 14px;
    font-family: Microsoft YaHei;
    color:#626670;
  }

  .font::before {
    content:"";
    width:5px;
    height:24px;
    position:absolute;
    top:0;
    left:5px;
    background:#218fff;
    border-radius: 5px;
  }

  .radio-button {
    text-align: right;
  }
</style>