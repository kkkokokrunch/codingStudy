var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/mongoose_test')
mongoose.connection.once("open", function() {
    console.log('成功')
})

var Schema = mongoose.Schema
var stuSchema = new Schema({
    name: String,
    age: Number,
    gender: {
        type: String,
        default: "female"
    },
    address: String
})


//创建模型
var StuModel = mongoose.model("student", stuSchema)

//创建文档

//增：向数据库中插入一个文档
// StuModel.create([{
//     name: "jennie",
//     age: 18,
//     address: "南昌"
// }, {
//     name: "李四",
//     age: 20,
//     gender: 'male',
//     address: "上海"
// }], function(err) {
//     if (!err) {
//         console.log("数据插入成功")
//     }
// })

//查：
// StuModel.find({ name: "jennie" }, function(err, docs) {
//     if (!err) {
//         console.log(docs)
//     }
// })

//要name 不要id
// StuModel.find({}, { name: 1, _id: 0 }, function(err, docs) {
//     if (!err) {
//         console.log(docs)
//     }
// })

//改
// StuModel.update({ name: "lisa" }, { $set: { age: 20 } }, function(err) {
//     if (!err) {
//         console.log("修改成功")
//     }
// })

//删除
StuModel.remove({ name: "张三" }, function(err) {
    if (!err) {
        console.log("删除成功")
    }
})