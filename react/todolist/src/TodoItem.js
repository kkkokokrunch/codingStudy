import React, {Component}from 'react'
import PropTypes from 'prop-types'
class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick= this.handleClick.bind(this) //提升代码性能
    }

    //提升代码性能
  shouldComponentUpdate(nextProps,nextState) {
    if(nextProps.content !== this.props.content) {
      return true
    }else {
      return false
    }
  }
    //当父组件的render函数被运行时，它的子组件的render函数也会被重新运行
    render() {
        // 子组件通过props接收父组件传来的content
        //子组件想和父组件通信，要调用父组件传递过来的方法
        const {content} = this.props
        return (
            <div onClick={this.handleClick}>
                {content}
            </div>
        )
    }
    handleClick() {
        const {deleteItem,index} = this.props
        deleteItem(index)//使用父组件传递过来的方法，同事把index传递给父组件
    }
    
} 

//对传入的值做校验
TodoItem.propTypes = {
    // test: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.number,PropTypes.string]),//可以是number或者string
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

// TodoItem.defaultProps = {
//     test:'hello world'
// }
export default TodoItem