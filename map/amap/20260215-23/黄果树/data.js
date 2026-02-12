const administrativeCenter = [];
const traffic = [];
const hotel = [];
const food = [];
const scenery = [];
const innerScenery = [{
    id: 73,
    title: "盆景园",
    position: [105.666149,25.982324],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
},{
    id: 73,
    title: "第一观瀑台",
    position: [105.666573,25.987245],
    awesomeIcon: "arrows",
    iconLabel: {style: {color: "green", fontSize: "14px"}},
    iconStyle: "lightgreen",
    infoBody: "",
    type: "内部景点",
    visible: true
},{
    id: 73,
    title: "第二观瀑台",
    position: [105.666925,25.988461],
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


