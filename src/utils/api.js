import request from './axiosInstance'

export const current = request({
  url: 'http://localhost:7001',
  headers: {}
})
