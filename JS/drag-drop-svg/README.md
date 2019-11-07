## 
浏览器收到html会解析成DOM  
遇到css会解析为cssom  
再把DOM和cssom合在一起，生成一棵渲染树  
根据样式，计算位置，开始渲染和布局  

domContentloaded就是当html解析完之后发生的  
有一些标签，例如img link script会引入外部资源，会在解析完html以后再请求资源