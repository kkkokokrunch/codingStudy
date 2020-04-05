import 'package:flutter/material.dart';
import 'package:flutter_app/douban/model/home_model.dart';
import 'package:flutter_app/service/home_request.dart';


import 'home_movie_item.dart';

class ZHHomeContent extends StatefulWidget {
  @override
  _ZHHomeContentState createState() => _ZHHomeContentState();
}

class _ZHHomeContentState extends State<ZHHomeContent> {
  final List<MovieItem> movies = [];

  @override
  void initState() {
    super.initState();
    // 发送网络请求
    HomeRequest.requestMovieList(0).then((res) {
      setState(() {
        movies.addAll(res);
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
        itemCount: movies.length,
        itemBuilder: (ctx, index) {
          return ZHHomeMovieItem(movies[index]);
        }
    );
  }
}

