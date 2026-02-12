const administrativeCenter = [];
const traffic = [{
    id: 5,
    title: "铜仁站",
    position: [109.203945, 27.740265],
    awesomeIcon: "train",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "orange",
    infoBody: "",
    type: "火车站",
    visible: true
}, {
    id: 5,
    title: "贵阳东站",
    position: [106.744611, 26.664717],
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
const innerScenery = [{
    id: 73,
    title: "东门",
    position: [108.776169, 27.841665],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}, {
    id: 73,
    title: "索道下站",
    position: [108.72566, 27.889059],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}, {
    id: 73,
    title: "索道上站",
    position: [108.700949, 27.907238],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}, {
    id: 73,
    title: "普渡广场",
    position: [108.696641, 27.907014],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}, {
    id: 73,
    title: "老金顶",
    position: [108.697183, 27.910765],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}, {
    id: 73,
    title: "蘑菇石",
    position: [108.697895, 27.908769],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}, {
    id: 73,
    title: "蘑菇石",
    position: [108.697895, 27.908769],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}, {
    id: 73,
    title: "红云金顶",
    position: [108.695884, 27.906417],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
}];

const polylines = [];


let data = [];
data.push(...administrativeCenter);
data.push(...traffic);
data.push(...hotel);
data.push(...food);
data.push(...scenery);
data.push(...innerScenery);


