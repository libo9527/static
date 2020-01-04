//创建地图
var map = new AMap.Map('container', {
    zoom: 8,
    center: [102.833722, 24.881539] // 云南昆明
});

var polylinePath = [
    new AMap.LngLat(102.833722, 24.881539),
    new AMap.LngLat(100.225668, 25.589449),
    new AMap.LngLat(100.233026, 26.872108)
];

// 创建线覆盖物
var polyline = new AMap.Polyline({
    path: polylinePath,
    // 描边颜色
    strokeColor: '#2193b0',
    // 描边宽度
    strokeWeight: 7
});

map.add(polyline);

AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function(PathSimplifier, $) {

    if (!PathSimplifier.supportCanvas) {
        alert('当前环境不支持 Canvas！');
        return;
    }

    var pathSimplifierIns = new PathSimplifier({
        zIndex: 100,
        //autoSetFitView:false,
        map: map, //所属的地图实例

        getPath: function(pathData, pathIndex) {
            return pathData.path;
        },
        getHoverTitle: function(pathData, pathIndex, pointIndex) {

            if (pointIndex >= 0) {
                //point
                return pathData.name + '，点：' + pointIndex + '/' + pathData.path.length;
            }

            return pathData.name + '，点数量' + pathData.path.length;
        },
        renderOptions: {

            renderAllPointsIfNumberBelow: 100 //绘制路线节点，如不需要可设置为-1
        }
    });

    window.pathSimplifierIns = pathSimplifierIns;

    // //设置数据
    // pathSimplifierIns.setData([{
    //     name: '路线0',
    //     path: [
    //         [116.405289, 39.904987],
    //         [113.964458, 40.54664],
    //         [111.47836, 41.135964],
    //         [108.949297, 41.670904],
    //         [106.380111, 42.149509],
    //         [103.774185, 42.56996],
    //         [101.135432, 42.930601],
    //         [98.46826, 43.229964],
    //         [95.777529, 43.466798],
    //         [93.068486, 43.64009],
    //         [90.34669, 43.749086],
    //         [87.61792, 43.793308]
    //     ]
    // }]);
    // console.log('routes[0]', routes[0])

    //设置数据
    pathSimplifierIns.setData([routes[0].routes[0]]);

    //对第一条线路（即索引 0）创建一个巡航器
    var navg1 = pathSimplifierIns.createPathNavigator(0, {
        loop: true, //循环播放
        speed: 500000 //巡航速度，单位千米/小时
    });

    navg1.start();
});

AMapUI.loadUI(['overlay/AwesomeMarker', 'overlay/SimpleInfoWindow'],
    function (AwesomeMarker, SimpleInfoWindow) {

        for (let item of data.markers) {
            new AwesomeMarker({
                //设置awesomeIcon
                awesomeIcon: 'flag',
                iconLabel: item.iconLabel,
                iconStyle: item.iconStyle,
                map: map,
                position: item.position, // 云南昆明
                title: item.title,
                //Marker的label(见https://lbs.amap.com/api/javascript-api/reference/overlay/#Marker)
                label: {
                    content: "<div class='label-content-text'>" + item.title + "</div>",
                    offset: new AMap.Pixel(0, -31)
                }
            });
        }

        var kunmingMarker = new AwesomeMarker({
            //设置awesomeIcon
            awesomeIcon: 'flag',
            iconLabel: {
                style: {
                    color: '#333',
                    fontSize: '14px'
                }
            },
            iconStyle: 'orange',
            map: map,
            position: [102.833722, 24.881539], // 云南昆明
            title: '云南昆明',
            //Marker的label(见https://lbs.amap.com/api/javascript-api/reference/overlay/#Marker)
            label: {
                content: "<div class='name'>昆明</div>",
                offset: new AMap.Pixel(-7, -35)
            }
        });
        var kunmingInfoWindow = new SimpleInfoWindow({
            infoTitle: '<strong>云南省昆明市</strong>',
            infoBody: '<p class="my-desc">昆明，别称春城，是云南省省会、滇中城市群中心城市，国务院批复确定的中国西部地区重要的中心城市之一。截至2018年，全市下辖7个区、3个县、3个自治县、代管1个县级市，总面积21473平方千米，建成区面积435.81平方千米，常住人口685.0万人，城镇人口499.02万人，城镇化率72.85%。</p>',
            //基点指向marker的头部位置
            offset: new AMap.Pixel(0, -31)
        });
        kunmingMarker.on('click', function () {
            kunmingInfoWindow.open(map, kunmingMarker.getPosition());
        });

        var daliMarker = new AwesomeMarker({
            //设置awesomeIcon
            awesomeIcon: 'flag',
            iconLabel: {
                style: {
                    color: '#333',
                    fontSize: '14px'
                }
            },
            iconStyle: 'orange',
            map: map,
            position: [100.225668, 25.589449], // 云南大理
            title: '云南大理',
            //Marker的label(见https://lbs.amap.com/api/javascript-api/reference/overlay/#Marker)
            label: {
                content: "<div class='name'>大理</div>",
                offset: new AMap.Pixel(-50, 17)
            }
        });
        var daliInfoWindow = new SimpleInfoWindow({
            infoTitle: '<strong>云南省大理市</strong>',
            infoBody: '<p class="my-desc">大理白族自治州地处云南省中部偏西，海拔2090米，东邻楚雄州，南靠普洱市、临沧市，西与保山市、怒江州相连，北接丽江市。地跨东经98°52′～101°03′，北纬24°41′～26°42′之间，东巡洱海，西及点苍山脉，辖大理市和祥云、弥渡、宾川、永平、云龙、洱源、鹤庆、剑川8个县以及漾濞、巍山、南涧3个少数民族自治县，是中国西南边疆开发较早的地区之一。</p>',
            //基点指向marker的头部位置
            offset: new AMap.Pixel(0, -31)
        });
        daliMarker.on('click', function () {
            daliInfoWindow.open(map, daliMarker.getPosition());
        });

        var lijiangMarker = new AwesomeMarker({
            //设置awesomeIcon
            awesomeIcon: 'flag',
            iconLabel: {
                style: {
                    color: '#333',
                    fontSize: '14px'
                }
            },
            iconStyle: 'orange',
            map: map,
            position: [100.233026, 26.872108], // 云南丽江
            title: '云南丽江',
            //Marker的label(见https://lbs.amap.com/api/javascript-api/reference/overlay/#Marker)
            label: {
                content: "<div class='name'>丽江</div>",
                offset: new AMap.Pixel(40, -10)
            }
        });
        var lijiangInfoWindow = new SimpleInfoWindow({
            infoTitle: '<strong>云南省丽江市</strong>',
            infoBody: '<p class="my-desc">丽江，云南省地级市，位于云南省西北部，滇川藏三省区交界处，是国际知名旅游城市、古代“南方丝绸之路”和“茶马古道”的重要通道。市区中心位于东经100°25\'，北纬26°86\'，总面积2.06万平方公里，北连迪庆藏族自治州，南接大理白族自治州，西邻怒江傈僳族自治州，东与四川凉山彝族自治州和攀枝花市接壤，距昆明市527公里。</p>',
            //基点指向marker的头部位置
            offset: new AMap.Pixel(0, -31)
        });
        lijiangMarker.on('click', function () {
            lijiangInfoWindow.open(map, lijiangMarker.getPosition());
        });
    });

// 地图加载完成
map.on("complete", function () {
    // 无参数时，自动自适应所有覆盖物
    map.setFitView();
});
