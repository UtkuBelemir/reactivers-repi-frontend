import React from 'react';
import { Card, Icon, Table, Button } from "antd";
import allCoins from '../../../assets/currencyicons';

const dateToStr = date => {
    const _date = new Date(date);
    return _date.getDate() + "/" + (_date.getMonth() + 1) + "/" + _date.getFullYear()
}

export default class TradeHistory extends React.Component {
    render() {
        const data = allCoins.map((cn, index) => {
            return ({
                key: cn.symbol + index,
                coin: <img src={cn.img} />,
                isim: cn.name,
                tutar: 0,
                opType: Math.random() * 100 > 50 ? "sell" : "buy",
                tarih: dateToStr(new Date()),
            })
        })

        const columns = [{
            title: 'Coin',
            dataIndex: 'coin',
            key: 'coin',
        }, {
            title: 'İsim',
            dataIndex: 'isim',
            key: 'isim',
        }, {
            title: 'Tutar',
            dataIndex: 'tutar',
            key: 'tutar',
        }, {
            title: 'Tarih',
            dataIndex: 'tarih',
            key: 'tarih',
        }];
        return (
            <Card title="" style={{ minHeight: 'inherit' }}  bodyStyle={{ padding: 0 }}>
                <Table pagination={false} columns={columns} rowClassName={(record) => record.opType === "sell" ? "sell-row" : "buy-row"} dataSource={data} />
            </Card>
        )
    }
}
