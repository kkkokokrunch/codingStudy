import 'package:flutter/material.dart';
import 'package:flutter_app/douban/pages/main/main.dart';
import 'package:flutter_app/douban/widgets/dash_line.dart';

main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.green, splashColor: Colors.transparent,
          highlightColor: Colors.transparent
        ),
        home: ZHMainPage()
    );
  }
}

//class HomePage extends StatelessWidget {
//  @override
//  Widget build(BuildContext context) {
//    // TODO: implement build
//    return Scaffold(
//        appBar:AppBar(
//            title:Text("豆瓣电影")
//        ),
//        body:Center(
//          child: ZHDashedLine(dashedWidth:8),
//        )
//    );
//  }
//}

