import axios from 'axios'

// export function request(config) {
//   const instance = axios.create({
//     // baseURL: '/api',
//   baseURL: 'http://api.codexx.cc:9000',
//     timeout: 40000,
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8'
//     }
//   })

//   return instance(config)
// }

const _axios = axios.create({
  // baseURL: "http://api.codexx.cc:9000",
  baseURL: "http://192.168.43.27:8091",
  // baseURL: "http://localhost:8091",
  timeout: 50000,
})
export default _axios