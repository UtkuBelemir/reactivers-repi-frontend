import React from 'react';
import {HashRouter as Router, Redirect, Route} from 'react-router-dom';
import HomePage from './modules/Home';
import AdvancedMarket from './modules/Market/Advanced'
import BasicMarket from './modules/Market/Basic'
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserLogin from "./modules/Profile/Login";
import UserRegister from "./modules/Profile/Register";
import NotificationManager from './components/Notifications'
import ProfileIndex from "./modules/Profile/ProfileIndex";
import EmailActivator from './modules/ActivationVerification/EmailActivator';
import {connect} from 'react-redux'
import {cookieLogin} from './utils/reduxfunctions/actions'
class RouterIndex extends React.Component {
    componentWillMount(){
        console.log("aaa")
        this.props.cookieLogin()
    }
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
                        <Route exact path="/activation/:code" component={EmailActivator}/>
                    </div>
                    <Route exact component={Footer}/>
                </div>
            </Router>
        )
    }
}
export default connect(null,{cookieLogin})(RouterIndex);
