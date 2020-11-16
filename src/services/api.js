import axios from 'axios';

import { loggedIn, loggedToken } from '../utils'

const baseURL = 'http://10.0.0.109:3333';

const api = axios.create({
  baseURL,
})

api.interceptors.request.use(async config => {
  if (loggedIn()) {
    config.headers.Authorization = `Bearer ${loggedToken()}`
  }

  return config;
})

export default api;