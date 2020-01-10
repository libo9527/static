const administrativeCenter = [{
    id: 1,
    title: "长沙",
    position: [112.938888, 28.228272],
    awesomeIcon: "star",
    iconLabel: {style: {color: "salmon", fontSize: "14px"}},
    iconStyle: "black",
    infoBody: "",
    type: "行政区",
    visible: true
}];
const traffic = [{
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
const scenery = [];
const innerScenery = [];

let data = [];
data.push(...administrativeCenter);
data.push(...traffic);
data.push(...hotel);
data.push(...food);
data.push(...scenery);
data.push(...innerScenery);
