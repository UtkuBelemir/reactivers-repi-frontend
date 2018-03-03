import React from 'react';
import { Card, Icon } from "antd";
import allCoins from '../../../assets/currencyicons';



export default class Deposit extends React.Component {
    render() {
        console.log("this.props", this.props)
        const cointType = this.props.match.params.cointype;
        const cointName = allCoins.filter(i => i.symbol === cointType)[0].name
        const dummyData = {
            bitType: cointName,
            address: "dsadsds21e2kwksşalko12k",
            QRCode: ""
        }
        return (
            <Card title="Para Yatır" style={{ minHeight: 'inherit' }}>
                <div className="container">
                    <div className="container-cell">
                        <Icon type="pay-circle" /> <span style={{ fontSize: 20, marginLeft: 8 }}>{dummyData.bitType}</span>
                    </div>
                    <div className="container-cell">
                        <Icon type="tag-o" /> <span style={{ fontSize: 20, marginLeft: 8 }}>{dummyData.address}</span>
                    </div>
                    <div className="container-cell">
                        {dummyData.QRCode ?
                            dummyData.QRCode
                            : <Icon type="qrcode" style={{ width: "100%", backgroundColor: "#eee", fontSize: 200 }} />
                        }
                    </div>
                </div>
            </Card>
        )
    }
}
