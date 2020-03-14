import {
    ADD_COUNTER,
    ADD_TO_CART
  }from './mutation-types'

export default {
  addCart(context,payload) {
      return new Promise((resolve,reject) => {
        //find方法只返回第一个满足条件的元素
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
  
      if(oldProduct) {
          // oldProduct.count += 1
          context.commit(ADD_COUNTER,oldProduct)
          resolve('商品数量+1')
      }else {
          payload.count = 1
          // state.cartList.push(payload)
          context.commit(ADD_TO_CART,payload)
          resolve('添加新商品')
      }
      })
  }
}