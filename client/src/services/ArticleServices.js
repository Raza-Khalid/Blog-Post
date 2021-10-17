import Client from './api'

export const GetArticles = async () => {
  console.log('get articles')
  try {
    const res = await Client.get(`articles`)
    return res.data
  } catch (error) {
    throw error
  }
}
export const CreateArticles = async (data) => {
  try {
    const res = await Client.post(`articles`, data)
    return res.data
  } catch (error) {
    throw error
  }
}
