<template>
    <div>
        home
        <div>
            {{result}}
        </div>
    </div>
</template>

<script>
    import {
        getHomeMultidata
    } from '../network/home'
    export default {
        name: 'Home',
        data() {
            return {
                result:''
            }
        },
        created() {
            //1.请求多个数据
            getHomeMultidata()
            .then(res => {
                console.log(res)
                this.result = res
            })
        },
    }
</script>

<style>

</style>