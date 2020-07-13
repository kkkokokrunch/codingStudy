## html第一行！doctype是做什么用的
DOCTYPE是document type(文档类型)的简写，在web设计中用来声明文档类型。  
在所有 HTML 文档中规定 DOCTYPE 是非常重要的，这样浏览器就能了解预期的文档类型， 告诉浏览器要通过哪一种规范（DTD）解析文档。
DOCTYPE会影响代码验证，并决定了浏览器最终如何显示你的Web文档。

## h5新特性有哪些
1. 语义化标签：header、footer、section、nav、aside、article
2. 增强型表单：input 的多个 type
3. 新增表单元素：datalist、keygen、output
4. 新增表单属性：placehoder、required、min 和 max
5. 音频视频：audio、video
6. canvas
7. 地理定位
8. 拖拽
9. 本地存储：localStorage - 没有时间限制的数据存储；sessionStorage - 针对一个 session 的数据存储，当用户关闭浏览器窗口后，数据会被删除
10. 新事件：onresize、ondrag、onscroll、onmousewheel、onerror、onplay、onpause

### 标签语义化的好处
常见：
1. 开发者友好：增强了代码可读性，便于开发和维护
2. 机器友好：适合搜索引擎爬虫爬取有效信息，有利于SEO

重点：
浏览器有对语义化标签的默认样式。如果是传统的布局标签，不会有任何默认的css。语义化标签会有。



## 常见meta标签

meta = name+content，用于描述一个html文档的元信息，比如作者，设置http的缓存过期日期，viewport，移动前端最熟悉不过，Web开发人员可以控制视口的大小和比例，等等，开发者也可以自定义



## src和href区别

- src指向外部资源，并将这个资源下载并应用到文档内，当浏览器解析到该元素时，会暂停处理其他资源，所以js一般放在底部
- href指向网络资源所在位置，用来建立与当前元素或文档之间的链接，当浏览器识别到它他指向的文件时，就会并行下载资源，不会停止对当前文档的处理。

## preload和prefetch

preload是告诉浏览器下载资源，稍后会用

prefetch是告诉浏览器用户将来在其他页面可能会用的资源

所以preload优先级高于prefetch

