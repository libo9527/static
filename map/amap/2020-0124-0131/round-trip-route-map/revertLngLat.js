/**
 * 1. 经纬度查询：http://www.gpsspg.com/maps.htm
 *    这个网站查询到的经纬度和高低地图的经纬度坐标是反的，用这个 js 来 reverse
 */

let points = [{
    name: "深圳 08:10 - 08:10",

    lnglat: [113.2885, 23.7618]
}, {
    name: "广州 09:52 - 10:07",

    lnglat: [23.1491350000, 113.2583400000]
}, {
    name: "韶关东 12:23 - 12:29",
    lnglat: [24.7918800000, 113.6042500000]
}, {
    name: "郴州 14:08 - 14:14",

    lnglat: [25.8082300000, 113.0331700000]
}, {
    name: "衡阳 15:57 - 16:03",
    lnglat: [26.8892200000, 112.6313400000]
}, {
    name: "株洲 17:28 - 17:34",

    lnglat: [27.8354800000, 113.1567300000]
}, {
    name: "长沙 18:13 - 18:24",
    lnglat: [112.1682, 29.4825]
}];

for (let point of points) {
    let temp1 = point.lnglat[0];
    let temp2 = point.lnglat[1];
    point.lnglat[0] = Number.parseFloat(temp2);
    point.lnglat[1] = Number.parseFloat(temp1);
}

console.log(points);
