import React from 'react';
import {Card, Icon, Table,Button} from "antd";
import  allCoins  from '../../../assets/currencyicons';
const operationsCol = (path) => {
    return(
        <div style={{display : 'flex',justifyContent : 'space-between'}}>
            <Button type="primary" style={{width : '45%',marginRight : 8}}>
                Yatır
            </Button>
            <Button type="primary" style={{width : '45%',marginLeft : 8}}>
                Çek
            </Button>
        </div>
    )
}
const data = allCoins.map( (cn,index) => {
    return({
        key: cn.symbol + index,
        coin: <img src={cn.img}/>,
        isim: cn.name,
        tum_bakiye: 0,
        btc_degeri : 0,
        islemler : operationsCol(cn.symbol)
    })
})
export default class CryptoBalance extends React.Component {
    render() {
        const columns = [{
            title: 'Coin',
            dataIndex: 'coin',
            key: 'coin',
        },{
            title: 'İsim',
            dataIndex: 'isim',
            key: 'isim',
        },{
            title: 'Tüm Bakiye',
            dataIndex: 'tum_bakiye',
            key: 'tum_bakiye',
        },{
            title: 'BTC Değeri',
            dataIndex: 'btc_degeri',
            key: 'btc_degeri',
        },{
            title: 'İşlemler',
            dataIndex: 'islemler',
            key: 'islemler',
        }];
        return (
            <Card title="" style={{minHeight: 'inherit'}} bodyStyle={{padding : 0}}>
                    <Table pagination={false} columns={columns} dataSource={data}/>
            </Card>
        )
    }
}
