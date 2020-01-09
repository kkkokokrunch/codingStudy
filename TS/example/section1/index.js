"use strict";
exports.__esModule = true;
// let isDone: boolean = true
// let decliteral: number = 20
var name = 'Yee';
var age = 30;
var sentence = "hello ,my name is " + name;
//数组两种方式，推荐第一种
var list = [1, 2, 3];
var list2 = [1, 2, 3, 4, 5];
//元组：tuple，类型要一一对应
var x;
x = ['hello', 666];
//枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[2];
//any类型
var notSure = 4;
notSure = 'maybe a string';
var list3 = [1, 2, 'hello', true];
list3[1] = 3;
//void
function warnUser() {
    console.log('this is a warn');
}
//null undefined
var u = undefined;
//never
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('something failed');
}
