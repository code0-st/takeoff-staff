import {keys} from "./key";
import {userRequests} from "./user/user";

export const instance = () => {
    const mainKey = keys.main
    const id = localStorage.getItem(mainKey)

    return {
        open: () => ({
            ...userRequests().open(),
        }),
        close: () => ({
            ...userRequests().close(id),
        }),
    }
}