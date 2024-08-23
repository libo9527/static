const administrativeCenter = [];
const traffic = [];
const hotel = [];
const food = [];
const scenery = [{
    id: 14,
    title: "黄果树瀑布",
    position: [105.669102, 25.989377],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "梵净山",
    position: [108.720359, 27.882738],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "织金洞",
    position: [105.883673, 26.772214],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "赤水丹霞",
    position: [105.948589, 28.399094],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "马岭河峡谷",
    position: [104.966064, 25.125292],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "西江千户苗寨",
    position: [108.173169, 26.494508],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "镇远古城",
    position: [108.421039, 27.047373],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "青岩古镇",
    position: [106.686834, 26.331095],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "肇兴侗寨",
    position: [109.149009, 25.906612],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "小七孔景区",
    position: [107.705723, 25.252959],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "施秉云台山",
    position: [108.113368, 27.128384],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "紫云格凸河-穿洞",
    position: [106.267069, 25.678486],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "九洞天",
    position: [105.332732, 26.95804],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "六盘水乌蒙山国家地质公园",
    position: [104.867243, 26.580984],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "大利侗寨",
    position: [108.643783, 26.037935],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "摆贝苗寨",
    position: [108.163465, 25.855716],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "加榜苗寨",
    position: [108.586886, 25.602516],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "宰荡侗寨",
    position: [108.647198, 26.00103],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "龙里大草原",
    position: [106.979407, 26.373811],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}, {
    id: 14,
    title: "阿里西里大草原",
    position: [104.864024, 27.011993],
    awesomeIcon: "photo",
    iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
    iconStyle: "green",
    infoBody: "",
    type: "景区",
    visible: true
}];

const innerScenery = [];

const polylines = [];


let data = [];
data.push(...administrativeCenter);
data.push(...traffic);
data.push(...hotel);
data.push(...food);
data.push(...scenery);
data.push(...innerScenery);


