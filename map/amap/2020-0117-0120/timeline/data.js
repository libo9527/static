const data = [{
    timestamp: '2020-01-17 22:00:00',
    imgUrls: [],
    title: '金地花园 - 深圳站<span style="color: orangered;"> 地铁 46 分钟</span>',
    content:
        '从金地花园出发，前往深圳站<br>7号线（太安方向）上沙站 - 石厦站<br>3号线（双龙方向）石厦站 - 老街站<br>1号线（罗湖方向）老街站 - 罗湖站',
    amapUrl: 'https://surl.amap.com/1jfRJGk1x2Qm'
},
    {
        timestamp: '2020-01-17 22:50:00',
        imgUrls: [],
        title: '深圳站附近超市购物',
        content: '在深圳站附近超市买些补给：<br>' +
            '1. 两桶泡面、火腿肠<br>' +
            '2. 巧克力<br>' +
            '3. 功能饮料<br>' +
            '4. 烟<br>' +
            '5. 取现金<br>' +
            ''
    }, {
        timestamp: '2020-01-18 01:05:00',
        imgUrls: [],
        title: 'K6618 深圳站 - 株洲站',
        content: '从深圳站出发，前往株洲'
    },
    {
        timestamp: '2020-01-18 10:00:00',
        imgUrls: [],
        title: '确认火车有没有晚点',
        content: '查看时间，确认火车有没有晚点<br>如果可能晚点的话尽快改签下一趟火车<br>或者搜寻公车路线'
    },
    {
        timestamp: '2020-01-18 10:43:00',
        imgUrls: [],
        title: 'K6618 深圳站 - 株洲站',
        content: '到达株洲站'
    },
    {
        timestamp: '2020-01-18 10:59:00',
        imgUrls: [],
        title: 'K9001 株洲站 - 衡山站',
        content: '从株洲站出发，前往衡山'
    },
    {
        timestamp: '2020-01-18 11:49:00',
        imgUrls: [],
        title: 'K9001 株洲站 - 衡山站',
        content: '到达衡山站'
    },
    {
        timestamp: '2020-01-18 12:00:00',
        imgUrls:
            ['https://06imgmini.eastday.com/mobile/20191130/20191130193812_c6baa20e2c69471efba5a16dfbb58f8b_1.jpeg',
                'http://p1-q.mafengwo.net/s8/M00/B9/FB/wKgBpVXxdqCAT40nAAyEKEcjfcM14.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90'],
        title: '城际巴士 衡山站 - 南岳衡山风景区',
        content:
            '衡山火车站——南岳衡山风景区<br>列车到达衡山火车站，在出站后约100米处可转乘汽车：<br>1）、乘坐“衡山火车站-南岳”的直达巴士<span style="color: orange">大约 40 分钟</span>：<br>票价（5元/人）,运营时间（早07:30---晚17:30）。<br>2）、乘坐“1路”公交车（1元/人）至“两路口汽车站”，<br>再转乘“衡山-南岳”的城际巴士（5元/人）到达南岳长途汽车站。<br>提示：公交车运营时间：（早06:30---晚18:30），<br>城际巴士运营时间：（早07:30---晚17:30）。<br>3）、如果您是晚间达到衡山，建议您乘坐出租车前往南岳衡山风景区：<br>票价约为（15元/人或者60/车）价格是按计表打价，如是淡季也可和司机讲价。'
    },
    {
        timestamp: '2020-01-18 12:40:00',
        imgUrls:
            ['http://n1-q.mafengwo.net/s11/M00/EC/69/wKgBEFpWGtuAJm5ZAAfJHjZF6kc33.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90',
                'http://b1-q.mafengwo.net/s12/M00/31/0F/wKgED1wXCUSAB84SAAZR2Dg1D2k77.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90'],
        title: '城际巴士 衡山站 - 南岳衡山风景区',
        content: '到达南岳衡山风景区南岳汽车站'
    },
    {
        timestamp: '2020-01-18 12:45:00',
        imgUrls:
            ['http://p1-q.mafengwo.net/s11/M00/EC/67/wKgBEFpWGtiANE_-AAU3WkmS0_g24.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90'],
        title:
            '免费1路公交车 南岳汽车站 - 衡山游客中心<span style="color: orangered;"> 24 分钟</span>',
        content: '从南岳汽车站出发，前往衡山游客中心',
        amapUrl: 'https://surl.amap.com/tnhDCgi2OA'
    },
    {
        timestamp: '2020-01-19 14:40:00',
        title:
            '免费1路公交车 衡山游客中心 - 南岳汽车站<span style="color: orangered;"> 24 分钟</span>',
        imgUrls:
            ['http://p1-q.mafengwo.net/s11/M00/EC/67/wKgBEFpWGtiANE_-AAU3WkmS0_g24.jpeg?imageMogr2%2Fthumbnail%2F1360x%2Fstrip%2Fquality%2F90'],
        content: '到达南岳汽车站',
        amapUrl: 'https://surl.amap.com/tnhDCgi2OA'
    },
    {
        timestamp: '2020-01-19 14:40:00',
        title:
            '城际巴士 南岳汽车站 - 衡山站<span style="color: orangered;"> 40 分钟</span>',
        imgUrls: [],
        content: '从南岳汽车站出发，前往衡山站'
    },
    {
        timestamp: '2020-01-19 15:20:00',
        title:
            '城际巴士 南岳汽车站 - 衡山站<span style="color: orangered;"> 40 分钟</span>',
        imgUrls: [],
        content: '到达衡山站'
    },
    {
        timestamp: '2020-01-19 15:35:00',
        imgUrls: [],
        title: 'K9002 衡山站 - 长沙站',
        content: '从衡山站出发，前往长沙'
    },
    {
        timestamp: '2020-01-19 17:19:00',
        imgUrls: [],
        title: 'K9002 衡山站 - 长沙站',
        content: '到达长沙站'
    },
    {
        timestamp: '2020-01-19 17:25:00',
        imgUrls: [],
        title: '地铁2号线 长沙站 - 橘子洲<span style="color: orangered;"> 25 分钟</span>',
        content: '从长沙站出发，前往橘子洲',
        amapUrl: 'https://surl.amap.com/lReSADX40w'
    },
    {
        timestamp: '2020-01-19 17:50:00',
        imgUrls: [],
        title: '地铁2号线 长沙站 - 橘子洲<span style="color: orangered;"> 25 分钟</span>',
        content: '到达橘子洲，游览<span style="color: #e99b47;"> 20～30 分钟</span>',
        amapUrl: 'https://surl.amap.com/lReSADX40w'
    },
    {
        timestamp: '2020-01-19 18:20:00',
        imgUrls: [],
        title: '地铁2号线 橘子洲 - 路飞青年旅舍<span style="color: orangered;"> 12 分钟</span>',
        content: '从橘子洲出发，前往路飞青年旅舍',
        amapUrl: 'https://surl.amap.com/PicQT6685i'
    },
    {
        timestamp: '2020-01-19 18:30:00',
        imgUrls: [],
        title: '地铁2号线 橘子洲 - 路飞青年旅舍<span style="color: orangered;"> 12 分钟</span>',
        content: '到达路飞青年旅舍',
        amapUrl: 'https://surl.amap.com/PicQT6685i'
    },
    {
        timestamp: '2020-01-20 07:45:00',
        imgUrls: [],
        title: 'K968 长沙站 - 岳阳站',
        content: '从长沙站出发，前往岳阳'
    },
    {
        timestamp: '2020-01-20 09:13:00',
        imgUrls: [],
        title: 'K968 长沙站 - 岳阳站',
        content: '到达岳阳站'
    },
    {
        timestamp: '2020-01-20 15:40:00',
        imgUrls: [],
        title: '中国联合航空KN5806 岳阳三荷机场 - 北京大兴国际机场',
        content: '从岳阳三荷机场出发，前往北京'
    },
    {
        timestamp: '2020-01-20 18:00:00',
        imgUrls: [],
        title: '中国联合航空KN5806 岳阳三荷机场 - 北京大兴国际机场',
        content: '到达北京大兴国际机场'
    }];


// data.sort((a, b) => {
//     return new Date(a.timestamp) - new Date(b.timestamp);
// });
// console.log(data);
