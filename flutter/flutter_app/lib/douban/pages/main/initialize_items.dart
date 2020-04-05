import 'package:flutter/material.dart';
import '../home/home.dart';
import '../subject/subject.dart';

import 'bottom_bar_item.dart';

List<ZHBottomBarItem> items = [
  ZHBottomBarItem("home", "首页"),
  ZHBottomBarItem("subject", "书影音"),
  ZHBottomBarItem("group", "小组"),
  ZHBottomBarItem("mall", "市集"),
  ZHBottomBarItem("profile", "我的"),
];

List<Widget> pages = [
  ZHHomePage(),
  ZHSubjectPage(),
  ZHSubjectPage(),
  ZHSubjectPage(),
  ZHSubjectPage(),
];