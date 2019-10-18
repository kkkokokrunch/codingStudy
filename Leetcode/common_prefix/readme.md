- minLen 0~minLen皆有可能
    取出部分，str[0] str[01] str[02] ...str[0 minLen]
    for (let i = 0;i < strs[i].length;i++) {
        strs[i].startWith(str[02]);
    }
    应该用二分法从中间开始查找
    substring 字符串切片
    >> 右移运算符
    split('')将字符串转化为数组
    parseInt() 将字符串转换为整数