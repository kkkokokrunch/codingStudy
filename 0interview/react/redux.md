## redux 常见 API

1. createStore
2. store.dispatch
3. store.getState
4. store.subscribe

## redux 中间件

中间指的是 action 和 store 之间，中间件其实就是对 dispatch 方法的封装和升级  
以前的 action 只能是对象，使用了中间件以后，action 可以是函数，中间件会根据参数的不同进行不同的操作：

1. 如果参数是对象，就直接传给 store；
2. 如果是函数，中间件会先让函数执行，再传给 store

redux-thunk：可以把异步操作放在 action 中进行
redux-saga：把异步逻辑拆分出来，放在单独的文件中管理

## react-redux

1. 在 App.js 中引入 Provider 组件,包裹住其他组件，这样 Provider 中的所有组件都能共享 store 的数据。
   ```
    <Provider store = {store}>
    </Provider>
   ```
2. connect 就是让组件和 store 做连接
   ```
    export defaul connect(mapStateToProps,mapDispatchToProps)(组件名)
   ```
3. mapStateToProps,将 store 中的 state 映射到组件中的 props
   ```
    const mapStateToProps = (state) => {
      return {
        inputValue:state.inputValue
      }
    }
   ```
4. mapDispatchToProps,将 store.dispatch 方法映射到 props 上

   ```
    const mapDispatchToProps = (dispatch) => {
      return {
        changeInputValue(e) {
          const action = {
            type:'change_input_value',
            value:e.target.value
          }

          dispatch(action)
        }
      }
    }
   ```
