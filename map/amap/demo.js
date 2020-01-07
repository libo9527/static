/**
 * 1. 中国铁路在线地图: http://cnrail.geogv.org/zhcn/about
 *    Request URL: http://cnrail.geogv.org/api/v1/route/CN~D2504?locale=zhcn&query-override=&requestGeom=true
 *    Request Method: GET
 *
 * 2. JS在线运行工具: https://www.sojson.com/runjs.html
 *    运行下面代码
 *
 * 3. 去除结果中的多余信息即可得到 points 数组
 *
 */


let s = '{"success":true,"data":{"trainId":"CN~D2504","operationId":"D2504","serviceId":3,"stops":[[8540684,"西安北","00808","00808","108.0332,35.7229",""],[8520833,"渭南北","00831","00833","108.5826,35.8837",""],[52050546,"大荔","00851","00853","109.0343,36.1855",""],[52040011,"永济北","00912","00914","109.54,36.3796",""],[52010187,"侯马西","00950","00952","110.415,36.9579",""],[52000828,"襄汾西","01005","01007","110.464,37.1968",""],[51990371,"临汾西","01020","01022","110.5943,37.4627",""],[51970143,"霍州东","01046","01048","110.9726,37.93",""],[51920274,"太谷西","01126","01129","111.6537,38.8217",""],[15960629,"太原南","01149","01149","111.7575,39.1687",""]],"operators":[],"note":null,"frequency":null,"timeTableFormat":"SIMPLE","opSegment":null,"routeType":"T"}}';

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


// >  [ { name: "西安北 08:08 - 08:08", lnglat:  [108.0332, 35.7229] },  { name: "渭南北 08:31 - 08:33", lnglat:  [108.5826, 35.8837] },  { name: "大荔 08:51 - 08:53", lnglat:  [109.0343, 36.1855] },  { name: "永济北 09:12 - 09:14", lnglat:  [109.54, 36.3796] },  { name: "侯马西 09:50 - 09:52", lnglat:  [110.415, 36.9579] },  { name: "襄汾西 10:05 - 10:07", lnglat:  [110.464, 37.1968] },  { name: "临汾西 10:20 - 10:22", lnglat:  [110.5943, 37.4627] },  { name: "霍州东 10:46 - 10:48", lnglat:  [110.9726, 37.93] },  { name: "太谷西 11:26 - 11:29", lnglat:  [111.6537, 38.8217] },  { name: "太原南 11:49 - 11:49", lnglat:  [111.7575, 39.1687] }]
