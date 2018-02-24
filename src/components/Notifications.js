import React from 'react';
import {connect} from "react-redux";
import { message } from 'antd';
import {clearNotification} from '../utils/reduxfunctions/actions'
class Notifications extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isEmpty : true
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.notifications.length > 0 && this.state.isEmpty){
            this.setState({isEmpty : false})
            message[nextProps.notifications[0].notificationType](nextProps.notifications[0].infoText,1.5,() => {this.props.clearNotification(nextProps.notifications[0].id);this.setState({isEmpty:true})})
        }

    }
    render(){
        return(
            <span></span>
        )
    }
}
export default connect( (state) =>{return({
    notifications : state && state.notification || []
})},{clearNotification})(Notifications)
