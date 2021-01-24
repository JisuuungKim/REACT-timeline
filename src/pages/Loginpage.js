import React, {useState} from 'react';
import {SuccessLogin} from "../components/Login/SuccessLogin";
import {Login} from "../components/Login/Login";
import {createToken} from "../server/login";

export function Loginpage(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async() => {
        const token = await createToken(username, password);

        if(token.non_field_errors) {
            alert(token.non_field_errors)
        }
        else {
            dosignup();
            props.ON();
            }
        }

    const dosignup = () => {
        window.sessionStorage.setItem('username',username);
        window.sessionStorage.setItem('password',password);
    }

    return <>
        {props.onlogin ? <SuccessLogin/> : <Login
        setUsername={setUsername}
        setPassword={setPassword}
        login={login}/>}
    </>;
};