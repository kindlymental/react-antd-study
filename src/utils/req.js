import axios from "axios";

const service = axios.create({ 
  timeout: 1000 * 12
 });

// 拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.error(error)
);

// 响应拦截器
service.interceptors.response.use(
  (res) => (res.status === 200 ? Promise.resolve(res) : Promise.reject(res)),
  (error) => {
    const { response } = error;
    console.log(response)
  }
);

export default service