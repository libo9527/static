const center = [112.71785, 27.271047];

//构建一个数据项数组，数据项本身没有格式要求，但需要支持getDataId和getPosition
const data = [{
    id: 1,
    position: [112.73206, 27.24634],
    name: '南岳衡山风景区游客中心',
    address: '金沙路金盆小区47号',
    infoWinContent: '南岳衡山风景区游客中心',
    listDesc: '南岳衡山风景区游客中心'
},
    {
        id: 2,
        position: [112.733413, 27.247555],
        name: '胜利坊',
        address: '胜利坊',
        infoWinContent: '南岳镇金沙路南岳衡山风景名胜区内',
        listDesc: '胜利坊'
    },
    {
        id: 3,
        position: [112.729146, 27.256958],
        name: '华严湖',
        address: '华严湖',
        infoWinContent: '南岳镇金沙路南岳衡山风景名胜区内',
        listDesc: '华严湖'
    },
    {
        id: 4,
        position: [112.7229, 27.265181],
        name: '中桎木潭',
        address: '南岳镇金沙路南岳衡山风景名胜区内',
        infoWinContent: '中桎木潭',
        listDesc: '中桎木潭'
    },
    {
        id: 5,
        position: [112.718337, 27.264839],
        name: '南岳忠烈祠',
        address: '南岳镇金沙路南岳衡山风景名胜区内',
        infoWinContent: '南岳忠烈祠',
        listDesc: '南岳忠烈祠'
    },
    {
        id: 6,
        position: [112.719218, 27.267401],
        name: '梵音谷',
        address: '南岳镇金沙路南岳衡山风景名胜区内',
        infoWinContent: '梵音谷',
        listDesc: '梵音谷'
    },
    {
        id: 7,
        position: [112.71077, 27.269931],
        name: '穿岩诗林',
        address: '南岳镇金沙路南岳衡山风景名胜区内',
        infoWinContent: '穿岩诗林',
        listDesc: '穿岩诗林'
    },
    {
        id: 8,
        position: [112.708272, 27.271616],
        name: '半山亭索道站',
        address: '半山亭索道站',
        infoWinContent: '南岳镇金沙路南岳衡山风景名胜区内',
        listDesc: '半山亭索道站'
    },
    {
        id: 9,
        position: [112.701851, 27.287317],
        name: '南天门',
        address: '南岳镇金沙路南岳衡山风景名胜区内',
        infoWinContent: '南天门',
        listDesc: '南天门'
    },
    {
        id: 10,
        position: [112.701736, 27.288548],
        name: '狮子岩',
        address: '南岳镇金沙路南岳衡山风景名胜区内',
        infoWinContent: '狮子岩',
        listDesc: '狮子岩'
    },
    {
        id: 11,
        position: [112.699042, 27.290603],
        name: '高台古寺',
        address: '南岳镇金沙路南岳衡山风景名胜区内',
        infoWinContent: '高台古寺',
        listDesc: '高台古寺'
    },
    {
        id: 12,
        position: [112.69953, 27.291558],
        name: '上峰寺',
        address: '南岳镇金沙路南岳衡山风景名胜区内',
        infoWinContent: '上峰寺',
        listDesc: '上峰寺'
    },
    {
        id: 13,
        position: [112.695149, 27.293783],
        name: '祝融峰',
        address: '南岳镇金沙路南岳衡山风景名胜区内',
        infoWinContent: '祝融峰',
        listDesc: '祝融峰'
    },
    {
        id: 14,
        position: [112.69264, 27.293391],
        name: '会仙桥',
        address: '南岳镇金沙路南岳衡山风景名胜区内',
        infoWinContent: '会仙桥',
        listDesc: '会仙桥'
    },
    {
        id: 15,
        position: [112.687248, 27.277239],
        name: '民俗文化城',
        address: '南岳镇金沙路南岳衡山风景名胜区内',
        infoWinContent: '民俗文化城',
        listDesc: '民俗文化城'
    },
    {
        id: 16,
        position: [112.69951, 27.273648],
        name: '麻姑仙境',
        address: '南岳镇金沙路南岳衡山风景名胜区内',
        infoWinContent: '麻姑仙境',
        listDesc: '麻姑仙境'
    },
    {
        id: 17,
        position: [112.70317, 27.266967],
        name: '磨镜台',
        address: '南岳镇金沙路南岳衡山风景名胜区内',
        infoWinContent: '磨镜台',
        listDesc: '磨镜台'
    },
    {
        id: 18,
        position: [112.710143, 27.259234],
        name: '南台寺',
        address: '南岳镇金沙路南岳衡山风景名胜区内',
        infoWinContent: '南台寺',
        listDesc: '南台寺'
    }];

const path = data.map(item => {
    return item.position
});
path.push(data[0].position);

// data.forEach((item, index) => {
//     item.id = index + 1;
// });
// console.log(data);
