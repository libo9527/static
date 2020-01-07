const markers = [{
    title: "北京",
    position: [116.40717, 39.90469],
    awesomeIcon: "star",
    iconLabel: {style: {color: "salmon", fontSize: "14px"}},
    iconStyle: "black"
}, {
    title: "大荔",
    position: [109.94217, 34.79566],
    awesomeIcon: "star",
    iconLabel: {style: {color: "salmon", fontSize: "14px"}},
    iconStyle: "black"
}, {
    title: "太原",
    position: [112.55067, 37.87059],
    awesomeIcon: "star",
    iconLabel: {style: {color: "salmon", fontSize: "14px"}},
    iconStyle: "black"
}, {
    title: "深圳",
    position: [114.085947, 22.547],
    awesomeIcon: "star",
    iconLabel: {style: {color: "salmon", fontSize: "14px"}},
    iconStyle: "black"
}, {
    title: "长沙",
    position: [112.93886, 28.22778],
    awesomeIcon: "star",
    iconLabel: {style: {color: "salmon", fontSize: "14px"}},
    iconStyle: "black"
}, {
    title: "北京",
    position: [116.40717, 39.90469],
    awesomeIcon: "star",
    iconLabel: {style: {color: "salmon", fontSize: "14px"}},
    iconStyle: "black"
}]

const lines = [{
    name: '深圳 -> 北京',
    routes: [{
        speed: 250000,
        name: '深圳 -> 长沙',
        points: [{
            name: "深圳 08:10 - 08:10",
            lnglat: [114.085947, 22.547]
        }, {
            name: "广州 09:52 - 10:07",
            lnglat: [113.25834, 23.149135]
        }, {
            name: "韶关东 12:23 - 12:29",
            lnglat: [113.60425, 24.79188]
        }, {
            name: "郴州 14:08 - 14:14",
            lnglat: [113.03317, 25.80823]
        }, {
            name: "衡阳 15:57 - 16:03",
            lnglat: [112.63134, 26.88922]
        }, {
            name: "株洲 17:28 - 17:34",
            lnglat: [113.15673, 27.83548]
        }, {
            name: '长沙 18:13 - 18:24',
            lnglat: [112.93886, 28.22778]
        }],
        pathNavigatorStyle: {
            width: 24,
            height: 24,
            contentImagePath: '/static/map/amap/imgs/train.png'
        }
    }, {
        speed: 500000,
        name: '长沙 -> 北京',
        points: [{
            name: 'aaa 08:51 - 08:53',
            lnglat: [112.93886, 28.22778]
        }, {
            name: 'bbb 08:51 - 08:53',
            lnglat: [116.40717, 39.90469]
        }],
        pathNavigatorStyle: {
            width: 24,
            height: 24,
            contentImagePath: '/static/map/amap/imgs/plane.png'
        }
    }]
}, {
    name: '大荔 -> 北京',
    routes: [{
        speed: 500000,
        name: '大荔 -> 太原(D2504)',
        points:
            [{
                name: "大荔 08:51 - 08:53",
                lnglat: [109.94217, 34.79566]
            }, {
                name: "永济北 09:12 - 09:14",
                lnglat: [110.42467, 35.02761]
            }, {
                name: "侯马西 09:50 - 09:52",
                lnglat: [111.28822, 35.60192]
            }, {
                name: "襄汾西 10:05 - 10:07",
                lnglat: [111.33741, 35.83836]
            }, {
                name: "临汾西 10:20 - 10:22",
                lnglat: [111.46567, 36.10204]
            }, {
                name: "霍州东 10:46 - 10:48",
                lnglat: [111.83734, 36.56426]
            }, {
                name: "太谷西 11:26 - 11:29",
                lnglat: [112.50956, 37.44812]
            }, {
                name: "太原南 11:49 - 11:49",
                lnglat: [112.55067, 37.87059]
            }],
        pathNavigatorStyle: {
            width: 24,
            height: 24,
            contentImagePath: '/static/map/amap/imgs/high-speed-rail.png'
        }
    }, {
        speed: 500000,
        name: '太原 -> 北京',
        points:
            [{
                name: "太原南 14:14 - 14:29",
                lnglat: [112.55067, 37.87059]
            }, {
                name: "阳泉北 15:15 - 15:18",
                lnglat: [113.4384, 38.11536]
            }, {
                name: "石家庄 16:02 - 16:05",
                lnglat: [114.484442, 38.010613]
            }, {
                name: "保定东 16:41 - 16:47",
                lnglat: [115.60071, 38.86381]
            }, {
                name: "北京西 17:27 - 17:27",
                lnglat: [116.40717, 39.90469]
            }],
        pathNavigatorStyle: {
            width: 24,
            height: 24,
            contentImagePath: '/static/map/amap/imgs/high-speed-rail.png'
        }
    }]
}];

let result = [];
let startPathIndex = 0;
let index = 0;
lines.forEach((item1, index1) => {
    item1.routes.forEach((item2, index2) => {
        item2.startPathIndex = startPathIndex;
        item2.nextPathIndex = index + 1;
        if (index2 + 1 === item1.routes.length) {
            item2.nextPathIndex = startPathIndex;
        }
        result.push(item2);
        index++;
    });
    startPathIndex = index;
});

const data = {
    markers,
    routes: result
}
