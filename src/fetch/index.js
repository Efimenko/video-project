import {API, API_KEY} from '../consts'

export const fetchTemplate = (path) => {
    return fetch(`${API}${path}?api_key=${API_KEY}`).then(res => res.json())
  }