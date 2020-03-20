import axios from 'axios'

const request = ({ url, headers }) => {
  const instance = axios.create({
    baseURL: url,
    timeout: 500000,
    headers
  })

  // request interceptor
  instance.interceptors.request.use(config => {
    if (!config.headers.token) {
      // TODO: 请求头如果没有token
    }

    return config
  }, error => {
    // Do something with request error
    console.log(error)
    return Promise.reject(error)
  });

  // response interceptor
  instance.interceptors.response.use(response => {
    // 如果成功直接返回接口数据
    if (response.status === 200) {
      return response.data
    } else {
      console.log(response)
    }
    // return response
  }, error => {
    // Do something with response error
    console.log('err' + error) // for debug
    return Promise.reject(error)
  })

  return instance
}

export default request
