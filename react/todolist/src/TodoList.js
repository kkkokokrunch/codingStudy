import React, {Component}from 'react';
// import 'antd/dist/antd.css'; 
// import {Input,Button} from 'antd';
// import TodoItem from './TodoItem'
//定义一个react组件
class TodoList extends Component {
  render() {
    return (
    <div>
      <div>
        <Input></Input>
        <Button type="primary">提交</Button>
      </div>
    </div>
    )
  }
  
}

export default TodoList;
