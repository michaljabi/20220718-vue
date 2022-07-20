import { axInstance } from './ax-instance'

const BASE_URI = '/auctions'

export default {
  getAll(controller = new AbortController()) {
    return axInstance.get(BASE_URI, { signal: controller.signal })
  },
  add(auction) {
    return axInstance.post(BASE_URI, auction)
  },
}
