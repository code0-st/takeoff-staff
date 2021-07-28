import {IUser} from "./types";
import {makeAutoObservable} from "mobx";

class User {
    userInfo: IUser | null = null
    userInfoLoading: boolean = false

    constructor() {
        makeAutoObservable(this)
    }
}

export const userStore = new User()