import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_URL
const auctionsURL = `${baseURL}/auctions`

export const auctionService = {
    getAll() {
        return axios.get(auctionsURL)
    }
}