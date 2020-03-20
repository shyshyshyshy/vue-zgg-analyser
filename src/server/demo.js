import { current } from '../utils/api'

export const getData = () => {
  return current({
    url: '/api/getData',
    data: {}
  })
}
