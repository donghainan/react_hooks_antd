//@ts-nocheck
const publicKey = 'e0b8f547-36ae-48ea-b0e1-6018febcdb1e'
const md5 = require('md5')
const sign = (params: any): any => {
	if (!publicKey) {
		throw new Error('no publicKey configured!')
	}
	let queryStr = ''
	if (Object.keys(params).length === 0) {
		return params
	} else if (Object.keys(params).length == 1) {
		const key = Object.keys(params)
		const queryStr = key + '=' + encodeURIComponent(params[key])
	} else {
		const keys = Object.keys(params).sort()
		const queryStr = keys
			.reduce((previousValue, currentValue) => {
				if (!Array.isArray(previousValue))
					previousValue = [previousValue + '=' + encodeURIComponent(params[previousValue].toString())]
				previousValue.push(currentValue + '=' + encodeURIComponent(params[currentValue].toString()))
				return previousValue
			})
			.join('&')
	}
	queryStr += publicKey
	const apiKey = md5(queryStr)
	return {
		...params,
		apiKey
	}
}

export default sign
