import React from 'react';
export default class Footer extends React.Component{
    render(){
        return(
            <footer style={{height : 64,backgroundColor : '#EEE',width : '100%'}}>
                <div style={{maxWidth : 1200,margin : '0 auto',display : 'flex',alignItems :'center',height :'100%'}}>
                    Footer
                </div>
            </footer>
        )
    }
}
