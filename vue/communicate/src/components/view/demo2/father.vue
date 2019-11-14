<template>
  <div class="container">
      <!-- <div>
          <ul class="red" v-for="(item,index) in myObj" :key="index">
              <li>{{item.name}}</li>
          </ul>
      </div> -->
      <div>
          <child :sendMsg="myMsg" :sendNum="myNum" :sendObj="myObj"></child>
      </div>
  </div>
</template>

<script>
import child from './child'
export default {
    components: {
        child
    },
    data() {
        return {
            myMsg:'我是父组件的信息',
            myNum:123456,
            myObj:[
                {id:1,
                name:'张三'},
                {
                    id:2,
                    name:'李四'
                }
            ]
        }
    },
}
</script>

<style>

</style>