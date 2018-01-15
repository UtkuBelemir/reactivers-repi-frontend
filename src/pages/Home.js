import React from 'react';
import {reduxForm} from 'redux-form'
import TextField from '../components/FormComponents/TextField';
import SaveButton from '../components/FormComponents/SaveButton';

class HomePage extends React.Component{
    render(){
        return(
            <div>
                <TextField name="email" label="E-Mail" />
                <br/>
                <TextField name="firstname" label="First Name" />
                <br/>
                <TextField name="lastname" label="Last Name" />
                <br/>
                <TextField name="phonenumber" label="Phone Number" />
                <br/>
                <TextField name="password" label="Password" />
                <br/>
                <br/>
                <br/>
                <SaveButton raised={true} endpoint="users" form="frm_new_user" onSave={ (r) => console.log("KAYDET : ",r)}>Kaydet</SaveButton>
            </div>
        )
    }
}
export default  reduxForm({
    form:"frm_new_user"
})(HomePage)