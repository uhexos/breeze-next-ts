import Axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

const axios = Axios.create({
    withCredentials: true,
    baseURL: baseURL
})

export const csrf = () => axios.get('/sanctum/csrf-cookie')

export default axios
