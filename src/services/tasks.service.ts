import { api } from './api'

export const getTasks = () => {
  const resonse = api.get('/tasks')
  return resonse
}

export const deleteTask = (id: number) => {
  const resonse = api.delete(`/tasks/${id}`)
  return resonse
}
