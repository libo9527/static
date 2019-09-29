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
        this.search()
    },
    created() {

    },
    data() {
        return {
            zoom: 10,
            center: [102.833722, 24.881539], // 云南昆明
            amapManager,
            cities: ['昆明', '大理', '丽江'],
            types: ['行政', '车站', '酒店', '景点'],
            form: {
                cityGroup: [],
                typeGroup: ['行政']
            },
            events: {
                init(map) {
                    // const list = this.getMarkerData();
                    AMapUI.loadUI(['overlay/SimpleMarker', 'overlay/AwesomeMarker'], function (SimpleMarker, AwesomeMarker) {
                        let list = getMarkerData([], ['行政']);
                        console.log(list);
                        for (let item of list) {
                            let marker = new AwesomeMarker({
                                title: item.name,
                                position: item.position,
                                map: map,
                                awesomeIcon: item.awesomeIcon,
                                iconLabel: {
                                    style: {
                                        color: '#333',
                                        fontSize: '14px'
                                    }
                                },
                                iconStyle: this.getIconStyle(item.type)
                            });
                        }

                    });
                },
                'complete': () => {
                    // console.log(this.$refs.map.$$getInstance());
                    this.$refs.map.$$getInstance().setFitView(); // 无参数时，自动自适应所有覆盖物
                }
            }

        }
    },
    methods: {
        search() {
            let list = this.getMarkerData([], ['行政']);
            // AMapUI.loadUI(['overlay/AwesomeMarker'], function (SimpleMarker, AwesomeMarker) {
            //     for (let item of list) {
            //         let marker = new AwesomeMarker({
            //             title: item.name,
            //             position: item.position,
            //             map: map,
            //             awesomeIcon: item.awesomeIcon,
            //             iconLabel: {
            //                 style: {
            //                     color: '#333',
            //                     fontSize: '14px'
            //                 }
            //             },
            //             iconStyle: this.getIconStyle(item.type)
            //         });
            //     }
            //
            // });
        },
        resetForm() {
            this.$refs.form.resetFields();
        },
        getMarkerData(cityGroup, typeGroup) {
            data.filter((item) => {
                return cityGroup.includes(item.city) && typeGroup.includes(item.type)
            })
        },
        getIconStyle(type) {
            switch (type) {
                case '行政': {
                    return 'cadetblue';
                }
                case '车站': {
                    return 'orange';
                }
                case '酒店': {
                    return 'salmon';
                }
            }
        }
    }
};
var Ctor = Vue.extend(Main);
new Ctor().$mount('#app');

function getMarkerData(cityGroup, typeGroup) {
    console.log(cityGroup);
    console.log(typeGroup);
    return data.filter((item) => {
        console.log(item);
        // console.log(cityGroup.includes(item.city) && typeGroup.includes(item.type));
        if (cityGroup) {

        }
        return cityGroup.includes(item.city) && typeGroup.includes(item.type)
    });
}
