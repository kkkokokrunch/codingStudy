let xhr = new XMLHttpRequest()

// 初始化配置请求
xhr.setRequestHeader("Content-Type", "application/json"); //设置请求头
xhr.open(method, url, async)
// 配置请求体发送到服务器
xhr.send(data)
xhr.onreadystatechange = () => {
  // 0: 刚刚创建好了请求对象，但还未配置请求（未调用open方法）
  // 1: open方法已被调用
  // 2: send方法已被调用
  // 3: 正在接收服务器的响应消息体
  // 4: 服务器响应的所有内容均已接收完毕

  // xhr.responseText： 获取服务器响应的消息体文本

  // xhr.getResponseHeader("Content-Type") 获取响应头Content-Type
  if (xhr.readyState === 4 && xhr.status === 200) {
    // 成功接受
    console.log(xhr.responseText)
  }
}

// ajax
function ajax(options) {
  // 请求地址
  const url = options.url
  const method = options.method.toLocaleLowerCase() || 'get'

  // 默认异步
  const async = options.async

  // 请求参数
  const data = options.data

  const xhr = new XMLHttpRequest() || new ActiveXObject('Microsoft', 'XMLHTTP')
  // 请求超时
  if (options.timeout && options.timeout > 0) {
    xhr.timeout = options.timeout
  }

  // 返回一个promise实例
  return new Promise((resolve, reject) => {
    xhr.ontimeout = () => reject && reject('请求超时')
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        // 请求成功 200-300 状态码
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
          resolve(xhr.responseText)
        } else {
          reject && reject()
        }
      }
    }

    // 错误回调
    xhr.onerror = (err) => {
      return reject && reject(err)
    }
    let paramArr = []
    let encodeData

    // 处理请求参数
    if (data instanceof Object) {
      for (let key in data) {
        // 参数拼接要通过 encodeURIComponent 进行编码 
        paramArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      }
      encodeData = paramArr.join('&')
    }
    // get 请求拼接参数
    if (method === 'get') {
      const index = url.indexOf('?')
      if (index === -1) url += "?"
      else if (index !== url.length - 1) url += "&"
      // 拼接url
      url += encodeData
    }
    /*
    参数1：method--->get post
    参数2：请求的地址
    参数3：布尔值 默认是false 异步true同步
    */
    xhr.open(method, url, async)

    if (method === 'get') {
      xhr.send(null)
    } else {
      xhr.setRequestHeader('Content-type', 'applicaton/x-www-form-urlencoded;chatset:utf-8')
      xhr.send(encodeData)
    }
  })
}