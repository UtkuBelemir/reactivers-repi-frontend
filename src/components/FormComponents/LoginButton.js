import React from 'react';
import {Button} from 'material-ui'
import {connect} from 'react-redux';
import {userLogin} from "../../utils/reduxfunctions/actions";

class LoginButton extends React.Component{
    render(){
        const {userLogin,...otherProps} = this.props
        return(
            <Button onClick={() => userLogin({
                onSave: (res) => {
                    let now = new Date();
                    let cookieExp = new Date(now.getFullYear(),now.getMonth()+1,now.getDate());
                    document.cookie = "repiau="+res.token+"; expires="+cookieExp.toUTCString();
                }
            })} {...otherProps}>GİRİŞ YAP</Button>
        )
    }
}
export default connect(null,{userLogin})(LoginButton);