// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'xuzh-6eqzy'

cloud.init()
    //获取数据库句柄
const db = cloud.database({ env })
    // 云函数入口函数
exports.main = async(event, context) => {
    const userInfo = event.userInfo
    return await db.collection('group').add({
            data: {
                name: event.groupName,
                creatBy: userInfo.openId,
                creatTime: new Date(),
                delete: false,
                updatTime: new Date()
            }
        }) //从前端拿到的数据要存到group表中
        .then(res => {
            return db.collection('user-group').add({
                data: {
                    groupId: res._id,
                    userId: userInfo.openId,
                    invalid: false
                }
            })
        })
}