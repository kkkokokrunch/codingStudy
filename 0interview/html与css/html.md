## html第一行！doctype是做什么用的
DOCTYPE是document type(文档类型)的简写，在web设计中用来声明文档类型。  
在所有 HTML 文档中规定 DOCTYPE 是非常重要的，这样浏览器就能了解预期的文档类型， 告诉浏览器要通过哪一种规范（DTD）解析文档（比如HTML或XHTML规范）。
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
1. 方便维护
2. 有利于seo搜索引擎的优化。

重点：
浏览器有对语义化标签的默认样式。如果是传统的布局标签，不会有任何默认的css。语义化标签会有。



## preload和prefetch

preload是告诉浏览器下载资源，稍后会用

prefetch是告诉浏览器用户将来在其他页面可能会用的资源

所以preload优先级高于prefetch

