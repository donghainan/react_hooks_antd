/*
 * @Author: hainan dong
 * @Date: 2020-09-03 10:19:20
 * @LastEditTime: 2020-10-10 16:20:10
 * @LastEditors: hainan dong
 * @Description: 全局请求封装
 * @FilePath: \jianan-web-tms2.0\src\utils\service\http.ts
 * @Code Is Everything
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { message, Modal, notification } from 'antd'
import { showLoading, hideLoading } from './globalLoading'
import sign from './sign'
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers['Content-Type'] = 'application/json'
const service = axios.create({
	baseURL: '/jianan',
	timeout: 9000,
	withCredentials: false
})
// !统一错误处理
const err = (error: any) => {
	if (error.response) {
		const data = error.response.data
		const Authorization = localStorage.getItem('Authorization')
		switch (error.response.status) {
			case 403:
				notification.error({ message: '系统提示', description: '拒绝访问', duration: 4 })
				break
			case 500:
				if (Authorization && data.message == 'Token失效，请重新登录') {
					Modal.error({
						title: '登录已过期',
						content: '很抱歉，登录已过期，请重新登录',
						okText: '重新登录',
						mask: false,
						onOk: () => {
							localStorage.clear()
							window.location.href = '/login'
						}
					})
				}

				message.error(data.msg)
				break
			case 404:
				notification.error({ message: '系统提示', description: '很抱歉，资源未找到!', duration: 4 })
				break
			case 504:
				notification.error({ message: '系统提示', description: '网络超时' })
				break
			case 401:
				notification.error({ message: '系统提示', description: '未授权，请重新登录', duration: 4 })
				if (Authorization) {
					localStorage.clear()
					window.location.href = '/login'
				}
				break
			default:
				message.error(data.msg)

				break
		}
	} else {
		notification.error({ message: '系统提示', description: '网络错误，请稍后重试', duration: 4 })
	}
	hideLoading()
	return Promise.reject(error)
}

// ?设置请求拦截器
service.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		showLoading()
		const Authorization = localStorage.getItem('Authorization')
		if (Authorization) {
			// ?请求携带token
			config.headers['Authorization'] = Authorization
		}
		// ?get请求添加时间戳
		if (config.method?.toLocaleUpperCase() === 'GET') {
			const _t: string = new Date() + ''
			config.params = {
				_t: Date.parse(_t) / 1000,
				...config.params
			}
		}
		// ?设置加密
		// ?是否需要加密
		config.data = config.data && config.data.jwt ? sign(config.data) : config.data
		config.params = config.params && config.params.jwt ? sign(config.params) : config.params
		if (config.data && config.data.jwt) {
			delete config.data.jwt
		}
		if (config.params && config.params.jwt) {
			delete config.params.jwt
		}
		return config
	},
	(error: any) => {
		hideLoading()
		return Promise.reject(error)
	}
)

// ?设置请求响应拦截器
service.interceptors.response.use((response: AxiosResponse) => {
	hideLoading()
	return response.data
}, err)
export default service
