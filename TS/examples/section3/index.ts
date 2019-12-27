//函数类型接口
//(source: string,subString: string)就像函数中的参数列表
//：boolean就像函数中的返回值类型
interface SearchFunc {
    (source: string,subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function(source: string,subString: string): boolean {
    let result = source.search(subString)
    return result > -1
}