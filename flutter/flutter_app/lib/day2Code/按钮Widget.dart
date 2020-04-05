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
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.add),
        onPressed: ()=> print("FloatingActionButton Click"),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.endDocked,
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
    return Column(
      children: <Widget>[
        //1.raisedbutton
        RaisedButton(
          child: Text("RaisedButton"),
          textColor: Colors.blue,
          //button默认会有边距，因为默认要占据48的大小，
          //可以设置materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
          materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
          color: Colors.pinkAccent,
          onPressed: ()=> print("RaisedButton Click"),
        ),

        //2.FlatButton
        FlatButton(
          child: Text("FlatButton"),
          onPressed: ()=> print("FlatButton Click"),
        ),

        //3.OutlineButton
        OutlineButton(
          child: Text("OutlineButton"),
          onPressed: ()=> print("OutlineButton Click"),
        ),

        //4.FloatingActionButton

        // 5.自定义button: 图标-文字-背景-圆角
        FlatButton(
          color: Colors.amberAccent,
          //圆角
          shape:RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(8)
          ),
          child:Row(
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
              Icon(Icons.favorite,color: Colors.red,),
              Text("喜欢作者")
            ],
          ),
          onPressed: (){},
        )
      ],
    );

  }
}