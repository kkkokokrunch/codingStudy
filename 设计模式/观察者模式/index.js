//简单版
// var lk = {
//   //用户群体
//   targetAction:[],

//   //添加用户
//   addUser: function(target,action) {
//     var obj = { //obj指用户，包含了用户和行为
//       target:target,
//       action:action
//     }
//     this.targetAction.push(obj)
//   },

//   //发布消息
//   publishMsg: function() {
//     for(let i = 0; i < this.targetAction.length; i++) {
//       var obj = this.targetAction[i]
//       var target = obj.target
//       var action = obj.action
//       action.call(target,'明天周末')
//     }
//   }
// }

// function response(str) {
//   console.log('已推送',this.name,'消息为：',str)
// }

// var stu1 = {name:'张三'}
// var stu2 = {name:'李四'}

// lk.addUser(stu1,response)
// lk.addUser(stu2,response)

// //开始广播
// lk.publishMsg()


//复杂版，可以根据类型通知不同类型的人
var lk = {
  typeTargetAction: {},

  //1.添加用户
  addUser: function(type,target,action) {
    //判断有没有该类型，没有的话增加一个该类型的数组
    if(typeof this.typeTargetAction[type] === 'undefined') {
      this.typeTargetAction[type] = []
    }
    //创建对象
    var obj = {
      target:target,
      action:action
    }
    this.typeTargetAction[type].push(obj)
  },

  //发布消息
  publishMsg: function(type,msgContent) {
    var targetActions = this.typeTargetAction[type] || []
    for(let i = 0; i < targetActions.length; i++) {
      var obj = targetActions[i]
      var target = obj.target
      var action = obj.action
      action.call(target,msgContent)
    }
  }
}

var stu1 = {name:'张三'} 
var stu2 = {name:'李四'} 

lk.addUser('h5',stu1,function(msgContent) {
  console.log(msgContent,'已推送:',this.name)
})

lk.addUser('h5',stu2,function(msgContent) {
  console.log(msgContent,'已推送:',this.name)
})

lk.addUser('java',stu1,function(msgContent) {
  console.log(msgContent,'已推送:',this.name)
})

lk.addUser('python',stu2,function(msgContent) {
  console.log(msgContent,'已推送:',this.name)
})

//广播消息
lk.publishMsg('h5','h5今晚不上课')
lk.publishMsg('java','java今晚上课')
lk.publishMsg('python','python放假')