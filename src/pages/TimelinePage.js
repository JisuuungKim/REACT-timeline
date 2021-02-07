import React, {useEffect, useState} from 'react';
import {Timeline} from "../components/Timeline/Timeline"
import {Write} from "../components/Timeline/Write"
import './TimelinePage.css'
import {createFeed, readFeeds} from "../server/timeline"


export function TimelinePage(props){
    const[feeds, setFeeds] = useState([]);
    const[inputText, setInputText] = useState([]);
    const[inputTextarea, setInputTextarea] = useState([]);
    const onChangeInputT = e => {
        setInputText(e.target.value);
    }
    const onChangeInputTA = e => {
        setInputTextarea(e.target.value);
    }

    async function writeBtnClick(){
        await createFeed(inputText, inputTextarea);
        setFeeds(await readFeeds());
    }

    useEffect(()=> {
        if (window.sessionStorage.getItem("token")) {
        const server = async () => {
            setFeeds(await readFeeds());
        };
        server(); }
        else {
            alert("로그인을 해주세요.");
        }
    },[])

    return <>
        <Write
        readFeeds={readFeeds}
        setFeeds={setFeeds}
        writeOnClick={writeBtnClick}
        inputTextValue={inputText}
        inputTextareaValue={inputTextarea}
        clickText={onChangeInputT}
        clickTextArea={onChangeInputTA}
        />
        <Timeline
            feeds = {feeds}
            />
    </>;
};