import React from 'react';
import {Feed} from './Feed';
import { Link } from 'react-router-dom'

export function Timeline(props){
    return <>
        {props.feeds && props.feeds.map((feed)=> <Link to ={"timelinedetail/"+feed.id}><Feed name={feed.name} body={feed.body}/></Link>)}
    </>;
}