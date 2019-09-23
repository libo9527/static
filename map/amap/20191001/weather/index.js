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

        var infoWindow = new SimpleInfoWindow({
            infoTitle: '<strong>实时天气</strong>',
            //基点指向marker的头部位置
            offset: new AMap.Pixel(0, -35)
        });

        var data = [{
            id: 1,
            title: '云南昆明',
            administrativeRegion: '昆明市',
            position: [102.833722, 24.881539]
        }, {
            id: 2,
            title: '云南大理',
            administrativeRegion: '大理市',
            position: [100.2676400000, 25.6064800000]
        }, {
            id: 3,
            title: '云南丽江',
            administrativeRegion: '丽江市',
            position: [100.233026, 26.872108]
        },];

        for (var item of data) {
            var marker = new AwesomeMarker({
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
                position: item.position,
                title: item.title
            });
            marker.administrativeRegion = item.administrativeRegion;
            marker.on('click', function () {
                setWeatherContent(this, infoWindow);
                infoWindow.open(map, this.getPosition());
            });
            if (item.title === '云南昆明') {
                marker.emit('click');
            }
        }

        function setWeatherContent(marker, infoWindow) {
            AMap.plugin('AMap.Weather', function () {
                var content = '';
                var weather = new AMap.Weather();
                //查询实时天气信息, 查询的城市到行政级别的城市，如朝阳区、杭州市
                weather.getLive(marker.administrativeRegion, function (err, data) {
                    if (!err) {
                        var str = [];
                        str.push('<p>城市/区：' + data.city + '</p>');
                        str.push('<p>天气：' + data.weather + '</p>');
                        str.push('<p>温度：' + data.temperature + '℃</p>');
                        str.push('<p>风向：' + data.windDirection + '</p>');
                        str.push('<p>风力：' + data.windPower + ' 级</p>');
                        str.push('<p>空气湿度：' + data.humidity + '</p>');
                        str.push('<p>发布时间：' + data.reportTime + '</p>');

                        content = '<div">' + str.join('') + '</div>';

                        infoWindow.setInfoBody(content);
                    }
                });

                //未来4天天气预报
                weather.getForecast(marker.administrativeRegion, function (err, data) {
                    if (err) {
                        return;
                    }
                    var str = [];
                    for (var i = 0, dayWeather; i < data.forecasts.length; i++) {
                        dayWeather = data.forecasts[i];
                        str.push(dayWeather.date + ' <span class="weather">' + dayWeather.dayWeather + '</span> ' + dayWeather.nightTemp + '~' + dayWeather.dayTemp + '℃');
                    }
                    document.getElementById('forecast').innerHTML = str.join('<br>');
                    document.getElementById('forecastname').innerHTML = '(' + marker.administrativeRegion + ')';
                });
            });
        }
    });

// 地图加载完成
map.on("complete", function () {
    // 无参数时，自动自适应所有覆盖物
    map.setFitView();
});
