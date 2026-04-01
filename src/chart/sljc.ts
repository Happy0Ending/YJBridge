import * as echarts from "echarts"
export function createSLJC() {
    let option =
    {
        "backgroundColor": "transparent",
        "grid": {
            "bottom": "3%",
            "containLabel": true,
            "left": "3%",
            "right": "4%",
            "top": 50
        },
        "legend": {
            "itemHeight": 8,
            "orient": "horizontal",
            "right": true,
            "textStyle": {
                "color": "#c7f0ffff",
                "fontSize": 12
            },
            "top": true
        },
        "series": [
            {
                "barGap": "25%",
                "barWidth": "19%",
                "data": [
                    3500,
                    4200,
                    5100,
                    4800,
                    5500,
                    4900,
                    4300
                ],
                "itemStyle": {
                    "borderRadius": 0,
                    "color": "#42A5F5"
                },
                "name": "监测值",
                "type": "bar"
            },
            {
                "backgroundStyle": {},
                "data": [
                    3200,
                    3800,
                    4500,
                    4200,
                    4800,
                    4300,
                    3900
                ],
                "edgeLabel": {
                    "show": false
                },
                "emphasis": {},
                "itemStyle": {
                    "borderColor": "#3de2ffff",
                    "borderWidth": 2,
                    "color": "#ffffffff"
                },
                "label": {
                    "show": false
                },
                "lineStyle": {
                    "color": "#FF9500",
                    "type": "dashed",
                    "width": 2
                },
                "name": "二级报警",
                "showSymbol": true,
                "smooth": null,
                "step": null,
                "symbol": "circle",
                "symbolSize": 8,
                "type": "line",
                "yAxisIndex": 0
            },
            {
                "backgroundStyle": {},
                "data": [
                    3800,
                    4400,
                    5200,
                    4900,
                    5600,
                    5100,
                    4500
                ],
                "edgeLabel": {
                    "show": false
                },
                "emphasis": {},
                "itemStyle": {
                    "borderColor": "#3de2ffff",
                    "borderWidth": 2,
                    "color": "#ffffffff"
                },
                "label": {
                    "show": false
                },
                "lineStyle": {
                    "color": "#FF7D7D",
                    "type": "dashed",
                    "width": 2
                },
                "name": "三级报警",
                "showSymbol": true,
                "smooth": null,
                "step": null,
                "symbol": "circle",
                "symbolSize": 8,
                "type": "line",
                "yAxisIndex": 0
            }
        ],
        "title": {
            "left": "center",
            "subtextStyle": {},
            "text": "",
            "textStyle": {
                "color": "#E3F2FD",
                "fontSize": 14,
                "fontWeight": "normal"
            },
            "top": "2%"
        },
        "tooltip": {
            "axisPointer": {
                "type": "cross"
            },
            "backgroundColor": "rgba(33, 33, 33, 0.9)",
            "borderColor": "#42A5F5",
            "borderWidth": 1,
            "textStyle": {
                "color": "#E3F2FD"
            },
            "trigger": "axis"
        },
        "xAxis": {
            "axisLabel": {
                "color": "#cceaffff",
                "fontFamily": "微软雅黑",
                "fontSize": 14
            },
            "axisLine": {
                "lineStyle": {
                    "color": "#b5daff47"
                }
            },
            "axisTick": {
                "lineStyle": {},
                "show": false
            },
            "data": [
                "JS-VIC-C01-01",
                "JS-VIC-C01-02",
                "JS-VIC-C20-02",
                "JS-VIC-C30-01",
                "JS-VIC-C39-02",
                "JS-VIC-C49-01",
                "JS-VIC-C60-02"
            ],
            "show": true,
            "type": "category"
        },
        "yAxis": {
            "axisLabel": {
                "color": "#cceaffff"
            },
            "axisLine": {
                "lineStyle": {
                    "color": "#42A5F5"
                }
            },
            "max": 7000,
            "min": 1000,
            "name": "单位:KN",
            "nameTextStyle": {
                "align": "right",
                "color": "#cceaffff",
                "fontSize": 14
            },
            "show": true,
            "splitLine": {
                "lineStyle": {
                    "color": "rgba(66, 165, 245, 0.2)"
                }
            },
            "type": "value"
        }
    }
    var chartDom = document.getElementById('SLJC-chart');
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

