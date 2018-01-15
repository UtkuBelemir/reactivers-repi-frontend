import React from 'react';

export default class ProfilePage extends React.Component{
    render(){

        return(
            <div>
                Profile Page
                <span onClick={ () => this.props.history.push("/")}>asd</span>
            </div>
        )
    }
}