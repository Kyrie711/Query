import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: '/api',
    timeout: 40000,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })

  return instance(config)
}
// request({
//   url: '/teacher/show'
// }).then(res => {
//   console.log(res);
//   this.tableData = res.data
// })