const administrativeCenter = [];
const traffic = [{
    id: 6,
    title: "成都东站",
    position: [104.14, 30.63],
    awesomeIcon: "subway",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "orange",
    infoBody: "",
    type: "动车/高铁站",
    visible: true
}, {
    id: 6,
    title: "松潘站",
    position: [103.61, 32.60],
    awesomeIcon: "subway",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "orange",
    infoBody: "",
    type: "动车/高铁站",
    visible: true
}, {
    id: 6,
    title: "国大停车场",
    position: [103.93,33.28],
    awesomeIcon: "subway",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "orange",
    infoBody: "",
    type: "动车/高铁站",
    visible: true
}, {
    id: 6,
    title: "九寨沟月亮湾停车场",
    position: [103.90, 33.27],
    awesomeIcon: "subway",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "orange",
    infoBody: "",
    type: "动车/高铁站",
    visible: true
}];
const hotel = [{
    id: 9,
    title: "7天优品酒店(成都火车东站地铁站店)",
    position: [104.13, 30.62],
    awesomeIcon: "hotel",
    iconLabel: {style: {color: "black", fontSize: "14px"}},
    iconStyle: "salmon",
    infoBody: "",
    type: "酒店",
    visible: true
}, {
    id: 9,
    title: "汉庭九寨沟游客中心酒店",
    position: [103.93, 33.28],
    awesomeIcon: "hotel",
    iconLabel: {style: {color: "black", fontSize: "14px"}},
    iconStyle: "salmon",
    infoBody: "",
    type: "酒店",
    visible: true
}, {
    id: 9,
    title: "九寨沟进去美仑酒店",
    position: [103.91, 33.27],
    awesomeIcon: "hotel",
    iconLabel: {style: {color: "black", fontSize: "14px"}},
    iconStyle: "salmon",
    infoBody: "",
    type: "酒店",
    visible: true
}];
const food = [];
const scenery = [
    {
        id: 1,
        title: "九寨沟",
        position: [103.912874, 33.142376],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
        iconStyle: "green",
        infoBody: "",
        type: "自然景观类景区",
        visible: true
    },
    {
        id: 2,
        title: "黄龙",
        position: [103.715643, 32.799145],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
        iconStyle: "green",
        infoBody: "",
        type: "自然景观类景区",
        visible: true
    }
];

const innerScenery = [];

const polylines = [];


let data = [];
data.push(...administrativeCenter);
data.push(...traffic);
data.push(...hotel);
data.push(...food);
data.push(...scenery);
data.push(...innerScenery);


