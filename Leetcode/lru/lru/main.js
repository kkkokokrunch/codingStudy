function LRUCache(capacity) {
    this.capacity = capacity; //容量
    this.obj = {}; //get put 存储数据
    this.arr = []; //优先级
}

LRUCache.prototype.get = function(key) {
    var val = this.obj[key];
    if (val) {
        var index = this.arr.indexOf(key);
        this.arr.slice(index, 1);
        this.arr.unshift(key);
        return val
    } else {
        return -1;
    }
}
LRUCache.prototype.put = function(key, value) {
    if (this.obj[key]) { //已存在
        this.obj[key] = value; //更新值
        //调整优先级，在哪个位置？删除 移到最前面
        var index = arr.indexOf(key);
        this.arr.splice(index, 1);
        this.arr.unshift(key);
        return;
    }
    if (this.capacity === this.arr.length) {
        var k = this.arr.pop();
        this.obj[k] = undefined;
    }
    this.obj[key] = value;
    this.arr.unshift(key); //放到最前面
}
let cache = new LRUCache(2);
// console.log(cache.capacity);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));
cache.put(3, 3);
console.log(cache.get(2));
cache.put(4, 4);
console.log(cache.get(1));
console.log(cache.get(3));
console.log(cache.get(4));