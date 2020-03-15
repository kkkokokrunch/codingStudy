import React from 'react';
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

const getListArea = (show) => {
  if(show) {
    return(
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>缓一缓</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  }else {
    return null
  }
}

//无状态组件
const Header = (props) => {
  return (
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
          in={props.focused}
          timeout={200}
          classNames="slide"
        >
          <NavSearch
            className={props.focused?'focused':''}
            onFocus={props.handleInputFocus}
            onBlur={props.handleInputBlur}
          ></NavSearch>
          </CSSTransition>
          <i className={props.focused ? 'focused iconfont zoom': 'iconfont zoom'}>
            &#xe614;
          </i>

          {/* 热门搜索开始 */}
          {getListArea(props.focused)}
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


const mapStateToProps = (state) => { //state指store中的所有数据
  return {
    //focused被保存在名字为header的store下
    //通过immutable的方式获取数据
    focused: state.getIn(['header', 'focused'])
    // focused: state.get('header').get('focused')
  }
}

//组件从actionCreators取到action，将action dispatch给reducer
const mapDispatchToProps = (dispatch) => {
  return {
    //搜索框聚焦
    handleInputFocus() {
      dispatch(actionCreators.searchFocus())
    },
    //搜索框失去焦点
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header)