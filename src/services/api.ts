import axios from 'axios'

const api = axios.create({
  baseURL: "https://cges-backend.onrender.com/"
})

export default api