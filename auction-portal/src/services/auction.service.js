import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_URL
const auctionsURL = `${baseURL}/auctions`

export const auctionService = {
    getAll(controller) {
        return axios.get(auctionsURL, {signal: controller.signal})
    }
}