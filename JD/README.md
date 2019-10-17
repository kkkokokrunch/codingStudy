-基本的结构套路
    #app>.page
-*css解析也是要花时间的 用 *通类选择器比较费时
-浏览器
    -webkit 是google浏览器的内核 手机端多以其为主
    -ms PC端，windows操作系统内核是微软的
    -moz 代表firefox浏览器私有属性
    text-size-adjust: 100%;用加前缀的方式
-自适应，rem em
    weui：em
    京东喜欢将font-size设置为100px
    16px=.16rem
-css考点
    -webkit-text-size-adjust:100%;
    -webkit-tap-highlight-color: transparent;
    -webkit-overflow-scrolling:touch;
    html font-size:100px
- base64图片
更小 任何一张图片都是编码 传输更快 完全在css中 不需要发送http请求 这是性能开销的核心 http请求数应该减少
