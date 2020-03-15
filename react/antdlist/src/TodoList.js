import React,{Component} from 'react' 
import store from './store/index' //引入store
import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from './store/actionCreators'
import 'antd/dist/antd.css'
// import {Input,Button,List} from 'antd'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  constructor(props) {
    super(props)
    //获取store中的数据
    this.state = store.getState() 
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    // this.handleItemClick = this.handleItemClick.bind(this)
    //让store订阅这个更新页面数据的方法
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return(
      <TodoListUI 
      inputValue={this.state.inputValue}
      handleInputChange={this.handleInputChange}
      handleBtnClick={this.handleBtnClick}
      list={this.state.list}
      handleItemDelete={this.handleItemDelete}
      />
      // <div style={{marginTop:'10px',marginLeft:'10px'}}>
      //   <div>
      //     <Input 
      //     value={this.state.inputValue} 
      //     placeholder='todo info' 
      //     style={{width:'300px'}}
      //     onChange={this.handleInputChange}
      //     ></Input>
      //     <Button 
      //     type="primary"
      //     onClick={this.handleBtnClick}
      //     >提交</Button>
      //     <List
      //       style={{marginTop:'10px',width:'300px'}}
      //       bordered
      //       dataSource={this.state.list}
      //       renderItem={(item,index) => (
      //         <List.Item onClick={this.handleItemDelete.bind(this,index)}>
      //           {item}
      //         </List.Item>
      //       )}
      //     />
      //   </div>
      // </div>
    )
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action) //调用dispatch方法，将action提交给store
  }

  //更新页面数据
  handleStoreChange() {
    this.setState(store.getState())
  }

  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList