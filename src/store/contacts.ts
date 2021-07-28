import {IContact} from "./types";
import {makeAutoObservable} from "mobx";

class Contacts {
    contactsList: IContact[] = []
    contactsListLoading: boolean = false

    constructor() {
        makeAutoObservable(this)
    }
}

export const contactsStore = new Contacts()