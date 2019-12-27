//(config:SquareConfig)表示这个函数的形参，类型要和SquareConfig接口一样
//: Square 表示返回值的类型要和Square接口一样
function createSquare(config) {
    var newSquare = { color: 'white', area: 10 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
// let mySquare = createSuqare(config:{color:'pink'})
var mySquare = createSquare({ color: 'black' });
console.log(mySquare);
