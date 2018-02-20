import { tsvParse , csvParse} from  "d3-dsv";
import { timeParse } from "d3-time-format";
import React from 'react';
import Chart from "./Chart";
import ChartHeader from "./ChartHeader";
function parseData(parse) {
    return function(d) {
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

export function getData() {
    return fetch("//rrag.github.io/react-stockcharts/data/bitstamp_xbtusd_4h.csv")
        .then(response => response.text())
        .then(data => {return csvParse(data, parseData(parseDate))})
}

export default class AdvancedChart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chartType: "candle",
            data : null
        }
    }
    componentDidMount() {
        getData().then(data => {
            this.setState({ data })
        })
    }
    render(){
        if (this.state.data == null) {
            return <div>Loading...</div>
        }
        return(
            <div>
                <ChartHeader setChartType={ (e) => this.setState({chartType : e})} selectedChartType={this.state.chartType}/>
                <Chart type="svg" width={window.innerWidth} ratio={1} data={this.state.data} height={window.innerHeight} chartType={this.state.chartType}/>
            </div>
        )
    }
}
