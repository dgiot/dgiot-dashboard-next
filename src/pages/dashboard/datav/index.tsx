
import View from './view';
import Product from "./product";
import ActiveRing from "./activeRing";
import Scroll from "./scroll";
import Maps from './maps';
import DeviceMap from './deviceMap'

import Pie from "./pie";
import LineDiv from './linediv'

import styles from "./style/index.module.less";
import "./style/index.less"
import * as datav from '@jiaminghi/data-view-react';
// import React from "react"
import React, { useState, useEffect, useRef } from 'react'
// import axios from "axios";
import { HttpService } from "@/utils/request";
import { Loading } from 'element-react';

import img1 from "./img/tleft/组 5350@2x(1).png";
import img2 from "./img/tleft/组 5350@2x(2).png";
import img3 from "./img/tleft/组 5350@2x(3).png";

const httpService = new HttpService()


function Datav() {
  function formatZero(num, len) {
    if (String(num).length > len) return num;
    return (Array(len).join("0") + num).slice(-len);
  }
  //原文链接：https://blog.csdn.net/qq_40492771/article/details/115463015
  const option1 = {
    title: {
      text: '状态对比图',
      left: 'center',
      top: '10%',
      width: '12rem',
      height: '24rem',
      textStyle: {
        color: '#fff',
        textBorderColor: 'red',
        fontSize: 28,
        fontWeight: 600,
      }
    },
    tooltip: {
      trigger: 'axis',
      formatter: '{b0} <br ?>{a0}: {c0}<br />{a1}: {c1}'
    },
    legend: {
      type: 'plain',
      // left: true,
      icon: "roundRect",
      orient: 'vertical',
      top: '20%',
      left: "left",
      textStyle: {
        color: "#fff", // 文字的颜色。
        fontStyle: "normal", // 文字字体的风格
      }
    },
    grid: {
      left: '8%',
      right: '8%',
      top: '40%',
      containLabel: true,
      // width:'100%',
      height: "50%"
    },
    xAxis: [
      {
        name: "时间",
        show: "true",
        type: 'category',
        axisLabel: {
          formatter: function (value, idx) {
            var date = new Date(value);
            return idx === 0 ? value : [date.getMonth() + 1, date.getDate()].join('-');
          },

        },
        nameTextStyle: {
          color: "#fff"
        },
        boundaryGap: false,
        data: ['12-13', '12-20', '12-27', '1-03', '1-10']
      }
    ],
    yAxis: [
      {
        name: "数量",
        show: "true",
        type: 'value',
        nameTextStyle: {
          color: "#fff"
        },
      }
    ],
    series: [
      {
        //图表位置
        center: ['50%', '50%'],
        name: '在线',
        type: 'line',
        areaStyle: {
          color: '#6699FF'
        },
        itemStyle: {
          color: '#6699FF',
        },
        lineStyle: {
          color: '#6699FF',
          width: 2,
          type: 'dotted'  //'dotted'虚线 'solid'实线
        },
        emphasis: {
          focus: 'series'
        },
        // lineArea: {
        //   show: true,
        //   gradient: ['#fff', '#146fc0'],
        // },
        data: [20, 150, 100, 360, 50]
      },
      {
        name: '全部',
        type: 'line',
        areaStyle: {
          color: '#A1E6CE'
        },
        itemStyle: {
          color: '#A1E6CE',
        },
        lineStyle: {
          color: '#A1E6CE',
          width: 2,
          type: 'dotted'  //'dotted'虚线 'solid'实线
        },
        emphasis: {
          focus: 'series'
        },
        data: [1500, 1000, 1300, 1200, 1800]
      },
    ]
  }
  // const deviceCount = [
  //   0, 0, 1, 2, 3
  // ]

  const [deviceCount, setdeviceCount] = useState([0, 0, 0, 0, 0]);
  const [deviceList, setdeviceList] = useState([]);
  const [productList, setproductList] = useState([]);
  let interval = useRef(null)
  const [loading, setLoading] = useState(false)
  const [currentIndex, setcurrentIndex] = useState(0)
  const [MarkerList, setMarkerList] = useState([])
  const [header, setHeader] = useState([])
  const [errorlist, setErrorList] = useState([])
  const [flag, setFlag] = useState(false)

  const fetchData = () => {
    setLoading(true);
    httpService.getClict({
      url: '/iotapi/big_screen'  // /datav/iotapi/big_screen  /mock/device/getproduct
    }).then(({ data }) => {
      console.log(data);
      // setData(res.data);
      let numlist = formatZero(data.deviceCountAndProductCount.deviceCount, 5).toString().split("")
      //  console.log(numlist);
      setFlag(true)
      setdeviceCount(numlist)
      setdeviceList(data.deviceStatus)
      setproductList(data.productDevice.Records)
      setMarkerList(data.deviceLocationRecords.records)
      setHeader(data.errorList.header) //告警台头
      setErrorList(data.errorList.data) //告警内容
    })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    // if (interval) {
    //   clearInterval(interval.current)
    //   interval.current = setInterval(fetchData, 6000);
    // } else {
    //   interval.current = setInterval(fetchData, 6000);
    // }
    fetchData()

    // return () => clearInterval(interval.current)

  }, []);
  const clickist = [
    {
      id: 1,
      name: "大屏展示",
      img: img1
    },
    {
      id: 2,
      name: "产业",
      img: img2
    },
    {
      id: 3,
      name: "设备",
      img: img3
    }
  ]
  const handleIndex = (index) => {
    setcurrentIndex(index)
  }
  if (flag) {
    return (
      <div className="datav">
        <div className="dv_top">
          <div className="top_left">
            {
              clickist.map((item, index) => {
                return (
                  <div
                    className={["left_item", index === currentIndex ? "active" : null].join(' ')}
                    onClick={() => {
                      return handleIndex(index)
                    }}
                  >
                    <img className="iteminfo img" src={item.img} />
                    <span className="iteminfo">{item.name}</span>
                  </div>
                )
              })
            }
          </div>
          <div className="top_center">
            IOT设备大屏
          </div>
        </div>
        <div className="dv_content">
          <div className="ct_left">
            <div className="cleft_top">
              <div className="lt_title"></div>
              <div className='dvItem'>
                <div className='dvitem_name'>
                  设备总数
                </div>
                <div className='dvitem_count'>
                  {
                    // toString().split("")
                    deviceCount.map((item, index) => {
                      if (item != 0) {
                        return (
                          <div className='count_col' key={index}>
                            <div className='col_item'>
                              {item}
                            </div>
                          </div>
                        )
                      } else {
                        return (
                          <div className='count_col' key={index}>
                            <div className='col_item2'>
                              {item}
                            </div>
                          </div>
                        )
                      }

                    })
                  }
                </div>
              </div>
              <div className='lt_data'>
                <Product list={productList} ></Product>
              </div>
            </div>
            <div className="cleft_bottom">
              <div className="lt_title"></div>
              <Pie devicelist={deviceList}></Pie>
            </div>
          </div>
          <div className="ct_center">
            <Maps marklist={MarkerList}></Maps>
            {/* <DeviceMap></DeviceMap> */}
            <LineDiv option={option1}></LineDiv>
          </div>
          <div className="ct_right">
            <div className="cright_top">
              <div className="rt_title"></div>
              <Scroll header={header} scrollData={errorlist} ></Scroll>
            </div>
            <div className="cright_bottom">
              <div className="rt_title"></div>
              <View></View>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.datav}>
        <Loading style={{ backgroundColor: 'rgba(0, 200, 200, 0.8)' }} text="拼命加载中" className={styles.loading}>
          <div style={{ width: '100%', height: '100vh' }}></div>
        </Loading>
      </div>
    )
  }

  // if (flag) {
  //   return (
  //     <div classNameName={styles.dataview}>
  //       <div classNameName={styles.topHeader}>
  //         <div id={styles.header}>
  //           <datav.Decoration5 classNameName={styles.headerCenterDecoration} />
  //           <div classNameName={styles.centerTitle}>二次供水监控平台</div>
  //         </div>
  //       </div>
  //       <div classNameName={styles.mainHeader}>
  //         <div classNameName={styles.mhMiddle}><datav.Decoration3 /></div>
  //       </div>
  //       <datav.BorderBox1 classNameName={styles.mainContainer}>
  //         <datav.BorderBox8 classNameName={styles.leftChartContainer}>
  //           <div classNameName='wrap'>
  //             <Product list={list} ></Product>
  //             <datav.BorderBox10 classNameName='dvItem'>
  //               <div classNameName='dvItem'>
  //                 <div classNameName='dvitem_name'>
  //                   设备总数
  //                 </div>
  //                 <div classNameName='dvitem_count'>
  //                   {
  //                     deviceCount.toString().split("").map((item, index) => {
  //                       return (
  //                         <div classNameName='count_col' key={index}>
  //                           {item}
  //                         </div>
  //                       )
  //                     })
  //                   }
  //                 </div>
  //               </div>
  //             </datav.BorderBox10>
  //             <ActiveRing config={config}></ActiveRing>
  //           </div>
  //         </datav.BorderBox8>
  //         <datav.BorderBox8 classNameName={styles.centerChartContainer}>
  //           <div classNameName='centerContainer'>
  //           <Maps></Maps>
  //           <Scroll header={header} style={{marginTop:'10px'}} scrollData={scrollData} />
  //           </div>

  //         </datav.BorderBox8>
  //         <datav.BorderBox8 classNameName={styles.rightChartContainer}>
  //           <View></View>
  //         </datav.BorderBox8>
  //       </datav.BorderBox1>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div classNameName={styles.dataview}>
  //       <Loading style={{ backgroundColor: 'rgba(0, 200, 200, 0.8)' }} text="拼命加载中" classNameName={styles.loading}>
  //         <div style={{ width: '100%', height: '100vh' }}></div>
  //       </Loading>
  //     </div>
  //   )
  // }

}

export default Datav;