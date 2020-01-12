import React, {Component}from 'react'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick= this.handleClick.bind(this)
    }
    render() {
        // 子组件通过props接收父组件传来的content
        const {content} = this.props
        return (
            <div onClick={this.handleDelete}>
                {content}
            </div>
        )
    }
    handleClick() {
        const {deleteItem,index} = this.props
        deleteItem(index)
        // this.props.deleteItem(index)
    }
    
} 

export default TodoItem