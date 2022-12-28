import Axios from 'axios'
import consts from './consts'

const axios = Axios.create({
    baseURL: consts.BASE_URL,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: false,
})

export default axios