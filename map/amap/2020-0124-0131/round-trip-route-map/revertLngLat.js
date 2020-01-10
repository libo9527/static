/**
 * 1. 经纬度查询：http://www.gpsspg.com/maps.htm
 *    这个网站查询到的经纬度和高低地图的经纬度坐标是反的，用这个 js 来 reverse
 * 2. IDE 中右键运行当前文件/JS在线运行工具: https://www.sojson.com/runjs.html 运行下面代码
 * 3. 控制台输入结果
 */

let points = [{
    name: '太原南 18:07 - 18:07',
    lnglat: [111.7575, 39.1687]
}, {
    name: '石家庄 19:30 - 19:34',
    lnglat: [38.0106130000,114.4844420000]
}, {
    name: '正定机场 19:48 - 19:54',
    lnglat: [38.2519300000,114.7097600000]
}, {
    name: '北京西 20:57 - 20:57',
    lnglat: [115.5236, 41.2915]
}];

for (let point of points) {
    let temp1 = point.lnglat[0];
    let temp2 = point.lnglat[1];
    point.lnglat[0] = Number.parseFloat(temp2);
    point.lnglat[1] = Number.parseFloat(temp1);
}

console.log(points);
