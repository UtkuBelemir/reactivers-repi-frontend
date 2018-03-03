import {tsvParse, csvParse} from "d3-dsv";
import {timeParse} from "d3-time-format";
import React from 'react';
import Chart from "./Chart";
import ChartHeader from "./ChartHeader";
import {connect} from "react-redux";
import {getOrderList} from "../../../utils/reduxfunctions/actions";
import OrderTable from "./OrderTable";
import {Tabs} from 'antd'
import LimitOrder from '../OrderInputs/LimitOrder';
import MarketOrder from '../OrderInputs/MarketOrder';
import StopLoss from '../OrderInputs/StopLoss';
const TabPane = Tabs.TabPane;

function parseData(parse) {
    return function (d) {
        d.date = parse(d.date);
        d.open = +d.open;
        d.high = +d.high;
        d.low = +d.low;
        d.close = +d.close;
        d.volume = +d.volume;
        return d;
    };
}

const parseDate = timeParse("%Y-%m-%d %-I:%M:%S");

//csvParse(data, parseData(parseDate)
class AdvancedChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartType: "candle",
            data: null
        }
        props.getOrderList('//rrag.github.io/react-stockcharts/data/bitstamp_xbtusd_4h.csv');
    }

    render() {
        if (this.props.loading) {
            return <div>
                Loading
            </div>
        }
        return (
            <div>
                <div style={{display: "flex"}}>
                    <div style={{border : '2px solid #ddd'}}>
                        <Chart type="svg" width={window.innerWidth - 604} ratio={1} data={this.props.data}
                               height={window.innerHeight * 2 / 3}
                               chartType={this.state.chartType}
                               toolEvents={
                                   (e) => this.setState({toolEvents: e})
                               }/>
                    </div>
                    <div style={{display: "flex", width: 600, minWidth: 600,border : '2px solid #ddd'}}>
                        <OrderTable data={this.props.data} showHeader={true} height={(window.innerWidth - 600) * 0.41}/>
                        <OrderTable data={this.props.data} showHeader={true} height={(window.innerWidth - 600) * 0.41}/>
                    </div>
                </div>
                <div style={{display: "flex"}}>
                    <div style={{border : '2px solid #ddd',width :'100%',minHeight : '100%'}}>
                        INFO AREA
                    </div>
                    <div style={{display: "flex", width: 600, minWidth: 600,border : '2px solid #ddd'}}>
                        <Tabs defaultActiveKey="1" onChange={ () => console.log("OKOKOK")} style={{width : '100%'}} tabBarStyle={{display : 'flex',justifyContent : 'space-around'}}>
                            <TabPane tab="Limit Order" key="1"><LimitOrder/></TabPane>
                            <TabPane tab="Market Order" key="2"><MarketOrder/></TabPane>
                            <TabPane tab="Stop Loss" key="3"><StopLoss/></TabPane>
                        </Tabs>

                    </div>
                </div>
            </div>
        )
    }
}

/*
  <Chart type="svg" width={window.innerWidth} ratio={1} data={this.props.data} height={window.innerHeight}
                       chartType={this.state.chartType}
                       toolEvents={
                           (e) => this.setState({toolEvents: e})
                       }/>

 */
export default connect((state) => {
    return {
        data: state && state.datas && state.datas.temp_data && csvParse(state.datas.temp_data, parseData(parseDate)),
        loading: state && state.datas && state.datas.loading
    }
}, {getOrderList})(AdvancedChart);
