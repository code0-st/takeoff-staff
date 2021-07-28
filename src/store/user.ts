import {IUser} from "./types";
import {makeAutoObservable, runInAction} from "mobx";
import {keys} from "./api/key";
import {TLoginBody} from "./api/user/types";
import {instance} from "./api";

function loginRedirect() {
    if (!window.location.pathname.includes('/login')) {
        window.location.pathname = '/login'
    }
}

class User {
    userInfo: IUser | null = null

    loadings = {
        userInfoLoading: false,
        appLoading: false,
        loginLoading: false,
    }



    constructor() {
        makeAutoObservable(this)
    }

    initApp = async () => {
        const main = keys.main
        const isAuth = localStorage.getItem(main)
        if (!isAuth) {
            loginRedirect();
            return
        }
    }

    login = async (body: TLoginBody) => {
        await instance().open().login(body)
            .then(res => {
                runInAction(() => this.userInfo = res.data)
                const main = keys.main
                localStorage.setItem(main, res.data?.id)

            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
            })
    }

    signUp = async (body: IUser) => {
        await instance().open().signUp(body)
            .then(() => {
                this.login({login: body.login, password: body.password})
            })
            .catch(err => {
                console.log(err)
            })
    }

    getUserInfo = async () => {
        await instance().close().getUserInfo()
    }

}

export const userStore = new User()