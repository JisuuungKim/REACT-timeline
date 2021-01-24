import React from 'react';
import "./Mypage.css"
import {readID} from "../server/login";

export function Mypage(props) {

    return <>
        <h2 className="Mypage">My Page</h2>
        <div className="box">JisungKim</div>
        <div className="box">010-3886-6878</div>
        <div className="box">동탄순환대로17길15</div>
    </>;
};