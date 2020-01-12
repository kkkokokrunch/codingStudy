import React, {Component, Fragment}from 'react';
import './style.css'
// import 'antd/dist/antd.css'; 
// import {Input,Button} from 'antd';
import TodoItem from './TodoItem'
//定义一个react组件
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'hello',
      list: []
    }
  }
  render() {
    return (
    <Fragment>
      <div>
        <label htmlFor="inputArea">输入内容</label>
        <input 
        id='inputArea'
        className='input'
        value = {this.state.inputValue}
        onChange = {this.handleInputChange.bind(this)}
        />
        <button onClick={this.handleBtnClick.bind(this)}>提交</button>
      </div>
        <ul>
          {this.getTodoItem()}
        </ul>
    </Fragment>
    )
  }
  getTodoItem() {
    return this.state.list.map((item,index) => {
      return (
        <div>
          <TodoItem
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

  handleItemDelete(index) {
    //不要修改state中的内容，可以修改state的副本
    const list = [...this.state.list]
    list.splice(index,1)
    this.setState({
      list:list
    })
  }
}

export default TodoList;
