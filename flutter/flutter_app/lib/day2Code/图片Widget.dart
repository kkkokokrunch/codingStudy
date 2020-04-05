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
  final imageUrl = "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1053927615,3988657563&fm=26&gp=0.jpg";
  @override
  Widget build(BuildContext context) {
    return Image.network(imageUrl);

  }
}

class ImageDemo extends StatelessWidget {
  const ImageDemo({
    Key key,
    @required this.imageUrl,
  }) : super(key: key);

  final String imageUrl;

  @override
  Widget build(BuildContext context) {
    return Image(
      image:NetworkImage(imageUrl),
      width: 200,
      height: 200,
      fit: BoxFit.cover,
      //对齐方式，左上角是（-1，-1），右下角是（1,1），中间是（0,0）
      alignment: Alignment.bottomCenter,
    );
  }
}

//操作本地图片：
//1.新建assets文件夹，在下面新建images文件夹；
//2.在pubspec.yaml中配置，在44行左右将assets注释打开，记得删去assets前空格
//3.在assets下写上自己的图片路径
//重新运行package get