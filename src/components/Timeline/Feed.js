import React from 'react';
import './Feed.css';
export function Feed(props) {

    return <div className='feed'>
        <div>작성자 {props.name}</div>
        <div>내용 {props.body}</div>
    </div>;
}