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
    title: "乐山站",
    position: [103.71, 29.60],
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
}];
const food = [];
const scenery = [
    {
        id: 1,
        title: "乐山大佛",
        position: [103.765523, 29.543021],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightcoral", fontSize: "14px"}},
        iconStyle: "red",
        infoBody: "",
        type: "人文景观类景区",
        visible: true
    }
];

const innerScenery = [{
    id: 73,
    title: "北门6号停车场",
    position: [103.77, 29.55],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}, {
    id: 73,
    title: "北门",
    position: [103.77, 29.55],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}, {
    id: 73,
    title: "南门",
    position: [103.77, 29.55],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}, {
    id: 73,
    title: "凌云栈道",
    position: [103.77, 29.54],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}];

const polylines = [
    // 折线图1
    new AMap.Polyline({
        path: [
            new AMap.LngLat(103.77, 29.55),
            new AMap.LngLat(103.77, 29.54)
        ],
        strokeWeight: 5, // 线条宽度，默认为 1
        strokeColor: '#6789bf', // 线条颜色
        lineJoin: 'round', // 折线拐点连接处样式
        showDir: true,
        dirColor: 'white'
    }),
];


let data = [];
data.push(...administrativeCenter);
data.push(...traffic);
data.push(...hotel);
data.push(...food);
data.push(...scenery);
data.push(...innerScenery);


