import { ITasks } from '../interfaces/ITasks'
import { api } from './api'

export const getTasks = () => {
  const resonse = api.get('/tasks')
  return resonse
}

export const deleteTask = (id: number) => {
  const resonse = api.delete(`/tasks/${id}`)
  return resonse
}

export const postTask = ({
  id,
  name,
  username,
  title,
  value,
  date,
  isPayed,
}: ITasks) => {
  const resonse = api.post(`/tasks`, {
    name,
    username,
    title,
    value,
    date,
    isPayed,
    id,
  })
  return resonse
}
