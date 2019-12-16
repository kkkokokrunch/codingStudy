<template>
  <div class="now-playing">
      正在热映
      <!-- {{result}} -->
  </div>
</template>

<script>
 import {getNowPlayingData} from "../../network/nowplaying"
export default {
data() {
    return {
        result:null
    }
},
created() {
    getNowPlayingData().then(res => {
          // this.result = res;
          console.log(res)
          this.result = res
        })
},
}
</script>

<style>

</style>