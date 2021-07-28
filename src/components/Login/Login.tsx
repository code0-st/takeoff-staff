import React, {FC, useState} from "react";
import {useKeyPress} from "../../hooks/useKeyPress";
const s = require('./style.module.scss')

export const LoginPage:FC = ({}) => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const enterPress = useKeyPress('Enter')

    return (
        <div>

        </div>
    )
}