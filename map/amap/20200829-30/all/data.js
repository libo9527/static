const administrativeCenter = [];
const traffic = [{
    id: 4,
    title: "上沙站",
    position: [114.035504, 22.524612],
    awesomeIcon: "subway",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "orange",
    infoBody: "",
    type: "地铁站",
    visible: true
}, {
    id: 4,
    title: "石厦站",
    position: [114.053558, 22.523273],
    awesomeIcon: "subway",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "orange",
    infoBody: "",
    type: "地铁站",
    visible: true
}, {
    id: 4,
    title: "翠竹站",
    position: [114.129776, 22.556409],
    awesomeIcon: "subway",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "orange",
    infoBody: "",
    type: "地铁站",
    visible: true
}, {
    id: 8,
    title: "留医部1",
    position: [114.131649, 22.557192],
    awesomeIcon: "bus",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "lightblue",
    infoBody: "",
    type: "公交站",
    visible: true
}, {
    id: 8,
    title: "福田体育公园",
    position: [114.037292, 22.527101],
    awesomeIcon: "bus",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "lightblue",
    infoBody: "",
    type: "公交站",
    visible: true
}, {
    id: 8,
    title: "梧桐山总站(公交站)",
    position: [114.190887, 22.593035],
    awesomeIcon: "bus",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "lightblue",
    infoBody: "",
    type: "公交站",
    visible: true
}, {
    id: 8,
    title: "金地花园(公交站)",
    position: [114.036636, 22.521753],
    awesomeIcon: "bus",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "lightblue",
    infoBody: "",
    type: "公交站",
    visible: true
}, {
    id: 8,
    title: "罗湖公安分局(公交站)",
    position: [114.180527, 22.558985],
    awesomeIcon: "bus",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "lightblue",
    infoBody: "",
    type: "公交站",
    visible: true
}, {
    id: 8,
    title: "三家店(公交站)",
    position: [114.229919, 22.549904],
    awesomeIcon: "bus",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "lightblue",
    infoBody: "",
    type: "公交站",
    visible: true
}, {
    id: 8,
    title: "长岭站",
    position: [114.183243, 22.556715],
    awesomeIcon: "bus",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "lightblue",
    infoBody: "",
    type: "公交站",
    visible: true
}];
const hotel = [];
const food = [{
    id: 74,
    title: "太二酸菜鱼(深圳壹海城分店)",
    position: [114.238691, 22.552278],
    awesomeIcon: "cutlery",
    iconLabel: {style: {color: "gray", fontSize: "14px"}},
    iconStyle: "lightpink",
    infoBody: "<div>大众点评推荐</div>",
    type: "美食",
    visible: true
}];
const scenery = [{
    id: 14,
    title: "梧桐山",
    position: [114.214704, 22.57771],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "中英街历史博物馆",
    position: [114.231087, 22.541682],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "东部华侨城",
    position: [114.287666, 22.626673],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "大梅沙海滨公园",
    position: [114.307954, 22.592429],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "仙湖植物园",
    position: [114.174956, 22.578596],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "小梅沙",
    position: [114.328366, 22.600863],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "中英街",
    position: [114.231025, 22.543884],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}];
const innerScenery = [{
    id: 73,
    title: "仙桐体育公园",
    position: [114.185505, 22.561884],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}, {
    id: 73,
    title: "小梧桐",
    position: [114.188175, 22.571245],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}, {
    id: 73,
    title: "梧桐山风景名胜区-泰山涧",
    position: [114.199335, 22.59047],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}, {
    id: 73,
    title: "梧桐山风景名胜区-豆付头",
    position: [114.203678, 22.569742],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}, {
    id: 73,
    title: "梧桐山风景名胜区-梧桐山电视塔",
    position: [114.193722, 22.568156],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}, {
    id: 73,
    title: "梧桐山风景名胜区(西北门)",
    position: [114.19581, 22.589751],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}, {
    id: 73,
    title: "大梧桐",
    position: [114.224799, 22.578822],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}, {
    id: 73,
    title: "通往小梧桐入口",
    position: [114.19561, 22.558514],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}, {
    id: 73,
    title: "梧桐山风景名胜区-蝴蝶谷",
    position: [114.208479, 22.573278],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}, {
    id: 73,
    title: "梧桐山风景名胜区-好汉坡",
    position: [114.213697, 22.575566],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}, {
    id: 73,
    title: "梧桐山顶峰",
    position: [114.219583, 22.579506],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}, {
    id: 73,
    title: "通往蝴蝶谷入口",
    position: [114.201575, 22.559366],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}, {
    id: 73,
    title: "东湖公园-东深小区(西北门)",
    position: [114.143243, 22.565857],
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
            new AMap.LngLat(114.035504, 22.524612),
            new AMap.LngLat(114.053558, 22.523273),
            new AMap.LngLat(114.131649, 22.557192),
            new AMap.LngLat(114.190887, 22.593035),
        ],
        strokeWeight: 5, // 线条宽度，默认为 1
        strokeColor: '#6789bf', // 线条颜色
        lineJoin: 'round', // 折线拐点连接处样式
        showDir: true,
        dirColor: 'white'
    }),

    // 折线图2
    new AMap.Polyline({
        path: [
            new AMap.LngLat(114.19581, 22.589751),
            new AMap.LngLat(114.199335, 22.59047),
            new AMap.LngLat(114.203399, 22.591912),
            new AMap.LngLat(114.215609, 22.582461),
            new AMap.LngLat(114.219583, 22.579506),
            new AMap.LngLat(114.224799, 22.578822),
            new AMap.LngLat(114.219583, 22.579506),
            new AMap.LngLat(114.213697, 22.575566),
            new AMap.LngLat(114.208479, 22.573278),
            new AMap.LngLat(114.203678, 22.569742),
            new AMap.LngLat(114.196692, 22.568507),
            new AMap.LngLat(114.193722, 22.568156),
            new AMap.LngLat(114.187787, 22.558995),
            new AMap.LngLat(114.184632, 22.560838),
        ],
        strokeWeight: 5, // 线条宽度，默认为 1
        strokeColor: '#336688', // 线条颜色
        lineJoin: 'round', // 折线拐点连接处样式
        showDir: true,
        dirColor: 'pink'
    }),

    // 折线图3
    new AMap.Polyline({
        path: [
            new AMap.LngLat(114.180527, 22.558985),
            new AMap.LngLat(114.036636, 22.521753),
        ],
        strokeWeight: 5, // 线条宽度，默认为 1
        strokeColor: '#6789bf', // 线条颜色
        lineJoin: 'round', // 折线拐点连接处样式
        showDir: true,
        dirColor: 'white'
    }),

    // 折线图4
    new AMap.Polyline({
        path: [
            new AMap.LngLat(114.183243, 22.556715),
            new AMap.LngLat(114.229919, 22.549904),
        ],
        strokeWeight: 5, // 线条宽度，默认为 1
        strokeColor: '#6789bf', // 线条颜色
        lineJoin: 'round', // 折线拐点连接处样式
        showDir: true,
        dirColor: 'white'
    }),

    // 折线图5
    new AMap.Polyline({
        path: [
            new AMap.LngLat(114.229919, 22.549904),
            new AMap.LngLat(114.037292, 22.527101),
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
