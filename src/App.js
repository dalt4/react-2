import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import Dialogs from "./components/dialogs/dialogs";
import Music from "./components/music/music";
import News from "./components/news/news";
import Settings from "./components/settings/settings";

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Navbar/>
                <Route path = '/profile' component = {Profile}/>
                <Route path = '/dialogs' component = {Dialogs}/>
                <Route path = '/news' component = {News}/>
                <Route path = '/music' component = {Music}/>
                <Route path = '/settings' component = {Settings}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
