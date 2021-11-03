import axios from "axios";
import * as https from "https";

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASEURL,
    headers: {
        'Accept-Language': 'es-ES,es;q=0.8',
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "application/json",
    },
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
})
