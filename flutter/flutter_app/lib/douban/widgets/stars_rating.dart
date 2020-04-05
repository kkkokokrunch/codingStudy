import 'package:flutter/material.dart';

class ZHStarRating extends StatefulWidget {
  final double rating;
  final double maxRating;
  final int count;
  final double size;
  final Color unselectedColor;
  final Color selectedColor;

  final Widget unselectedImage;
  final Widget selectedImage;

  ZHStarRating({
    @required this.rating,
    this.maxRating = 10,
    this.count = 5,
    this.size = 30,
    this.unselectedColor = const Color(0xffbbbbbb),
    this.selectedColor = const Color(0xffff0000),
    Widget unselectedImage,
    Widget selectedImage
  }):unselectedImage = unselectedImage ?? Icon(Icons.star_border, color: unselectedColor, size: size),
        selectedImage = selectedImage ?? Icon(Icons.star, color: selectedColor, size: size);

  @override
  _ZHStarRatingState createState() => _ZHStarRatingState();
}

class _ZHStarRatingState extends State<ZHStarRating> {
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        Row(mainAxisSize: MainAxisSize.min,children:buildUnselectedStar()),
        Row(mainAxisSize: MainAxisSize.min, children: buildSelectedStar())
      ],
    );
  }

  List<Widget> buildUnselectedStar() {
    return List.generate(widget.count, (index) {
      return widget.unselectedImage;
    });
  }

  List<Widget> buildSelectedStar() {
    //创建stars
    List<Widget> stars = [];
    final star = widget.selectedImage;

    //构建填满的star
    double oneValue = widget.maxRating / widget.count; //计算一个star是几分
    int entireCount = (widget.rating / oneValue).floor();
    for(var i = 0;i < entireCount;i++){
      stars.add(star);
    }

    //构建部分填充的star
    double leftWidth = ((widget.rating / oneValue) - entireCount) * widget.size; //计算剩余宽度
    final halfStar = ClipRect(
        clipper: ZHStarClipper(leftWidth),
        child: star
    );
    stars.add(halfStar);
    if (stars.length > widget.count) {
      return stars.sublist(0, widget.count);
    }
    return stars;
  }
}

class ZHStarClipper extends CustomClipper<Rect> {
  double width;
  ZHStarClipper(this.width);
  @override
  Rect getClip(Size size) {
    // TODO: implement getClip
    return Rect.fromLTRB(0, 0, width, size.height);
  }

  @override
  bool shouldReclip(ZHStarClipper oldClipper) {
    // TODO: implement shouldReclip
    return oldClipper.width != this.width;
  }
}