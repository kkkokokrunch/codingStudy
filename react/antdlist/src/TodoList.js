import React,{Component} from 'react' 
import store from './store/index' //引入store
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'


class TodoList extends Component {
  constructor(props) {
    super(props)
    //获取store中的数据
    this.state = store.getState() 
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    //让store订阅这个更新页面数据的方法
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return(
      <div style={{marginTop:'10px',marginLeft:'10px'}}>
        <div>
          <Input 
          value={this.state.inputValue} 
          placeholder='todo info' 
          style={{width:'300px'}}
          onChange={this.handleInputChange}
          ></Input>
          <Button 
          type="primary"
          onClick={this.handleBtnClick}
          >提交</Button>
          <List
            style={{marginTop:'10px',width:'300px'}}
            bordered
            dataSource={this.state.list}
            renderItem={item => (
              <List.Item>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }
  handleInputChange(e) {
    const action = {
      type:'change_input_value',
      value: e.target.value
    }
    store.dispatch(action) //调用dispatch方法，将action提交给store
  }

  //更新页面数据
  handleStoreChange() {
    this.setState(store.getState())
  }

  handleBtnClick() {
    const action = {
      type:'add_todo_item'
    }
    store.dispatch(action)
  }
}

export default TodoList