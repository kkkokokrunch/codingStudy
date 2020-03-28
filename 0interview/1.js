Function.prototype.myCall = function(ctx) {
  if(typeof this !== 'function') {
    throw new TypeError('Error')
  }
  ctx = ctx || window 
  
}