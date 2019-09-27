// 初始化高德地图的 key 和插件
window.VueAMap.initAMapApiLoader({
    key: '3a710b3a39b36028af42c954d0786d61',
    plugin: ['Autocomplete', 'PlaceSearch', 'Scale', 'OverView', 'ToolBar', 'MapType', 'PolyEditor', 'AMap.CircleEditor'],
    uiVersion: '1.0.11', // ui库版本，不配置不加载
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.15'
});

let amapManager = new VueAMap.AMapManager();

var Main = {
    mounted() {
        // this.initMap()
    },
    created() {

    },
    data() {
        return {
            zoom: 12,
            center: [102.833722, 24.881539], // 云南昆明
            amapManager,
            list: data,
            events: {
                init(map) {
                    AMapUI.loadUI(['overlay/SimpleMarker'], function (SimpleMarker) {
                        const marker = new SimpleMarker({
                            iconLabel: 'A',
                            iconStyle: 'red',
                            map: map,
                            position: map.getCenter()
                        });
                    });
                },
                'complete': () => {
                    // console.log(this.$refs.map.$$getInstance());
                    this.$refs.map.$$getInstance().setFitView(); // 无参数时，自动自适应所有覆盖物
                }
            },
            cityGroup: [],
            cities: ['昆明', '大理', '丽江']
        }
    },
    methods: {}
};
var Ctor = Vue.extend(Main);
new Ctor().$mount('#app');
