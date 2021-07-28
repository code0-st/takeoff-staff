import {keys} from "./key";

export const instance = () => {
    const mainKey = keys.main
    const id = localStorage.getItem(mainKey)

    return {
        open: () => ({}),
        close: () => ({}),
    }
}