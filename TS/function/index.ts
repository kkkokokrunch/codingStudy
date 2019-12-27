//重载
function getInfo(name: string): string;
function getInfo(age: number): string;
function getInfo(str: any): any {
    if(typeof str === 'string') {
        return '我叫：'+ str
    }else {
        return '我的年龄是'+str
    }

}