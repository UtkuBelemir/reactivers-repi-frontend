import React from 'react';
import {Icon, Menu} from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class ChartHeader extends React.Component {
    render() {
        return (
            <Menu
                style={{borderBottom: 'none'}}
                onClick={(e) => {
                    if(e.item.props.evType === "chartType"){
                        this.props.setChartType(e.key)
                    }
                    if(e.item.props.evType === "tool"){
                        this.props.toolEvents[e.key]();
                    }
                }}
                selectedKeys={[this.props.selectedChartType]}
                mode="horizontal">
                <SubMenu title={<span>Chart Type</span>}>
                    <Menu.Item key="candle" evType="chartType">Candle</Menu.Item>
                    <Menu.Item key="area" evType="chartType">Area</Menu.Item>
                    <Menu.Item key="line" evType="chartType">Line</Menu.Item>
                </SubMenu>
                <SubMenu title={<span>Tool</span>}>
                    <Menu.Item key="addTrendLine" evType="tool">Trendline</Menu.Item>
                    <Menu.Item key="addFib" evType="tool">Fib Retracement</Menu.Item>
                    <Menu.Item key="addEquChan" evType="tool">Equidistant Channel</Menu.Item>
                    <Menu.Item key="addStdDevChan" evType="tool">Std. Dev Channel</Menu.Item>
                    <Menu.Item key="addGannFan" evType="tool">Gann Fan</Menu.Item>
                </SubMenu>
            </Menu>

        )
    }
}
/*
<SubMenu title={<span>Indicator</span>}>
    <Menu.Item key="avg_true_range">Avg. True Range</Menu.Item>
    <Menu.Item key="bollinger_band">Bollinger Band</Menu.Item>
    <Menu.Item key="elder_ray">Elder Ray</Menu.Item>
    <Menu.Item key="force_index">Force Index</Menu.Item>
    <Menu.Item key="macd">MACD</Menu.Item>
    <Menu.Item key="ema">EMA</Menu.Item>
    <Menu.Item key="sma">SMA</Menu.Item>
    <Menu.Item key="tma">TMA</Menu.Item>
    <Menu.Item key="wma">WMA</Menu.Item>
    <Menu.Item key="rsi">RSI</Menu.Item>
    <Menu.Item key="stochastic_oscillator">Stochastic Oscillator</Menu.Item>
    <Menu.Item key="volume_profile">Volume Profile</Menu.Item>
</SubMenu>*/
