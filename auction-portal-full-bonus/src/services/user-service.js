import { axInstance } from './ax-instance'

const BASE_URI = '/users'

export default {
  logIn(email, password) {
    return axInstance.post(`${BASE_URI}/log-in`, { email, password })
  },
  logOut() {
    return axInstance.post(`${BASE_URI}/log-out`, {})
  },
}
