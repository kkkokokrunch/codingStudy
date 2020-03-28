import App,{Container} from 'next/app'

import 'antd/dist/antd.css'

class MyApp extends App {
  static async getInitialProps({Component}) {
    let pageProps
    if(Component.getInitialProps) {
      pageProps = await Component.getInitialProps()
    }
    
    return {
      pageProps
    }
  }
  render() {
    const {component}  = this.props
    return (
      <Container>
        <Component {...pageProps}/>
      </Container>
    )
  }
}

export default MyApp