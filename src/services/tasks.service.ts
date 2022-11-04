import { api } from './api'

export const getTasks = () => {
  const resonse = api.get('/tasks')
  return resonse
}
