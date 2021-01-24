import React from 'react';
import {readID} from "../../server/login";

export function SuccessLogin(props) {
    console.log(readID());
    return <>
        <p>환영합니다 {}님!</p>

    </>;
};