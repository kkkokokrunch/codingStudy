import React, {Component, Fragment}from 'react';
import './style.css'
// import 'antd/dist/antd.css'; 
// import {Input,Button} from 'antd';
import TodoItem from './TodoItem'
import axios from 'axios'
//定义一个react组件
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
  }
  //在组件即将被挂载到页面的时候自动执行
  // componentWillMount() {
  //   console.log('componentWillMount')
  // }

  //当一个组件的state或者props发生改变时,render函数会被重新执行
  render() {
    console.log('render')
    return (
    <Fragment>
      <div>
        <label htmlFor="inputArea">输入内容</label>
        <input 
        id='inputArea'
        className='input'
        value = {this.state.inputValue}
        onChange = {this.handleInputChange.bind(this)}
        ref={(input)=> {this.input=input}}
        />
        <button onClick={this.handleBtnClick.bind(this)}>提交</button>
      </div>
        <ul>
          {this.getTodoItem()}
        </ul>
    </Fragment>
    )
  }
  //页面挂载之后执行,用来请求ajax数据
  componentDidMount() {
    axios.get('/api/todolist')
    .then(()=> {
      alert('success')
    })
    .catch(()=> {
      alert('error')
    })
  }
  getTodoItem() {
    return this.state.list.map((item,index) => {
      return (
        <div>
          <TodoItem
            key={item}
            content={item}
            index={index}
            deleteItem={this.handleItemDelete.bind(this)}></TodoItem>
        </div>
      )
    })
  }
  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => ({
        inputValue: value
    }))
    // this.state.inputValue = e.target.value 
    // console.log(e.target.value)
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list:[...prevState.list,prevState.inputValue],
      inputValue:[]
    })
      
    )
  }

  handleItemDelete(index) {//父组件接收到了子组件传递过来的index
    //不要修改state中的内容，可以修改state的副本
    const list = [...this.state.list]
    list.splice(index,1)
    this.setState({
      list:list
    })
  }
}

export default TodoList;
