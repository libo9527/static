//创建地图
var map = new AMap.Map('container', {
    zoom: 8,
    center: [102.833722, 24.881539]
});

map.addControl(new AMap.ToolBar({}));
map.addControl(new AMap.Scale({}));

AMapUI.loadUI(['overlay/AwesomeMarker'],
    function (AwesomeMarker) {

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
                e.target.markOnAMAP({
                    name: e.target.title,
                    position: e.target.getPosition()
                })
            });
        }
    });

// 地图加载完成
map.on("complete", function () {
    // 无参数时，自动自适应所有覆盖物
    map.setFitView();
});
