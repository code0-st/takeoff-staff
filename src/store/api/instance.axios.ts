import axios from "axios";
import {paths} from "./paths";

export const instanceAxiosOpen = () =>
    axios.create({
        baseURL: paths.baseUrl,
        headers: {
            ContentTye: 'application/json',
        }
    })

export const instanceAxiosClose = (token: string | null) =>
    axios.create({
        baseURL: paths.baseUrl,
        headers: {
            Authorization: `Bearer ${token}`,
            ContentTye: 'application/json'
        }
    })