import React , { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DetailWrapper, Header, Content } from './style';
import { actionCreators } from './store';
class Detail extends PureComponent {
  render() {
    console.log(this.props.match.params.id)
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}}>
        </Content>
      </DetailWrapper>
    )
  }
  componentDidMount() {
    //this.props.match.params.id是上一个页面传来的id
    this.props.getDetail(this.props.match.params.id)
  }
}


const mapState = (state) => ({
  title:state.getIn(['detail','title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
  getDetail(id) {
		dispatch(actionCreators.getDetail(id));
	}
})
export default connect(mapState,mapDispatch)(withRouter(Detail));