/*
 * @Author: hainan dong
 * @Date: 2020-09-03 10:19:20
 * @LastEditTime: 2020-09-30 14:19:08
 * @LastEditors: hainan dong
 * @Description: 全局进度条配置
 * @FilePath: \jianan-web-tms2.0\src\utils\service\globalLoading.ts
 * @Code Is Everything
 */

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 300, showSpinner: false })
let loadingRequestCount = 0

const showLoading = (): void => {
	if (loadingRequestCount === 0) {
		NProgress.start()
	}
	loadingRequestCount++
}

const hideLoading = (): void => {
	if (loadingRequestCount < 0) {
		NProgress.done()
		return
	}
	loadingRequestCount--
	if (loadingRequestCount === 0) {
		NProgress.done()
	}
}

export { showLoading, hideLoading }
