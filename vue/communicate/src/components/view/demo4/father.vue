<template>
  <div class="container">
      <h3>父组件</h3>
      <!-- <child1 :title="child1title"> </child1>
      <child2 @test="getTitle">{{child1title}} </child2> -->
      <child1></child1>
      <child2></child2>
  </div>
</template>

<script>
import child1 from './child1'
import child2 from './child2'
export default {
    components: {
        child1,
        child2
    },
    data () {
        return {
            // child1title:''
        }
    },
    methods: {
        // getTitle(e) {
        //     this.child1title = e
        // } 
    },
}
</script>

<style>

</style>