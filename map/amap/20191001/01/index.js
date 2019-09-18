//创建地图
var map = new AMap.Map('container', {
    zoom: 10,
    center: [102.833722,24.881539] // 云南昆明
});

AMapUI.loadUI(['overlay/AwesomeMarker'],
    function (AwesomeMarker) {
        new AwesomeMarker({
            //设置awesomeIcon
            awesomeIcon: 'address-book',
            iconLabel: {
                style: {
                    color: '#333',
                    fontSize: '14px'
                }
            },
            iconStyle: 'orange',
            map: map,
            position: [102.833722,24.881539],
            title: 'awesomeIcon :' + 'address-book'
        });
    });
