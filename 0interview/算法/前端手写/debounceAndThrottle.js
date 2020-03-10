//防抖
//一进来就要先清除定时器，然后再用setTimeout调用定时器
function debounce(fn,delay) {
    let timer = null
    return function() {
        clearTimeout(timer)
        timer = setTimeout(function() {
            fn.call(this)
        },delay)
    }
    
}


//节流
//主要是记录两次触发事件的事件，如果时间差大于delay，就调用函数
//记得lastTime = nowTime
function throttle(fn,delay) {
    //记录上一次函数触发的时间
    let lastTime = 0
    return function() {
        //记录当前函数触发的时间
        let nowTime = Date.now() 

        if(nowTime - lastTime > delay) {
            fn.call(this)
            lastTime = nowTime
        }
    }
 
}