import Authorize from './service/authorize'
import Network from './service/network'

const createApp = (() => {
  // 授权信息
  const authorize = new Authorize()

  // 监听有网的情况
  Network.observerOnline(() => {
    const isRefresh = confirm('网络已经恢复，是否刷新页面？')
    if (isRefresh) {
      window.location.onload()
    }
  })

  // 监听断网的情况
  Network.observerOffline(() => {
    alert('目前已经断网，请检查网络连接。')
  })

  return {
    authorize
  }
})()

export default createApp
