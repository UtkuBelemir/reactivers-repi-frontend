import React from "react";

import {ChartCanvas, Chart} from "react-stockcharts";
import {
    CandlestickSeries, AreaSeries,LineSeries
} from "react-stockcharts/lib/series";
import {XAxis, YAxis} from "react-stockcharts/lib/axes";

import {discontinuousTimeScaleProvider} from "react-stockcharts/lib/scale";
import {fitWidth} from "react-stockcharts/lib/helper";
import {last} from "react-stockcharts/lib/utils";

class CandleStickStockScaleChart extends React.Component {
    constructor(props){
        super(props);
        this.state={}
        this.selectedChartType = this.selectedChartType.bind(this);
    }
    selectedChartType(){
        const val = this.props.chartType;
        console.log("VAL",val)
        if(val === "candle"){
            return <CandlestickSeries/>
        }
        if(val === "area"){
            return <AreaSeries yAccessor={(d) => d.close}/>
        }
        if(val === "line"){
            return <LineSeries yAccessor={d => d.close} />
        }
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
            <ChartCanvas height={400} ratio={ratio} width={width} margin={{left: 50, right: 50, top: 30, bottom: 30}}
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
                </Chart>

            </ChartCanvas>
        );
    }
}

CandleStickStockScaleChart.defaultProps = {
    type: "svg",
};
CandleStickStockScaleChart = fitWidth(CandleStickStockScaleChart);

export default CandleStickStockScaleChart;
