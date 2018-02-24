import React from 'react';
import {Card, Icon} from "antd";

export default class ProfileMain extends React.Component {
    render() {
        return (
            <Card title="Profil Detayı" style={{minHeight: 'inherit'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Icon style={{fontSize: 100}} type="user"/>
                    <div>
                        <div style={{fontSize : 26,fontWeight : 'bold',lineHeight : '40px'}}>utkubelemir@hotmail.com.tr</div>
                        <div style={{fontSize : 22,lineHeight : '40px'}}>+905054180558</div>
                    </div>
                </div>
            </Card>
        )
    }
}
