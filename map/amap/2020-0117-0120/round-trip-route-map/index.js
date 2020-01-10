//创建地图
var map = new AMap.Map('container', {
    zoom: 8,
    center: [116.40717, 39.90469]
});

AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function (PathSimplifier, $) {

    if (!PathSimplifier.supportCanvas) {
        alert('当前环境不支持 Canvas！');
        return;
    }

    var pathSimplifierIns = new PathSimplifier({
        zIndex: 100,
        //autoSetFitView:false,
        map: map, //所属的地图实例

        getPath: function (pathData, pathIndex) {
            // return pathData.path;
            var points = pathData.points,
                lnglatList = [];

            for (var i = 0, len = points.length; i < len; i++) {
                lnglatList.push(points[i].lnglat);
            }

            return lnglatList;
        },
        getHoverTitle: function (pathData, pathIndex, pointIndex) {

            if (pointIndex >= 0) {
                //point
                return pathData.name + '，' + pathData.points[pointIndex].name;
            }

            return pathData.name + '，共' + pathData.points.length + '站';
        },
        renderOptions: {
            renderAllPointsIfNumberBelow: 100 //绘制路线节点，如不需要可设置为-1
        }
    });

    //设置数据
    pathSimplifierIns.setData(data.routes);

    let navigatorMap = new Map();
    // for (let i = 0; i < data.routes.length; i++) {
    for (let route of data.routes) {
        let navigator = navigatorMap.get(route.startPathIndex);
        if (!navigator) {
            let pathNavigatorStyle = route.pathNavigatorStyle;
            pathNavigatorStyle.content = PathSimplifier.Render.Canvas.getImageContent(pathNavigatorStyle.contentImagePath, onload, onerror);
            navigator = pathSimplifierIns.createPathNavigator(route.startPathIndex, {
                speed: route.speed, // 巡航速度，单位千米/小时
                pathNavigatorStyle: pathNavigatorStyle
            });
            navigator.start();
            navigatorMap.set(route.startPathIndex, navigator)
        }
    }

    function onload() {
        pathSimplifierIns.renderLater();
    }

    function onerror(e) {
    }

    pathSimplifierIns.on('pathClick', function (e, pathInfo) {
    });

    window.pathSimplifierIns = pathSimplifierIns;

    setInterval(function () {
        for (let [key, value]  of navigatorMap) {
            let navg = value;
            if (navg.isCursorAtPathEnd()) {
                navg.destroy();
                let currentPathData = pathSimplifierIns.getPathData(navg.getPathIndex());
                let nextPathData = pathSimplifierIns.getPathData(currentPathData.nextPathIndex);
                let pathNavigatorStyle = nextPathData.pathNavigatorStyle;
                pathNavigatorStyle.content = PathSimplifier.Render.Canvas.getImageContent(pathNavigatorStyle.contentImagePath, onload, onerror);
                navg = pathSimplifierIns.createPathNavigator(currentPathData.nextPathIndex, {
                    // loop: true, //循环播放
                    speed: nextPathData.speed, //巡航速度，单位千米/小时
                    pathNavigatorStyle: pathNavigatorStyle
                });
                navigatorMap.set(key, navg);
                navg.start();
            }
        }
    }, 500)
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
                position: item.position,
                title: item.title,
                //Marker的label(见https://lbs.amap.com/api/javascript-api/reference/overlay/#Marker)
                label: {
                    content: "<div class='label-content-text'>" + item.title + "</div>",
                    offset: new AMap.Pixel(0, -31)
                }
            });
        }
    });

// 地图加载完成
map.on("complete", function () {
    // 无参数时，自动自适应所有覆盖物
    map.setFitView();
});
