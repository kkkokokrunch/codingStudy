import React from 'react';
import TodoItem from './TodoItem'
//定义一个react组件
class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputValue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleBtnClick() {
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
  }
  handleInputChange(e) {
    this.setState({
      inputValue:e.target.value
    })
    // console.log(e.target.value)
  }
  handleDelete(index) {
    console.log(index)
    const list = [...this.state.list]
    list.splice(index,1)
    this.setState({
      list
    })
  }
  getTodoItems() {
    return (
      this.state.list.map((item,index) => {
        return (
          <TodoItem 
          delete={this.handleDelete} 
          content={item} 
          key={index} 
          index={index}/>
          )
      })
    )
  }
  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button className='pink-btn' onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
          {this.getTodoItems()}
        </ul>
      </div>
    ) 
  }
}

export default TodoList;
