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

const routes = [{
    name: '深圳 -> 北京',
    routes: [{
        name: '深圳 -> 长沙',
        path: [
            [114.085947, 22.547],
            [113.085947, 23.547],
            [113.065947, 24.547],
            [113.045947, 25.547],
            [113.025947, 26.547],
            [113.005947, 27.547],
            [112.93886, 28.22778]
        ]
    }, {
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
        ]
    }]
}]

const data = {
    markers,
    routes
}
