import { LOGIN } from '../const'
import { LoginResponse } from '@/interface/login'
import { AnyAction } from 'redux'

const initialState = {
  token: '',
}

export default (state: LoginResponse = initialState, action: AnyAction): LoginResponse => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return initialState
  }
}
