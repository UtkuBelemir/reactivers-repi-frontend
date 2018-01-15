import React from 'react';
import {TextField} from 'material-ui'
import {Field} from 'redux-form'
const RFTextField = (props) => {
    return(
        <TextField {...props.input} {...props} />
    )
}
export default (props) => {

    return(
        <Field {...props} component={RFTextField}/>
    )
}