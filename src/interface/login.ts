export interface LoginRequest {
  clientType: number
  loginName: string
  password: string
  jwt?: boolean
}
export interface LoginResponse {
  token: string
}