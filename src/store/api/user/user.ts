import {instanceAxiosClose, instanceAxiosOpen} from "../instance.axios";
import {IUser} from "../../types";
import {TLoginBody} from "./types";

export const userRequests = () => ({
    open: () => ({
        signUp: (body: IUser) => {
            return instanceAxiosOpen().post('', body)
        },
        login: (body: TLoginBody) => {
            const {login, password} = body
            return instanceAxiosOpen().get('' + `?login=${login}&password=${password}`)
        }
    }),
    close: (id: string | null) => ({
        getUserInfo: () => {
            return instanceAxiosClose(id).get('' + `?id=${id}`)
        }
    }),
})