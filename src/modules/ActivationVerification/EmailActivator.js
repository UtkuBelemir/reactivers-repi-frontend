import React from 'react';
import {connect} from 'react-redux'
import {postData} from '../../utils/reduxfunctions/actions'
class EmailActivator extends React.Component{
  componentWillMount(){
    this.props.postData({
      withoutForm : true,
      values : {code : this.props.match.params.code},
      params : {apiEndPoint : "activation"}
    })
    console.log("OK")
  }
  render(){
    return(
      <div>
          CODE : {this.props.match.params.code}
      </div>
    )
  }
}
export default connect(null,{postData})(EmailActivator)
