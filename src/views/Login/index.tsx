import React, { useCallback } from 'react'
import { Button } from 'antd'
import { login } from '@/store/actions/login'

import { useDispatch, useMappedState } from 'redux-react-hook'

const UserLogin = (): any => {
  const dispatch = useDispatch()
  const mapState = useCallback(
    (state) => ({
      token: state.login.token,
    }),
    []
  )

  const { token } = useMappedState(mapState)

  const loginByPwd = () => {
    login(dispatch, {
      clientType: 1,
      loginName: 'jianan886',
      password: '123',
    })
  }

  return (
    <div>
      {token.token}
      <Button type="primary" onClick={loginByPwd}>
        登录
      </Button>
    </div>
  )
}
export default UserLogin
