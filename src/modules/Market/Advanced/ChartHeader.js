import React from 'react';
import {Icon, Menu} from "antd";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
export default class ChartHeader extends React.Component {
    render() {
        return (
            <Menu
                style={{borderBottom: 'none'}}
                onClick={(e) => {console.log(e);this.props.setChartType(e.key)}}
                selectedKeys={[this.props.selectedChartType]}
                mode="horizontal">
                <SubMenu style={{
                }} title={<span>Chart Type</span>}>
                    <Menu.Item key="candle">Candle</Menu.Item>
                    <Menu.Item key="area">Area</Menu.Item>
                    <Menu.Item key="line">Line</Menu.Item>
                </SubMenu>
                <SubMenu style={{
                }} title={<span>Tool</span>}>
                    <Menu.Item key="trendline">Trendline</Menu.Item>
                    <Menu.Item key="fib_retracement">Fib Retracement</Menu.Item>
                    <Menu.Item key="equidistant_channel">Equidistant Channel</Menu.Item>
                    <Menu.Item key="std_dev_channel">Std. Dev Channel</Menu.Item>
                    <Menu.Item key="gann_fan">Gann Fan</Menu.Item>
                </SubMenu>
                <SubMenu style={{
                }} title={<span>Indicator</span>}>
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
                </SubMenu>
            </Menu>

        )
    }
}
