var Main = {
    created() {
        // this.list.sort((a, b) => {
        //     return new Date(a.timestamp) - new Date(b.timestamp);
        // });
    },
    data() {
        return {
            no: '',
            dates: [],
            list: data
        };
    },
    methods: {
        getTimelineType(timestamp) {
            return new Date() - new Date(timestamp) > 0 ? 'danger' : 'primary';
        },
        search() {
        },
        reset() {
        }
    }
};
var Ctor = Vue.extend(Main);
new Ctor().$mount('#app');
