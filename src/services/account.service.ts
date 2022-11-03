import { api } from './api'

export const getAccount = () => {
  const resonse = api.get('/account')
  return resonse
}
