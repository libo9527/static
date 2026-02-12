var map = new AMap.Map('container', {
    rotateEnable: false,//是否开启地图旋转交互 鼠标右键 + 鼠标画圈移动 或 键盘Ctrl + 鼠标画圈移动
    pitchEnable: true, // 是否开启地图倾斜交互 鼠标右键 + 鼠标上下移动或键盘Ctrl + 鼠标上下移动
    zoom: 13.8, //初始化地图层级
    pitch: 0, // 地图俯仰角度，有效范围 0 度- 83 度
    rotation: 0,//初始地图顺时针旋转的角度
    viewMode: '3D', //开启3D视图,默认为关闭
    zooms: [2, 20],//地图显示的缩放级别范围
    center: [105.669102, 25.989377],//初始地图中心经纬度
    terrain: true, // 开启地形图
    mapStyle: "amap://styles/fresh" //设置地图的显示样式
});
AMap.plugin(['AMap.ControlBar', 'AMap.ToolBar'], function () {//异步加载插件
    var controlBar = new AMap.ControlBar({//控制地图旋转插件
        position: {
            right: '10px',
            top: '10px'
        }
    });
    map.addControl(controlBar);
    var toolBar = new AMap.ToolBar({//地图缩放插件
        position: {
            right: '40px',
            top: '110px'
        }

    });
    map.addControl(toolBar)
});

AMapUI.loadUI(['overlay/AwesomeMarker', 'overlay/SimpleInfoWindow'],
    function (AwesomeMarker, SimpleInfoWindow) {
        var infoWindow = new SimpleInfoWindow({
            offset: new AMap.Pixel(0, -31)
        });

        for (let item of data) {
            var marker = new AwesomeMarker({
                awesomeIcon: item.awesomeIcon,
                iconLabel: item.iconLabel,
                iconStyle: item.iconStyle,
                map: map,
                position: item.position,
                title: item.title,
                label: {
                    content: "<div class='label-content-text'>" + item.title + "</div>",
                    offset: new AMap.Pixel(0, -31)
                }
            });
            marker.type = item.type;
            marker.visible = item.visible;
            marker.infoTitle = item.title + "<a style='margin-left: 5px;' target='_blank' href='//uri.amap.com/marker?position=" + item.position[0] + "," + item.position[1] + "&name=" + item.title + "&callnative=1'>高德</a>";
            marker.infoBody = item.infoBody;
            marker.on('mouseover', function () {
                this.setTop(true);
                this.setLabel({
                    content: "<div class='label-content-text'>" + this.getTitle() + "</div>",
                    offset: new AMap.Pixel(0, -31)
                });
            });
            marker.on('mouseout', function () {
                this.setLabel();
            });
            marker.on('click', function (e) {
                map.setFitView([e.target]);
                infoWindow.setInfoTitle(e.target.infoTitle);
                infoWindow.setInfoBody(e.target.infoBody);
                infoWindow.open(map, e.target.getPosition());
                // e.target.markOnAMAP({
                //     name: e.target.title,
                //     position: e.target.getPosition()
                // })
            });
        }
    });