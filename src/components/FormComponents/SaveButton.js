import React from 'react';
import {Button} from 'material-ui'
import {connect} from 'react-redux';
import {postData} from "../../utils/reduxfunctions/actions";

class SaveButton extends React.Component{
    render(){
        const {children,endpoint,form,onSave,postData,...otherProps} = this.props
        return(
            <Button onClick={() => postData({
                form,
                params: {
                    apiEndPoint:endpoint
                },
                onSave: (res) => {
                    onSave(res)
                }
            })} {...otherProps}>{children}</Button>
        )
    }
}
export default connect(null,{postData})(SaveButton);