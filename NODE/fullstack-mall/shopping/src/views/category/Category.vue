<template>
  <div class="category">
      <search-bar class="header"></search-bar>

      <div class="shop">
        <!-- 左边 -->
        <div class="menu-wrapper">
          <ul>
            <li class="menu-item current">
              <span>女装</span>
            </li>
            <li class="menu-item">
              <span>鞋包</span>
            </li>
          </ul>
        </div>
        <!-- 右边 -->
        <div class="shop-wrapper">
          <ul>
            <li class="shops-li">
              <div class="shops-title">
                <span>女装</span>    
              </div>
              <ul class="shops-items">
                <li>
                  <img src="https://t00img.yangkeduo.com/goods/images/2019-07-17/c7975c83-72d6-466d-a2cc-6fe42faffefa.jpg" alt="">
                  <span>女装</span>
                </li>
                  <li>
                  <img src="https://t00img.yangkeduo.com/goods/images/2019-07-17/c7975c83-72d6-466d-a2cc-6fe42faffefa.jpg" alt="">
                  <span>女装</span>
                </li>
                <li>
                  <img src="https://t00img.yangkeduo.com/goods/images/2019-07-17/c7975c83-72d6-466d-a2cc-6fe42faffefa.jpg" alt="">
                  <span>女装</span>
                </li>
                <li>
                  <img src="https://t00img.yangkeduo.com/goods/images/2019-07-17/c7975c83-72d6-466d-a2cc-6fe42faffefa.jpg" alt="">
                  <span>女装</span>
                </li>
                <li>
                  <img src="https://t00img.yangkeduo.com/goods/images/2019-07-17/c7975c83-72d6-466d-a2cc-6fe42faffefa.jpg" alt="">
                  <span>女装</span>
                </li>
                <li>
                  <img src="https://t00img.yangkeduo.com/goods/images/2019-07-17/c7975c83-72d6-466d-a2cc-6fe42faffefa.jpg" alt="">
                  <span>女装</span>
                </li>
                </ul>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
import SearchBar from '../../components/searchBar/SearchBar'
export default {
    name:'Category',
    components: {
      SearchBar
    }
}
</script>

<style scoped>
.category {
  width: 100%;
  height: 100%;
}
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
.shop {
  width: 100%;
  display: flex;
  position: absolute;
  top: 50px;
  bottom: 55px;
  background-color: #f5f5f5;
  overflow: hidden;
}
.shop .menu-wrapper {
  background-color: #fafafa;
  width: 80px;
  flex: 0 0 80px;
}
.shop .menu-wrapper .menu-item {
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: #666666;
  position: relative;
}
.shop .menu-wrapper .current {
  color: #e02e24;
}
.shop .menu-wrapper .current::before {
  content: '';
  background-color: #e02e24;
  width: 4px;
  height: 30px;
  position: absolute;
  left: 0;
}
.shop .shop-wrapper {
  flex: 1;
  background-color: #fff;
}
.shop .shop-wrapper .shops-title {
  display: flex;
  flex-direction: row;
  padding: 0 10px;
  height: 44px;
  align-items: center;
  justify-content: space-between;
  color: #151516;
  font-size: 15px;
}
.shop .shop-wrapper .shops-items {
  display: flex;
  flex-wrap: wrap;
}
.shop .shop-wrapper .shops-items li {
  display: flex;
  flex-direction: column;
  width: 33.3%;
  height: 90px;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 14px;
}
.shop .shop-wrapper img {
  width: 50%;
  margin-bottom: 5px;
}
</style>