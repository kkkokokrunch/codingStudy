//使用new时:
Function.prototype.myNew()=function(func,...args){
  let obj={}; // 1 内部生成一个obj 
  obj._proto_=func.prototype; // 2 链接到原型 
  let result=func.apply(obj,args); // 3 obj绑定this(使用构造函数的this) 
  return result instanceof Object? result:obj; // 4 返回新对象（原始值的话忽略，如果是对象的话就返回这个对象）
}