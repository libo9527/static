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
        speed: 500000,
        name: '深圳 -> 长沙',
        path: [
            [114.085947, 22.547],
            [113.085947, 23.547],
            [113.065947, 24.547],
            [113.045947, 25.547],
            [113.025947, 26.547],
            [113.005947, 27.547],
            [112.93886, 28.22778]
        ],
        pathNavigatorStyle: {
            width: 24,
            height: 24,
            contentImagePath: '/static/map/amap/imgs/train.png'
        }
    }, {
        speed: 500000,
        name: '长沙 -> 北京',
        path: [
            [112.93886, 28.22778],
            [113.03886, 29.22778],
            [113.33886, 30.22778],
            [113.63886, 31.22778],
            [113.93886, 32.22778],
            [114.03886, 33.22778],
            [114.33886, 34.22778],
            [114.63886, 35.22778],
            [115.03886, 36.22778],
            [115.53886, 37.22778],
            [116.03886, 38.22778],
            [116.40717, 39.90469]
        ],
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
        name: '大荔 -> 太原',
        path: [
            [109.94217, 34.79566],
            [110.94217, 35.79566],
            [112.04217, 36.79566],
            [112.55067, 37.87059]
        ],
        pathNavigatorStyle: {
            width: 24,
            height: 24,
            contentImagePath: '/static/map/amap/imgs/train.png'
        }
    }, {
        speed: 500000,
        name: '太原 -> 北京',
        path: [
            [112.55067, 37.87059],
            [113.55067, 38.07059],
            [114.55067, 38.87059],
            [115.55067, 39.27059],
            [116.40717, 39.90469]
        ],
        pathNavigatorStyle: {
            width: 24,
            height: 24,
            contentImagePath: '/static/map/amap/imgs/train.png'
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
