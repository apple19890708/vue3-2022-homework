import axios from 'axios'

const BASE_URL = ''

export const aepAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json',
    withCredentials: true,
    crossDomain: true,
  },
})

aepAxios.interceptors.response.use(undefined, (err) => { // 攔截到 response 發生錯誤時的 error 處理
  console.log('err', JSON.stringify(err.response.data))
  if (err.response.data.error) {
    window.location.href = '/admin-login'
  }
  throw err
})
