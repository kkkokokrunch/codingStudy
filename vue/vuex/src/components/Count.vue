<template>
    <div class="count">
        {{count}}
        <button @click="addAction(20)">+</button>
        <button @click="reduceAction">-</button> 
        {{getCount}}
        <!-- {{$store.state.count}} -->
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        data() {
            return {}
        },
        //写法一：
        // computed: mapState({
        //     count:state => state.count
        // }),

        //写法二：
        //如果数据源中只有一条数据
        // computed: mapState(['count']),

        //写法三：
        //如果有多条数据
        computed: {
            ...mapState([
                'count'
            ]),
            ...mapGetters([
                'getCount'
            ])
        },
        methods: {
            ...mapMutations([
                'add',
                'reduce'
            ]),
            ...mapActions([
                'addAction',
                'reduceAction'
            ])
        }
    }
</script>

<style>

</style>