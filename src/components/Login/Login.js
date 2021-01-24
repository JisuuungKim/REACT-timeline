import React, {useState} from 'react';
import {Signup} from "./Signup";

export function Login(props) {
    const [signup, setSignup] = useState(false)
    return <>
        <input type="text" onChange={(e) => props.setUsername(e.target.value)}/>
        <input type="password" onChange={(e) => props.setPassword(e.target.value)}/>
        <button onClick={props.login}>로그인</button>
        <p onClick={(e)=> setSignup(true)}>회원가입하기</p>
        {signup ? <Signup
        setSignup={setSignup}/> : null}
    </>;
}