import axios from 'axios'

import { apiUrl } from '../config'

const url: string = `${apiUrl}/authorize`
let token: string = ''

// Two use cases:
// 1. Set token when we get it from the backend with a key.
// 2. Set the token from a cookie when the user loads the page.
const setToken = (newToken: string) => {
    token = `bearer ${newToken}`
}

const requestConfig = (object?: any) => {
    const headers = { 'Authorization': token }
    
      if (!object) return { headers }
    
      return {
        headers,
        data: object
      }
}

// Get token from the backend using the key.
const getToken = async (key: string) => {
    const response = await axios.get(`${url}/${key}`)

    setToken(response.data.token)

    return response.data
}

export { setToken, requestConfig, getToken }