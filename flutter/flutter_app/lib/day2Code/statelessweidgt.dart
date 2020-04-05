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

class ZHHomeContent extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView(
      children: <Widget>[
        ZHHomeProductItem("Apple1", "Macbook1", "https://tva1.sinaimg.cn/large/006y8mN6gy1g72j6nk1d4j30u00k0n0j.jpg"),
        SizedBox(height: 6,),
        ZHHomeProductItem("Apple2", "Macbook2", "https://tva1.sinaimg.cn/large/006y8mN6gy1g72imm9u5zj30u00k0adf.jpg"),
        SizedBox(height: 6,),
        ZHHomeProductItem("Apple3", "Macbook2", "https://tva1.sinaimg.cn/large/006y8mN6gy1g72imqlouhj30u00k00v0.jpg"),
      ],
    );
  }
}
class ZHHomeProductItem extends StatelessWidget {
  //在widget中变量都要是final
  final String title;
  final String desc;
  final String imageURL;

  final style1 = TextStyle(fontSize: 25, color: Colors.orange);
  final style2 = TextStyle(fontSize: 20, color: Colors.green);

  //变量定义以后要初始化
  ZHHomeProductItem(this.title, this.desc, this.imageURL);
  @override
  Widget build(BuildContext context) {
    //Container包裹其他组件，可以做边框，也可以设置边距
    //alt+enter可以快速包裹
    return Container(
      padding: EdgeInsets.all(12),
      //decoration可以给container设置边框
      decoration: BoxDecoration(
          border: Border.all(
              width: 5,
              color: Colors.black12
          )
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.end,
        children: <Widget>[
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            children: <Widget>[
              Text(title, style: style1),
            ],
          ),
          SizedBox(height: 8),
          Text(desc, style: style2),
          SizedBox(height: 8),
          Image.network(imageURL)
        ],
      ),
    );
  }
}



