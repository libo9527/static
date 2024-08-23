

//创建地图
var map = new AMap.Map('container', {
    zoom: 13,
    center: [114.030317, 22.57199],
    mapStyle: "amap://styles/macaron" //设置地图的显示样式
});

var distCountry = new AMap.DistrictLayer.Province({
    zIndex: 10, //设置图层层级
    adcode: '520000', // 贵州
    zooms: [2, 15], //设置图层显示范围
    SOC: "CHN", //设置显示国家
    depth: 2, //设置数据显示层级，0：显示国家面，1：显示省级，当国家为中国时设置depth为2的可以显示市一级
});

//3、设置行政区图层样式
distCountry.setStyles({
    "stroke-width": 2, //描边线宽
    fill: function (data) {
        //设置区域填充颜色，可根据回调信息返回区域信息设置不同填充色
        //回调返回区域信息数据，字段包括 SOC(国家代码)、NAME_ENG(英文名称)、NAME_CHN(中文名称)等
        //国家代码名称说明参考 https://a.amap.com/jsapi_demos/static/demo-center/js/soc-list.json
        return "#ffffffe7";
    },
});

//4、将简易行政区图层添加到地图
map.add(distCountry);

map.addControl(new AMap.ToolBar({position: 'RT'}));
map.addControl(new AMap.Scale({}));

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

function filterMarker(type) {
    // console.log('checkbox', document.getElementById("checkbox").checked);
    let showOnly = document.getElementById("checkbox").checked;
    let allMarkers = map.getAllOverlays('marker');
    allMarkers.forEach((marker) => {
        if (showOnly) {
            if (marker.type === type) {
                marker.show();
                marker.visible = true;
            } else {
                marker.hide();
                marker.visible = false;
            }
        } else {
            if (marker.type === type) {
                if (marker.visible) {
                    marker.hide();
                    marker.visible = false;
                } else {
                    marker.show();
                    marker.visible = true;
                }
            }
        }
    });
    map.setFitView();
}

//添加折线图
for (let polyline of polylines) {
    map.add(polyline);
}


// 地图加载完成
map.on("complete", function () {
    // 无参数时，自动自适应所有覆盖物
    map.setFitView();
});

