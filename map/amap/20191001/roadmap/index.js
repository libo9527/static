var map = new AMap.Map('container', {
    center: [102.833722, 24.881539], // 云南昆明
    zoom: 7
});

AMapUI.loadUI(['control/BasicControl', 'overlay/AwesomeMarker', 'overlay/SimpleInfoWindow'],
    function (BasicControl, AwesomeMarker, SimpleInfoWindow) {

        //缩放控件
        map.addControl(new BasicControl.Zoom({
            //内置的dark主题
            theme: 'dark',

            //左下角
            position: 'bl'
        }));


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
            return pathData.path;
        },
        getHoverTitle: function (pathData, pathIndex, pointIndex) {
            if (pointIndex >= 0) {
                //point
                return pathData.name + '，点：' + pointIndex + '/' + pathData.path.length;
            }
            return pathData.name + '，点数量' + pathData.path.length;
        },
        renderOptions: {
            renderAllPointsIfNumberBelow: 100, //绘制路线节点，如不需要可设置为-1
            pathNavigatorStyle: {
                initRotateDegree: 0,
                width: 16,
                height: 16,
                autoRotate: true,
                lineJoin: 'round',
                content: 'plan_icon',
                fillStyle: '#087EC4',
                strokeStyle: '#116394', //'#eeeeee',
                lineWidth: 1,
                pathLinePassedStyle: {
                    lineWidth: 2,
                    strokeStyle: 'rgba(8, 126, 196, 1)',
                    borderWidth: 1,
                    borderStyle: '#eeeeee',
                    dirArrowStyle: false
                }
            }
        }
    });

    window.pathSimplifierIns = pathSimplifierIns;

    // // 制造数据
    // let begin = [108.764882, 34.438179],
    //     end =  [102.931104, 25.098669];
    //
    // let control = [];
    // control.push((begin[0] + end[0]) / 2 - 2);
    // control.push((begin[1] + end[1]) / 2 + 2);
    // console.log(`[${begin[0]}, ${begin[1]}],`);
    // let t = 0;
    // while (t < 1) {
    //     t += 0.05;
    //     let x = Math.pow((1 - t), 2) * begin[0] + 2 * t * (1 - t) * control[0] + Math.pow(t, 2) * end[0];
    //     x.toFixed(6);
    //     let y = Math.pow((1 - t), 2) * begin[1] + 2 * t * (1 - t) * control[1] + Math.pow(t, 2) * end[1];
    //     y.toFixed(6);
    //     console.log(`[${x}, ${y}],`);
    // }
    // console.log(`[${end[0]}, ${end[1]}]`);

    //设置数据
    pathSimplifierIns.setData([{
        name: '路线0',
        path: [
            [108.764882, 34.438179],
            [108.283193, 34.161203],
            [107.821504, 33.864228],
            [107.379815, 33.547252],
            [106.958126, 33.210277],
            [106.556438, 32.853302],
            [106.174749, 32.476326],
            [105.813060, 32.079350],
            [105.471371, 31.662375],
            [105.149682, 31.225399],
            [104.847993, 30.768424],
            [104.566304, 30.291449],
            [104.304615, 29.794473],
            [104.062926, 29.277497],
            [103.841237, 28.740522],
            [103.639549, 28.183546],
            [103.457860, 27.606571],
            [103.296171, 27.009595],
            [103.154482, 26.392620],
            [103.032793, 25.755644],
            [102.931104, 25.098669],
            [102.931104, 25.098669]
        ]
    }]);

    //对第一条线路（即索引 0）创建一个巡航器
    var navg1 = pathSimplifierIns.createPathNavigator(0, {
        loop: true, //循环播放
        speed: 1000000 //巡航速度，单位千米/小时
    });

    navg1.start();
});

// 地图加载完成
map.on("complete", function () {
    // 无参数时，自动自适应所有覆盖物
    map.setFitView();
});
