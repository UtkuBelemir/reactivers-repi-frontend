import React from "react";

import {ChartCanvas, Chart} from "react-stockcharts";
import {
    CandlestickSeries, AreaSeries, LineSeries, BarSeries
} from "react-stockcharts/lib/series";
import {XAxis, YAxis} from "react-stockcharts/lib/axes";

import {discontinuousTimeScaleProvider} from "react-stockcharts/lib/scale";
import {fitWidth} from "react-stockcharts/lib/helper";
import {last, toObject} from "react-stockcharts/lib/utils";
import {
    saveInteractiveNodes,
    getInteractiveNodes,
} from "./interactiveutils";
import {
    DrawingObjectSelector,
    TrendLine,
    FibonacciRetracement,
    EquidistantChannel,
    StandardDeviationChannel,
    GannFan
} from "react-stockcharts/lib/interactive/index";
import {format} from "d3-format";
import {timeFormat} from 'd3-time-format'
import ChartHeader from "./ChartHeader";
import {MouseCoordinateX, MouseCoordinateY,CrossHairCursor} from "react-stockcharts/lib/coordinates";
const customColors = {
    redA700 : '#D50000',
    greenA700 : '#00C853'
}
const fillFunc = (d) => d.close > d.open ?  customColors.greenA700 : customColors.redA700
class CandleStickStockScaleChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enableTrendLine: false,
            enableFib: false,
            enableEquChan: false,
            enableStdDevChan: false,
            enableGannFan: false,
            chartType: "candle",
            retracements: [],
            trends: [],
            equchans: [],
            gannfans: [],
            stddevchans: []
        }
        this.handleSelection = this.handleSelection.bind(this);
        this.onTrendLineDrawComplete = this.onTrendLineDrawComplete.bind(this);
        this.onFibDrawComplete = this.onFibDrawComplete.bind(this);
        this.onEquChanDrawComplete = this.onEquChanDrawComplete.bind(this);
        this.onStdDevChanDrawComplete = this.onStdDevChanDrawComplete.bind(this);
        this.onGannFanDrawComplete = this.onGannFanDrawComplete.bind(this);
        this.selectedChartType = this.selectedChartType.bind(this);
        this.allTools = this.allTools.bind(this);
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
        if (val === "candle") {
            return <CandlestickSeries opacity={0.8} fill={fillFunc} stroke={fillFunc} wickStroke={fillFunc}/>
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

    allTools() {
        return [
            <TrendLine
                enabled={this.state.enableTrendLine}
                key="trendLine"
                type="LINE"
                snap={false}
                snapTo={d => [d.high, d.low]}
                onStart={() => console.log("START")}
                onComplete={this.onTrendLineDrawComplete}
                trends={this.state.trends}
            />,
            <FibonacciRetracement
                key="fibonacciRetracement"
                enabled={this.state.enableFib}
                retracements={this.state.retracements}
                onComplete={this.onFibDrawComplete}
            />,
            <EquidistantChannel
                key="equidistantChannel"
                enabled={this.state.enableEquChan}
                onStart={() => console.log("START")}
                onComplete={this.onEquChanDrawComplete}
                channels={this.state.equchans}
            />,
            <StandardDeviationChannel
                key="standardDeviationChannel"
                enabled={this.state.enableStdDevChan}
                onStart={() => console.log("START")}
                onComplete={this.onStdDevChanDrawComplete}
                channels={this.state.stddevchans}
            />,
            <GannFan
                key="gannFan"
                enabled={this.state.enableGannFan}
                onStart={() => console.log("START")}
                onComplete={this.onGannFanDrawComplete}
                fans={this.state.gannfans}
            />
        ]
    }

    render() {
        const {type, data: initialData, width, ratio} = this.props;
        const gridHeight = 360 // height - margin.top - margin.bot;
        const gridWidth = width - 100 // width - margin.left - margin.right;
        const yGrid = {
            innerTickSize: -1 * gridWidth,
            tickStrokeDasharray: 'Solid',
            tickStrokeOpacity: 0.2,
            tickStrokeWidth: 1,
            stroke : '#000'
        };
        const xGrid = {
            innerTickSize: -1 * gridHeight,
            tickStrokeDasharray: 'Solid',
            tickStrokeOpacity: 0.2,
            tickStrokeWidth: 1,
            stroke : '#000'
        };
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
        return (
            <div>
                <ChartHeader setChartType={(e) => this.setState({chartType: e})}
                             selectedChartType={this.state.chartType}
                             toolEvents={{
                                 addTrendLine: () => this.setState({enableTrendLine: true}),
                                 addFib: () => this.setState({enableFib: true}),
                                 addEquChan: () => this.setState({enableEquChan: true}),
                                 addStdDevChan: () => this.setState({enableStdDevChan: true}),
                                 addGannFan: () => this.setState({enableGannFan: true}),
                             }}/>
                <ChartCanvas height={550} ratio={ratio} width={width}
                             margin={{left: 50, right: 50, top: 30, bottom: 30}}
                             type={type}
                             seriesName="UTKU"
                             data={data}
                             xScale={xScale}
                             xAccessor={xAccessor}
                             displayXAccessor={displayXAccessor}
                             xExtents={xExtents}>
                    <Chart id={1}
                           height={400}
                           yExtents={d => {
                               return [d.high, d.low]
                           }}>
                        <XAxis axisAt="top" orient="top" ticks={0} stroke="#000"/>
                        <XAxis axisAt="bottom" orient="bottom" ticks={10}/>
                        <YAxis axisAt="left" orient="left" {...yGrid} ticks={5}/>
                        <YAxis axisAt="right" orient="right" ticks={5} stroke="#000"/>
                        <MouseCoordinateX
                            at="bottom"
                            orient="bottom"
                            displayFormat={timeFormat("%Y-%m-%d")} />
                        <MouseCoordinateY
                            at="right"
                            orient="right"
                            displayFormat={format(".4s")} />
                        {this.selectedChartType()}
                        {this.allTools()}
                    </Chart>
                    <Chart id={2} origin={(w, h) => [0, h - 90]} height={100} yExtents={d => d.volume}>
                        <YAxis axisAt="left" orient="left" ticks={5} stroke="#000" tickFormat={format(".0s")}/>
                        <BarSeries yAccessor={d => d.volume} fill={fillFunc}/>
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
                    <CrossHairCursor />
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
