// const administrativeCenter = [{
//     id: 1,
//     title: "珠海",
//     position: [113.57668, 22.27073],
//     awesomeIcon: "star",
//     iconLabel: {style: {color: "salmon", fontSize: "14px"}},
//     iconStyle: "black",
//     infoBody: "",
//     type: "行政区",
//     visible: true
// }, {
//     id: 1,
//     title: "澳门",
//     position: [113.54913, 22.19875],
//     awesomeIcon: "star",
//     iconLabel: {style: {color: "salmon", fontSize: "14px"}},
//     iconStyle: "black",
//     infoBody: "",
//     type: "行政区",
//     visible: true
// }, {
//     id: 2,
//     title: "深圳",
//     position: [114.085947, 22.547],
//     awesomeIcon: "star",
//     iconLabel: {style: {color: "salmon", fontSize: "14px"}},
//     iconStyle: "black",
//     infoBody: "",
//     type: "行政区",
//     visible: true
// }];
const administrativeCenter = [];
// const traffic = [{
//     id: 4,
//     title: "深圳宝安国际机场",
//     position: [113.814829, 22.633092],
//     awesomeIcon: "plane",
//     iconLabel: {style: {color: "#333", fontSize: "14px"}},
//     iconStyle: "orange",
//     infoBody: "",
//     type: "机场",
//     visible: true
// }, {
//     id: 4,
//     title: "珠海金湾机场",
//     position: [113.381892, 22.005797],
//     awesomeIcon: "plane",
//     iconLabel: {style: {color: "#333", fontSize: "14px"}},
//     iconStyle: "orange",
//     infoBody: "",
//     type: "机场",
//     visible: true
// }, {
//     id: 4,
//     title: "澳门国际机场",
//     position: [113.595218, 22.147477],
//     awesomeIcon: "plane",
//     iconLabel: {style: {color: "#333", fontSize: "14px"}},
//     iconStyle: "orange",
//     infoBody: "",
//     type: "机场",
//     visible: true
// }, {
//     id: 4,
//     title: "深圳蛇口港",
//     position: [113.913263, 22.475766],
//     awesomeIcon: "ship",
//     iconLabel: {style: {color: "#333", fontSize: "14px"}},
//     iconStyle: "orange",
//     infoBody: "",
//     type: "港口/口岸",
//     visible: true
// }, {
//     id: 4,
//     title: "拱北口岸",
//     position: [113.55406, 22.21563],
//     awesomeIcon: "ship",
//     iconLabel: {style: {color: "#333", fontSize: "14px"}},
//     iconStyle: "orange",
//     infoBody: "",
//     type: "港口/口岸",
//     visible: true
// }, {
//     id: 4,
//     title: "皇岗口岸",
//     position: [114.077785, 22.521053],
//     awesomeIcon: "ship",
//     iconLabel: {style: {color: "#333", fontSize: "14px"}},
//     iconStyle: "orange",
//     infoBody: "",
//     type: "港口/口岸",
//     visible: true
// }, {
//     id: 4,
//     title: "港珠澳大桥珠海公路口岸",
//     position: [113.578735, 22.204136],
//     awesomeIcon: "ship",
//     iconLabel: {style: {color: "#333", fontSize: "14px"}},
//     iconStyle: "orange",
//     infoBody: "",
//     type: "港口/口岸",
//     visible: true
// }, {
//     id: 4,
//     title: "九洲港口岸",
//     position: [113.59295,22.2389],
//     awesomeIcon: "ship",
//     iconLabel: {style: {color: "#333", fontSize: "14px"}},
//     iconStyle: "orange",
//     infoBody: "",
//     type: "港口/口岸",
//     visible: true
// }];
const traffic = [{
    id: 4,
    title: "上沙站",
    position: [114.035504, 22.524612],
    awesomeIcon: "subway",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "orange",
    infoBody: "",
    type: "地铁",
    visible: true
}, {
    id: 4,
    title: "车公庙站",
    position: [114.02583, 22.536247],
    awesomeIcon: "subway",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "orange",
    infoBody: "",
    type: "地铁",
    visible: true
}, {
    id: 4,
    title: "下梅林站",
    position: [114.041768, 22.565672],
    awesomeIcon: "subway",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "orange",
    infoBody: "",
    type: "地铁",
    visible: true
}];
const hotel = [];
const food = [];
// const scenery = [{
//     id: 14,
//     title: "珠海横琴长隆国际海洋度假区",
//     position: [113.539725, 22.098549],
//     awesomeIcon: "photo",
//     iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
//     iconStyle: "green",
//     infoBody: "",
//     type: "景区",
//     visible: true
// }, {
//     id: 14,
//     title: "澳门威尼斯人",
//     position: [113.566661, 22.145351],
//     awesomeIcon: "photo",
//     iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
//     iconStyle: "green",
//     infoBody: "",
//     type: "景区",
//     visible: true
// }, {
//     id: 14,
//     title: "妈阁庙",
//     position: [113.53638,22.18324],
//     awesomeIcon: "photo",
//     iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
//     iconStyle: "green",
//     infoBody: "",
//     type: "景区",
//     visible: true
// }, {
//     id: 14,
//     title: "情侣路",
//     position: [113.59157, 22.24429],
//     awesomeIcon: "photo",
//     iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
//     iconStyle: "green",
//     infoBody: "",
//     type: "景区",
//     visible: true
// }, {
//     id: 14,
//     title: "珠海渔女",
//     position: [113.58838, 22.26148],
//     awesomeIcon: "photo",
//     iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
//     iconStyle: "green",
//     infoBody: "",
//     type: "景区",
//     visible: true
// }, {
//     id: 14,
//     title: "石博园",
//     position: [113.51337, 22.14872],
//     awesomeIcon: "photo",
//     iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
//     iconStyle: "green",
//     infoBody: "",
//     type: "景区",
//     visible: true
// }, {
//     id: 14,
//     title: "外伶仃岛风景区",
//     position: [114.042519, 22.098511],
//     awesomeIcon: "photo",
//     iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
//     iconStyle: "green",
//     infoBody: "",
//     type: "景区",
//     visible: true
// }, {
//     id: 14,
//     title: "珠海圆明新园",
//     position: [113.538288, 22.243138],
//     awesomeIcon: "photo",
//     iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
//     iconStyle: "green",
//     infoBody: "",
//     type: "景区",
//     visible: true
// }, {
//     id: 14,
//     title: "东澳岛风景区",
//     position: [113.70981, 22.01841],
//     awesomeIcon: "photo",
//     iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
//     iconStyle: "green",
//     infoBody: "",
//     type: "景区",
//     visible: true
// }, {
//     id: 14,
//     title: "港珠澳大桥",
//     position: [113.59402, 22.21292],
//     awesomeIcon: "photo",
//     iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
//     iconStyle: "green",
//     infoBody: "",
//     type: "景区",
//     visible: true
// }, {
//     id: 14,
//     title: "野狸岛",
//     position: [113.58675, 22.27594],
//     awesomeIcon: "photo",
//     iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
//     iconStyle: "green",
//     infoBody: "",
//     type: "景区",
//     visible: true
// }, {
//     id: 14,
//     title: "大三巴牌坊",
//     position: [113.54594, 22.19456],
//     awesomeIcon: "photo",
//     iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
//     iconStyle: "green",
//     infoBody: "",
//     type: "景区",
//     visible: true
// }, {
//     id: 14,
//     title: "澳门渔人码头",
//     position: [113.561277, 22.18966],
//     awesomeIcon: "photo",
//     iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
//     iconStyle: "green",
//     infoBody: "",
//     type: "景区",
//     visible: true
// }, {
//     id: 14,
//     title: "议事亭前地广场",
//     position: [113.54497, 22.19072],
//     awesomeIcon: "photo",
//     iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
//     iconStyle: "green",
//     infoBody: "",
//     type: "景区",
//     visible: true
// }, {
//     id: 14,
//     title: "路环岛",
//     position: [113.564857, 22.116226],
//     awesomeIcon: "photo",
//     iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
//     iconStyle: "green",
//     infoBody: "",
//     type: "景区",
//     visible: true
// }, {
//     id: 14,
//     title: "澳门旅游塔",
//     position: [113.54184, 22.17686],
//     awesomeIcon: "photo",
//     iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
//     iconStyle: "green",
//     infoBody: "",
//     type: "景区",
//     visible: true
// }];
const scenery = [{
    id: 14,
    title: "梅林水库",
    position: [114.030317, 22.57199],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}];
// const innerScenery = [{
//     id: 73,
//     title: "长隆海洋王国",
//     position: [113.538202, 22.098459],
//     awesomeIcon: "arrows",
//     iconLabel: {style: {color: "green", fontSize: "14px"}},
//     iconStyle: "lightgreen",
//     infoBody: "",
//     type: "内部景点",
//     visible: true
// }];
const innerScenery = [];

let data = [];
data.push(...administrativeCenter);
data.push(...traffic);
data.push(...hotel);
data.push(...food);
data.push(...scenery);
data.push(...innerScenery);
