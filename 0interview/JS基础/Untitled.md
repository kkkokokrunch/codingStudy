### AppExps页面

1. 首先登陆，此时redux中没有任何数据
2. 登陆成功进入appExps页面，此时AppSelect要获取它的所有options，必须发送请求获取appData
3. 此时有了appData，AppSelect要有一个默认值，这个默认值就是 用户最近创建实验所在的APP，姑且认为时appData数组中的第一项，获得这一项的name->*this*.props.appData[0].name 
4. appExps页面也必须有默认值，也就是*this*.props.appData[0].name 这个app的所有实验，可是必须要通过这个app的id来获取这个app的所有实验，所以在actionCreators中，在getAppDataAction里面通过dispatch(getReadOnlyExpsAction(result[0]._id));来获取这个app的所有实验，此时redux中保存了所有app -> appData和第一个app -> appExpData的所有实验。
5. 通过点击AppSelect来切换app，在select组件的handleAppChange回调函数中，发起*this*.props.getReadOnlyExps(value)请求，获取点击app的所有实验，此时redux中的appExpData的值应该为AppSelect选中app的所有实验。



### showResult页面

1. 该页面表单的初始默认值应该是AppSelect选中的app的第一个实验的数据
2. 所以const latestExp = *this*.props.appExpData[0];然后在componentDidMount中发送数据获取图表结果
3. 









