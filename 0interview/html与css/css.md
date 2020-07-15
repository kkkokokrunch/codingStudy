### css选择器优先级

内联  > ID选择器 > 类选择器 > 标签选择器

### 水平居中有哪几种方法？水平垂直居中的方法

1. 子绝父相，子盒子top，left都50%，再margin-top，-left50%的盒子宽高
2. 方法2：子绝父相，子盒子top、left都50%，用transform: translate(-50%,-50%);
3. 方法3：flex布局；
4. 给绝对定位，left、right、top、bottom都给0，margin给auto；
5. 使用table-cell；

### 父盒子中子盒子浮动有什么后果？
子盒子浮动以后会脱离文档流，导致父容器的高度为0，造成高度塌陷，由于父盒子高度塌陷，下面的元素会自动补位，所以要进行清除浮动

### 清除浮动的方法
1. 给父级元素添加overflow属性
2. 给父盒子也添加浮动，但是不好维护，对页面布局不友好
3. 在浮动的盒子下面再放一个标签，标签中用clear：both，但是引进了不必要的元素
4. 用after伪元素清除浮动
    ```
        .clearfix::after {
            content:'';
            clear:both;
            display:block;
            overflow：hidden；
            visibility：hidden；
        }
        .clearfix{*zoom：1；}（解决ie问题）
    ```

### 定位有哪些属性？相对定位是相对什么定位？
1. 定位有static,relative,absolute,fixed,sticky
2. relative是相对于本身，absolute是相对于除了含有static以外的其他定位属性的第一个父盒子

### 行内元素和行内块元素有什么区别？行内块元素在同一行显示时有默认空隙，如何解决？
1. 行内元素设定宽高无效，行内款元素可以设定宽高
2. 清除行内块元素的默认间隙
    1. 给产生边距的元素的父元素设置font-size：0
    2. 给行内元素设置浮动
    3. 给父元素添加word-spacing属性，属性值设为合适的负值

### 盒模型有哪些？有什么区别？
1. 盒模型分为标准盒模型和怪异盒模型（ie盒模型）
2. 标准和模型的大小就是内容的宽高，而怪异盒模型的大小除了content还有width + height + padding + border
3. 可以用box-sizing进行转换

## CSS3新特性
1. 选择器
2. 背景和边框
3. 文本效果
4. 2D/3D 转换
5. 动画、过渡
6. 多列布局
7. 用户界面

## 怎么实现文本不自动换行，超出文本的部分变成省略号
1. 单行
   ```
   white-space:nowrap;
   overflow:hidden;
   text-overflow:ellipsis;
   ```
2. 多行
    ```
    display:-webkit-box;
    overflow:hidden;
    text-overflow:ellipsis;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
    ```


## em和rem
1. em
   - em是相对于父元素字体大小，假如父元素font-size=16px，子元素为2em，则子元素的字体大小为32px
   - 如果自己有设置font-size，则相对于自己的font-size

2. rem = root em
   - rem相对于html根元素的font-size

## rem如何做移动端适配
1. 针对不同手机屏幕，设置不同的html{font-size}大小
2. 将所有需要适配的元素单位换成rem

3. 解决方式
    1. 可以采用媒体查询
    ```
        @media screen and (min-width: 320px) {
                html {
                    font-size: 9px;
                }
            }
        @media screen and (min-width: 375px) {
            html {
                font-size: 10px;
            }
        }
        @media screen and (min-width: 420px) {
            html {
                font-size: 11px;
            }
        }
    ```
    2. 通过js计算
    ```
    //得到手机屏幕的宽度
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    //得到html的Dom元素
    let htmlDom = document.getElementsByTagName('html')[0];
    //设置根元素字体大小
    htmlDom.style.fontSize= htmlWidth/20 + 'px';
    ```


## 表格布局和网格布局


## BFC
BFC 就是块级格式上下文，是页面盒模型布局中的一种 CSS 渲染模式，相当于一个独立的容器，里面的元素和外部的元素相互不影响。创建 BFC 的方式有：

1. html 根元素
2. float 浮动
3. 绝对定位
4. overflow 不为 visiable
5. display 为表格布局或者弹性布局

BFC 主要的作用是：
1. 清除浮动

2. 防止同一 BFC 容器中的相邻元素间的外边距重叠问题       

   



## padding百分比

padding的百分比是相对于元素的宽度来计算的v  





## css语法

```css
flex: none | auto | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
```

1. 首先是单管道符`|`。表示排他。也就是这个符号前后的属性值都是支持的，且不能同时出现。
2. 接下来是`[ ... ]`这一部分。其中方括号`[]`表示范围。也就是支持的属性值在这个范围内。我们先把方括号`[]`内其他特殊字符去除，可以得到下面的语法：flex: [ <'flex-grow'> <'flex-shrink'> <'flex-basis'> ],也就是：flex: 1 1 100px;
3. 问号`?`，表示0个或1个。也就是`flex-shrink`属性可有可无。因此，flex属性值也可以是2个值。
4. 双管道符`||`，是或者的意思。表示前后可以分开独立合法使用。也就是`flex: flex-grow flex-shrink?`和`flex-basis`都是合法的。











