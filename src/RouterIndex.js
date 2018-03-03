import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import HomePage from './modules/Home';
import AdvancedMarket from './modules/Market/Advanced'
import BasicMarket from './modules/Market/Basic'
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserLogin from "./modules/Profile/Login";
import UserRegister from "./modules/Profile/Register";
import NotificationManager from './components/Notifications'
import ProfileIndex from "./modules/Profile/ProfileIndex";


export default class RouterIndex extends React.Component {
    render() {
        return (
            <Router>
                <div style={{minHeight: '100%'}}>
                    <NotificationManager/>
                    <Route component={Header}/>
                    <div style={{minHeight: 'calc(100vh - 128px)', height: '100%'}}>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/login" component={UserLogin}/>
                        <Route exact path="/register" component={UserRegister}/>
                        <Route exact path="/market/adv/:parity" component={AdvancedMarket}/>
                        <Route path="/profile/:subpage" component={ProfileIndex}/>
                    </div>
                    <Route exact component={Footer}/>
                </div>
            </Router>
        )
    }
}
