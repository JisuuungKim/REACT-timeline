import React,{ useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import {readFeed, readComments, readFeeds, createComments} from "../server/timeline";
import {Feed} from "../components/Timeline/Feed";
import {CommentWrite} from "../components/Timeline/CommentWrite";

export function TimelineDetail() {
    const { id } = useParams();
    const [feed, setFeed] = useState('')
    const [comments, setComments] = useState('')
    const [name, setName] = useState('')
    const [body, setBody] = useState('')

    const onChangeCommentName = e => {
        setName(e.target.value);
    }
    const onChangeCommentBody = e => {
        setBody(e.target.value);
    }

    async function writeBtnClick(){
        if(window.sessionStorage.getItem("token")){
            await createComments(name, body, id);
            setComments(await readComments(id));
            console.log(name);
        }
        else {
            alert('로그인을 해주세요!');
        }
    }


    useEffect(()=> {
        if(window.sessionStorage.getItem("token")) {
            const server = async() => {
                const feeddata = await readFeed(id);
                const comments = await readComments(id);
                setFeed(feeddata);
                setComments(comments);
            };
            server();
        }
        else {
            alert('로그인을 해주세요!');
        }

    },[]);
    console.log(comments);
    return <>
        <p>{feed.owner}</p>
        <p>{feed.content}</p>
        <CommentWrite
            onChangeCommentName={onChangeCommentName}
            onChangeCommentBody={onChangeCommentBody}
            writeBtnClick={writeBtnClick}
        />
        {comments? (comments.map((comment)=> <Feed name={comments.owner} body={comment.content}/>)):null}
    </>;
}