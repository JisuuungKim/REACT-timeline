import React,{useState} from 'react';
import {createID} from "../../server/login";

export function Signup(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [lastN, setLastN] = useState('');
    const [firstN, setFirstN] = useState('');

    const signUP = async() => {
        await createID(username, email, password, lastN, firstN);
        props.setSignup(false);
        alert("회원가입이 완료되었습니다!")

    }

    return <>
        성<input type="text" onChange={(e) => setLastN(e.target.value)}/>
        이름<input type="text" onChange={(e) => setFirstN(e.target.value)}/>
        이메일<input type="text" onChange={(e) => setEmail(e.target.value)}/>
        아이디<input type="text" onChange={(e) => setUsername(e.target.value)}/>
        비밀번호<input type="password" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={signUP}>회원가입</button>
    </>;
}