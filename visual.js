/*
 * *Created by Poleung
 * *Email 30930572@qq.com
 * *Create date 2020-11-07
 * *Copyright LockDataV
 * *Desc data visualization project based on echarts4.0.js.
 */

/*Echarts图表封装函数*/

//词云图-01&02;
function getWord(dataList, img, id) {
    var myChart = echarts.init(document.getElementById(id));
    var maskImage = new Image();
    maskImage.src = img;
    var option = {
        series: [{
            type: 'wordCloud',
            sizeRange: [10, 100],
            rotationRange: [-90, 90],
            rotationStep: 45,
            gridSize: 2,
            shape: 'pentagon',
            maskImage: maskImage,
            drawOutOfBound: false,
            textStyle: {
                color: function () {
                    return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                }
            },
            emphasis: {
                textStyle: {
                    color: 'red'
                }
            },
            data: dataList.sort(function (a, b) {
                return b.value - a.value;
            })
        }]
    };

    maskImage.onload = function () {
        option.series[0].maskImage;
        myChart.setOption(option);
    }

    window.onresize = function () {
        myChart.resize();
    }
}

//环图-03;
function getRings(dataList, id) {
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        color: ['#22c2da', '#e55a55', '#ffb64d', '#ffb64d', '#ffb64d', '#ffb64d'],
        title: {
            text: '北京2022年冬奥会预计收入',
            subtext: '单位：亿美元',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
        },
        legend: {
            top: '5%',
            left: 'center',
            show: false
        },
        series: [
            {
                name: '北京2022年冬奥会预计收入',
                type: 'pie',
                radius: ['40%', '60%'],
                avoidLabelOverlap: false,
                label: {
                    show: true,
                    position: 'outside',
                    formatter: '{b}  {c}亿'
                },
                itemStyle: {
                    borderRadius: 0,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                labelLine: {
                    show: true
                },
                data: dataList
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

//散点-04;
function getScatter(plantCap, id) {
    var myChart = echarts.init(document.getElementById(id));
    var datalist = [{
        offset: [56, 48],
        symbolSize: 300,
        color: '#ec1064',

    }, {
        offset: [40, 80],
        symbolSize: 150,
        color: '#4cb0df'
    }, {
        offset: [45, 20],
        symbolSize: 130,
        color: '#c293dd'

    }, {
        offset: [70, 30],
        symbolSize: 100,
        color: '#9998d6'
    }, {
        offset: [60, 0],
        symbolSize: 90,
        color: '#f7abb6'
    }, {
        offset: [70, 70],
        symbolSize: 60,
        color: '#003c66'
    }, {
        offset: [65, 60],
        symbolSize: 60,
        color: '#c97eb0'
    }, {
        offset: [65, 95],
        symbolSize: 60,
        color: '#0064aa'
    }, {
        offset: [60, 100],
        symbolSize: 60,
        color: '#d5e6f6'
    }, {
        offset: [60, 25],
        symbolSize: 30,
        color: '#d5e6f6'
    }];

    var datas = [];
    for (var i = 0; i < plantCap.length; i++) {
        var item = plantCap[i];
        var itemToStyle = datalist[i];
        datas.push({
            name: item.value + '\n' + item.name,
            value: itemToStyle.offset,
            symbolSize: itemToStyle.symbolSize,
            label: {
                normal: {
                    textStyle: {
                        fontSize: 14
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: itemToStyle.color,
                    opacity: itemToStyle.opacity
                }
            },
        })
    }

    var option = {
        //backgroundColor:'#c0c0c0',
        title: {
            text: '北京2022年冬奥会筹办支出构成情况',
            subtext: '单位：亿美元',
            x: 'center'
        },
        xAxis: [{
            gridIndex: 0,
            type: 'value',
            show: false,
            min: 0,
            max: 100,
            nameLocation: 'middle',
            nameGap: 5
        }],
        yAxis: [{
            gridIndex: 0,
            min: 0,
            show: false,
            max: 100,
            nameLocation: 'middle',
            nameGap: 30
        }],
        series: [{
            type: 'scatter',
            symbol: 'circle',
            symbolSize: 120,
            label: {
                show: true,
                formatter: '{b}',
                color: '#FFF',
                textStyle: {
                    fontSize: '30'
                }
            },
            itemStyle: {
                normal: {
                    color: '#F30'
                }
            },
            data: datas
        }]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

//柱图-05;
function getBar(dataName, dataList, id) {
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        color: ["#e65a56"],
        title: {
            text: '1980-2022年历届冬奥会举办费用',
            subtext: '单位：亿美元',
            x: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '15%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            position: 'top',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: dataName
        },
        series: [
            {
                name: '耗资/亿美元',
                type: 'bar',
                data: dataList
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

//桑吉图-06;
function getSankey(id) {
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        //color:['#ed0f64','#c3dcf2','#f48897','#0064aa','#008ed2'],
        title: {
            text: '北京2020年冬奥会各赛区场馆建设',
            subtext: '数据来源：陈剑编《京张冬奥发展报告2016》',
            left: 'center'
        },
        series: {
            type: 'sankey',
            layout: 'none',
            top: '13%',
            left: "20%",
            right: "20%",
            emphasis: {
                focus: 'adjacency'
            },
            data: [{
                name: '北京赛区',
                itemStyle: {
                    color: '#fab7d0',
                }
            }, {
                name: '张家口赛区'
            }, {
                name: '延庆赛区'
            }, {
                name: '新建'
            }, {
                name: '已有'
            }],
            links: [
                {
                    source: '延庆赛区',
                    target: '新建',
                    value: 1
                }, {
                    source: '延庆赛区',
                    target: '新建',
                    value: 1
                }, {
                    source: '北京赛区',
                    target: '新建',
                    value: 1
                }, {
                    source: '北京赛区',
                    target: '新建',
                    value: 1
                }, {
                    source: '北京赛区',
                    target: '已有',
                    value: 1
                }, {
                    source: '北京赛区',
                    target: '已有',
                    value: 1
                }, {
                    source: '北京赛区',
                    target: '已有',
                    value: 1
                }, {
                    source: '北京赛区',
                    target: '已有',
                    value: 1
                }, {
                    source: '北京赛区',
                    target: '已有',
                    value: 1
                }, {
                    source: '北京赛区',
                    target: '已有',
                    value: 1
                }, {
                    source: '北京赛区',
                    target: '已有',
                    value: 1
                }, {
                    source: '北京赛区',
                    target: '已有',
                    value: 1
                }, {
                    source: '北京赛区',
                    target: '已有',
                    value: 1
                }, {
                    source: '延庆赛区',
                    target: '新建',
                    value: 1
                }, {
                    source: '张家口赛区',
                    target: '新建',
                    value: 1
                }, {
                    source: '张家口赛区',
                    target: '已有',
                    value: 1
                }]
        }
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

//分类饼图-07;
function getCatPies(id) {
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        title: {
            text: '北京2020年冬奥会各赛区场馆投资细节',
            subtext: '单位：亿元',
            left: 'center'
        },
        tooltip: {
            title: '场馆投资',
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },

        series: [
            {
                name: '场馆投资',
                type: 'pie',
                selectedMode: 'single',
                radius: [0, '30%'],
                label: {
                    formatter: '{b}',
                    color: "#000",
                    position: 'inner'
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 37.557, name: '北京赛区', itemStyle: {color: '#7c8cde'}},
                    {value: 11.6, name: '张家口赛区', itemStyle: {color: '#c0e6de'}},
                    {value: 26.58, name: '延庆赛区', itemStyle: {color: '#d7e0e9'}}

                ]
            },
            {
                name: '场馆投资',
                type: 'pie',
                radius: ['40%', '75%'],
                label: {
                    show: true,
                    formatter: '{b}',
                    position: 'inner'
                },
                data: [
                    {value: 12.847, name: '公共资金', itemStyle: {color: '#9da9e6'}},
                    {value: 24.71, name: '私人资金', itemStyle: {color: '#5b6fd6'}},
                    {value: 0, name: '公共资金', itemStyle: {color: '#9da9e6'}},
                    {value: 11.6, name: '私人资金', itemStyle: {color: '#a3dacf'}},
                    {value: 19.96, name: '公共资金', itemStyle: {color: '#c2ccd7'}},
                    {value: 6.62, name: '私人资金', itemStyle: {color: '#9ba0a5'}}
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

//饼图-08;
function getPies(dataList, id) {
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        color: ['#62d9ad', '#5aaef3'],
        title: {
            text: '北京2020年冬奥会场馆减少投资中65%为私人投资',
            subtext: '单位：亿元',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom: '8%',
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '70%',
                data: dataList,
                label: {
                    formatter: '{b}',
                    color: "#000",
                    position: 'inner'
                },
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

//双柱状图-09;
function getDoubleBars(id) {
    var myChart = echarts.init(document.getElementById(id));
    let data = {
        male: {
            name: '北京',
            data: [{
                value: 2112.03,
                label: '总体经济影响规模'
            }, {
                value: 629.32,
                label: '直接经济影响规模'
            }, {
                value: 1482.71,
                label: '间接经济影响规模'
            }, {
                value: 332.58,
                label: '居民收入增加岁'
            }]
        },
        female: {
            name: '张家口',
            data: [{
                value: 1461.98,
                label: '总体经济影响规模'
            }, {
                value: 533.95,
                label: '直接经济影响规模'
            }, {
                value: 928.03,
                label: '间接经济影响规模'
            }, {
                value: 212.87,
                label: '居民收入增加岁'
            }]
        }
    };
    let yAxisData = new Set();
    let legendData = [];
    _.forEach(data, (d) => {
        legendData.push(d.name);
        _.forEach(d.data, (item) => {
            yAxisData.add(item.label);
        });
    });

    let top = 60;
    let bottom = 60;

    yAxisData = [...yAxisData];

    var option = {
        title: {
            text: '北京2022年冬奥会对京张地区的经济影响规模/亿元',
            subtext: '单位：亿元',
            left: 'center'
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            left: 'center',
            bottom: 24,
            itemWidth: 15,
            itemHeight: 11,
            itemGap: 20,
            borderRadius: 4,
            textStyle: {
                color: '#262C41',
                fontSize: 14
            },
            data: legendData
        },
        grid: [{
            left: '12%',
            width: '28%',
            containLabel: true,
            bottom
        }, {
            left: '52%',
            width: '0%',
            bottom: bottom + 16
        }, {
            right: '12%',
            width: '28%',
            containLabel: true,
            bottom
        }].map(item => _.merge({
            top
        }, item)),
        xAxis: [{
            type: 'value',
            inverse: true,
            axisLabel: {
                show: true
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true
            }
        }, {
            gridIndex: 1,
            show: true
        }, {
            gridIndex: 2,
            type: 'value',
            axisLabel: {
                show: true
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true
            }
        }].map((item) => _.merge(item, {
            axisLabel: {
                color: '#949AA8',
                margin: 0
            },
            splitLine: {
                lineStyle: {
                    color: '#E0E0E0',
                    type: 'dashed'
                }
            },
        })),
        yAxis: [{
            position: 'right',
            axisLabel: {
                show: false
            },
            axisLine: {
                show: true
            }
        },
            {
                gridIndex: 1,
                position: 'center',
                axisLabel: {
                    align: 'center',
                    padding: [8, 0, 0, 0],
                    fontSize: 12,
                    color: `#262C41`
                },
                axisLine: {
                    show: false
                }
            },
            {
                gridIndex: 2,
                position: 'left',
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: true
                }
            }
        ].map((item) => {
            return _.merge(item, {
                type: 'category',
                inverse: false,
                axisLine: {
                    lineStyle: {
                        color: '#E0E0E0'
                    }
                },
                axisTick: {
                    show: false
                },
                data: yAxisData
            });
        }),
        series: [{
            name: _.get(data, 'male.name'),
            label: {
                position: 'left'
            },
            barWidth: '70%',
            itemStyle: {
                color: '#ed0f64',
                barBorderRadius: [4, 0, 0, 4]
            },
            data: _.map(_.get(data, 'male.data'), d => d.value)
        },
            {
                xAxisIndex: 2,
                yAxisIndex: 2,
                name: _.get(data, 'female.name'),
                label: {
                    position: 'right'
                },
                itemStyle: {
                    color: '#f48897',
                    barBorderRadius: [0, 4, 4, 0]
                },
                data: _.map(_.get(data, 'female.data'), d => d.value)
            }
        ].map(item => _.merge(item, {
            type: 'bar',
            barWidth: 11,
            label: {
                show: true,
                fontFamily: 'Rubik-Medium',
                fontSize: 14,
                distance: 10
            }
        }))
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

//3/4环图-10;
function getHalfRings(dataList, toNo, id) {
    var myChart = echarts.init(document.getElementById(id));
    var pass_rate = parseFloat(dataList[0].value / toNo * 100).toFixed(2);
    var average = parseFloat(dataList[1].value / toNo * 100).toFixed(2)
    var average1 = parseFloat(dataList[2].value / toNo * 100).toFixed(2)
    var average2 = parseFloat(dataList[3].value / toNo * 100).toFixed(2)
    var average3 = parseFloat(dataList[4].value / toNo * 100).toFixed(2)
    var total = 100;

    var option = {
        color: ['#ed0f64', '#f48897', '#c3dcf2', '#008ed2', '#0064aa'],
        title: {
            text: '京张地区受冬奥会筹办支出拉动较强的行业',
            subtext: '每1亿元筹办支出拉动行业产出增加/亿元',
            left: 'center'
        },
        tooltip: {
            show: false,
            trigger: 'item',
            formatter: "{a} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            icon: 'circle',
            x: '35%',
            top: '27%',
            itemHeight: 10,
            itemGap: 8,
            data: ['制造业 ' + pass_rate + '%', '批发和零售业 ' + average + '%', '金融业 ' + average1 + '%', '农、林、牧、渔业 ' + average2 + '%', '采矿业 ' + average3 + '%']
        },
        series: [
            {
                name: '制造业 ' + pass_rate + '%',
                type: 'pie',
                radius: ['40%', '45%'],
                label: {
                    show: false,
                    position: 'inner'
                },
                labelLine: {
                    show: false
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                },
                data: [
                    {
                        value: pass_rate,
                        name: '制造业 ' + pass_rate + '%',
                    },
                    {
                        value: total - pass_rate,
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        }
                    }
                ]
            },
            {
                name: '批发和零售业 ' + average + '%',
                type: 'pie',
                radius: ['30%', '35%'],
                label: {
                    show: false,
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                emphasis: {
                    label: {
                        show: true,
                        positon: 'center',
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                },
                data: [
                    {
                        name: '批发和零售业 ' + average + '%',
                        value: average,
                    },
                    {
                        value: total - average,
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        }
                    }
                ]
            },
            {
                name: '金融业 ' + average1 + '%',
                type: 'pie',
                radius: ['20%', '25%'],
                label: {
                    show: false,
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                emphasis: {
                    label: {
                        show: true,
                        positon: 'center',
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                },
                data: [
                    {
                        name: '金融业 ' + average1 + '%',
                        value: average1,
                    },
                    {
                        value: total - average1,
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        }
                    }
                ]
            },
            {
                name: '农、林、牧、渔业 ' + average2 + '%',
                type: 'pie',
                radius: ['10%', '15%'],
                label: {
                    show: false,
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                emphasis: {
                    label: {
                        show: true,
                        positon: 'center',
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                },
                data: [
                    {
                        name: '农、林、牧、渔业 ' + average2 + '%',
                        value: average2,
                    },
                    {
                        value: total - average2,
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        }
                    }
                ]
            },
            {
                name: '采矿业 ' + average3 + '%',
                type: 'pie',
                radius: ['1%', '5%'],
                label: {
                    show: false,
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                emphasis: {
                    label: {
                        show: true,
                        positon: 'center',
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                },
                data: [
                    {
                        name: '采矿业 ' + average3 + '%',
                        value: average3,
                    },
                    {
                        value: total - average3,
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        }
                    }
                ]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

//柱线混合-11;
function getMixLine(id) {
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        color: ['#00aeef', '#c759a1', '#5552a3'],
        title: {
            text: '北京2022年冬奥会对张家口市GDP的贡献',
            subtext: '单位：亿元',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            top: '15%',
            containLabel: true
        },
        legend: {
            icon: 'circle',
            bottom: '3%',
            data: ['贡献率/%', 'GDP/亿元', 'GDP增量/亿元']
        },
        xAxis: {
            type: 'category',
            data: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
        },
        yAxis: [{
            type: 'value'
        }, {
            type: 'value'
        }],
        series: [
            {
                name: '贡献率/%',
                data: [0, 0.04, 0.11, 0.37, 0.72, 0.7, 0.23, 0.07],
                type: 'line',
                yAxisIndex: 1
            },
            {
                name: 'GDP/亿元',
                data: [22968.6, 24899.3, 28000.4, 30320, 35371.3, 37284.9, 40723.5, 44479.2],
                type: 'bar',
                yAxisIndex: 0,
            }, {
                name: 'GDP增量/亿元',
                data: [0.8, 9.55, 29.44, 111.39, 254.6, 262.55, 95.47, 31.82],
                type: 'bar',
                yAxisIndex: 0
            }]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

//柱线混合-12;
function getMix(id) {
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        color: ['#1f358b', '#0064aa', '#00a472'],
        title: {
            text: '北京2022年冬奥会对张家口市GDP的贡献',
            subtext: '单位：亿元',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            top: '15%',
            containLabel: true
        },
        legend: {
            icon: 'circle',
            bottom: '3%',
            data: ['贡献率/%', 'GDP/亿元', 'GDP增量/亿元']
        },
        xAxis: {
            type: 'category',
            data: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
        },
        yAxis: [{
            type: 'value'
        }, {
            type: 'value'
        }],
        series: [
            {
                name: '贡献率/%',
                data: [0.06, 5.07, 6.42, 11.26, 14.89, 4.29, 1.26, 1.37],
                type: 'line',
                yAxisIndex: 1
            },
            {
                name: 'GDP/亿元',
                data: [1363.54, 1465.99, 1427.02, 1536.6, 1551.1, 1635.01, 1785.8, 1950.49],
                type: 'bar',
                yAxisIndex: 0,
            }, {
                name: 'GDP增量/亿元',
                data: [0.79, 74.26, 91.65, 172.96, 230.9, 70.2, 22.43, 26.75],
                type: 'bar',
                yAxisIndex: 0
            }]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

//面积图-13;
function getArea(id) {
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        color: ['#00aeef', '#c758a1'],
        title: {
            text: '2015—2019年度张家口市及河北省GDP增幅情况/%',
            subtext: '单位：万',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            top: '15%',
            containLabel: true
        },
        legend: {
            icon: 'circle',
            bottom: '3%',
            data: ['河北省GDP增幅', '张家口市GDP增幅']
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [2015, 2016, 2017, 2018, 2019]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '河北省GDP增幅',
                data: [6.8, 6.8, 6.7, 6.6, 6.8],
                type: 'line',
                areaStyle: {origin:'start'}
            }, {
                name: '张家口市GDP增幅',
                data: [5.8, 7, 6.8, 7.6, 6.9],
                type: 'line',
                areaStyle: {origin:'start'}
            }]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

//柱图-15;
function getBarPer(id) {
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        color: ['#f48897', '#ed0f64'],
        title: {
            text: '2009—2019年中国滑雪人数和人次变化趋势',
            subtext: '单位：万',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            top: '15%',
            containLabel: true
        },
        legend: {
            icon: 'circle',
            bottom: '3%',
            data: ['滑雪人次', '滑雪人数']
        },
        xAxis: {
            type: 'category',
            data: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: '滑雪人次',
            data: [550, 630, 700, 800, 900, 1030, 1250, 1510, 1750, 1970, 2090],
            type: 'bar',
        }, {
            name: '滑雪人数',
            data: ['-', '-', '-', '-', '-', 805, 960, 1133, 1210, 1320, 1305],
            type: 'bar',
        }]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

//柱图-16;
function getBarLines(id) {
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        color: ['#f48897', '#008ed2'],
        title: {
            text: '2013-2019年中国冰雪产业市场规模统计',
            subtext: '单位：亿元',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            top: '15%',
            containLabel: true
        },
        legend: {
            icon: 'circle',
            bottom: '3%',
            data: ['增速', '市场规模']
        },
        xAxis: {
            type: 'category',
            data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019']
        },
        yAxis: [{
            type: 'value'
        }, {
            type: 'value'
        }],
        series: [{
            name: '增速',
            data: ['-', 60.75, 42.71, 35.07, 9.02, 13.33, -6.01],
            type: 'line',
            label:{
                show:true,
                position: 'top'
            },
            yAxisIndex: 1,
        }, {
            name: '市场规模',
            data: [1177, 1892, 2700, 3647, 3976, 4506, 4235],
            type: 'bar',
            label:{
                show:true,
                position: 'top'
            },
            yAxisIndex: 0
        }]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

//柱图-17;
function getBarSnow(id) {
    var myChart = echarts.init(document.getElementById(id));
    var option = {
        color: ['#6674c4'],
        title: {
            text: '2013-2019年中国滑雪场数量变化',
            subtext: '单位：个',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
        },
        xAxis: {
            type: 'category',
            data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [408, 460, 568, 646, 703, 742, 770],
            type: 'bar',
            label:{
                show:true,
                position: 'top'
            }
        }]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}