//创建地图
var map = new AMap.Map('container', {
    zoom: 8,
    center: [114.412599, 23.079404]
});

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

// 地图加载完成
map.on("complete", function () {
    // 无参数时，自动自适应所有覆盖物
    map.setFitView();
});
