import React, {useState} from 'react';
import {Login} from "../components/Login/Login";
import {createToken} from "../server/login";

export function Loginpage(props) {
    return <>
        <Login/>
    </>;
};