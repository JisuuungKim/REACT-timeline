import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {TimelinePage} from "./pages/TimelinePage";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Loginpage} from "./pages/Loginpage";
import {Header} from "./components/Timeline/Header";
import {Hello} from "./pages/Hello";
import {Mypage} from "./pages/Mypage";
import {TimelineDetail} from "./pages/TimelineDetail";

function App() {

    const OFF = () => {
        window.sessionStorage.removeItem('username')
        window.sessionStorage.removeItem('password')
        window.sessionStorage.setItem('login',false);

    }

    return<>
        {window.sessionStorage.getItem("login")?(<Header
            OFF = {OFF}
        />):null}
        <Switch>
            <Route exact path="/"><Loginpage/></Route>
            <Route path="/home"><Hello/></Route>
            <Route path="/mypage"><Mypage/></Route>
            <Route path="/timelinedetail/:id"><TimelineDetail/></Route>
            <Route path="/timeline"><TimelinePage/></Route>
            <Route path="/">Not Found</Route>
        </Switch>
        </>
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
