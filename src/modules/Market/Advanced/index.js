import {tsvParse, csvParse} from "d3-dsv";
import {timeParse} from "d3-time-format";
import React from 'react';
import Chart from "./Chart";
import ChartHeader from "./ChartHeader";
import {connect} from "react-redux";
import {getOrderList} from "../../../utils/reduxfunctions/actions";

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
            return (
                <div>
                    Loading
                </div>
            )
        }
        return (
            <div>

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
