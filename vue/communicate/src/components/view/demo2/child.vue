<template>
  <div class="child">
      <h2>子组件</h2>
      <p>从父组件接收到的数据是：</p>
      <div>
          String:<span class="red">{{sendMsg}}</span>
      </div>
      <div>
          Number:<span class="pink">{{sendNum}}</span>
      </div>
      <div>
          Object:<span class="pink">
              <ul class="red" v-for="(item,index) in sendObj" :key="index">
              <li>{{item.name}}</li>
          </ul>
             </span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        sendMsg: {
            type:String,
            required:true,
        },
        sendNum:{
            type:Number,
            required:true
        },
        sendObj:{
            // 声明验证类型
            validator(val) {
                if(Object.prototype.toString.call(val) === "[object Array]" ||
                Object.prototype.toString.call(val) === "[object object]" ) { //当不知道是啥数据类型的时候，用这个方法判断
                    return true
                }
            },
            // type:Object,
            // required:true
        }
    }
}
</script>

<style>
.red {
    color: red
}
.pink {
    color:pink
}
</style>