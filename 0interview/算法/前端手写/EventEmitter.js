// on监听事件，off取消事件 ，trigger触发事件，once只执行一次

class EventEmitter {
  constructor() {
    this._events = {}
  }
  emit(type,...args) {
    let handle = this._events[type]
    if(!handle) {
      return false
    }
    if(Array.isArray(handle)) {
      for(let i = 0;i < handle.length;i++) {
        handle[i].call(this,...args)
      }
    } else {
      handle.call(this,...args)
    }

  }
  on(type,fn) {
    let handle = this._events[type]
    if (typeof fn !== 'function') {
      return null
    }
    // 没有就添加上
    if(!handle) {
      this._events[type] = fn
    } else {
      // 有就拼接上
      this._events[type] = [].concat(this._events[type],fn)
    }
  }
  off(type,fn) {
    if(fn === undefined) {
      this._events[type] = []
    } else {
      this._events[type] = this._events[type].filter(f => f !== fn)
    }
  }
  once(type,fn) {
    this._events[type] = fn
  }
}

