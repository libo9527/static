<template>
    <div id="app">
        <div class="block">
            <el-timeline>
                <el-timeline-item v-for="(item, index) of list" :key="index" :timestamp="item.timestamp"
                                  placement="top">
                    <el-card>
                        <h4>{{item.title}}</h4>
                        <p>{{item.content}}</p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>

<script>
    export default {
        created() {
            this.list.sort((a, b) => {
                return dayjs(a.timestamp).isBefore(dayjs(b.timestamp)) ? 1 : dayjs(a.timestamp).isAfter(dayjs(b.timestamp)) ? -1 : 0;
            });
        },
        data() {
            return {};
        },
        methods: {}
    };
</script>

<style lang="css">

</style>
