const administrativeCenter = [];
const traffic = [{
    id: 6,
    title: "大荔站",
    position: [109.92573, 34.83477],
    awesomeIcon: "subway",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "orange",
    infoBody: "",
    type: "动车/高铁站",
    visible: true
}, {
    id: 6,
    title: "成都东站",
    position: [104.14, 30.63],
    awesomeIcon: "subway",
    iconLabel: {style: {color: "#333", fontSize: "14px"}},
    iconStyle: "orange",
    infoBody: "",
    type: "动车/高铁站",
    visible: true
}];
const hotel = [];
const food = [];
const scenery = [
    {
        id: 1,
        title: "九寨沟",
        position: [103.912874, 33.142376],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
        iconStyle: "green",
        infoBody: "",
        type: "自然景观类景区",
        visible: true
    },
    {
        id: 2,
        title: "黄龙",
        position: [103.715643, 32.799145],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
        iconStyle: "green",
        infoBody: "",
        type: "自然景观类景区",
        visible: true
    },
    {
        id: 3,
        title: "峨眉山",
        position: [103.339087, 29.547200],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
        iconStyle: "green",
        infoBody: "",
        type: "自然景观类景区",
        visible: true
    },
    {
        id: 4,
        title: "稻城亚丁",
        position: [100.286793, 28.458898],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
        iconStyle: "green",
        infoBody: "",
        type: "自然景观类景区",
        visible: true
    },
    {
        id: 5,
        title: "四姑娘山",
        position: [102.826018, 31.094381],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
        iconStyle: "green",
        infoBody: "",
        type: "自然景观类景区",
        visible: true
    },
    {
        id: 6,
        title: "海螺沟",
        position: [102.018148, 29.576446],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
        iconStyle: "green",
        infoBody: "",
        type: "自然景观类景区",
        visible: true
    },
    {
        id: 7,
        title: "碧峰峡",
        position: [103.082643, 30.116346],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
        iconStyle: "green",
        infoBody: "",
        type: "自然景观类景区",
        visible: true
    },
    {
        id: 9,
        title: "天台山",
        position: [103.304742, 30.445077],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
        iconStyle: "green",
        infoBody: "",
        type: "自然景观类景区",
        visible: true
    },
    {
        id: 10,
        title: "都江堰",
        position: [103.613469, 30.997572],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
        iconStyle: "green",
        infoBody: "",
        type: "自然景观类景区",
        visible: true
    },
    {
        id: 10,
        title: "青城山",
        position: [103.56, 30.90],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightgreen", fontSize: "14px"}},
        iconStyle: "green",
        infoBody: "",
        type: "自然景观类景区",
        visible: true
    },
    {
        id: 11,
        title: "文殊院",
        position: [104.07,30.68],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightcoral", fontSize: "14px"}},
        iconStyle: "red",
        infoBody: "",
        type: "人文景观类景区",
        visible: true
    },
    {
        id: 11,
        title: "宽窄巷子",
        position: [104.05,30.66],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightcoral", fontSize: "14px"}},
        iconStyle: "red",
        infoBody: "",
        type: "人文景观类景区",
        visible: true
    },
    {
        id: 11,
        title: "抚琴夜市",
        position: [104.04,30.68],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightcoral", fontSize: "14px"}},
        iconStyle: "red",
        infoBody: "",
        type: "人文景观类景区",
        visible: true
    },
    {
        id: 11,
        title: "春熙路",
        position: [104.08,30.66],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightcoral", fontSize: "14px"}},
        iconStyle: "red",
        infoBody: "",
        type: "人文景观类景区",
        visible: true
    },
    {
        id: 11,
        title: "太古里",
        position: [104.08,30.65],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightcoral", fontSize: "14px"}},
        iconStyle: "red",
        infoBody: "",
        type: "人文景观类景区",
        visible: true
    },
    {
        id: 11,
        title: "大慈寺",
        position: [104.08,30.65],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightcoral", fontSize: "14px"}},
        iconStyle: "red",
        infoBody: "",
        type: "人文景观类景区",
        visible: true
    },
    {
        id: 11,
        title: "乐山大佛",
        position: [103.765523, 29.543021],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightcoral", fontSize: "14px"}},
        iconStyle: "red",
        infoBody: "",
        type: "人文景观类景区",
        visible: true
    },
    {
        id: 13,
        title: "剑门蜀道剑门关",
        position: [105.439209, 32.241828],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightcoral", fontSize: "14px"}},
        iconStyle: "red",
        infoBody: "",
        type: "人文景观类景区",
        visible: true
    },
    {
        id: 15,
        title: "朱德故里",
        position: [106.152344, 31.617895],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightcoral", fontSize: "14px"}},
        iconStyle: "red",
        infoBody: "",
        type: "人文景观类景区",
        visible: true
    },
    {
        id: 18,
        title: "安仁古镇",
        position: [103.812345, 30.726789],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightcoral", fontSize: "14px"}},
        iconStyle: "red",
        infoBody: "",
        type: "人文景观类景区",
        visible: true
    },

    {
        id: 18,
        title: "成都博物馆",
        position: [104.06, 30.66],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightcoral", fontSize: "14px"}},
        iconStyle: "red",
        infoBody: "",
        type: "人文景观类景区",
        visible: true
    },
    {
        id: 18,
        title: "成都大熊猫繁育研究基地",
        position: [104.14, 30.74],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightcoral", fontSize: "14px"}},
        iconStyle: "red",
        infoBody: "",
        type: "人文景观类景区",
        visible: true
    },
    {
        id: 18,
        title: "三星堆博物馆",
        position: [104.22, 31.00],
        awesomeIcon: "photo",
        iconLabel: {style: {color: "lightcoral", fontSize: "14px"}},
        iconStyle: "red",
        infoBody: "",
        type: "人文景观类景区",
        visible: true
    },

    {
        "id": 19,
        "title": "武侯祠",
        "position": [104.047992, 30.646168],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightcoral", "fontSize": "14px"}},
        "iconStyle": "red",
        "infoBody": "",
        "type": "人文景观类景区",
        "visible": true
    },
    {
        "id": 20,
        "title": "杜甫草堂博物馆",
        "position": [104.026512, 30.659489],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightcoral", "fontSize": "14px"}},
        "iconStyle": "red",
        "infoBody": "",
        "type": "人文景观类景区",
        "visible": true
    },
    {
        "id": 21,
        "title": "大足石刻",
        "position": [105.801784, 29.752144],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightcoral", "fontSize": "14px"}},
        "iconStyle": "red",
        "infoBody": "",
        "type": "人文景观类景区",
        "visible": true
    },
    {
        "id": 22,
        "title": "酉阳桃花源",
        "position": [108.722222, 28.891667],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightcoral", "fontSize": "14px"}},
        "iconStyle": "red",
        "infoBody": "",
        "type": "人文景观类景区",
        "visible": true
    },
    {
        "id": 25,
        "title": "武隆喀斯特",
        "position": [107.711737, 29.493889],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightgreen", "fontSize": "14px"}},
        "iconStyle": "green",
        "infoBody": "",
        "type": "自然景观类景区",
        "visible": true
    },
    {
        "id": 26,
        "title": "巫山小三峡—小小三峡",
        "position": [109.8, 31.166667],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightgreen", "fontSize": "14px"}},
        "iconStyle": "green",
        "infoBody": "",
        "type": "自然景观类景区",
        "visible": true
    },
    {
        "id": 28,
        "title": "南川金佛山",
        "position": [107.1, 28.95],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightgreen", "fontSize": "14px"}},
        "iconStyle": "green",
        "infoBody": "",
        "type": "自然景观类景区",
        "visible": true
    },
    {
        "id": 36,
        "title": "三峡大坝-屈原故里旅游区",
        "position": [111.008713, 30.832733],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightgreen", "fontSize": "14px"}},
        "iconStyle": "green",
        "infoBody": "",
        "type": "自然景观类景区",
        "visible": true
    },
    {
        "id": 37,
        "title": "三峡人家风景区",
        "position": [111.042343, 30.763824],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightgreen", "fontSize": "14px"}},
        "iconStyle": "green",
        "infoBody": "",
        "type": "自然景观类景区",
        "visible": true
    },
    {
        "id": 38,
        "title": "清江画廊旅游度假区",
        "position": [111.178635, 30.364521],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightgreen", "fontSize": "14px"}},
        "iconStyle": "green",
        "infoBody": "",
        "type": "自然景观类景区",
        "visible": true
    },
    {
        "id": 39,
        "title": "武陵源-天门山旅游区",
        "position": [110.488037, 29.117028],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightgreen", "fontSize": "14px"}},
        "iconStyle": "green",
        "infoBody": "",
        "type": "自然景观类景区",
        "visible": true
    },
    {
        "id": 40,
        "title": "梵净山旅游区",
        "position": [108.471016, 27.947212],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightgreen", "fontSize": "14px"}},
        "iconStyle": "green",
        "infoBody": "",
        "type": "自然景观类景区",
        "visible": true
    },
    {
        "id": 41,
        "title": "赤水丹霞旅游区",
        "position": [105.778023, 28.456055],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightgreen", "fontSize": "14px"}},
        "iconStyle": "green",
        "infoBody": "",
        "type": "自然景观类景区",
        "visible": true
    },
    {
        "id": 42,
        "title": "遵义会议会址旅游景区",
        "position": [106.92141, 27.727119],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightcoral", "fontSize": "14px"}},
        "iconStyle": "red",
        "infoBody": "",
        "type": "人文景观类景区",
        "visible": true
    },
    {
        "id": 43,
        "title": "百里杜鹃景区",
        "position": [105.79535, 27.176472],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightgreen", "fontSize": "14px"}},
        "iconStyle": "green",
        "infoBody": "",
        "type": "自然景观类景区",
        "visible": true
    },
    {
        "id": 44,
        "title": "玉龙雪山景区",
        "position": [100.193035, 27.056217],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightgreen", "fontSize": "14px"}},
        "iconStyle": "green",
        "infoBody": "",
        "type": "自然景观类景区",
        "visible": true
    },
    {
        "id": 45,
        "title": "丽江古城景区",
        "position": [100.235517, 26.870507],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightcoral", "fontSize": "14px"}},
        "iconStyle": "red",
        "infoBody": "",
        "type": "人文景观类景区",
        "visible": true
    },
    {
        "id": 1,
        "title": "洪崖洞",
        "position": [106.579027, 29.562204],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightcoral", "fontSize": "14px"}},
        "iconStyle": "red",
        "infoBody": "",
        "type": "人文景观类景区",
        "visible": true
    },
    {
        "id": 3,
        "title": "武隆天生三桥",
        "position": [107.804818, 29.433682],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightgreen", "fontSize": "14px"}},
        "iconStyle": "green",
        "infoBody": "",
        "type": "自然景观类景区",
        "visible": true
    },
    {
        "id": 4,
        "title": "龙水峡地缝（龙）",
        "position": [107.830462, 29.427365],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightgreen", "fontSize": "14px"}},
        "iconStyle": "green",
        "infoBody": "",
        "type": "自然景观类景区",
        "visible": true
    },
    {
        "id": 5,
        "title": "武隆喀斯特旅游区",
        "position": [107.711737, 29.493889],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightgreen", "fontSize": "14px"}},
        "iconStyle": "green",
        "infoBody": "",
        "type": "自然景观类景区",
        "visible": true
    },
    {
        "id": 6,
        "title": "长江索道（渝中区北站）",
        "position": [106.583667, 29.559401],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightcoral", "fontSize": "14px"}},
        "iconStyle": "red",
        "infoBody": "",
        "type": "人文景观类景区",
        "visible": true
    },
    {
        "id": 7,
        "title": "重庆解放碑",
        "position": [106.576880, 29.556728],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightcoral", "fontSize": "14px"}},
        "iconStyle": "red",
        "infoBody": "",
        "type": "人文景观类景区",
        "visible": true
    },
    {
        "id": 1,
        "title": "李子坝（轻轨穿楼观景平台）",
        "position": [106.534353, 29.556428],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightcoral", "fontSize": "14px"}},
        "iconStyle": "red",
        "infoBody": "",
        "type": "人文景观类景区",
        "visible": true
    },
    {
        "id": 2,
        "title": "观音桥商圈（步行街核心）",
        "position": [106.533600, 29.572517],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightcoral", "fontSize": "14px"}},
        "iconStyle": "red",
        "infoBody": "",
        "type": "人文景观类景区",
        "visible": true
    },
    {
        "id": 3,
        "title": "山城步道（中兴路入口）",
        "position": [106.566712, 29.550481],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightcoral", "fontSize": "14px"}},
        "iconStyle": "red",
        "infoBody": "",
        "type": "人文景观类景区",
        "visible": true
    },
    {
        "id": 1,
        "title": "十八梯传统风貌区",
        "position": [106.573042, 29.551015],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightcoral", "fontSize": "14px"}},
        "iconStyle": "red",
        "infoBody": "",
        "type": "人文景观类景区",
        "visible": true
    },
    {
        "id": 2,
        "title": "重庆来福士广场",
        "position": [106.587237, 29.564826],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightcoral", "fontSize": "14px"}},
        "iconStyle": "red",
        "infoBody": "",
        "type": "人文景观类景区",
        "visible": true
    },
    {
        "id": 3,
        "title": "千厮门嘉陵江大桥",
        "position": [106.576790, 29.569264],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightcoral", "fontSize": "14px"}},
        "iconStyle": "red",
        "infoBody": "",
        "type": "人文景观类景区",
        "visible": true
    },
    {
        "id": 4,
        "title": "武隆天生三桥风景区",
        "position": [107.804818, 29.433682],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightgreen", "fontSize": "14px"}},
        "iconStyle": "green",
        "infoBody": "",
        "type": "自然景观类景区",
        "visible": true
    },
    {
        "id": 5,
        "title": "仙女山国家森林公园",
        "position": [107.749641, 29.495371],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightgreen", "fontSize": "14px"}},
        "iconStyle": "green",
        "infoBody": "",
        "type": "自然景观类景区",
        "visible": true
    },
    {
        "id": 6,
        "title": "三峡之巅景区",
        "position": [109.624690, 31.026835],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightgreen", "fontSize": "14px"}},
        "iconStyle": "green",
        "infoBody": "",
        "type": "自然景观类景区",
        "visible": true
    },
    {
        "id": 7,
        "title": "白帝城·瞿塘峡景区",
        "position": [109.572869, 31.046100],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightcoral", "fontSize": "14px"}},
        "iconStyle": "red",
        "infoBody": "",
        "type": "人文景观类景区",
        "visible": true
    },
    {
        "id": 8,
        "title": "乌江画廊景区",
        "position": [108.213590, 29.191122],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightgreen", "fontSize": "14px"}},
        "iconStyle": "green",
        "infoBody": "",
        "type": "自然景观类景区",
        "visible": true,
        "photos": [
            {
                "url": "../imgs/乐山大佛01.jpg",
            }
        ]
    },
    {
        "id": 9,
        "title": "金佛山景区",
        "position": [107.100000, 28.950000],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightgreen", "fontSize": "14px"}},
        "iconStyle": "green",
        "infoBody": "",
        "type": "自然景观类景区",
        "visible": true
    },
    {
        "id": 10,
        "title": "酉阳桃花源景区",
        "position": [108.722222, 28.891667],
        "awesomeIcon": "photo",
        "iconLabel": {"style": {"color": "lightcoral", "fontSize": "14px"}},
        "iconStyle": "red",
        "infoBody": "",
        "type": "人文景观类景区",
        "visible": true
    }

];

const innerScenery = [];

const polylines = [];


let data = [];
data.push(...administrativeCenter);
data.push(...traffic);
data.push(...hotel);
data.push(...food);
data.push(...scenery);
data.push(...innerScenery);


