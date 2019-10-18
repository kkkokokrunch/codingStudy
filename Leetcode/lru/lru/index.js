//缓存算法
// 首字母大写的函数 就是一个类
function LRUCache(title) {
    // 构造函数
    //类的属性
    //this是指针 只有指向要生成的对象 这个指针才有必要
    console.log(this);
    this.title = title;
}
//加方法
LRUCache.prototype.sayHello = function() {
    console.log(`你好，${this.title}`);
}
LRUCache.prototype.buyCar = function() {
        console.log('买车');
    }
    // 对象 实例
let cache = new LRUCache('lily');
console.log(cache.title);
console.log(cache.sayHello());
console.log(cache.buyCar());
console.log(cache.__proto__ == LRUCache.prototype);
//cache 是否是 LRUCache的实例
// console.log(cache instanceof LRUCache);