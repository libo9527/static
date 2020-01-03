const administrativeCenter = [{
    id: 1,
    title: "北京",
    position: [116.40717, 39.90469],
    awesomeIcon: "star",
    iconLabel: {style: {color: "salmon", fontSize: "14px"}},
    iconStyle: "black",
    infoBody: "",
    type: "行政区",
    visible: true
}, {
    id: 1,
    title: "西安",
    position: [108.93984, 34.34127],
    awesomeIcon: "star",
    iconLabel: {style: {color: "salmon", fontSize: "14px"}},
    iconStyle: "black",
    infoBody: "",
    type: "行政区",
    visible: true
}, {
    id: 2,
    title: "深圳",
    position: [114.085947, 22.547],
    awesomeIcon: "star",
    iconLabel: {style: {color: "salmon", fontSize: "14px"}},
    iconStyle: "black",
    infoBody: "",
    type: "行政区",
    visible: true
}, {
    id: 2,
    title: "长沙",
    position: [112.93886,28.22778],
    awesomeIcon: "star",
    iconLabel: {style: {color: "salmon", fontSize: "14px"}},
    iconStyle: "black",
    infoBody: "",
    type: "行政区",
    visible: true
}];
const traffic = [{
    id: 6,
    title: "深圳站",
    position: [114.117199, 22.531892],
    awesomeIcon: "train",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "orange",
    infoBody: "",
    type: "火车站",
    visible: true
}, {
    id: 4,
    title: "长沙黄花国际机场",
    position: [113.22219, 28.18866],
    awesomeIcon: "plane",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "orange",
    infoBody: "",
    type: "机场",
    visible: true
}, {
    id: 4,
    title: "北京首都国际机场",
    position: [116.60039, 40.07733],
    awesomeIcon: "plane",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "orange",
    infoBody: "",
    type: "机场",
    visible: true
}, {
    id: 6,
    title: "长沙站",
    position: [113.013206, 28.194104],
    awesomeIcon: "train",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "orange",
    infoBody: "",
    type: "火车站",
    visible: true
}];
const hotel = [];
const food = [];
const scenery = [{
    id: 14,
    title: "故宫",
    position: [116.397027,39.918056],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}];
const innerScenery = [];

let data = [];
data.push(...administrativeCenter);
data.push(...traffic);
data.push(...hotel);
data.push(...food);
data.push(...scenery);
data.push(...innerScenery);
