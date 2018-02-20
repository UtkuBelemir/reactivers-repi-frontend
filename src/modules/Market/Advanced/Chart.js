import React from "react";

import {ChartCanvas, Chart} from "../../../components/ReactStockcharts";
import {
    CandlestickSeries, AreaSeries, LineSeries
} from "../../../components/ReactStockcharts/lib/series";
import {XAxis, YAxis} from "../../../components/ReactStockcharts/lib/axes";

import {discontinuousTimeScaleProvider} from "../../../components/ReactStockcharts/lib/scale";
import {fitWidth} from "../../../components/ReactStockcharts/lib/helper";
import {last, toObject} from "../../../components/ReactStockcharts/lib/utils";
import {
    saveInteractiveNodes,
    getInteractiveNodes,
} from "./interactiveutils";
import {DrawingObjectSelector, TrendLine,FibonacciRetracement,EquidistantChannel,StandardDeviationChannel,GannFan} from "../../../components/ReactStockcharts/lib/interactive/index";
import ChartHeader from "./ChartHeader";

class CandleStickStockScaleChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enableTrendLine: false,
            enableFib: false,
            enableEquChan : false,
            enableStdDevChan : false,
            enableGannFan : false,
            chartType : "candle",
            retracements : [],
            trends: [],
            equchans : [],
            gannfans : [],
            stddevchans: []
        }
        this.handleSelection = this.handleSelection.bind(this);
        this.onTrendLineDrawComplete = this.onTrendLineDrawComplete.bind(this);
        this.onFibDrawComplete = this.onFibDrawComplete.bind(this);
        this.onEquChanDrawComplete = this.onEquChanDrawComplete.bind(this);
        this.onStdDevChanDrawComplete = this.onStdDevChanDrawComplete.bind(this);
        this.onGannFanDrawComplete = this.onGannFanDrawComplete.bind(this);
        this.selectedChartType = this.selectedChartType.bind(this);
        this.getInteractiveNodes = getInteractiveNodes.bind(this);
    }

    componentWillMount() {

    }

    handleSelection(interactives) {
        const state = toObject(interactives, each => {
            return [
                `trends_${each.chartId}`,
                each.objects,
            ];
        });
        this.setState(state);
    }

    selectedChartType() {
        const val = this.state.chartType;
        console.log("VAL", val)
        if (val === "candle") {
            return <CandlestickSeries/>
        }
        if (val === "area") {
            return <AreaSeries yAccessor={(d) => d.close}/>
        }
        if (val === "line") {
            return <LineSeries yAccessor={d => d.close}/>
        }
    }
    onTrendLineDrawComplete(trends) {
        // this gets called on
        // 1. draw complete of trendline
        // 2. drag complete of trendline
        this.setState({
            enableTrendLine: false,
            trends
        });
    }
    onFibDrawComplete(retracements) {
        // this gets called on
        // 1. draw complete of trendline
        // 2. drag complete of trendline
        this.setState({
            enableFib: false,
            retracements
        });
    }
    onEquChanDrawComplete(equchans) {
        // this gets called on
        // 1. draw complete of trendline
        // 2. drag complete of trendline
        this.setState({
            enableEquChan: false,
            equchans
        });
    }
    onStdDevChanDrawComplete(stddevchans) {
        // this gets called on
        // 1. draw complete of trendline
        // 2. drag complete of trendline
        this.setState({
            enableStdDevChan: false,
            stddevchans
        });
    }
    onGannFanDrawComplete(gannfans) {
        // this gets called on
        // 1. draw complete of trendline
        // 2. drag complete of trendline
        this.setState({
            enableGannFan: false,
            gannfans
        });
    }
    render() {
        const {type, data: initialData, width, ratio} = this.props;

        const xScaleProvider = discontinuousTimeScaleProvider
            .inputDateAccessor(d => d.date);
        const {
            data,
            xScale,
            xAccessor,
            displayXAccessor,
        } = xScaleProvider(initialData);
        const xExtents = [
            xAccessor(last(data)),
            xAccessor(data[data.length - 100])
        ];
        console.log("X ACCESSOR", xAccessor)
        console.log("LAST DATA", last(data))
        console.log("xAccessor(last(data)),", xAccessor(last(data)))
        console.log("xAccessor(data[data.length - 100])", xAccessor(data[data.length - 100]))
        return (
            <div>
                <ChartHeader setChartType={(e) => this.setState({chartType: e})}
                             selectedChartType={this.state.chartType}
                             toolEvents={{
                                 addTrendLine : () => this.setState({enableTrendLine : true}),
                                 addFib : () => this.setState({enableFib : true}),
                                 addEquChan : () => this.setState({enableEquChan : true}),
                                 addStdDevChan : () => this.setState({enableStdDevChan : true}),
                                 addGannFan : () => this.setState({enableGannFan : true}),
                             }}/>
                <ChartCanvas height={400} ratio={ratio} width={width}
                             margin={{left: 50, right: 50, top: 30, bottom: 30}}
                             type={type}
                             seriesName="UTKU"
                             data={data}
                             xScale={xScale}
                             xAccessor={xAccessor}
                             displayXAccessor={displayXAccessor}
                             xExtents={xExtents}>
                    <Chart id={1} yExtents={d => {
                        return [d.high, d.low]
                    }}>
                        <XAxis axisAt="bottom" orient="bottom" ticks={10}/>
                        <YAxis axisAt="left" orient="left" ticks={5} stroke="#000"/>
                        {this.selectedChartType()}
                        <TrendLine
                            enabled={this.state.enableTrendLine}
                            type="RAY"
                            snap={false}
                            snapTo={d => [d.high, d.low]}
                            onStart={() => console.log("START")}
                            onComplete={this.onTrendLineDrawComplete}
                            trends={this.state.trends}
                        />
                        <FibonacciRetracement
                            enabled={this.state.enableFib}
                            retracements={this.state.retracements}
                            onComplete={this.onFibDrawComplete}
                        />
                        <EquidistantChannel
                            enabled={this.state.enableEquChan}
                            onStart={() => console.log("START")}
                            onComplete={this.onEquChanDrawComplete}
                            channels={this.state.equchans}
                        />
                        <StandardDeviationChannel
                            enabled={this.state.enableStdDevChan}
                            onStart={() => console.log("START")}
                            onComplete={this.onStdDevChanDrawComplete}
                            channels={this.state.stddevchans}
                        />
                        <GannFan
                            enabled={this.state.enableGannFan}
                            onStart={() => console.log("START")}
                            onComplete={this.onGannFanDrawComplete}
                            fans={this.state.gannfans}
                        />
                    </Chart>
                    <DrawingObjectSelector
                        enabled={true}
                        getInteractiveNodes={this.getInteractiveNodes}
                        drawingObjectMap={{
                            Trendline: "trends",
                            FibonacciRetracement: "retracements",
                            EquidistantChannel: "channels",
                            StandardDeviationChannel: "channels",
                            GannFan: "fans"
                        }}
                        onSelect={this.handleSelection}
                    />
                </ChartCanvas>
            </div>
        );
    }
}

CandleStickStockScaleChart.defaultProps = {
    type: "svg",
};
CandleStickStockScaleChart = fitWidth(CandleStickStockScaleChart);

export default CandleStickStockScaleChart;
