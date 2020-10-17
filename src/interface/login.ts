export interface LoginRequest {
  clientType: number
  loginName: string
  password: string
}
export interface LoginResponse {
  token: string
}