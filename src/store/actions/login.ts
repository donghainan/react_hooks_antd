import { LOGIN } from '../const'
import { Dispatch } from 'redux'
import { loginByPwd } from '@/api/login'
import { AxiosResponse } from 'axios'
import { LoginRequest } from '@/interface/login'

const initialRequest = {
  clientType: 1,
  loginName: 'jianan886',
  password: '123',
}

export const login = (dispatch: Dispatch, payload: LoginRequest = initialRequest): void => {
  loginByPwd(payload).then((res: AxiosResponse<any>) => {
    dispatch({
      type: LOGIN,
      payload: res,
    })
  })
}
