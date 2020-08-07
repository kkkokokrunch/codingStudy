let pubSub = {
  list: {},
  subscribe: function (key, fn) {
    if (!this.list[key]) {
      this.list[key] = []
    }
    this.list[key].push(fn)
  },
  publish: function () {
    let arg = arguments
    let key = [].shift.call(arg)
    let fns = this.list[key]

    if (!fns || fns.length <= 0) return false

    for (let i = 0; i < fns.length; i++) {
      fns[i].apply(this, arg)
    }
  },
  unSubscribe(key) {
    delete this.list[key]
  }
}

pubSub.subscribe('name', (name) => {
  console.log(`your name is ${name}`)
})

pubSub.subscribe('sex', (sex) => {
  console.log(`your sex is ${sex}`)
})

// pubSub.unSubscribe('name')

pubSub.publish('name', 'ttsy1')
pubSub.publish('sex', 'male')