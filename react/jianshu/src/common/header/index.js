import React , { Component } from 'react';
import {connect} from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators } from './store';
import {HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style'

class Header extends Component {

  getListArea() {
    const {
      focused,
      list,
      page,
      totalPage,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage} = this.props
    const pageList = []
    const newList = list.toJS()

    if(newList.length) {
      for(let i = (page-1) * 10; i < page * 10; i ++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    
    if(focused || mouseIn) {
      return(
        <SearchInfo 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={()=>handleChangePage(page, totalPage, this.spinIcon)}>
            {/* 获取icon的dom节点，并将其命名为spinIcon，将这个节点传给handleChangePage */}
            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
              换一页
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null
    }
  }
  render() {
    const {focused,handleInputFocus,handleInputBlur,list} = this.props
    return(
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>


          {/* 搜索框 */} 
          <SearchWrapper>
            <CSSTransition
            in={focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch
              className={focused?'focused':''}
              onFocus={()=>{handleInputFocus(list)}}
              onBlur={handleInputBlur}
            ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>
              &#xe614;
            </i>

            {/* 热门搜索开始 */}
            {this.getListArea()}
            {/* 热门搜索结束 */}
          </SearchWrapper>
          {/* 搜索框结束 */}

        </Nav>
        <Addition>
          <Button className='writting'>
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => { //state指store中的所有数据
  return {
    //focused被保存在名字为header的store下
    //通过immutable的方式获取数据
    focused: state.getIn(['header', 'focused']),
    // focused: state.get('header').get('focused')
    list:state.getIn(['header','list']),
    page:state.getIn(['header','page']),
    totalPage:state.getIn(['header','totalPage']),
    mouseIn:state.getIn(['header','mouseIn']),
  }
}

//组件从actionCreators取到action，将action dispatch给reducer
const mapDispatchToProps = (dispatch) => {
  return {
    //搜索框聚焦
    handleInputFocus(list) {
      if(list.size === 0) {
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())

    },
    //搜索框失去焦点
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page,totalPage,spin) {
      //获取旋转的角度
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      
      if(page < totalPage) {
        dispatch(actionCreators.changePage(page+1))
      }else {
        dispatch(actionCreators.changePage(1))
      }
      
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)