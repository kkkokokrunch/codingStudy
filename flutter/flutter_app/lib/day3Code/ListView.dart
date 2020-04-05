import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
          primarySwatch: Colors.blue, splashColor: Colors.transparent),
      home: HYHomePage(),
    );
  }
}

class HYHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("列表测试"),
      ),
      body: Container(
        height: 300,
        child: ListView.separated(
          itemCount: 100,
          itemBuilder: (BuildContext ctx, int index) {
            return Text(
              "Hello World: $index",
              style: TextStyle(fontSize: 20),
            );
          },
          //分割线的设置
          separatorBuilder: (BuildContext ctx, int index) {
            return Divider(
              color: Colors.red,
              height: 30,
              indent: 30,
              endIndent: 30,
              thickness: 10,
            );
          },
        ),
      ),
    );
  }
}

class ListViewDemo2 extends StatelessWidget {
  const ListViewDemo2({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    //ListView.builder会在item将要展示的时候才创建
    return ListView.builder(
      itemCount: 100,//item总个数
      itemExtent: 60,
      itemBuilder: (BuildContext ctx, int index) {
        return Text(
          "Hello World: $index",
          style: TextStyle(fontSize: 20),
        );
      },
    );
  }
}

class ListViewDemo1 extends StatelessWidget {
  const ListViewDemo1({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ListView(
//        scrollDirection: Axis.horizontal,
//        reverse: true,
//        itemExtent: 100,
    //一般用于获取明确的item，但是会一次性加载尽可能多的item，所以这种方法不好
      children: List.generate(100, (index) {
        return ListTile(
          leading: Icon(Icons.people),
          trailing: Icon(Icons.delete),
          title: Text("联系人${index + 1}"),
          subtitle: Text("联系人电话号码:18866665555"),
        );
      }),
    );
  }
}