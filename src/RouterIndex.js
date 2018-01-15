import React from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import NotFound from "./pages/NotFound";
import LoginForm from "./pages/LoginForm";

export default class RouterIndex extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/profile" component={ProfilePage}/>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/profile/:profileId" component={ProfilePage}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        )
    }
}