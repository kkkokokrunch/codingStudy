## ['1', '2', '3'].map(parseInt) what & why ?

### parseInt
parse会将一个字符串看做是radix进制的数字，得出的结果是转换以后十进制的数：parseInt(string, radix)
```
parseInt("10");			//返回 10
parseInt("19",10);		//返回 19 (10+9)
parseInt("11",2);		//返回 3 (2+1)
parseInt("17",8);		//返回 15 (8+7)
parseInt("1f",16);		//返回 31 (16+15)
parseInt("010");		//未定：返回 10 或 8
```

- map实际上是map((item,index,thisArr) => (newArr))
- 而parseInt只接受两个参数，也就相当于mao中的item和index变成了parseInt中的string和radix
- 所以
```
parseInt('1', 0) // 1
parseInt('2', 1) // NaN
parseInt('3', 2) // NaN, 3 不是二进制
```

##map,weakmap,set,weakset

###map和weakmap
- map是字典，它和object最大的区别就是，map的key可以是任意类型的
- map有set,delete，clear,forEach,for of等方法，可以进行遍历
- weakmap的key只能是对象，而且不能遍历

###set和weakset
- set就是一个集合，里面的成员不能重复，方法有add、delete、has
- weakset成员都是对象，而且不能遍历