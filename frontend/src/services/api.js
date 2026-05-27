import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000',
    timeout: 10000,
})

export const getProjects = async () => {
    const response = await api.get('/api/projects')
    return response.data
}

export const getProject = async (id) => {
    const response = await api.get(`/api/projects/${id}`)
    return response.data
}

export const getProfile = async () => {
    const response = await api.get('/api/profile')
    return response.data
}

export default api