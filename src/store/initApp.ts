import {makeAutoObservable} from "mobx";

class InitApp {
    appLoading: boolean = false

    constructor() {
        makeAutoObservable(this)
    }
}

export const appStore = new InitApp()