import React from 'react';

export function CommentWrite(props){
    return <>
        <input type="text" id="name" value={props.inputTextValue} onChange={props.onChangeCommentName}/>
        <textarea value={props.inputTextareaValue}  onChange={props.onChangeCommentBody}></textarea>
        <input type="button" onClick={props.writeOnClick}/>
    </>;
}