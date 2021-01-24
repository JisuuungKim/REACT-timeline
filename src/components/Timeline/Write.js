import React, {useEffect} from 'react';

export function Write(props){
    return <>
        <input type="text" id="name" value={props.inputTextValue} onChange={props.clickText}/>
        <textarea value={props.inputTextareaValue}  onChange={props.clickTextArea}></textarea>
        <input type="button" onClick={props.writeOnClick}/>
    </>;
}