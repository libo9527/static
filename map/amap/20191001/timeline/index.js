var Main = {
    created() {
        this.list.sort((a, b) => {
            return new Date(a.timestamp) - new Date(b.timestamp);
        });
    },
    data() {
        return {
            list: [{
                timestamp: '2019/10/01 10:07:00',
                imgUrls: [
                    '../images/sz-gz.png'
                ],
                title: '城际列车 深圳站 - 广州东',
                members: '李',
                content: '从深圳站出发，前往广州'
            }, {
                timestamp: '2019/10/01 11:20:00',
                imgUrls: [
                ],
                title: '城际列车 深圳站 - 广州东',
                members: '李',
                content: '到达广州东站'
            }, {
                timestamp: '2019/10/01 11:20:00',
                imgUrls: [],
                title: '广州东 - 龙哥宿舍',
                members: '李',
                content: '从广州东出发，前往龙哥宿舍'
            }, {
                timestamp: '2019/10/02 12:56:00',
                imgUrls: [
                    '../images/gzn-kmn.png'
                ],
                title: '动车 广州南 - 昆明南',
                members: '李、浮',
                content: '从广州东出发，前往昆明'
            }, {
                timestamp: '2019/10/02 21:01:00',
                imgUrls: [
                ],
                title: '动车 广州南 - 昆明南',
                members: '李、浮',
                content: '到达昆明南站'
            }, {
                timestamp: '2019/10/02 21:30:00',
                imgUrls: [
                    '../images/kmn-ht-01.gif'
                ],
                title: '地铁 昆明南 - 汉庭优佳昆明东华酒店',
                members: '李、浮',
                content: '从昆明南站出发，前往酒店。大约 1 小时 20 分钟。',
                amapUrl: 'https://surl.amap.com/11oyN5l8z5'
            }, {
                timestamp: '2019/10/02 22:50:00',
                imgUrls: [
                ],
                title: '地铁 昆明南 - 汉庭优佳昆明东华酒店',
                members: '李、浮',
                content: '到达汉庭优佳昆明东华酒店',
            }, {
                timestamp: '2019/10/03 00:30:00',
                imgUrls: [
                    '../images/jc-ht-01.gif'
                ],
                title: '机场大巴 昆明长水国际机场 - 汉庭优佳昆明东华酒店',
                members: '谭、党',
                content: '从昆明长水国际机场出发，前往酒店。大约 50 分钟。',
                amapUrl: 'https://surl.amap.com/12BIkRFr7FK'
            }, {
                timestamp: '2019/10/03 01:20:00',
                imgUrls: [
                ],
                title: '机场大巴 昆明长水国际机场 - 汉庭优佳昆明东华酒店',
                members: '谭、党',
                content: '到达汉庭优佳昆明东华酒店',
            }, {
                timestamp: '2019/10/03 06:30:00',
                imgUrls: [
                    '../images/ht-km.png'
                ],
                title: '打车 汉庭优佳昆明东华酒店 - 昆明站',
                members: '李、浮、谭、党',
                content: '从汉庭优佳昆明东华酒店出发，前往昆明站。大约 20 分钟。',
                amapUrl: 'https://surl.amap.com/xzMplVqeCQ'
            }, {
                timestamp: '2019/10/03 07:00:00',
                imgUrls: [
                ],
                title: '打车 汉庭优佳昆明东华酒店 - 昆明站',
                members: '李、浮、谭、党',
                content: '到达昆明站',
            }, {
                timestamp: '2019/10/03 07:14:00',
                imgUrls: [
                    '../images/km-lj.png'
                ],
                title: '动车 昆明站 - 丽江站',
                members: '李、浮、谭、党',
                content: '从昆明站出发，前往丽江'
            }, {
                timestamp: '2019/10/03 10:43:00',
                imgUrls: [
                ],
                title: '动车 昆明站 - 丽江站',
                members: '李、浮、谭、党',
                content: '到达丽江'
            }, {
                timestamp: '2019/10/03 11:00:00',
                imgUrls: [
                    '../images/lj-ht.png'
                ],
                title: '打车 丽江站 - 汉庭丽江古城福星路酒店',
                members: '李、浮、谭、党',
                content: '从丽江站出发，前往汉庭丽江古城福星路酒店。大约 ¥30～40，30～40分钟。',
                amapUrl: 'https://surl.amap.com/AkKvo71n2Ru'
            }, {
                timestamp: '2019/10/03 11:30:00',
                imgUrls: [
                ],
                title: '打车 丽江站 - 汉庭丽江古城福星路酒店',
                members: '李、浮、谭、党',
                content: '到达汉庭丽江古城福星路酒店',
            }, {
                timestamp: '2019/10/03 11:30:00',
                imgUrls: [
                ],
                title: '打车 汉庭丽江古城福星路酒店 - 玉龙雪山游客中心',
                members: '李、浮、谭、党',
                content: '从汉庭丽江古城福星路酒店出发，前往玉龙雪山。大约 ¥80～100，40 分钟。',
            }, {
                timestamp: '2019/10/04 07:38:00',
                imgUrls: [
                    '../images/lj-dl.png'
                ],
                title: '快车 丽江站 - 大理站',
                members: '李、浮、谭、党',
                content: '从丽江站出发，前往大理'
            }, {
                timestamp: '2019/10/04 09:30:00',
                imgUrls: [
                ],
                title: '快车 丽江站 - 大理站',
                members: '李、浮、谭、党',
                content: '到达大理'
            }, {
                timestamp: '2019/10/05 20:50:00',
                imgUrls: [
                    '../images/dl-km.png'
                ],
                title: '动车 大理站 - 昆明站',
                members: '李、浮、谭、党',
                content: '从大理站出发，前往昆明'
            }, {
                timestamp: '2019/10/05 22:45:00',
                imgUrls: [
                ],
                title: '动车 大理站 - 昆明站',
                members: '李、浮、谭、党',
                content: '到达昆明站'
            }, {
                timestamp: '2019/10/07 07:40:00',
                imgUrls: [
                    '../images/kmn-gzn.png'
                ],
                title: '动车 昆明南 - 广州南',
                members: '李、浮',
                content: '从昆明南站出发，前往广州'
            }, {
                timestamp: '2019/10/07 15:27:00',
                imgUrls: [
                ],
                title: '动车 昆明南 - 广州南',
                members: '李、浮',
                content: '到达广州南站'
            }]
        };
    },
    methods: {
        getTimelineType(timestamp) {
            return new Date() - new Date(timestamp) > 0 ? 'danger' : 'primary';
        }
    }
};
var Ctor = Vue.extend(Main);
new Ctor().$mount('#app');
