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
        title: Text("商品列表"),
      ),
      body: ZHHomeContent(),
    );
  }
}

//widget不加_，因为要暴露给别人使用
class ZHHomeContent extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return _ZHHomeContentState();
  }
}

//state要加下划线
/**
 * 为什么Flutter在设计的时候StatefulWidget的build方法放在State中
 *  1.build出来的Widget是需要依赖State中的变量(状态/数据)
 *  2.在Flutter的运行过程中:
 *    Widget是不断的销毁和创建的
 *    当我们自己的状态发生改变时, 并不希望重新状态一个新的State
 */
class _ZHHomeContentState extends State<ZHHomeContent> {
  //var和具体类型（int，string等）是冲突的，不能同时写，但是final可以
  int _counter = 0;
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          _getButtons(),
          Text("当前计数：$_counter")
        ],
      ),
    );
  }
  Widget _getButtons() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        RaisedButton(
          //按钮中的内容放在child中，可以放文字，图片和icon等
          child: Text("+",style: TextStyle(fontSize: 20,color: Colors.white)),
          color: Colors.pinkAccent,
          onPressed: () {
            setState(() {
              _counter++;
            });
          },
        ),
        RaisedButton(
          child: Text("-",style: TextStyle(fontSize: 20,color: Colors.white)),
          color: Colors.purple,
          onPressed: () {
            setState(() {
              _counter--;
            });
          },
        )
      ],
    );
  }

}