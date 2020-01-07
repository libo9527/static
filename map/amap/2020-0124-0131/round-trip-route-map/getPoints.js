/**
 * 1. 中国铁路在线地图: http://cnrail.geogv.org/zhcn/about
 *    Request URL: http://cnrail.geogv.org/api/v1/route/CN~K1348?locale=zhcn&query-override=&requestGeom=true
 *    Request Method: GET
 *
 * 2. JS在线运行工具: https://www.sojson.com/runjs.html
 *    运行下面代码
 *
 * 3. 去除结果中的多余信息即可得到 points 数组
 *
 */
let s = '{"success":true,"data":{"trainId":"CN~K1348","operationId":"K1348","serviceId":7,"stops":[[410696,"深圳","00810","00810","113.2885,23.7618",""],[10445,"广州","00952","01007","112.4157,24.3867",""],[2540340,"韶关东","01223","01229","112.7685,26.0475",""],[2410870,"郴州","01408","01414","112.188,27.0722",""],[2280630,"衡阳","01557","01603","111.7802,28.1667",""],[2170590,"株洲","01728","01734","112.3127,29.1204",""],[2090199,"长沙","01813","01824","112.1682,29.4825",""],[1940063,"岳阳","01957","02003","112.2748,30.6761",""],[1820735,"咸宁","02136","02154","113.4619,31.1838",""],[1730728,"武昌","02323","02332","113.4915,31.8386",""],[1270203,"郑州","10531","10551","112.8223,36.096",""],[9650412,"洛阳","10800","10808","111.58,36.0351",""],[10000264,"渭南","11232","11235","108.5955,35.8315",""],[10070632,"西安","11330","11330","108.0577,35.6239",""]],"operators":[],"note":null,"frequency":null,"timeTableFormat":"SIMPLE","opSegment":null,"routeType":"T"}}';

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



