import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios'
import adapter from "./adapter"

import qs from 'qs'
/**
 * @description: 处理接口请求错误
 * @param {AxiosInstance} instance
 * @return {*}
 */
function handleError (instance: AxiosInstance): void {
  instance.interceptors.response.use(
    (response) => {
      const { data } = response
      if (data.errcode === 0) {
        // response.data = data.data
      } else if (
        data.errcode === 10510000 ||
        data.errcode === 29999 ||
        data.errcode === 20004
      ) {
        // setTimeout(() => {
        //   window.localStorage.removeItem('token')
        //   window.open(process.env.VUE_APP_LOGINURL, '_self')
        // }, 1000)
      } else {
        
      }
      return Promise.resolve(response)
    },
    (err) => {
      return Promise.reject(err)
    }
  )
}
/**
 * @description: 为所有请求添加token字段
 * @param {AxiosInstance} instance
 * @return {*}
 */
function setToken (instance: AxiosInstance): void {
  instance.defaults.headers.common.authtoken =
    window.localStorage.getItem('token') || ''
}
export class Interceptors {
  instance: AxiosInstance
  constructor (props, type = 'form') {
    this.instance = axios.create({
      baseURL:
        process.env.NODE_ENV === 'production'
          ? `https://member.tal.com${props}`
          : `https://test-member.tal.com${props}`,
      timeout: 10000
    })
    // setToken(this.instance)
    this.init(type)
  }

  init (type) {
    this.instance.interceptors.request.use(
      (config: any) => {
        // config.headers.common.authtoken = window.localStorage.getItem('token')
        axios.defaults.headers.post['Content-Type'] =
          'application/x-www-form-urlencoded'
        // config.headers.common.authtoken = window.localStorage.getItem('token')
        if (config.method === 'get') {
          config.paramsSerializer = (params) => {
            return qs.stringify(params)
          }
        }
        if (type === 'form') {
          if (config.method === 'post') {
            config.paramsSerializer = (params) => {
              return qs.stringify(params)
            }
            const fd = new FormData()
            for (const key in config.data) {
              if (config.data[key] !== undefined) {
                fd.append(key, config.data[key])
              }
            }
            config.data = fd
          }
        }
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )
		this.instance.defaults.adapter = adapter;
    handleError(this.instance)
  }

  getInterceptors () {
    return this.instance
  }
}