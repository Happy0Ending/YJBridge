import * as echarts from "echarts"
export function createQQNQX() {

    let option = {

        "fontSize": 10,
        "grid": {
            "bottom": 8,
            "containLabel": true,
            "left": 4,
            "right": 4,
            "top": 50
        },
        "legend": {
            "icon": "rect",
            "itemHeight": 8,
            "itemWidth": 30,
            "orient": "horizontal",
            "right": true,
            "textStyle": {
                "color": "#c7f0ffff",
                "fontFamily": "Source Han Sans CN",
                "fontSize": 12
            },
            "top": true
        },
        "series": [
            {
                "backgroundStyle": {},
                "data": [
                    33,
                    2,
                    49,
                    33,
                    46,
                    3
                ],
                "edgeLabel": {
                    "show": false
                },
                "emphasis": {},
                "itemStyle": {
                    "color": "#ff9873ff"
                },
                "label": {
                    "offset": [
                        0,
                        0
                    ],
                    "show": true
                },
                "lineStyle": {
                    "color": "rgba(255, 152, 115, 1)",
                    "type": "solid",
                    "width": 2
                },
                "name": "左幅:上行",
                "showSymbol": false,
                "smooth": true,
                "step": null,
                "symbol": null,
                "symbolSize": 5,
                "type": "line"
            },
            {
                "areaStyle": {
                    "color": {
                        "colorStops": [
                            {
                                "color": "rgba(0, 230, 255, 1)",
                                "offset": 0.0063
                            },
                            {
                                "color": "rgba(102, 236, 255, 0)",
                                "offset": 0.9998999999999999
                            }
                        ],
                        "global": false,
                        "type": "linear",
                        "x": 0,
                        "x2": 0,
                        "y": 0,
                        "y2": 1
                    }
                },
                "backgroundStyle": {},
                "data": [
                    40,
                    17,
                    21,
                    31,
                    14,
                    49
                ],
                "edgeLabel": {
                    "show": false
                },
                "emphasis": {},
                "itemStyle": {
                    "color": "#00e6ffff"
                },
                "label": {
                    "offset": [
                        0,
                        0
                    ],
                    "show": true
                },
                "lineStyle": {
                    "color": "rgba(0, 230, 255, 1)",
                    "type": "solid",
                    "width": 2
                },
                "name": "右幅:下行",
                "showSymbol": false,
                "smooth": true,
                "step": null,
                "symbol": null,
                "symbolSize": 5,
                "type": "line"
            }
        ],
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#cceaffff",
                    "type": "solid",
                    "width": 1
                },
                "type": "line"
            },
            "backgroundColor": "#172a46e6",
            "borderColor": "#ffffff00",
            "show": true,
            "textStyle": {
                "color": "#c7f0ffff",
                "fontFamily": "Rajdhani-Bold",
                "fontSize": 14
            },
            "trigger": "axis"
        },
        "xAxis": {
            "axisLabel": {
                "color": "#cceaffff",
                "fontFamily": "微软雅黑",
                "fontSize": 14,
                "margin": 10
            },
            "axisLine": {
                "lineStyle": {
                    "color": "#cceaff66"
                },
                "show": true
            },
            "axisTick": {
                "lineStyle": {
                    "color": "#cceaffff"
                },
                "show": true
            },
            "data": [
                "0",
                "30G01",
                "107G03",
                "155T01",
                "211G04",
                "267G05"
            ],
            "show": true,
            "splitLine": {
                "lineStyle": {
                    "color": "#cceaff33",
                    "type": "dashed",
                    "width": 1
                },
                "show": true
            },
            "type": "category"
        },
        "yAxis": {
            "axisLabel": {
                "color": "#cceaffff",
                "fontFamily": "微软雅黑",
                "fontSize": 14,
                "margin": 10
            },
            "axisTick": {
                "lineStyle": {},
                "show": false
            },
            "max": 70,
            "maxInterval": 10,
            "min": -20,
            "minInterval": 10,
            "name": "单位:mm",
            "nameTextStyle": {
                "align": "center",
                "color": "#bedffaff",
                "fontFamily": "微软雅黑",
                "fontSize": 14
            },
            "show": true,
            "splitLine": {
                "lineStyle": {
                    "color": "#cceaff33",
                    "type": "dashed"
                },
                "show": true
            },
            "splitNumber": 2,
            "type": "value"
        },
        "theme": "le-dark"
    }
    var chartDom = document.getElementById('QJRQX-chart');
    var myChart = echarts.init(chartDom);
    if (myChart) {
        const setData = () => {
            option && myChart.setOption(option);
        }
        const dispose = () => {
            myChart.dispose();
        }
        option && myChart.setOption(option);
        return {
            echarts: myChart,
            dispose: dispose,
            setData: setData
        };
    }
}

