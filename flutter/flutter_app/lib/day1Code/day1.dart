import 'package:flutter/material.dart';

main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return MaterialApp(
        home: HomePage()
    );
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
        appBar:AppBar(
            title:Text("Flutter")
        ),
        body:ContentBody()
    );
  }
}
//@immutable的类，里面的一切都是不可变的，所以不能用var变量，只能用final
//所以在flutter开发中所有的widget都不能定义状态，不管是StatelessWidget还StatefulWidget
//class ContentBody extends StatelessWidget {
//  @override
//  Widget build(BuildContext context) {
//    // TODO: implement build
//    return Center(
//      child: Row(
//        //mainAxisAlignment设置主抽排列方式，MainAxisAlignment.center主轴居中
//        mainAxisAlignment: MainAxisAlignment.center,
//        children: <Widget>[
//          Checkbox(
//              value: true,
//              onChanged: (value) => print(value),
//          ),
//          Text("同意协议",style:TextStyle(fontSize: 20))
//        ],
//      ),
//    );
//  }
//}

//所以应该使用statefulwidget创建一个单独的类，用这个类来管理状态
class ContentBody extends StatefulWidget {
  @override
  _ContentBodyState createState() => _ContentBodyState();
}

class _ContentBodyState extends State<ContentBody> {
  var flag = true;
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
        //mainAxisAlignment设置主抽排列方式，MainAxisAlignment.center主轴居中
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Checkbox(
            value: flag,
            onChanged: (value) {
              setState(() {
                flag = value;
              });
            },
          ),
          Text("同意协议",style:TextStyle(fontSize: 20))
        ],
      ),
    );
  }
}