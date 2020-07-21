var publisher = {
  publish(pubsub) {
    pubsub.publish()
  }
}
var pubsub = {
  subscribes: [],
  publish() {
    this.subscribes.forEach(subscribe => {
      subscribe.update();
    })
  },
  subscribe(sub) {
    this.subscribes.push(sub)
  }
}
var subscribe = {
  update() {
    console.log('update')
  },
  subscribe(pubsub) {
    pubsub.subscribe(this);
  }
}
subscribe.subscribe(pubsub)
publisher.publish(pubsub)