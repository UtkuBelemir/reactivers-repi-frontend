import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import HomePage from './modules/Home';
import AdvancedMarket from './modules/Market/Advanced'
import BasicMarket from './modules/Market/Basic'
import Header from "./modules/PersistentComponents/Header";
import Footer from "./modules/PersistentComponents/Footer";

export default class RouterIndex extends React.Component {
    render() {
        return (
            <Router>
                <div style={{minHeight: '100%'}}>
                    <Route component={Header}/>
                    <div style={{minHeight: 'calc(100vh - 128px)', height: '100%'}}>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/market/adv/:parity" component={AdvancedMarket}/>
                        <Route exact path="/market/basic/:parity" component={BasicMarket}/>
                    </div>
                    <Route exact component={Footer}/>
                </div>
            </Router>
        )
    }
}
