import React, {useState} from 'react';
import {Signup} from "./Signup";
import {createToken} from "../../server/login";
import  { useHistory} from 'react-router';

export function Login() {
    const [signup, setSignup] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const login = async() => {
        const response = await createToken(username, password);

        if(response.non_field_errors) {
            alert(response.non_field_errors)
        }
        else {
            window.sessionStorage.setItem('token',response.token);
            window.sessionStorage.setItem('login',true);
            history.push('/home');
            alert("로그인이 되었습니다!")
        }
    }


    return <>
        <input type="text" onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={login}>로그인</button>
        <p onClick={(e)=> setSignup(true)}>회원가입하기</p>
        {signup ? <Signup
        setSignup={setSignup}/> : null}
    </>;
}