import 'package:flutter/material.dart';

main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return MaterialApp(
      home: ZHHomePage(),
    );
  }
}
class ZHHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold( //装饰器
      appBar: AppBar(
        title: Text("Hello World"),
      ),
      body: ZHHomeContent(),
    );
  }
}
//快捷键stf
class ZHHomeContent extends StatefulWidget {
  @override
  _ZHHomeContentState createState() => _ZHHomeContentState();
}

class _ZHHomeContentState extends State<ZHHomeContent> {
  @override
  Widget build(BuildContext context) {
    return TextRich();
  }
}

//TextRich富文本
class TextRich extends StatelessWidget {
  const TextRich({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text.rich(
        TextSpan(
//        text: "Hello World",
//        style: TextStyle(color: Colors.pinkAccent,fontSize: 20)
            children: [
              TextSpan( text: "Hello World", style: TextStyle(color: Colors.pinkAccent,fontSize: 20)),
              TextSpan( text: "你好 flutter", style: TextStyle(color: Colors.orange,fontSize: 20)),
              WidgetSpan(child: Icon(Icons.favorite,color: Colors.red,)),
              TextSpan( text: "Android studio", style: TextStyle(color: Colors.blue,fontSize: 20)),

            ]
        )
    );
  }
}

//Text widget
class TextDemo extends StatelessWidget {
  const TextDemo({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text( //文本显示
      "《定风波》 苏轼 莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。", //Text一定要有内容
      textAlign: TextAlign.center,//文本居中，但是默认情况下，文本大小是包裹内容的大小
      maxLines: 1, //文本最多只能有几行
      overflow: TextOverflow.ellipsis,//文本超出打点
      textScaleFactor: 1.5, //文本字体放大倍数
      style: TextStyle( //设置文本样式
        fontSize: 30,
        color: Colors.pinkAccent,
        fontWeight: FontWeight.bold,
      ),
    );
  }
}


