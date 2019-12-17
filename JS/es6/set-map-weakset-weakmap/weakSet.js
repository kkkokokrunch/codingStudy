const ws = new WeakMap()
ws = 1
ws.add(Symbol())
console.log(ws)