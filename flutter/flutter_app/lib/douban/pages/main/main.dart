import 'package:flutter/material.dart';
//import 'package:flutter_app/douban/pages/main/bottom_bar_item.dart';
import 'package:flutter_app/douban/pages/main/initialize_items.dart';

class ZHMainPage extends StatefulWidget {
  @override
  _ZHMainPageState createState() => _ZHMainPageState();
}

class _ZHMainPageState extends State<ZHMainPage> {
  int _currentIndex = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: IndexedStack(
        index: _currentIndex,
        children: pages,
      ),
      bottomNavigationBar: BottomNavigationBar(
        selectedFontSize: 14,
        unselectedFontSize: 14,
        currentIndex: _currentIndex,
        type: BottomNavigationBarType.fixed,
        items: items,
        onTap: (index) {
          setState(() {
            _currentIndex = index;
          });
        },
      ),
    );
  }
}
