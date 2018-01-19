import React from 'react';
import SellOrderCreator from './SellOrderCreator';
import BuyOrderCreator from './BuyOrderCreator';

export default class Panel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: {
                buy_orders: [],
                sell_orders: []
            }
        }
    }

    ws;

    componentWillMount() {
        this.ws = new WebSocket("ws://localhost:4000/socrot");
        this.ws.addEventListener("message", (e) => this.setState({orders: JSON.parse(e.data)}))
        console.log("Ready State : " + this.ws.readyState)
    }

    componentWillUnmount() {
        this.ws.close();
    }

    render() {
        return (
            <div>
                <h3>Buy Orders</h3>
                <div>
                    {this.state.orders.buy_orders.length > 0 ? this.state.orders.buy_orders.map((bb) => {
                        return (
                            <div>{bb.btc_amount + " money : " + bb.money_per_btc + " date : " + bb.created_by}</div>
                        )
                    }) : <div>No Data</div>}
                </div>
                <h3>Sell Orders</h3>
                <div>
                    {this.state.orders.sell_orders.length > 0 ? this.state.orders.sell_orders.map((ss) => {
                        return (
                            <div>{ss.btc_amount + " money : " + ss.money_per_btc + " date : " + ss.created_by}</div>
                        )
                    }) : <div>No Data</div>}
                </div>
                <h1>CREATE ORDERS</h1>
                <div style={{display : 'flex',justifyContent : 'space-around'}}>
                    <div>
                        <h2>Buy Order</h2>
                        <BuyOrderCreator/>
                    </div>
                    <div>
                        <h2>Sell Order</h2>
                        <SellOrderCreator/>
                    </div>
                </div>
            </div>
        )
    }
}