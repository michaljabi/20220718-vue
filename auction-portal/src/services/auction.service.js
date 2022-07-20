import axios from 'axios';

const baseURL = 'http://localhost:3000'
const auctionsURL = `${baseURL}/auctions`

export const auctionService = {
    getAll() {
        return axios.get(auctionsURL)
    }
}