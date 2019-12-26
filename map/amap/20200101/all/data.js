const administrativeCenter = [{
    id: 1,
    title: "珠海",
    position: [113.57668, 22.27073],
    awesomeIcon: "star",
    iconLabel: {style: {color: "salmon", fontSize: "14px"}},
    iconStyle: "black",
    infoBody: "",
    type: "行政区",
    visible: true
}, {
    id: 1,
    title: "澳门",
    position: [113.54913, 22.19875],
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
}];
const traffic = [{
    id: 4,
    title: "深圳宝安国际机场",
    position: [113.814829, 22.633092],
    awesomeIcon: "plane",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "orange",
    infoBody: "",
    type: "机场",
    visible: true
}, {
    id: 4,
    title: "珠海金湾机场",
    position: [113.381892, 22.005797],
    awesomeIcon: "plane",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "orange",
    infoBody: "",
    type: "机场",
    visible: true
}, {
    id: 4,
    title: "澳门国际机场",
    position: [113.595218, 22.147477],
    awesomeIcon: "plane",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "orange",
    infoBody: "",
    type: "机场",
    visible: true
}, {
    id: 4,
    title: "深圳蛇口港",
    position: [113.913263, 22.475766],
    awesomeIcon: "ship",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "orange",
    infoBody: "",
    type: "港口/口岸",
    visible: true
}, {
    id: 4,
    title: "港珠澳大桥珠海公路口岸",
    position: [113.578735, 22.204136],
    awesomeIcon: "ship",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "orange",
    infoBody: "",
    type: "港口/口岸",
    visible: true
}];
const hotel = [];
const food = [];
const scenery = [{
    id: 14,
    title: "长隆海洋王国",
    position: [113.538202, 22.098459],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "澳门威尼斯人",
    position: [113.566661, 22.145351],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}];
const innerScenery = []

let data = [];
data.push(...administrativeCenter);
data.push(...traffic);
data.push(...hotel);
data.push(...food);
data.push(...scenery);
data.push(...innerScenery);
