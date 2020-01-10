/**
 * 1. 中国铁路在线地图: http://cnrail.geogv.org/zhcn/about
 *    Request URL: http://cnrail.geogv.org/api/v1/route/CN~G624?locale=zhcn&query-override=&requestGeom=true
 *    Request Method: GET
 *
 * 2. IDE 中右键运行当前文件/JS在线运行工具: https://www.sojson.com/runjs.html 运行下面代码
 *
 * 3. 去除结果中的多余信息即可得到 points 数组
 *
 */
let s = '{"success":true,"data":{"trainId":"CN~G0624","operationId":"G624","serviceId":2,"stops":[[15960629,"太原南","01807","01807","111.7575,39.1687",""],[900329,"石家庄","01930","01934","113.6591,39.3892",""],[3050509,"正定机场","01948","01954","113.888,39.6327",""],[3100682,"北京西","02057","02057","115.5236,41.2915",""]],"operators":[],"note":null,"frequency":null,"timeTableFormat":"SIMPLE","opSegment":null,"routeType":"T"}}';

let json = JSON.parse(s);

let array = json.data.stops;
let ret = [];
for (let item of array) {
    let stop = item[1];
    let start = item[2];
    let end = item[3];
    let lnglat = item[4].split(',').map(n => Number.parseFloat(n));
    let name = stop + ' ' + start.substring(1, 3) + ':' + start.substring(3, 5)
        + ' - ' + end.substring(1, 3) + ':' + end.substring(3, 5)
    ret.push({name, lnglat})
}

console.log(ret);



