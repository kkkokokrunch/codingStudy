import React, { Component } from 'react';
import {Provider} from 'react-redux'
import Header from './common/header/index'
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Write from './pages/write';
import store from './store/index'
import {BrowserRouter,Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      // Provider将store提供给内部的组件
      <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header></Header>
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
            
          </BrowserRouter>
      </Provider>
      
    )
  }
}

export default App;
