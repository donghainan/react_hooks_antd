import axios from 'axios'
import path from './fetchPath'
import { LoginRequest } from '@/interface/login'

export const loginByPwd = (payload: LoginRequest): any => {
  return axios({
    url: path.auth.loginByPwd,
    method: 'POST',
    params: payload,
  })
}
