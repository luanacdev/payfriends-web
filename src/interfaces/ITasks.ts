export interface ITasks {
  id: number
  name: string
  username: string
  title: string
  value: number
  date: string | Date
  image?: string
  isPayed: boolean
}
