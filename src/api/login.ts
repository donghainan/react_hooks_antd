import path from './fetchPath'
import { LoginRequest } from '@/interface/login'

export const loginByPwd = (payload: LoginRequest): any => {
  return http({
    url: path.auth.loginByPwd,
    method: 'POST',
    params: payload,
  })
}
