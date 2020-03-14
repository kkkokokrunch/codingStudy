import React, { Component,Fragment }from 'react';
import TodoItem from  './TodoItem'
import './style.css'

class TodoList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			inputValue:'',
			list:[]
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
	 	this.handleItemDelete = this.handleItemDelete.bind(this)
	}
	render() {
		return (
			<Fragment>
				<div>
					<label htmlFor="insertArea">输入内容</label>
					<input 
					id='insertArea'
					className='input'
					value={this.state.inputValue}
					onChange={this.handleInputChange}
					ref={(input) => {this.input = input}}
					/>
					<button onClick={this.handleBtnClick}>提交</button>
					<ul>
						{this.getTodoItem()}
					</ul>
				</div>
			</Fragment>
			
		)
	}
	getTodoItem() {
		return this.state.list.map((item,index) => {
			return (
				<div key={index}>
					{/* content和index都是父组件传给子组件的值 */}
					<TodoItem 
					content={item} 
					index={index}
					deleteItem={this.handleItemDelete}
					/>
				</div>
			
			)
		})
	}
	handleInputChange(e) {
		// const value = e.target.value
		//使用ref获取put元素
		const value = this.input.value
		this.setState(() => ({
				inputValue: value
		}))
	}
	handleBtnClick() {
		//prevState相当于this.state
		this.setState((prevState) => ({
			list:[...this.state.list,this.state.inputValue],
			inputValue:''
		}))
	}
	//要传递给子组件的方法
	handleItemDelete(index) {
		this.setState((prevState) => {
			const list = [...prevState.list]
			list.splice(index,1)
			return {list}
		})
	}
}

export default TodoList;